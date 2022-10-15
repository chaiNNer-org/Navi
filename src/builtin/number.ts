import { INF, INT, NAN, NEG_INF, ONE, ZERO } from '../constants';
import {
    IntIntervalType,
    IntervalType,
    NeverType,
    NumberPrimitive,
    NumberType,
    NumericLiteralType,
} from '../types';
import { intInterval, interval, literal } from '../types-util';
import { union } from '../union';
import { fixRoundingError, isSmallIntInterval, mapSmallIntInterval } from './util';
import { Arg, BinaryFn, UnaryFn, wrapBinary, wrapReducerVarArgs, wrapUnary } from './wrap';

const addLiteral = (a: NumericLiteralType, b: NumberPrimitive): Arg<NumberPrimitive> => {
    if (Number.isNaN(a.value)) return a;

    if (b.type === 'literal') return literal(fixRoundingError(a.value + b.value));

    if (a.value === Infinity) {
        if (b.type === 'number' || b.min === -Infinity) {
            return union(NAN, INF);
        }
        return a;
    }
    if (a.value === -Infinity) {
        if (b.type === 'number' || b.max === -Infinity) {
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
    }

    return new IntervalType(min, max);
};
export const add = wrapReducerVarArgs(ZERO, (a: NumberPrimitive, b: NumberPrimitive) => {
    if (a.type === 'literal') return addLiteral(a, b);
    if (b.type === 'literal') return addLiteral(b, a);

    if (a.type === 'number' || b.type === 'number') return NumberType.instance;

    const min = fixRoundingError(a.min + b.min);
    const max = fixRoundingError(a.max + b.max);
    if (min === max) return literal(min);

    if (a.type === 'int-interval' && b.type === 'int-interval')
        return new IntIntervalType(min, max);
    return new IntervalType(min, max);
});
export const negate = wrapUnary((n: NumberPrimitive) => {
    if (n.type === 'number') return NumberType.instance;
    if (n.type === 'interval') return new IntervalType(-n.max, -n.min);
    if (n.type === 'int-interval') return new IntIntervalType(-n.max, -n.min);
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

        if (items.length === 1) return items[0];
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

        if (items.length === 1) return items[0];
        return union(...items);
    }
    if (a.value === 0) {
        if (b.type === 'int-interval') return ZERO;
        if (b.type === 'number' || b.min === -Infinity || b.max === Infinity) {
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

    if (a.value < 0) return interval(max, min);
    return interval(min, max);
};
export const multiply = wrapReducerVarArgs(ONE, (a: NumberPrimitive, b: NumberPrimitive) => {
    if (a.type === 'literal') return multiplyLiteral(a, b);
    if (b.type === 'literal') return multiplyLiteral(b, a);

    if (a.type === 'number' || b.type === 'number') return NumberType.instance;

    const points = [a.min * b.min, a.min * b.max, a.max * b.min, a.max * b.max]
        .map(fixRoundingError)
        .filter((x) => !Number.isNaN(x));
    const min = Math.min(...points);
    const max = Math.max(...points);
    const i =
        a.type === 'interval' || b.type === 'interval' ? interval(min, max) : intInterval(min, max);

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
export const reciprocal = wrapUnary((n: NumberPrimitive) => {
    // In this function, 1/0 is -Infinity | Infinity
    if (n.type === 'number') return NumberType.instance;
    if (n.type === 'literal') return reciprocalLiteral(n.value);
    if (n.type === 'int-interval') {
        // Same as with multiply. We cannot accurately represent 1 over and int interval, so we
        // will approximate and destructure small int intervals.
        if (isSmallIntInterval(n)) {
            return mapSmallIntInterval(n, reciprocalLiteral);
        }

        if (n.has(0)) {
            const items: NumberPrimitive[] = [NEG_INF, INF];

            if (n.min === -Infinity && n.max === Infinity) {
                items.push(interval(-1, 1));
            } else {
                if (n.max !== 0) items.push(interval(1 / n.max, 1));
                if (n.min !== 0) items.push(interval(-1, 1 / n.min));
            }

            return union(...items);
        }
        return interval(1 / n.max, 1 / n.min);
    }

    if (n.min === -Infinity && n.max === Infinity) return n;
    if (n.has(0)) {
        const items: NumberPrimitive[] = [NEG_INF, INF];

        items.push(n.max === 0 ? INF : interval(1 / n.max, Infinity));
        items.push(n.min === 0 ? NEG_INF : interval(-Infinity, 1 / n.min));
        return union(...items);
    }
    return interval(1 / n.max, 1 / n.min);
});
export const divide: BinaryFn<NumberPrimitive> = (a, b) => multiply(a, reciprocal(b));

export const round = wrapUnary((n: NumberPrimitive) => {
    if (n.type === 'literal') return literal(Math.round(n.value));
    if (n.type === 'int-interval') return n;
    if (n.type === 'number') return union(NAN, NEG_INF, INF, INT);

    const min = Math.round(n.min);
    const max = Math.round(n.max);
    if (min === max) return literal(min);
    if (Number.isFinite(min) && Number.isFinite(max)) return new IntIntervalType(min, max);

    const items: NumberPrimitive[] = [new IntIntervalType(min, max)];
    if (min === -Infinity) items.push(NEG_INF);
    if (max === Infinity) items.push(INF);
    return union(...items);
});
export const floor = wrapUnary((n: NumberPrimitive) => {
    if (n.type === 'literal') return literal(Math.floor(n.value));
    if (n.type === 'int-interval') return n;
    if (n.type === 'number') return union(NAN, NEG_INF, INF, INT);

    const min = Math.floor(n.min);
    const max = Math.floor(n.max);
    if (min === max) return literal(min);
    if (Number.isFinite(min) && Number.isFinite(max)) return new IntIntervalType(min, max);

    const items: NumberPrimitive[] = [new IntIntervalType(min, max)];
    if (min === -Infinity) items.push(NEG_INF);
    if (max === Infinity) items.push(INF);
    return union(...items);
});
export const ceil: UnaryFn<NumberPrimitive> = (a) => negate(floor(negate(a)));

const moduleLiteral = (a: NumberPrimitive, b: number): Arg<NumberPrimitive> => {
    if (b === 0) {
        // any % 0 will always throw a ZeroDivisionError
        return NeverType.instance;
    }

    return subtract(a, multiply(literal(b), floor(divide(a, literal(b)))));
};
export const modulo = wrapBinary<NumberPrimitive>((a, b) => {
    if (b.type === 'literal') return moduleLiteral(a, b.value);
    if (b.type === 'int-interval' && isSmallIntInterval(b)) {
        return mapSmallIntInterval(b, (i) => moduleLiteral(a, i));
    }

    return subtract(a, multiply(b, floor(divide(a, b))));
});

const minimumLiteral = (a: NumericLiteralType, b: NumberPrimitive): Arg<NumberPrimitive> => {
    if (Number.isNaN(a.value)) return a;
    if (a.value === Infinity) return b;

    if (b.type === 'literal') return literal(Math.min(a.value, b.value));
    if (b.type === 'number') return union(NAN, interval(-Infinity, a.value));

    if (a.value <= b.min) return a;
    if (b.max <= a.value) return b;

    if (b.type === 'int-interval') {
        const aInt = Math.floor(a.value);
        if (aInt === a.value) return new IntIntervalType(b.min, aInt);
        if (aInt === b.min) return union(literal(b.min), literal(a.value));
        return union(new IntIntervalType(b.min, aInt), literal(a.value));
    }

    return interval(b.min, a.value);
};
const minimumNumber = (
    a: NumberType,
    b: NumberType | IntervalType | IntIntervalType
): Arg<NumberPrimitive> => {
    if (b.type === 'number') return NumberType.instance;
    if (b.max === Infinity) return NumberType.instance;
    return union(NAN, interval(-Infinity, b.max));
};
const minimumIntInterval = (
    a: IntIntervalType,
    b: IntervalType | IntIntervalType
): Arg<NumberPrimitive> => {
    if (a.max <= b.min) return a;
    if (b.max <= a.min) return b;

    if (b.type === 'int-interval')
        return new IntIntervalType(Math.min(a.min, b.min), Math.min(a.max, b.max));

    if (b.min <= a.min) return new IntervalType(b.min, Math.min(a.max, b.max));

    // This part is kind of difficult. The integer interval part is smaller than the real interval
    // part. This means that the result will be a union.
    // E.g. minimum(int(0..100), 5.5..8.5) => int(0..5) | 5.5..8.5

    const intMax = Number.isInteger(b.min) ? b.min - 1 : Math.floor(b.min);
    return union(intInterval(a.min, intMax), interval(b.min, Math.min(a.max, b.max)));
};
export const minimum = wrapReducerVarArgs(INF, (a: NumberPrimitive, b: NumberPrimitive) => {
    if (a.type === 'literal') return minimumLiteral(a, b);
    if (b.type === 'literal') return minimumLiteral(b, a);

    if (a.type === 'number') return minimumNumber(a, b);
    if (b.type === 'number') return minimumNumber(b, a);

    if (a.type === 'int-interval') return minimumIntInterval(a, b);
    if (b.type === 'int-interval') return minimumIntInterval(b, a);

    return new IntervalType(Math.min(a.min, b.min), Math.min(a.max, b.max));
});
export const maximum = wrapReducerVarArgs(NEG_INF, (a: NumberPrimitive, b: NumberPrimitive) => {
    return negate(minimum(negate(a), negate(b)));
});

export const abs = wrapUnary<NumberPrimitive>((a) => {
    if (a.type === 'literal') return literal(Math.abs(a.value));
    if (a.type === 'number') return union(NAN, interval(0, Infinity));

    let min;
    let max;
    if (a.min > 0) {
        min = a.min;
        max = a.max;
    } else if (a.max < 0) {
        min = -a.max;
        max = -a.min;
    } else {
        min = 0;
        max = Math.max(Math.abs(a.min), Math.abs(a.max));
    }

    if (a.type === 'int-interval') return intInterval(min, max);
    return interval(min, max);
});

export const sin = wrapUnary<NumberPrimitive>((a: NumberPrimitive) => {
    if (a.type === 'literal') return literal(Math.sin(a.value));
    if (a.type === 'number') return union(NAN, interval(-1, 1));

    if (a.type === 'int-interval' && isSmallIntInterval(a)) {
        return mapSmallIntInterval(a, (i) => literal(Math.sin(i)));
    }

    // the following could be improved, but it's not important right now
    if (a.has(-Infinity) || a.has(Infinity)) {
        return union(NAN, interval(-1, 1));
    }
    return interval(-1, 1);
});
export const cos = wrapUnary<NumberPrimitive>((a: NumberPrimitive) => {
    if (a.type === 'literal') return literal(Math.cos(a.value));
    if (a.type === 'number') return union(NAN, interval(-1, 1));

    if (a.type === 'int-interval' && isSmallIntInterval(a)) {
        return mapSmallIntInterval(a, (i) => literal(Math.cos(i)));
    }

    // the following could be improved, but it's not important right now
    if (a.has(-Infinity) || a.has(Infinity)) {
        return union(NAN, interval(-1, 1));
    }
    return interval(-1, 1);
});

export const exp = wrapUnary<NumberPrimitive>((a) => {
    if (a.type === 'number') return union(NAN, interval(0, Infinity));
    if (a.type === 'literal') return literal(fixRoundingError(Math.exp(a.value)));

    if (a.type === 'int-interval' && isSmallIntInterval(a)) {
        return mapSmallIntInterval(a, (i) => literal(fixRoundingError(Math.exp(i))));
    }

    return interval(fixRoundingError(Math.exp(a.min)), fixRoundingError(Math.exp(a.max)));
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

    return interval(
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

    if (a.type === 'literal') return powLiteral(a.value, b);
    if (a.type === 'int-interval' && isSmallIntInterval(a)) {
        return mapSmallIntInterval(a, (i) => powLiteral(i, b));
    }

    return NumberType.instance;
});
