import {
    ArrayType,
    NonNeverType,
    NumberPrimitive,
    StringPrimitive,
    StructType,
    Type,
    ValueType,
} from './types';
import { isSameStructType } from './types-util';
import { assertNever, assertType, fillArray, sameNumber } from './util';

const numberIsSubsetOf = (left: NumberPrimitive, right: NumberPrimitive): boolean => {
    if (right.type === 'number') return true;
    if (left.type === 'number') return false;

    // literals
    if (left.type === 'literal') {
        if (right.type === 'literal') return sameNumber(left.value, right.value);
        return right.has(left.value);
    }
    if (right.type === 'literal') return false;

    // int intervals
    if (left.type === 'int-interval') {
        return right.min <= left.min && left.max <= right.max;
    }
    if (right.type === 'int-interval') return false;

    // intervals
    return right.min <= left.min && left.max <= right.max;
};

const stringIsSubsetOf = (left: StringPrimitive, right: StringPrimitive): boolean => {
    if (right.type === 'string') return true;
    if (left.type === 'string') return false;

    if (left.type === 'literal') {
        if (right.type === 'literal') {
            return left.value === right.value;
        }
        return right.has(left.value);
    }

    if (right.type === 'literal') return false;

    // Both left and right are inverted string set:
    //   L ⊆ R
    // = comp(L.excluded) ⊆ comp(R.excluded)
    // = L.excluded ⊇ R.excluded

    // I wanted to write `right.excluded.every(v => left.excluded.has(v))`,
    // but set methods suck
    for (const rValue of right.excluded) {
        if (!left.excluded.has(rValue)) return false;
    }
    return true;
};

const structIsSubsetOf = (left: StructType, right: StructType): boolean => {
    if (!isSameStructType(left, right)) return false;

    for (let i = 0; i < left.fields.length; i += 1) {
        const l = left.fields[i].type;
        const r = right.fields[i].type;

        if (!isSubsetOf(l, r)) return false;
    }
    return true;
};

const arrayFixedIsSubsetOf = (
    left: readonly NonNeverType[],
    right: readonly NonNeverType[]
): boolean => {
    if (left.length !== right.length) {
        // disjoint
        return false;
    }

    for (let i = 0; i < left.length; i += 1) {
        if (!isSubsetOf(left[i], right[i])) return false;
    }
    return true;
};
const arrayIsSubsetOf = (left: ArrayType, right: ArrayType): boolean => {
    if (left.repeated.type !== 'never') {
        if (right.repeated.type !== 'never') {
            if (left.fixed.length < right.fixed.length) {
                // this means that left includes at least one array value that is not included in right
                return false;
            }

            // check that fixed part is a subset
            const rightFilled = fillArray(right.fixed, right.repeated, left.fixed.length);
            if (!arrayFixedIsSubsetOf(left.fixed, rightFilled)) return false;

            // check that repeated part is a subset
            return isSubsetOf(left.repeated, right.repeated);
        } else {
            // Since left is an array with repeated elements and right isn't, left cannot be a subset of right.
            return false;
        }
    } else {
        if (right.repeated.type !== 'never') {
            if (right.fixed.length > left.fixed.length) {
                // since right always has more elements than left, left and right are disjoint.
                return false;
            }

            const rightFilled = fillArray(right.fixed, right.repeated, left.fixed.length);
            return arrayFixedIsSubsetOf(left.fixed, rightFilled);
        } else {
            // both left and right are simple fixed-size arrays
            return arrayFixedIsSubsetOf(left.fixed, right.fixed);
        }
    }
};

const valueIsSubsetOf = (left: ValueType, right: ValueType): boolean => {
    if (left.underlying !== right.underlying) return false;

    switch (left.underlying) {
        case 'number':
            return numberIsSubsetOf(left, right as NumberPrimitive);
        case 'string':
            return stringIsSubsetOf(left, right as StringPrimitive);
        case 'struct':
            return structIsSubsetOf(left, right as StructType);
        case 'array':
            return arrayIsSubsetOf(left, right as ArrayType);
        default:
            return assertNever(left);
    }
};

export const isSubsetOf = (left: Type, right: Type): boolean => {
    if (left.type === 'never') return true;
    if (right.type === 'any') return true;
    if (right.type === 'never') return false;
    if (left.type === 'any') return false;

    if (left.type === 'union') return left.items.every((item) => isSubsetOf(item, right));

    // At this point, left is a value, so this is correct.
    assertType<ValueType>(left);
    if (right.type === 'union') return right.items.some((item) => isSubsetOf(left, item));

    return valueIsSubsetOf(left, right);
};

export const isSupersetOf = (left: Type, right: Type): boolean => isSubsetOf(right, left);
