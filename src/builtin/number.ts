import { INF, INT, NAN, NEG_INF, ONE, REAL, ZERO } from '../constants';
import {
    Bounds,
    Int,
    IntIntervalType,
    IntervalType,
    NeverType,
    NonIntIntervalType,
    NumberPrimitive,
    NumberType,
    NumericLiteralType,
    StringPrimitive,
} from '../types';
import {
    closedInterval,
    intInterval,
    interval,
    literal,
    newBounds,
    nonIntInterval,
    openInterval,
} from '../types-util';
import { union } from '../union';
import { sameNumber } from '../util';
import { without } from '../without';
import {
    RangePoint,
    combineRangePoints,
    fixRoundingError,
    handleNumberLiterals,
    isSmallIntInterval,
    mapSmallIntInterval,
} from './util';
import {
    Arg,
    BinaryFn,
    UnaryFn,
    wrapAssociativeCommutativeReducerVarArgs,
    wrapBinary,
    wrapReducerVarArgs,
    wrapUnary,
} from './wrap';

const addLiteral = (a: NumericLiteralType, b: NumberPrimitive): Arg<NumberPrimitive> => {
    if (Number.isNaN(a.value)) return a;

    if (b.type === 'literal') return literal(fixRoundingError(a.value + b.value));

    if (a.value === Infinity) {
        if (b.type === 'number' || b.has(-Infinity)) {
            return union(NAN, INF);
        }
        return a;
    }
    if (a.value === -Infinity) {
        if (b.type === 'number' || b.has(Infinity)) {
            return union(NAN, NEG_INF);
        }
        return a;
    }

    if (b.type === 'number') return NumberType.instance;

    const min = fixRoundingError(a.value + b.min);
    const max = fixRoundingError(a.value + b.max);
    if (min === max) return literal(min);

    if (b.type === 'int-interval') {
        if (Number.isInteger(a.value)) return new IntIntervalType(min, max);

        if (isSmallIntInterval(b)) {
            return mapSmallIntInterval(b, (i) => literal(fixRoundingError(i + a.value)));
        }
        return closedInterval(min, max);
    }
    if (b.type === 'non-int-interval') {
        if (Number.isInteger(a.value)) return new NonIntIntervalType(min, max);
        return openInterval(min, max);
    }

    return new IntervalType(min, max, b.bounds);
};
const addInterval = (
    a: IntervalType | NonIntIntervalType,
    b: IntervalType | IntIntervalType | NonIntIntervalType
): Arg<NumberPrimitive> => {
    const min = fixRoundingError(a.min + b.min);
    const max = fixRoundingError(a.max + b.max);
    if (min === max) return literal(min);

    const minInclusive = a.has(-Infinity) || b.has(-Infinity) || (a.has(a.min) && b.has(b.min));
    const maxInclusive = a.has(Infinity) || b.has(Infinity) || (a.has(a.max) && b.has(b.max));

    return interval(min, max, newBounds(!minInclusive, !maxInclusive));
};
const addIntInterval = (
    a: IntIntervalType,
    b: IntervalType | IntIntervalType | NonIntIntervalType
): Arg<NumberPrimitive> => {
    if (b.type === 'int-interval') return intInterval(a.min + b.min, a.max + b.max);
    if (b.type === 'non-int-interval') return nonIntInterval(a.min + b.min, a.max + b.max);

    if (b.max - b.min < 1 && isSmallIntInterval(a)) {
        // cartesian product for small intervals
        return mapSmallIntInterval(a, (i) => addLiteral(literal(i), b));
    }

    return addInterval(b, a);
};
export const add = wrapAssociativeCommutativeReducerVarArgs(ZERO, (a, b) => {
    if (a.type === 'literal') return addLiteral(a, b);
    if (b.type === 'literal') return addLiteral(b, a);

    if (a.type === 'number' || b.type === 'number') return NumberType.instance;

    if (a.type === 'int-interval') return addIntInterval(a, b);
    if (b.type === 'int-interval') return addIntInterval(b, a);

    return addInterval(a, b);
});
export const negate = wrapUnary((n: NumberPrimitive) => {
    if (n.type === 'number') return NumberType.instance;
    if (n.type === 'interval')
        return new IntervalType(-n.max, -n.min, newBounds(n.maxExclusive, n.minExclusive));
    if (n.type === 'int-interval') return new IntIntervalType(-n.max, -n.min);
    if (n.type === 'non-int-interval') return new NonIntIntervalType(-n.max, -n.min);
    return literal(-n.value);
});
export const subtract: BinaryFn<NumberPrimitive> = (a, b) => add(a, negate(b));

