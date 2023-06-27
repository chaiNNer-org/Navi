import {
    NumberPrimitive,
    StringPrimitive,
    StructInstanceType,
    StructValueType,
    Type,
    ValueType,
} from './types';
import { assertNever, assertType, sameNumber } from './util';

const numberIsSubsetOf = (left: NumberPrimitive, right: NumberPrimitive): boolean => {
    if (right.type === 'number') return true;
    if (left.type === 'number') return false;

    // literals
    if (left.type === 'literal') {
        if (right.type === 'literal') return sameNumber(left.value, right.value);
        return right.has(left.value);
    }
    if (right.type === 'literal') return false;

    if (left.type === 'int-interval') return right.hasIntInterval(left);
    if (left.type === 'non-int-interval') return right.hasNonIntInterval(left);
    return right.hasInterval(left);
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

    // Both left and right are inverted string sets:
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

const structInstanceIsSubsetOf = (left: StructInstanceType, right: StructInstanceType): boolean => {
    if (left.descriptor !== right.descriptor) return false;

    for (let i = 0; i < left.fields.length; i += 1) {
        const l = left.fields[i];
        const r = right.fields[i];

        if (!isSubsetOf(l, r)) return false;
    }
    return true;
};
const structIsSubsetOf = (left: StructValueType, right: StructValueType): boolean => {
    if (right.type === 'struct') return true;
    if (left.type === 'struct') return false;

    if (left.type === 'instance') {
        if (right.type === 'instance') {
            return structInstanceIsSubsetOf(left, right);
        }
        return right.has(left.descriptor);
    }

    if (right.type === 'instance') return false;

    // Both left and right are inverted sets. Same as with inverted string sets.
    for (const rValue of right.excluded) {
        if (!left.excluded.has(rValue)) return false;
    }
    return true;
};

const valueIsSubsetOf = (left: ValueType, right: ValueType): boolean => {
    if (left.underlying !== right.underlying) return false;

    switch (left.underlying) {
        case 'number':
            return numberIsSubsetOf(left, right as NumberPrimitive);
        case 'string':
            return stringIsSubsetOf(left, right as StringPrimitive);
        case 'struct':
            return structIsSubsetOf(left, right as StructValueType);
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
