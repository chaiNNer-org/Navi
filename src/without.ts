import { INF, NAN, NEG_INF, REAL } from './constants';
import { intersect } from './intersection';
import { isSupersetOf } from './relation';
import {
    AnyType,
    Bounds,
    IntIntervalType,
    IntervalType,
    InvertedStringSetType,
    InvertedStructType,
    NeverType,
    NonIntIntervalType,
    NumberPrimitive,
    NumberType,
    NumericLiteralType,
    StringLiteralType,
    StringPrimitive,
    StringType,
    StructInstanceType,
    StructType,
    StructValueType,
    Type,
    UnionType,
    ValueType,
} from './types';
import { closedInterval, groupByUnderlying, intInterval, interval, newBounds } from './types-util';
import { union } from './union';
import { assertNever, sameNumber } from './util';

type WithoutLhs<T extends ValueType> = T | UnionType<T>;
type WithoutResult<T extends ValueType> = T | UnionType<T> | NeverType;

const hasLiteral = (primitive: NumberPrimitive, n: number): boolean => {
    switch (primitive.type) {
        case 'number':
            return true;
        case 'int-interval':
        case 'non-int-interval':
        case 'interval':
            return primitive.has(n);
        case 'literal':
            return sameNumber(primitive.value, n);
        default:
            return assertNever(primitive);
    }
};

/**
 * Returns `number \ n`.
 */
const complementNumber = (n: NumberPrimitive): WithoutResult<NumberPrimitive> => {
    switch (n.type) {
        case 'number': {
            return NeverType.instance;
        }
        case 'literal': {
            if (Number.isNaN(n.value)) {
                return REAL;
            }

            return union(
                NAN,
                interval(-Infinity, n.value, Bounds.MaxExclusive),
                interval(n.value, Infinity, Bounds.MinExclusive)
            );
        }
        case 'int-interval': {
            const items: NumberPrimitive[] = [NAN];
            if (n.min === -Infinity) {
                items.push(NEG_INF);
            } else {
                items.push(new IntervalType(-Infinity, n.min, Bounds.MaxExclusive));
            }
            if (n.max === Infinity) {
                items.push(INF);
            } else {
                items.push(new IntervalType(n.max, Infinity, Bounds.MinExclusive));
            }
            items.push(new NonIntIntervalType(n.min, n.max));
            return union(...items);
        }
        case 'non-int-interval': {
            const items: NumberPrimitive[] = [
                NAN,
                closedInterval(-Infinity, n.min),
                closedInterval(n.max, Infinity),
            ];
            if (n.max - n.min > 1) {
                items.push(intInterval(n.min + 1, n.max - 1));
            }
            return union(...items);
        }
        case 'interval': {
            return union(
                NAN,
                interval(-Infinity, n.min, newBounds(false, !n.minExclusive)),
                interval(n.max, Infinity, newBounds(!n.maxExclusive, false))
            );
        }
        default:
            return assertNever(n);
    }
};
const withoutIntInterval = (
    left: IntIntervalType,
    right: IntIntervalType | NonIntIntervalType | IntervalType | NumericLiteralType
): WithoutResult<NumberPrimitive> => {
    if (right.type === 'non-int-interval') return left;

    // The idea here is to first convert the rhs into what is effectively `int & right`.
    // This means that we only have to implement int-interval without int-interval.

    let rMin: number;
    let rMax: number;
    if (right.type === 'literal') {
        if (!Number.isInteger(right.value)) return left;
        rMin = right.value;
        rMax = right.value;
    } else if (right.type === 'interval') {
        rMin = Math.ceil(right.min);
        rMax = Math.floor(right.max);
        if (rMin === right.min && right.minExclusive) rMin += 1;
        if (rMax === right.max && right.maxExclusive) rMax -= 1;
        if (rMin > rMax) return left;
    } else {
        rMin = right.min;
        rMax = right.max;
    }

    const items: NumberPrimitive[] = [];

    if (rMax < Infinity) {
        const lower = Math.max(left.min, rMax + 1);
        if (lower <= left.max) items.push(intInterval(lower, left.max));
    }
    if (rMin > -Infinity) {
        const upper = Math.min(left.max, rMin - 1);
        if (left.min <= upper) items.push(intInterval(left.min, upper));
    }

    return union(...items);
};
const withoutNumberPrimitive = (
    left: NumberPrimitive,
    right: NumberPrimitive
): WithoutResult<NumberPrimitive> => {
    if (right.type === 'number') return NeverType.instance;
    if (left.type === 'number') return complementNumber(right);

    if (left.type === 'literal') {
        return hasLiteral(right, left.value) ? NeverType.instance : left;
    }
    if (left.type === 'int-interval') return withoutIntInterval(left, right);

    // As we know: A \ B = A & ~B
    return intersect(left, complementNumber(right));
};

const withoutStringPrimitive = (
    left: StringPrimitive,
    right: StringPrimitive
): WithoutResult<StringPrimitive> => {
    if (right.type === 'string') return NeverType.instance;
    if (left.type === 'string') {
        if (right.type === 'literal') return new InvertedStringSetType(new Set([right.value]));

        return union(...[...right.excluded].map((value) => new StringLiteralType(value)));
    }

    if (left.type === 'literal') {
        if (right.type === 'literal') {
            return left.value === right.value ? NeverType.instance : left;
        }
        return right.has(left.value) ? NeverType.instance : left;
    }

    if (right.type === 'literal') {
        if (!left.has(right.value)) return left;
        const excluded = new Set(left.excluded);
        excluded.add(right.value);
        return new InvertedStringSetType(excluded);
    }

    // Both left and right are inverted string sets:
    //   L \ R
    // = comp(L.excluded) \ comp(R.excluded)
    // = comp(L.excluded) ∩ R.excluded
    // = R.excluded \ L.excluded
    const remaining: string[] = [];
    for (const rValue of right.excluded) {
        if (!left.excluded.has(rValue)) {
            remaining.push(rValue);
        }
    }
    return union(...remaining.map((value) => new StringLiteralType(value)));
};