const multiplyLiteral = (a: NumericLiteralType, b: NumberPrimitive): Arg<NumberPrimitive> => {
    if (Number.isNaN(a.value)) return a;
    if (a.value === 1) return b;
    if (a.value === -1) return negate(b);

    if (b.type === 'literal') return literal(fixRoundingError(a.value * b.value));

    if (a.value === Infinity) {
        if (b.type === 'number') {
            return union(NAN, NEG_INF, INF);
        }

        const items: NumberPrimitive[] = [];
        if (b.has(0)) items.push(NAN);
        if (b.min < 0) items.push(NEG_INF);
        if (b.max > 0) items.push(INF);
        return union(...items);
    }
    if (a.value === -Infinity) {
        if (b.type === 'number') {
            return union(NAN, NEG_INF, INF);
        }

        const items: NumberPrimitive[] = [];
        if (b.has(0)) items.push(NAN);
        if (b.min < 0) items.push(INF);
        if (b.max > 0) items.push(NEG_INF);
        return union(...items);
    }
    if (a.value === 0) {
        if (b.type === 'number' || b.has(-Infinity) || b.has(Infinity)) {
            return union(NAN, ZERO);
        }
        return ZERO;
    }

    if (b.type === 'number') return NumberType.instance;

    const min = fixRoundingError(b.min * a.value);
    const max = fixRoundingError(b.max * a.value);

    if (b.type === 'int-interval') {
        // This is a problem. Multiplying int intervals with a constant is not easy.
        // We cannot correctly represent int(0..Infinity) * 4. So we will multiply the elements of
        // small int interval individually, and approximate larger intervals.
        if (isSmallIntInterval(b)) {
            return mapSmallIntInterval(b, (i) => literal(fixRoundingError(i * a.value)));
        }

        if (Number.isInteger(a.value)) {
            if (a.value < 0) return intInterval(max, min);
            return intInterval(min, max);
        }
    }

    const minExclusive = !b.has(b.min);
    const maxExclusive = !b.has(b.max);

    if (a.value < 0) return interval(max, min, newBounds(maxExclusive, minExclusive));
    return interval(min, max, newBounds(minExclusive, maxExclusive));
};
const multiplyIntInterval = (a: IntIntervalType, b: IntIntervalType): Arg<NumberPrimitive> => {
    const points = [a.min * b.min, a.min * b.max, a.max * b.min, a.max * b.max]
        .map(fixRoundingError)
        .filter((x) => !Number.isNaN(x));
    const min = Math.min(...points);
    const max = Math.max(...points);

    return intInterval(min, max);
};
export const multiply = wrapAssociativeCommutativeReducerVarArgs(ONE, (a, b) => {
    if (a.type === 'literal') return multiplyLiteral(a, b);
    if (b.type === 'literal') return multiplyLiteral(b, a);

    if (a.type === 'number' || b.type === 'number') return NumberType.instance;

    if (a.type === 'int-interval' && b.type === 'int-interval') {
        return multiplyIntInterval(a, b);
    }

    const aMinExclusive = !a.has(a.min);
    const aMaxExclusive = !a.has(a.max);
    const bMinExclusive = !b.has(b.min);
    const bMaxExclusive = !b.has(b.max);

    const i = combineRangePoints([
        { value: fixRoundingError(a.min * b.min), exclusive: aMinExclusive || bMinExclusive },
        { value: fixRoundingError(a.min * b.max), exclusive: aMinExclusive || bMaxExclusive },
        { value: fixRoundingError(a.max * b.min), exclusive: aMaxExclusive || bMinExclusive },
        { value: fixRoundingError(a.max * b.max), exclusive: aMaxExclusive || bMaxExclusive },
    ]);

    const hasNaN =
        (a.has(0) && (b.has(Infinity) || b.has(-Infinity))) ||
        (b.has(0) && (a.has(Infinity) || a.has(-Infinity)));
    if (hasNaN) {
        return union(NAN, i);
    }
    return i;
});
const reciprocalLiteral = (value: number): Arg<NumberPrimitive> => {
    if (value === 0) return union(NEG_INF, INF);
    return literal(1 / value);
};
const reciprocalIntInterval = (n: IntIntervalType): Arg<NumberPrimitive> => {
    // Same as with multiply. We cannot accurately represent 1 over and int interval, so we
    // will approximate and destructure small int intervals.
    if (isSmallIntInterval(n)) {
        return mapSmallIntInterval(n, reciprocalLiteral);
    }

    const items: NumberPrimitive[] = [];
    if (n.has(0)) items.push(NEG_INF, INF);
    if (n.min < 0) {
        if (n.min === -Infinity) {
            items.push(new IntervalType(1 / Math.min(-1, n.max), 0, Bounds.MaxExclusive));
        } else {
            items.push(closedInterval(1 / Math.min(-1, n.max), 1 / n.min));
        }
    }
    if (n.max > 0) {
        if (n.max === Infinity) {
            items.push(new IntervalType(0, 1 / Math.max(1, n.min), Bounds.MinExclusive));
        } else {
            items.push(closedInterval(1 / n.max, 1 / Math.max(1, n.min)));
        }
    }
    return union(...items);
};
const reciprocalPositiveInterval = (
    min: number,
    max: number,
    minExclusive: boolean,
    maxExclusive: boolean
) => {
    return interval(1 / max, 1 / (min || 0), newBounds(maxExclusive, minExclusive));
};
const reciprocalInterval = (
    min: number,
    max: number,
    minExclusive: boolean,
    maxExclusive: boolean
): Arg<NumberPrimitive> => {
    if (min === -Infinity && max === Infinity) {
        if (minExclusive && maxExclusive) {
            // Only 1/inf and 1/-inf are 0 (or -0).
            // Since this interval includes neither, the result will not include 0.
            return union(
                new IntervalType(-Infinity, 0, Bounds.MaxExclusive),
                new IntervalType(0, Infinity, Bounds.MinExclusive)
            );
        }
        return REAL;
    }

    const items: Arg<NumberPrimitive>[] = [];
    if ((min < 0 && 0 < max) || (min === 0 && !minExclusive) || (max === 0 && !maxExclusive)) {
        // has 0
        items.push(NEG_INF, INF);
    }

    if (max > 0) {
        items.push(
            reciprocalPositiveInterval(
                min < 0 ? 0 : min,
                max,
                min < 0 ? false : minExclusive,
                maxExclusive
            )
        );
    }
    if (min < 0) {
        items.push(
            negate(
                reciprocalPositiveInterval(
                    max > 0 ? 0 : -max,
                    -min,
                    max > 0 ? false : maxExclusive,
                    minExclusive
                )
            )
        );
    }
    return union(...items);
};
export const reciprocal = wrapUnary((n: NumberPrimitive) => {
    // In this function, 1/0 is -Infinity | Infinity
    if (n.type === 'number') return NumberType.instance;
    if (n.type === 'literal') return reciprocalLiteral(n.value);
    if (n.type === 'int-interval') return reciprocalIntInterval(n);
    // approximate non-int-intervals as intervals
    if (n.type === 'non-int-interval') return reciprocalInterval(n.min, n.max, true, true);
    return reciprocalInterval(n.min, n.max, n.minExclusive, n.maxExclusive);
});
export const divide: BinaryFn<NumberPrimitive> = (a, b) => multiply(a, reciprocal(b));

