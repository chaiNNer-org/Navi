import { INF, INT, NAN, NEG_INF, NEG_ONE, ONE, ZERO } from '../constants';
import { intersect } from '../intersection';
import {
    Bounds,
    IntervalType,
    NeverType,
    NonIntIntervalType,
    NumberPrimitive,
    NumberType,
} from '../types';
import { intInterval, interval, literal } from '../types-util';
import { union, unionValueTypes } from '../union';
import { without } from '../without';
import { exp, log, maximum, multiply, negate, reciprocal } from './number';
import { RangePoint, combineRangePoints, fixRoundingError, hasLiteral } from './util';
import { Arg, BinaryFn, wrapBinary, wrapUnary } from './wrap';

type NonTrivialBase = Exclude<NumberPrimitive, NumberType>;

/**
 * Required:
 * - base != nan, inf, -inf, 0, 1
 * - e is an odd int >= 3
 */
const powPositiveOddInteger = (
    base: NonTrivialBase,
    eMin: number,
    eMax: number
): Arg<NumberPrimitive> => {
    if (eMin < 3) {
        throw new Error('unreachable');
    }

    // e.g. base^5
    const pow = (x: number, e: number): number => {
        if (x === 0) return 0;
        if (e === Infinity) {
            if (x === 1 || x === -1) return x;
            if (Math.abs(x) < 1) return 0;
            return x < 0 ? -Infinity : Infinity;
        }
        return fixRoundingError(Math.pow(x, e));
    };

    if (base.type === 'literal') {
        const { value } = base;

        if (eMax - eMin <= 6) {
            // small improvement for small ranges
            const points = [];
            for (let i = eMin; i <= eMax; i += 2) {
                points.push(literal(pow(value, i)));
            }
            return union(...points);
        }

        let min = pow(value, eMin);
        let max = pow(value, eMax);
        if (min > max) {
            [min, max] = [max, min];
        }

        if (min === max) {
            return literal(min);
        } else if (Number.isInteger(value)) {
            return intInterval(min, max);
        } else {
            return interval(min, max, Bounds.Inclusive);
        }
    } else if (base.type === 'int-interval') {
        // e.g. int(-20..10)^5 -> int(-20^5..10^5)
        const endPoints = [
            pow(base.min, eMin),
            pow(base.max, eMin),
            pow(base.min, eMax),
            pow(base.max, eMax),
        ];
        const min = Math.min(...endPoints);
        const max = Math.max(...endPoints);
        if (min === max) {
            return literal(min);
        }
        return intInterval(min, max);
    } else {
        // e.g. (-20!..10)^4 -> 0..!20^4
        const getRangePoint = (x: number, e: number, exclusive: boolean): RangePoint => {
            const value = pow(x, e);
            if (Number.isFinite(x) && !Number.isFinite(value)) {
                return { value: value, exclusive: false };
            }
            return { value, exclusive };
        };
        return combineRangePoints([
            getRangePoint(base.min, eMin, !base.has(base.min)),
            getRangePoint(base.max, eMin, !base.has(base.max)),
            getRangePoint(base.min, eMax, !base.has(base.min)),
            getRangePoint(base.max, eMax, !base.has(base.max)),
        ]);
    }
};
/**
 * Required:
 * - base > 0 && base != nan, inf, 1
 * - e is an even int >= 2
 */
