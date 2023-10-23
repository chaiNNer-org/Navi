import { INF, INT, NAN, NEG_INF, NEG_ONE, ONE, REAL, ZERO } from '../constants';
import { intersect } from '../intersection';
import { Range } from '../range';
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
import { union, unionValueTypes } from '../union';
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
const reciprocalInterval = (n: Range): Arg<NumberPrimitive> => {
    if (n.min === -Infinity && n.max === Infinity) {
        if (n.minExclusive && n.maxExclusive) {
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
    if (n.has(0)) {
        items.push(NEG_INF, INF);
    }

    if (n.max > 0) {
        items.push(
            reciprocalPositiveInterval(
                n.min < 0 ? 0 : n.min,
                n.max,
                n.min < 0 ? false : n.minExclusive,
                n.maxExclusive
            )
        );
    }
    if (n.min < 0) {
        items.push(
            negate(
                reciprocalPositiveInterval(
                    n.max > 0 ? 0 : -n.max,
                    -n.min,
                    n.max > 0 ? false : n.maxExclusive,
                    n.minExclusive
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
    if (n.type === 'non-int-interval') return reciprocalInterval(Range.from(n));
    return reciprocalInterval(Range.from(n));
});
export const divide: BinaryFn<NumberPrimitive> = (a, b) => multiply(a, reciprocal(b));

const endsWithPoint5 = (n: number): boolean => {
    if (!Number.isFinite(n) || Number.isInteger(n)) return false;
    return Math.abs(n - Math.round(n)) === 0.5;
};
const roundInterval = (n: Range): Arg<NumberPrimitive> => {
    const min = Math.round(n.min);
    let max = Math.round(n.max);

    if (n.maxExclusive && endsWithPoint5(n.max)) {
        // round down x.5 if the max end is exclusive
        max--;
    }

    if (min === max) return literal(min);
    if (Number.isFinite(min) && Number.isFinite(max)) return new IntIntervalType(min, max);

    const items: NumberPrimitive[] = [new IntIntervalType(min, max)];
    if (min === -Infinity && !n.minExclusive) items.push(NEG_INF);
    if (max === Infinity && !n.maxExclusive) items.push(INF);
    return union(...items);
};
export const round = wrapUnary((n: NumberPrimitive) => {
    if (n.type === 'literal') return literal(Math.round(n.value));
    if (n.type === 'int-interval') return n;
    if (n.type === 'number') return union(NAN, NEG_INF, INF, INT);
    return roundInterval(Range.from(n));
});
const floorInterval = (n: Range): Arg<NumberPrimitive> => {
    const min = Math.floor(n.min);
    let max = Math.floor(n.max);
    if (n.maxExclusive && Number.isInteger(n.max)) max -= 1;
    if (min === max) return literal(min);
    if (Number.isFinite(min) && Number.isFinite(max)) return new IntIntervalType(min, max);

    const items: NumberPrimitive[] = [new IntIntervalType(min, max)];
    if (min === -Infinity && !n.minExclusive) items.push(NEG_INF);
    if (max === Infinity && !n.maxExclusive) items.push(INF);
    return union(...items);
};
export const floor = wrapUnary((n: NumberPrimitive) => {
    if (n.type === 'literal') return literal(Math.floor(n.value));
    if (n.type === 'int-interval') return n;
    if (n.type === 'number') return union(NAN, NEG_INF, INF, INT);
    return floorInterval(Range.from(n));
});
export const ceil: UnaryFn<NumberPrimitive> = (a) => negate(floor(negate(a)));

const moduleLiteral = (a: NumberPrimitive, b: NumericLiteralType): Arg<NumberPrimitive> => {
    let result = subtract(a, multiply(b, floor(divide(a, b))));

    if (b.value > 0) {
        // we know that the number is going to be between 0 and b.value (exclusive)
        result = intersect(result, new IntervalType(0, b.value, Bounds.MaxExclusive));
    }
    if (b.value < 0) {
        // we know that the number is going to be between -b.value (exclusive) and 0
        result = intersect(result, new IntervalType(b.value, 0, Bounds.MinExclusive));
    }

    return result;
};
/**
 * Module, but `a` is does not contain `nan`, `inf`, `-inf` and `b` is does not contain `0`, `nan`, `inf`, `-inf`.
 */
const moduloNonTrivial = wrapBinary<NumberPrimitive>((a, b) => {
    if (b.type === 'literal') return moduleLiteral(a, b);
    if (b.type === 'int-interval' && isSmallIntInterval(b)) {
        return mapSmallIntInterval(b, (i) => moduleLiteral(a, literal(i)));
    }

    let result = subtract(a, multiply(b, floor(divide(a, b))));

    // narrow down the result based on the range of b. This follows the same logic as the narrowing in `moduleLiteral`.
    if (b.type === 'interval' || b.type === 'int-interval' || b.type === 'non-int-interval') {
        const { min, max } = b;
        if (min >= 0 && max > 0) {
            result = intersect(result, new IntervalType(0, max, Bounds.MaxExclusive));
        } else if (min < 0 && max <= 0) {
            result = intersect(result, new IntervalType(min, 0, Bounds.MinExclusive));
        } else if (min < 0 && max > 0) {
            result = intersect(result, new IntervalType(min, max, Bounds.Exclusive));
        }
    }

    return result;
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

    const trivial: Arg<NumberPrimitive>[] = [];
    if (
        hasLiteral(a, NaN) ||
        hasLiteral(a, Infinity) ||
        hasLiteral(a, -Infinity) ||
        hasLiteral(b, NaN)
    ) {
        trivial.push(NAN);

        a = without(a, NON_FINITE) as Arg<NumberPrimitive>;
        b = without(b, NAN) as Arg<NumberPrimitive>;
        if (a.type === 'never' || b.type === 'never') {
            return union(...trivial);
        }
    }

    // Python % is weird for n % +-inf:
    if (hasLiteral(b, Infinity)) {
        // n = 0..!inf and n % inf -> n
        // n = -inf!..!0 and n % inf -> inf
        const pos = intersect(a, new IntervalType(0, Infinity, Bounds.MaxExclusive));
        const neg = intersect(a, new IntervalType(-Infinity, 0, Bounds.Exclusive));
        if (pos.type !== 'never') trivial.push(pos);
        if (neg.type !== 'never') trivial.push(INF);

        b = without(b, INF) as Arg<NumberPrimitive>;
        if (b.type === 'never') {
            return union(...trivial);
        }
    }
    if (hasLiteral(b, -Infinity)) {
        // n = !0..!inf and n % -inf -> -inf
        // n = -inf!..0 and n % -inf -> n
        const pos = intersect(a, new IntervalType(0, Infinity, Bounds.Exclusive));
        const neg = intersect(a, new IntervalType(-Infinity, 0, Bounds.MinExclusive));
        if (pos.type !== 'never') trivial.push(NEG_INF);
        if (neg.type !== 'never') trivial.push(neg);

        b = without(b, NEG_INF) as Arg<NumberPrimitive>;
        if (b.type === 'never') {
            return union(...trivial);
        }
    }

    return union(moduloNonTrivial(a, b), ...trivial);
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
        // check all minimas and maximas
        for (let i = -3; i <= 3; i += 2) {
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
        // check all minimas and maximas
        for (let i = -2; i <= 2; i += 2) {
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

/**
 * Required:
 * - base != nan, inf, -inf, 0, 1
 * - e is an int >= 2
 */
const powPositiveInteger = (base: NumberPrimitive, e: number): Arg<NumberPrimitive> => {
    if (e < 2 || base.type === 'number') {
        throw new Error('unreachable');
    }
    if (base.type === 'literal') {
        return literal(fixRoundingError(Math.pow(base.value, e)));
    }

    if (e % 2 === 0) {
        // e is even
        // e.g. base^4
        if (base.min <= 0 && 0 <= base.max) {
            // the interval has 0 between its bounds
            if (base.type === 'int-interval') {
                // e.g. int(-20..10)^4 -> int(0..20^4)
                const maxAbs = Math.max(Math.abs(base.min), Math.abs(base.max));
                return intInterval(0, Math.pow(maxAbs, e));
            } else {
                // e.g. (-20!..10)^4 -> 0..!20^4
                const aAbs = Math.abs(base.min);
                const bAbs = Math.abs(base.max);

                let maxAbs: number;
                let maxAbsExclusive: boolean;
                if (aAbs > bAbs) {
                    maxAbs = aAbs;
                    maxAbsExclusive = !base.has(base.min);
                } else if (bAbs > aAbs) {
                    maxAbs = bAbs;
                    maxAbsExclusive = !base.has(base.max);
                } else {
                    maxAbs = aAbs;
                    maxAbsExclusive = !(base.has(base.min) || base.has(base.max));
                }
                const zeroExclusive = !base.has(0);
                return interval(0, Math.pow(maxAbs, e), newBounds(zeroExclusive, maxAbsExclusive));
            }
        } else {
            // the interval does NOT have 0 between its bounds
            if (base.type === 'int-interval') {
                // e.g. int(4..10)^4 -> int(4^4..10^4)
                const minAbs = Math.min(Math.abs(base.min), Math.abs(base.max));
                const minAbsPow = Math.pow(minAbs, e);
                if (minAbsPow === Infinity) {
                    // even the minimum is too large to represent as an int
                    return INF;
                }
                const maxAbs = Math.max(Math.abs(base.min), Math.abs(base.max));
                return intInterval(minAbsPow, Math.pow(maxAbs, e));
            } else {
                // e.g. (4..10)^4 -> int(4^4..10^4)
                if (base.max > 0) {
                    const minAbsPow = Math.pow(base.min, e);
                    if (minAbsPow === Infinity) {
                        // even the minimum is too large to represent as an int
                        return INF;
                    }
                    const maxAbsPow = Math.pow(base.max, e);
                    if (minAbsPow === 0) {
                        // even the minimum is too large to represent as an int
                        return ZERO;
                    }
                    return interval(
                        minAbsPow,
                        maxAbsPow,
                        newBounds(!base.has(base.min), !base.has(base.max))
                    );
                } else {
                    const minAbsPow = Math.pow(-base.max, e);
                    if (minAbsPow === Infinity) {
                        // even the minimum is too large to represent as an int
                        return INF;
                    }
                    const maxAbsPow = Math.pow(-base.min, e);
                    if (minAbsPow === 0) {
                        // even the minimum is too large to represent as an int
                        return ZERO;
                    }
                    return interval(
                        minAbsPow,
                        maxAbsPow,
                        newBounds(!base.has(base.max), !base.has(base.min))
                    );
                }
            }
        }
    } else {
        // e is odd
        // e.g. base^5
        if (base.type === 'int-interval') {
            // e.g. int(-20..10)^5 -> int(-20^5..10^5)
            const min = Math.pow(base.min, e);
            const max = Math.pow(base.max, e);
            if (min === max) {
                // this means that both are either -inf or inf
                return literal(min);
            }
            return intInterval(min, max);
        } else {
            // e.g. (-20!..10)^4 -> 0..!20^4
            const min = Math.pow(base.min, e);
            const max = Math.pow(base.max, e);
            if (min === max) {
                // this means that both are either -inf, inf, or 0
                return literal(min);
            }
            return interval(min, max, newBounds(!base.has(base.min), !base.has(base.max)));
        }
    }
};
const powPositiveLiteralBase = (base: number, e: NumberPrimitive): Arg<NumberPrimitive> => {
    if (base === 1) return ONE;
    return exp(multiplyLiteral(literal(Math.log(base)), e));
};
const powLiteral = (base: number, e: NumberPrimitive): Arg<NumberPrimitive> => {
    if (Number.isNaN(base)) {
        return NAN;
    }
    if (Number.isFinite(base)) {
        if (base > 0) {
            return powPositiveLiteralBase(base, e);
        }
        if (base < 0) {
            return negate(powPositiveLiteralBase(-base, e));
        }
    }
    return NumberType.instance;
};
/**
 * Requires:
 * - base != nan, inf, -inf, 0, 1
 * - exp > 0 && exp != nan, inf, 1
 */
const powNonTrivial = wrapBinary<NumberPrimitive>((base, e) => {
    if (e.type === 'literal' && Number.isInteger(e.value)) {
        return powPositiveInteger(base, e.value);
    }
    if (e.type === 'int-interval' && isSmallIntInterval(e)) {
        return mapSmallIntInterval(e, (i) => powPositiveInteger(base, i));
    }

    return handleNumberLiterals(base, NumberType.instance, (i) => powLiteral(i, e));
});
const powToInfinity = wrapUnary<NumberPrimitive>((base: NumberPrimitive) => {
    // inf ** inf => inf
    // -inf ** inf => inf
    // 0 ** inf => 0.0
    // 0.0 ** inf => 0.0
    // -0.0 ** inf => 0.0
    // -1 ** inf => 1.0
    // 2 ** inf => inf
    // -2 ** inf => inf
    // 0.5 ** inf => 0.0
    // -0.5 ** inf => 0.0
    if (base.type === 'number') {
        return unionValueTypes(ZERO, ONE, INF);
    }
    if (base.type === 'literal') {
        const value = Math.abs(base.value);
        if (value === 1) return ONE;
        if (value < 1) return ZERO;
        return INF;
    }

    const parts: NumberPrimitive[] = [];
    if (base.has(1) || base.has(-1)) {
        parts.push(ONE);
    }
    const { min, max } = base;
    if (min < -1 || max > 1) {
        parts.push(INF);
    }
    if (
        (max > 1 && min < 1) ||
        (min < -1 && max > -1) ||
        (-1 <= min && min < 1) ||
        (-1 < max && max <= 1)
    ) {
        parts.push(ZERO);
    }
    return unionValueTypes(...parts);
});
const powToNegInfinity = wrapUnary<NumberPrimitive>((base: NumberPrimitive) => {
    // inf ** -inf => 0.0
    // -inf ** -inf => 0.0
    // 0 ** -inf => inf
    // 0.0 ** -inf => inf
    // -0.0 ** -inf => inf
    // -1 ** -inf => 1.0
    // 2 ** -inf => 0.0
    // -2 ** -inf => 0.0
    // 0.5 ** -inf => inf
    // -0.5 ** -inf => inf
    if (base.type === 'number') {
        return unionValueTypes(ZERO, ONE, INF);
    }
    if (base.type === 'literal') {
        const value = Math.abs(base.value);
        if (value === 1) return ONE;
        if (value < 1) return INF;
        return ZERO;
    }

    const parts: NumberPrimitive[] = [];
    if (base.has(1) || base.has(-1)) {
        parts.push(ONE);
    }
    const { min, max } = base;
    if (min < -1 || max > 1) {
        parts.push(ZERO);
    }
    if (
        (max > 1 && min < 1) ||
        (min < -1 && max > -1) ||
        (-1 <= min && min < 1) ||
        (-1 < max && max <= 1)
    ) {
        parts.push(INF);
    }
    return unionValueTypes(...parts);
});
const powOfInfinity = wrapUnary<NumberPrimitive>((e: NumberPrimitive) => {
    // inf ** -1 => 0.0
    // inf ** 2 => inf
    // inf ** -2 => 0.0
    // inf ** 2.5 => inf
    // inf ** -2.5 => 0.0
    // inf ** 3 => inf
    // inf ** -3 => 0.0
    // inf ** 0.5 => inf
    // inf ** -0.5 => 0.0
    if (e.type === 'number') {
        return unionValueTypes(ZERO, INF);
    }
    if (e.type === 'literal') {
        return e.value < 0 ? ZERO : INF;
    }

    const parts: NumberPrimitive[] = [];
    if (e.min < 0) {
        parts.push(ZERO);
    }
    if (e.max > 0) {
        parts.push(INF);
    }
    return unionValueTypes(...parts);
});
const powOfNegInfinity = wrapUnary<NumberPrimitive>((e: NumberPrimitive) => {
    // -inf ** -1 => 0.0
    // -inf ** 2 => inf
    // -inf ** -2 => 0.0
    // -inf ** 2.5 => inf
    // -inf ** -2.5 => 0.0
    // -inf ** 3 => -inf
    // -inf ** -3 => 0.0
    // -inf ** 0.5 => inf
    // -inf ** -0.5 => 0.0
    if (e.type === 'number') {
        return unionValueTypes(ZERO, INF, NEG_INF);
    }
    if (e.type === 'literal') {
        if (e.value < 0) return ZERO;
        // odd ints >=3 => -inf
        if (Number.isInteger(e.value) && e.value >= 3 && e.value % 2 === 1) return NEG_INF;
        return INF;
    }

    const parts: NumberPrimitive[] = [];
    if (e.min < 0) {
        parts.push(ZERO);
    }
    // odd ints >=3
    if (e.has(3) || (e.min > 3 && e.has(Math.floor(e.min / 2) * 2 + 1))) {
        parts.push(NEG_INF);
    }
    if (e.max > 0) {
        parts.push(INF);
    }
    return unionValueTypes(...parts);
});
const powOfZero = wrapUnary<NumberPrimitive>((e: NumberPrimitive) => {
    // 0 ** -1 => Error: 0.0 cannot be raised to a negative power
    // 0 ** 2 => 0
    // 0 ** -2 => Error: 0.0 cannot be raised to a negative power
    // 0 ** 2.5 => 0.0
    // 0 ** -2.5 => Error: 0.0 cannot be raised to a negative power
    // 0 ** 3 => 0
    // 0 ** -3 => Error: 0.0 cannot be raised to a negative power
    // 0 ** 0.5 => 0.0
    // 0 ** -0.5 => Error: 0.0 cannot be raised to a negative power
    // We return never for errors
    if (e.type === 'number') {
        return ZERO;
    }
    if (e.type === 'literal') {
        return e.value < 0 ? NeverType.instance : ZERO;
    }
    return e.max > 0 ? ZERO : NeverType.instance;
});
/**
 * Implements a power operation with the same behavior as Python's `**` operator.
 *
 * Note that the behavior of Python's `math.pow` and `**` are slightly different from each other and JS's `Math.pow`.
 * See https://github.com/joeyballentine/chaiNNer/issues/837 for more details.
 */
export const pow: BinaryFn<NumberPrimitive, NumberPrimitive, NumberPrimitive> = (base, e) => {
    // Python's ** behavior is super strange and inconsistent because the operations is implemented by the operants
    // via operator overloading. So this will only implement the part that all implementations should agree on and
    // none of the edge cases.

    if (base.type === 'never' || e.type === 'never') return NeverType.instance;

    const parts: Arg<NumberPrimitive>[] = [];

    // get rid of all special bases for nan, inf, -inf, 0, 1, -1

    // TODO: base: -1
    // TODO: exp : -1

    if (hasLiteral(e, 0)) {
        // nan ** 0 => 1.0
        // inf ** 0 => 1.0
        // -inf ** 0 => 1.0
        // 0 ** 0 => 1
        // 0.0 ** 0 => 1.0
        // -0.0 ** 0 => 1.0
        // 1 ** 0 => 1
        // -1 ** 0 => 1
        // 2 ** 0 => 1
        // -2 ** 0 => 1
        // 0.5 ** 0 => 1.0
        // -0.5 ** 0 => 1.0
        parts.push(ONE);
        e = without(e, ZERO) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(base, 1) && e.type !== 'never') {
        // 1 ** nan => 1.0
        // 1 ** inf => 1.0
        // 1 ** -inf => 1.0
        // 1 ** 1 => 1
        // 1 ** -1 => 1.0
        // 1 ** 2 => 1
        // 1 ** -2 => 1.0
        // 1 ** 0.5 => 1.0
        // 1 ** -0.5 => 1.0
        parts.push(ONE);
        base = without(base, ONE) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(e, NaN) && base.type !== 'never') {
        // nan ** nan => nan
        // inf ** nan => nan
        // -inf ** nan => nan
        // 0 ** nan => nan
        // 0.0 ** nan => nan
        // -0.0 ** nan => nan
        // -1 ** nan => nan
        // 2 ** nan => nan
        // -2 ** nan => nan
        // 0.5 ** nan => nan
        // -0.5 ** nan => nan
        parts.push(NAN);
        e = without(e, NAN) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(base, NaN) && e.type !== 'never') {
        // nan ** nan => nan
        // nan ** inf => nan
        // nan ** -inf => nan
        // nan ** 1 => nan
        // nan ** -1 => nan
        // nan ** 2 => nan
        // nan ** -2 => nan
        // nan ** 0.5 => nan
        // nan ** -0.5 => nan
        parts.push(NAN);
        base = without(base, NAN) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(e, 1) && base.type !== 'never') {
        // inf ** 1 => inf
        // -inf ** 1 => -inf
        // 0 ** 1 => 0
        // 0.0 ** 1 => 0.0
        // -0.0 ** 1 => -0.0
        // -1 ** 1 => -1
        // 2 ** 1 => 2
        // -2 ** 1 => -2
        // 0.5 ** 1 => 0.5
        // -0.5 ** 1 => -0.5
        parts.push(base);
        e = without(e, ONE) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(e, Infinity) && base.type !== 'never') {
        parts.push(powToInfinity(base));
        e = without(e, INF) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(e, -Infinity) && base.type !== 'never') {
        parts.push(powToNegInfinity(base));
        e = without(e, NEG_INF) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(base, Infinity) && e.type !== 'never') {
        parts.push(powOfInfinity(e));
        base = without(base, INF) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(base, -Infinity) && e.type !== 'never') {
        parts.push(powOfNegInfinity(e));
        base = without(base, NEG_INF) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(base, 0) && e.type !== 'never') {
        parts.push(powOfZero(e));
        base = without(base, ZERO) as Arg<NumberPrimitive>;
    }
    if (hasLiteral(e, -1) && base.type !== 'never') {
        parts.push(reciprocal(base));
        e = without(e, NEG_ONE) as Arg<NumberPrimitive>;
    }

    // we'll use that a^-b = 1 / a^b
    const ePos = intersect(e, new IntervalType(0, Infinity, Bounds.Exclusive));
    const eNeg = intersect(e, new IntervalType(-Infinity, 0, Bounds.Exclusive));

    return union(
        powNonTrivial(base, ePos),
        reciprocal(powNonTrivial(base, negate(eNeg))),
        ...parts
    );
};

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