const endsWithPoint5 = (n: number): boolean => {
    if (!Number.isFinite(n) || Number.isInteger(n)) return false;
    return Math.abs(n - Math.round(n)) === 0.5;
};
const roundInterval = (
    nMin: number,
    nMax: number,
    minExclusive: boolean,
    maxExclusive: boolean
): Arg<NumberPrimitive> => {
    const min = Math.round(nMin);
    let max = Math.round(nMax);

    if (maxExclusive && endsWithPoint5(nMax)) {
        // round down x.5 if the max end is exclusive
        max--;
    }

    if (min === max) return literal(min);
    if (Number.isFinite(min) && Number.isFinite(max)) return new IntIntervalType(min, max);

    const items: NumberPrimitive[] = [new IntIntervalType(min, max)];
    if (min === -Infinity && !minExclusive) items.push(NEG_INF);
    if (max === Infinity && !maxExclusive) items.push(INF);
    return union(...items);
};
export const round = wrapUnary((n: NumberPrimitive) => {
    if (n.type === 'literal') return literal(Math.round(n.value));
    if (n.type === 'int-interval') return n;
    if (n.type === 'number') return union(NAN, NEG_INF, INF, INT);
    if (n.type === 'non-int-interval') return roundInterval(n.min, n.max, true, true);
    return roundInterval(n.min, n.max, n.minExclusive, n.maxExclusive);
});
const floorInterval = (
    nMin: number,
    nMax: number,
    minExclusive: boolean,
    maxExclusive: boolean
): Arg<NumberPrimitive> => {
    const min = Math.floor(nMin);
    let max = Math.floor(nMax);
    if (maxExclusive && Number.isInteger(nMax)) max -= 1;
    if (min === max) return literal(min);
    if (Number.isFinite(min) && Number.isFinite(max)) return new IntIntervalType(min, max);

    const items: NumberPrimitive[] = [new IntIntervalType(min, max)];
    if (min === -Infinity && !minExclusive) items.push(NEG_INF);
    if (max === Infinity && !maxExclusive) items.push(INF);
    return union(...items);
};
export const floor = wrapUnary((n: NumberPrimitive) => {
    if (n.type === 'literal') return literal(Math.floor(n.value));
    if (n.type === 'int-interval') return n;
    if (n.type === 'number') return union(NAN, NEG_INF, INF, INT);
    if (n.type === 'non-int-interval') return floorInterval(n.min, n.max, true, true);
    return floorInterval(n.min, n.max, n.minExclusive, n.maxExclusive);
});
export const ceil: UnaryFn<NumberPrimitive> = (a) => negate(floor(negate(a)));

