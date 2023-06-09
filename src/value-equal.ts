import { isDisjointWith } from './intersection';
import { NumberPrimitive, StringPrimitive, Type } from './types';
import { assertNever } from './util';

const valueCountNumber = (t: NumberPrimitive): number => {
    switch (t.type) {
        case 'number':
            return Infinity;
        case 'literal':
            return 1;
        case 'interval':
            return Infinity;
        case 'int-interval':
            return t.max - t.min + 1;
        case 'non-int-interval':
            return Infinity;
        default:
            return assertNever(t);
    }
};
const valueCountString = (t: StringPrimitive): number => {
    switch (t.type) {
        case 'string':
            return Infinity;
        case 'literal':
            return 1;
        case 'inverted-set':
            return Infinity;
        default:
            return assertNever(t);
    }
};

/**
 * Returns how many values the set represented by the given type contains.
 */
const valueCount = (t: Type): number => {
    switch (t.underlying) {
        case 'never':
            return 0;
        case 'any':
            return Infinity;
        case 'number':
            return valueCountNumber(t);
        case 'string':
            return valueCountString(t);
        case 'struct': {
            let total = 1;
            for (const field of t.fields) {
                total *= valueCount(field.type);
                if (total === Infinity) break;
            }
            return total;
        }
        case 'union': {
            let total = 0;
            for (const item of t.items) {
                total += valueCount(item);
                if (total === Infinity) break;
            }
            return total;
        }
        default:
            return assertNever(t);
    }
};

export interface ValueEquality {
    readonly someEqual: boolean;
    readonly someNotEqual: boolean;
}

const NEITHER: ValueEquality = { someEqual: false, someNotEqual: false };
const SOME_EQUAL: ValueEquality = { someEqual: true, someNotEqual: false };
const SOME_NOT_EQUAL: ValueEquality = { someEqual: false, someNotEqual: true };
const BOTH: ValueEquality = { someEqual: true, someNotEqual: true };

/**
 * Returns the result of comparing all accepted values of one type against all
 * accepted values of another type.
 *
 * In Navi, types represent sets of values. E.g. `int` represents the set of
 * all integers (ignoring implementation limitations). While most operations
 * can be thought of in terms of what is done with those sets, this operation
 * must the thought of in terms of the individual values those sets contain.
 * When comparing 2 types, this operation is **different** from type equality.
 *
 * Conceptually, this function implements this algorithm (*):
 *
 * ```ts
 * let someEqual = false;
 * let someNotEqual = false;
 * for (const aValue in iterateValues(a)) {
 *   for (const bValue in iterateValues(b)) {
 *     if (aValue === bValue) {
 *       someEqual = true;
 *     } else {
 *       someNotEqual = true;
 *     }
 *   }
 * }
 * ```
 *
 * (*) We don't actually use `===` for equality because of NaN.
 */
export const valueEqual = (a: Type, b: Type): ValueEquality => {
    if (a.type === 'never' || b.type === 'never') {
        // if a or b is never, then we don't have values to compare to on one side
        return NEITHER;
    }

    // at this point, we know that both a and b have at least one value each

    if (isDisjointWith(a, b)) {
        // we know that there are no values that are equal
        return SOME_NOT_EQUAL;
    }

    // at this point, we know that some values are equal

    if (valueCount(a) === 1 && valueCount(b) === 1) {
        // since both side only have one value,
        // we know that there is no combination that is not equal
        return SOME_EQUAL;
    }

    return BOTH;
};