const withoutStructInstance = (
    left: StructInstanceType,
    right: StructInstanceType
): StructInstanceType | NeverType => {
    if (left.descriptor === right.descriptor) {
        if (left.fields.length === 0) {
            // there are no fields, so e.g. `null \ null == never`
            return NeverType.instance;
        }
        if (left.fields.length === 1) {
            // if there is only field, we only have to find the difference of that field

            const field = without(left.fields[0], right.fields[0]);
            if (field.type === 'never') return NeverType.instance;
            return StructInstanceType.fromDescriptorUnchecked(left.descriptor, [field]);
        }

        // the condition for multiple fields is as follows:
        // 1. If all right fields are a superset of their corresponding left fields, return never.
        // 2. If there is exactly one right field that is a subset of its corresponding left field
        //    (all other right fields being supersets of their corresponding left fields), then
        //    find the difference for that one field and use the left field for all others.
        // 3. If neither 1) not 2) applies, return left.

        let subset: number | undefined;
        for (let i = 0; i < left.fields.length; i += 1) {
            const leftField = left.fields[i];
            const rightField = right.fields[i];
            if (!isSupersetOf(rightField, leftField)) {
                if (subset === undefined) {
                    subset = i;
                } else {
                    // there is more than one subset, so condition 3)
                    return left;
                }
            }
        }

        // condition 1)
        if (subset === undefined) return NeverType.instance;

        // condition 2)
        return StructInstanceType.fromDescriptorUnchecked(
            left.descriptor,
            left.fields.map((leftField, i) => {
                if (i !== subset) return leftField;

                const rightField = right.fields[i];

                const diff = without(leftField, rightField);
                if (diff.type === 'never') {
                    throw new Error(
                        'This should not be possible because the left field is guaranteed to be a strict subset of the right field.' +
                            ' This means that there is a bug with implementation of `without` or `isSubsetOf`.' +
                            ' Please report this as a bug.'
                    );
                }

                return diff;
            })
        );
    }
    return left;
};
const complementStruct = (s: StructValueType): WithoutResult<StructValueType> => {
    switch (s.type) {
        case 'instance': {
            const withinDesc = withoutStructInstance(s.descriptor.default, s);
            return union(withinDesc, new InvertedStructType(new Set([s.descriptor])));
        }
        case 'inverted-set': {
            // return the default instances of the excluded structs
            return union(...[...s.excluded].map((d) => d.default));
        }
        case 'struct': {
            return NeverType.instance;
        }
        default:
            return assertNever(s);
    }
};
const withoutStruct = (
    left: StructValueType,
    right: StructValueType
): WithoutResult<StructValueType> => {
    if (right.type === 'struct') return NeverType.instance;
    if (left.type === 'struct') return complementStruct(right);

    if (left.type === 'instance' && right.type === 'instance') {
        return withoutStructInstance(left, right);
    }

    // the usual A \ B = A & ~B
    return intersect(left, complementStruct(right));
};

const withoutValue = (left: WithoutLhs<ValueType>, right: ValueType): WithoutResult<ValueType> => {
    const groups = groupByUnderlying(left.type === 'union' ? left.items : [left]);

    const other: WithoutResult<ValueType>[] = [];
    switch (right.underlying) {
        case 'number': {
            const l = groups.number;
            if (l.length === 0) return left;
            other.push(...l.map((n) => withoutNumberPrimitive(n, right)));
            l.length = 0;
            break;
        }
        case 'string': {
            const l = groups.string;
            if (l.length === 0) return left;
            other.push(...l.map((s) => withoutStringPrimitive(s, right)));
            l.length = 0;
            break;
        }
        case 'struct': {
            const l = groups.struct;
            if (l.length === 0) return left;
            other.push(...l.map((s) => withoutStruct(s, right)));
            l.length = 0;
            break;
        }
        default:
            return assertNever(right);
    }

    const result = union(...groups.number, ...groups.string, ...groups.struct, ...other);
    if (result.type === 'any') throw new Error('without should never return any');
    return result;
};

const complementType = (t: Type): Type => {
    if (t.type === 'never') return AnyType.instance;
    if (t.type === 'any') return NeverType.instance;

    // any = number | string | anyStruct
    const anyBase = [NumberType.instance, StringType.instance, StructType.instance] as const;
    const baseWithout = anyBase.map((b) => without(b, t));

    return union(...baseWithout);
};

/**
 * Returns the **approximate** result of `left \ right` (set minus/set difference).
 *
 * The result is only approximate because not all results of `left \ right` can be represented
 * using the type system. E.g. `0..1 \ 0.5` is not representable. For unrepresentable results, a
 * superset of the actual result that is representable using the type system will be returned.
 * E.g. `0..1 \ 0.5` will return `0..1`.
 */
export const without = (left: Type, right: Type): Type => {
    if (right.type === 'never') return left;
    if (right.type === 'any') return NeverType.instance;
    if (left.type === 'never') return NeverType.instance;
    if (left.type === 'any') return complementType(right);

    if (right.underlying !== 'union') {
        return withoutValue(left, right);
    }

    let result: WithoutResult<ValueType> = left;
    for (const r of right.items) {
        if (result.type === 'never') return NeverType.instance;
        result = withoutValue(result, r);
    }
    return result;
};