const moduleLiteral = (a: NumberPrimitive, b: NumericLiteralType): Arg<NumberPrimitive> => {
    return subtract(a, multiply(b, floor(divide(a, b))));
};
/**
 * Module, but the divisor is known to be non-zero
 */
const moduloNonZero = wrapBinary<NumberPrimitive>((a, b) => {
    if (b.type === 'literal') return moduleLiteral(a, b);
    if (b.type === 'int-interval' && isSmallIntInterval(b)) {
        return mapSmallIntInterval(b, (i) => moduleLiteral(a, literal(i)));
    }

    return subtract(a, multiply(b, floor(divide(a, b))));
});

const hasLiteral = (a: Arg<NumberPrimitive>, n: number): boolean => {
    if (a.underlying === 'never') return false;
    if (a.underlying === 'union') {
        return a.items.some((item) => hasLiteral(item, n));
    }

    if (a.type === 'literal') return sameNumber(a.value, n);
    if (a.type === 'number') return true;
    return a.has(n);
};
const NON_FINITE = union(NAN, NEG_INF, INF);
export const modulo: BinaryFn<NumberPrimitive> = (a, b) => {
    // any % 0 will always throw a ZeroDivisionError, so we can remove 0 from b
    b = without(b, ZERO) as Arg<NumberPrimitive>;

    if (a.type === 'never' || b.type === 'never') return NeverType.instance;

    const trivial: NumberPrimitive[] = [];
    if (
        hasLiteral(a, NaN) ||
        hasLiteral(a, Infinity) ||
        hasLiteral(a, -Infinity) ||
        hasLiteral(b, NaN)
    ) {
        trivial.push(NAN);
    }

    a = without(a, NON_FINITE) as Arg<NumberPrimitive>;
    b = without(b, NAN) as Arg<NumberPrimitive>;

    return union(moduloNonZero(a, b), ...trivial);
};