const powPositiveEvenInteger = (
    base: NonTrivialBase,
    eMin: number,
    eMax: number
): Arg<NumberPrimitive> => {
    if (eMin < 2) {
        throw new Error('unreachable');
    }

    // e.g. base^4
    const pow = (x: number, e: number): number => {
        if (x === 0) return 0;
        if (e === Infinity) {
            if (x === 1) return x;
            if (x < 1) return 0;
            return Infinity;
        }
        return fixRoundingError(Math.pow(x, e));
    };

    if (base.type === 'literal') {
        const { value } = base;

        if (eMax - eMin <= 6) {
            // small improvement for small ranges
            const points = [];
            for (let i = eMin; i <= eMax; i += 2) {
                points.push(literal(pow(value, i)));
            }
            return union(...points);
        }

        let min = pow(value, eMin);
        let max = pow(value, eMax);
        if (min > max) {
            [min, max] = [max, min];
        }

        if (min === max) {
            return literal(min);
        } else if (Number.isInteger(value)) {
            return intInterval(min, max);
        } else {
            return interval(min, max, Bounds.Inclusive);
        }
    } else if (base.type === 'int-interval') {
        // e.g. int(5..10)^4 -> int(5^4..10^4)
        const points = [
            pow(base.min, eMin),
            pow(base.max, eMin),
            pow(base.min, eMax),
            pow(base.max, eMax),
        ];
        const min = Math.min(...points);
        const max = Math.max(...points);
        if (min === max) {
            return literal(min);
        }
        return intInterval(min, max);
    } else {
        // e.g. (5!..10)^4 -> 5^4!..20^4
        const getRangePoint = (x: number, e: number, exclusive: boolean): RangePoint => {
            const value = pow(x, e);
            if (Number.isFinite(x) && !Number.isFinite(value)) {
                return { value: value, exclusive: false };
            }
            return { value, exclusive };
        };
        return combineRangePoints([
            getRangePoint(base.min, eMin, !base.has(base.min)),
            getRangePoint(base.max, eMin, !base.has(base.max)),
            getRangePoint(base.min, eMax, !base.has(base.min)),
            getRangePoint(base.max, eMax, !base.has(base.max)),
        ]);
    }
};
const simpleAbs = (a: NonTrivialBase): NonTrivialBase => {
    const result = maximum(a, negate(a));
    if (result.underlying === 'union' || result.type === 'never' || result.type === 'number') {
        throw new Error('unreachable');
    }
    return result;
};
/**
 * Required:
 * - base != nan, inf, -inf, 0, 1
 * - exp is an int >= 2
 */
const powPositiveInteger = wrapBinary(
    (base: NumberPrimitive, e: NumberPrimitive): Arg<NumberPrimitive> => {
        if (
            base.type === 'number' ||
            e.type === 'interval' ||
            e.type === 'non-int-interval' ||
            e.type === 'number'
        ) {
            throw new Error('Invalid input values');
        }

        if (e.type === 'literal') {
            if (e.value < 2 || !Number.isInteger(e.value)) {
                throw new Error('Invalid input values');
            }
            if (e.value % 2 === 0) {
                return powPositiveEvenInteger(simpleAbs(base), e.value, e.value);
            } else {
                return powPositiveOddInteger(base, e.value, e.value);
            }
        } else {
            // e.type === "int-interval"
            let evenMin = e.min;
            let evenMax = e.max;
            let oddMin = e.min;
            let oddMax = e.max;

            // since int intervals are guaranteed to contain at least 2 integers, this is correct
            if (evenMin % 2 !== 0) evenMin += 1;
            if (evenMax % 2 !== 0) evenMax -= 1;
            if (oddMin % 2 === 0) oddMin += 1;
            if (oddMax % 2 === 0) oddMax -= 1;

            return union(
                powPositiveEvenInteger(simpleAbs(base), evenMin, evenMax),
                powPositiveOddInteger(base, oddMin, oddMax)
            );
        }
    }
);
/**
 * Requires:
 * - base != nan, inf, -inf, 0, 1
 * - exp is not an int && exp > 0 && exp != nan, inf
 */
const powPosNonInteger: BinaryFn<NumberPrimitive, NumberPrimitive, NumberPrimitive> = (base, e) => {
    // Negative bases raised to non-integer exponents will always result in complex results. We don't support complex
    // numbers, so we will return never.
    base = intersect(base, new IntervalType(0, Infinity, Bounds.Exclusive));

    return exp(multiply(log(base), e));
};
/**
 * Requires:
 * - base != nan, inf, -inf, 0, 1
 * - exp > 0 && exp != nan, inf, 1
 */
const powNonTrivial: BinaryFn<NumberPrimitive, NumberPrimitive, NumberPrimitive> = (base, e) => {
    // we have to differentiate between integer and non-integer exponents
    const eInt = intersect(e, INT);
    const eNonInt = intersect(e, new NonIntIntervalType(0, Infinity));

    return union(powPositiveInteger(base, eInt), powPosNonInteger(base, eNonInt));
};
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