const minimumLiteral = (a: NumericLiteralType, b: NumberPrimitive): Arg<NumberPrimitive> => {
    if (Number.isNaN(a.value)) return a;
    if (a.value === Infinity) return b;

    if (b.type === 'literal') return literal(Math.min(a.value, b.value));
    if (b.type === 'number') return union(NAN, closedInterval(-Infinity, a.value));

    if (a.value <= b.min) return a;
    if (b.max <= a.value) return b;

    if (b.type === 'int-interval') {
        const aInt = Math.floor(a.value);
        if (aInt === a.value) return new IntIntervalType(b.min, aInt);
        return union(intInterval(b.min, aInt), literal(a.value));
    }
    if (b.type === 'non-int-interval') {
        const aInt = Math.floor(a.value);
        if (aInt === a.value) return union(nonIntInterval(b.min, aInt), literal(aInt));
        if (aInt === b.min) return new IntervalType(b.min, a.value, Bounds.MinExclusive);
        return union(
            new NonIntIntervalType(b.min, aInt),
            new IntervalType(aInt, a.value, Bounds.MinExclusive)
        );
    }

    return new IntervalType(b.min, a.value, newBounds(b.minExclusive, false));
};
const minimumGetMax = (
    aMax: number,
    aMaxExclusive: boolean,
    bMax: number,
    bMaxExclusive: boolean
): { max: number; maxExclusive: boolean } => {
    if (aMax === bMax) {
        return {
            max: aMax,
            maxExclusive: aMaxExclusive || bMaxExclusive,
        };
    } else if (aMax < bMax) {
        return {
            max: aMax,
            maxExclusive: aMaxExclusive,
        };
    } else {
        return {
            max: bMax,
            maxExclusive: bMaxExclusive,
        };
    }
};
const minimumNumber = (
    b: NumberType | IntervalType | IntIntervalType | NonIntIntervalType
): Arg<NumberPrimitive> => {
    if (b.type === 'number') return NumberType.instance;

    const { max, maxExclusive } = minimumGetMax(Infinity, false, b.max, !b.has(b.max));
    return union(NAN, new IntervalType(-Infinity, max, newBounds(false, maxExclusive)));
};
const minimumIntIntervalNonIntInterval = (
    a: IntIntervalType,
    b: NonIntIntervalType
): Arg<NumberPrimitive> => {
    const { max, maxExclusive } = minimumGetMax(a.max, !a.has(a.max), b.max, true);

    if (b.min < a.min) {
        return union(
            new NonIntIntervalType(b.min, a.min),
            new IntervalType(a.min, max, newBounds(false, maxExclusive))
        );
    }

    if (b.min === -Infinity) {
        return interval(b.min, max, newBounds(true, maxExclusive));
    } else {
        return union(
            intInterval(a.min, b.min),
            interval(b.min, max, newBounds(false, maxExclusive))
        );
    }
};
const minimumIntInterval = (
    a: IntIntervalType,
    b: IntervalType | IntIntervalType | NonIntIntervalType
): Arg<NumberPrimitive> => {
    if (a.max <= b.min) return a;
    if (b.max <= a.min) return b;

    if (b.type === 'non-int-interval') return minimumIntIntervalNonIntInterval(a, b);

    if (b.type === 'int-interval') {
        return new IntIntervalType(Math.min(a.min, b.min), Math.min(a.max, b.max));
    }

    const { max, maxExclusive } = minimumGetMax(a.max, !a.has(a.max), b.max, b.maxExclusive);

    if (b.min <= a.min) {
        const min = b.min;
        const minInclusive = a.has(min) || b.has(min);
        return new IntervalType(min, max, newBounds(!minInclusive, maxExclusive));
    }

    // This part is kind of difficult. The integer interval part is smaller than the real interval
    // part. This means that the result will be a union.
    // E.g. minimum(int(0..100), 5.5..8.5) => int(0..5) | 5.5..8.5

    return union(
        intInterval(a.min, Math.floor(b.min)),
        interval(b.min, max, newBounds(b.minExclusive, maxExclusive))
    );
};
const minimumNonIntInterval = (
    a: NonIntIntervalType,
    b: IntervalType | NonIntIntervalType
): Arg<NumberPrimitive> => {
    if (a.max <= b.min) return a;
    if (b.max <= a.min) return b;

    if (b.type === 'non-int-interval') {
        return new NonIntIntervalType(Math.min(a.min, b.min), Math.min(a.max, b.max));
    }

    const { max, maxExclusive } = minimumGetMax(a.max, true, b.max, b.maxExclusive);

    if (b.min <= a.min) {
        return interval(b.min, max, newBounds(b.minExclusive, maxExclusive));
    }

    // This part is kind of difficult. The non integer interval part is smaller than the real interval
    // part. This means that the result will be a union.
    // E.g. minimum(nonInt(0..100), 5.5..8.5) => nonInt(0..5) | without(5..8.5, 5)
    // E.g. minimum(nonInt(0..100), 4..8.5) => nonInt(0..4) | 4..8.5

    if (Number.isInteger(b.min)) {
        return union(
            nonIntInterval(a.min, b.min),
            interval(b.min, max, newBounds(b.minExclusive, maxExclusive))
        );
    } else {
        const bMinInt = Math.floor(b.min);
        return union(
            nonIntInterval(a.min, bMinInt),
            interval(bMinInt, max, newBounds(true, maxExclusive))
        );
    }
};
const minimumInterval = (a: IntervalType, b: IntervalType): Arg<NumberPrimitive> => {
    if (a.max <= b.min) return a;
    if (b.max <= a.min) return b;

    const { max, maxExclusive } = minimumGetMax(a.max, a.maxExclusive, b.max, b.maxExclusive);

    const min = Math.min(a.min, b.min);
    const minInclusive = a.has(min) || b.has(min);
    return new IntervalType(min, max, newBounds(!minInclusive, maxExclusive));
};
export const minimum = wrapReducerVarArgs(INF, (a: NumberPrimitive, b: NumberPrimitive) => {
    if (a.type === 'literal') return minimumLiteral(a, b);
    if (b.type === 'literal') return minimumLiteral(b, a);

    if (a.type === 'number') return minimumNumber(b);
    if (b.type === 'number') return minimumNumber(a);

    if (a.type === 'int-interval') return minimumIntInterval(a, b);
    if (b.type === 'int-interval') return minimumIntInterval(b, a);

    if (a.type === 'non-int-interval') return minimumNonIntInterval(a, b);
    if (b.type === 'non-int-interval') return minimumNonIntInterval(b, a);

    return minimumInterval(a, b);
});
export const maximum = wrapReducerVarArgs(NEG_INF, (a: NumberPrimitive, b: NumberPrimitive) => {
    return negate(minimum(negate(a), negate(b)));
});

const SINE_RANGE = new IntervalType(-1, 1, Bounds.Inclusive);
export const sin = wrapUnary<NumberPrimitive>((a: NumberPrimitive) => {
    if (a.type === 'literal') return literal(Math.sin(a.value));
    if (a.type === 'number') return union(NAN, SINE_RANGE);

    if (a.type === 'int-interval' && isSmallIntInterval(a)) {
        return mapSmallIntInterval(a, (i) => literal(Math.sin(i)));
    }

    let rangeType: Arg<NumberPrimitive> = SINE_RANGE;
    const tau = 2 * Math.PI;
    if (a.max - a.min < tau) {
        // make -tau < min < tau and 0 <= max < tau
        const offset = Math.floor(a.max / tau) * tau;
        const min = a.min - offset;
        const max = a.max - offset;

        const points: RangePoint[] = [
            { value: Math.sin(min), exclusive: !a.has(a.min) },
            { value: Math.sin(max), exclusive: !a.has(a.max) },
        ];
        // check multiples of pi/2
        for (let i = -3; i <= 3; i++) {
            const x = (i * Math.PI) / 2;
            if (min < x && x < max) {
                // round to prevent any rounding errors, we expect either -1, 0 or 1
                points.push({ value: Math.round(Math.sin(x)), exclusive: false });
            }
        }

        rangeType = combineRangePoints(points);
    }

    if (a.has(-Infinity) || a.has(Infinity)) {
        return union(NAN, rangeType);
    }
    return rangeType;
});
export const cos = wrapUnary<NumberPrimitive>((a: NumberPrimitive) => {
    if (a.type === 'literal') return literal(Math.cos(a.value));
    if (a.type === 'number') return union(NAN, SINE_RANGE);

    if (a.type === 'int-interval' && isSmallIntInterval(a)) {
        return mapSmallIntInterval(a, (i) => literal(Math.cos(i)));
    }

    let rangeType: Arg<NumberPrimitive> = SINE_RANGE;
    const tau = 2 * Math.PI;
    if (a.max - a.min < tau) {
        // make -tau < min < tau and 0 <= max < tau
        const offset = Math.floor(a.max / tau) * tau;
        const min = a.min - offset;
        const max = a.max - offset;

        const points: RangePoint[] = [
            { value: Math.cos(min), exclusive: !a.has(a.min) },
            { value: Math.cos(max), exclusive: !a.has(a.max) },
        ];
        // check multiples of pi/2
        for (let i = -3; i <= 3; i++) {
            const x = (i * Math.PI) / 2;
            if (min < x && x < max) {
                // round to prevent any rounding errors, we expect either -1, 0 or 1
                points.push({ value: Math.round(Math.cos(x)), exclusive: false });
            }
        }

        rangeType = combineRangePoints(points);
    }

    if (a.has(-Infinity) || a.has(Infinity)) {
        return union(NAN, rangeType);
    }
    return rangeType;
});

export const exp = wrapUnary<NumberPrimitive>((a) => {
    if (a.type === 'number') return union(NAN, closedInterval(0, Infinity));
    if (a.type === 'literal') return literal(fixRoundingError(Math.exp(a.value)));

    if (a.type === 'int-interval' && isSmallIntInterval(a)) {
        return mapSmallIntInterval(a, (i) => literal(fixRoundingError(Math.exp(i))));
    }

    return closedInterval(fixRoundingError(Math.exp(a.min)), fixRoundingError(Math.exp(a.max)));
});
const logLiteral = (value: number): Arg<NumberPrimitive> => {
    if (value <= 0) return NeverType.instance;
    return literal(fixRoundingError(Math.log(value)));
};
/**
 * This models the behavior of Python's `math.log` function.
 *
 * This function throws on error for values <= 0.
 */
export const log = wrapUnary<NumberPrimitive>((a) => {
    if (a.type === 'number') return NumberType.instance;
    if (a.type === 'literal') return logLiteral(a.value);

    if (a.max <= 0) return NeverType.instance;

    if (a.type === 'int-interval' && isSmallIntInterval(a)) {
        return mapSmallIntInterval(a, logLiteral);
    }

    return closedInterval(
        fixRoundingError(Math.log(Math.max(0, a.min))),
        fixRoundingError(Math.log(a.max))
    );
});

const powPositiveLiteral = (a: number, b: NumberPrimitive): Arg<NumberPrimitive> => {
    if (a === 1) return ONE;
    return exp(multiplyLiteral(literal(Math.log(a)), b));
};
const powLiteral = (a: number, b: NumberPrimitive): Arg<NumberPrimitive> => {
    if (Number.isNaN(a)) {
        return NAN;
    }
    if (Number.isFinite(a)) {
        if (a > 0) {
            return powPositiveLiteral(a, b);
        }
        if (a < 0) {
            return negate(powPositiveLiteral(-a, b));
        }
    }
    return NumberType.instance;
};
/**
 * Implements a power operation with the same behavior as Python's `**` operator.
 *
 * Note that the behavior of Python's `math.pow` and `**` are slightly different from each other and JS's `Math.pow`.
 * See https://github.com/joeyballentine/chaiNNer/issues/837 for more details.
 */
export const pow = wrapBinary<NumberPrimitive>((a, b) => {
    // Python's ** behavior is super strange and inconsistent because the operations is implemented by the operants
    // via operator overloading. So this will only implement the part that all implementations should agree on and
    // none of the edge cases.
    return handleNumberLiterals(a, NumberType.instance, (i) => powLiteral(i, b));
});

const PARSE_INT_RANGE = union(INT, NAN);
const DIGITS = '0123456789abcdefghijklmnopqrstuvwxyz';

/**
 * This version of parsing strings is intended to model the behavior of Python's `int(s, base)` for non-zero bases.
 */
export const parseInt = wrapBinary<StringPrimitive, Int, NumberPrimitive>((s, base) => {
    if (s.type === 'literal') {
        const text = s.value.trim();

        return handleNumberLiterals<NumberPrimitive>(base, PARSE_INT_RANGE, (n) => {
            // pythons algorithm for parsing numbers is stricter than JavaScript's,
            // so we have to do some additional validation.

            let t = text;
            const negative = t.startsWith('-');
            t = t.replace(/^[+-]/, '');

            if (n === 2) t = t.replace(/^0b/i, '');
            if (n === 8) t = t.replace(/^0o/i, '');
            if (n === 16) t = t.replace(/^0x/i, '');

            const validRe = new RegExp(String.raw`^[${DIGITS.slice(0, n)}]+$`, 'i');
            if (!validRe.test(t)) return NAN;

            let parsed = Number.parseInt(t, n);
            if (negative) parsed = -parsed;
            return literal(parsed);
        });
    }

    return PARSE_INT_RANGE;
});
