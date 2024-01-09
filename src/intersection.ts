import { Arg } from './main';
import {
    AnyType,
    IntIntervalType,
    IntervalType,
    InvertedStringSetType,
    InvertedStructType,
    NeverType,
    NonIntIntervalType,
    NonNeverType,
    NumberPrimitive,
    NumericLiteralType,
    StringLiteralType,
    StringPrimitive,
    StructInstanceType,
    StructValueType,
    Type,
    UnionType,
    ValueType,
} from './types';
import { interval, newBounds } from './types-util';
import { unionValueTypes } from './union';
import { EMPTY_ARRAY, assertNever, sameNumber } from './util';

const intersectInterval = (a: IntervalType, b: IntervalType): NumberPrimitive | NeverType => {
    const min = Math.max(a.min, b.min);
    const max = Math.min(a.max, b.max);

    if (min > max) return NeverType.instance;

    const minInclusive = a.has(min) && b.has(min);
    const maxInclusive = a.has(max) && b.has(max);

    return interval(min, max, newBounds(!minInclusive, !maxInclusive));
};
const intersectIntInterval = (
    a: IntIntervalType,
    b: IntervalType | IntIntervalType | NonIntIntervalType
): NumberPrimitive | NeverType => {
    if (b.type === 'non-int-interval') return NeverType.instance;

    let bMin, bMax;
    if (b.type === 'int-interval') {
        bMin = b.min;
        bMax = b.max;
    } else {
        // This is more complex because the ends of the interval might be exclusive.
        // The goal is to find the min and max integer (or infinity) in the interval.
        bMin = Math.ceil(b.min);
        bMax = Math.floor(b.max);
        if (bMin === b.min && b.minExclusive) bMin += 1;
        if (bMax === b.max && b.maxExclusive) bMax -= 1;
    }

    const min = Math.max(a.min, bMin);
    const max = Math.min(a.max, bMax);

    if (min === max) return new NumericLiteralType(min);
    if (min < max) return new IntIntervalType(min, max);
    return NeverType.instance;
};
const intersectNonIntInterval = (
    a: NonIntIntervalType,
    b: IntervalType | NonIntIntervalType
): Arg<NumberPrimitive> => {
    const min = Math.max(a.min, b.min);
    const max = Math.min(a.max, b.max);

    if (min >= max) return NeverType.instance;

    if (b.type === 'non-int-interval') {
        return new NonIntIntervalType(min, max);
    }

    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);

    if (minInt === min && maxInt === max) {
        // simple case: min and max are integers
        return new NonIntIntervalType(minInt, maxInt);
    }
    if (minInt >= max || maxInt <= min) {
        // this means that we can represent the result with a single interval,
        // because we don't need to exclude any integers (except maybe min and max)
        const minExclusive = !a.has(min) || !b.has(min);
        const maxExclusive = !a.has(max) || !b.has(max);
        return new IntervalType(min, max, newBounds(minExclusive, maxExclusive));
    }

    // complex case: min and max are not integers
    // this means that we have to split the interval into 2 or 3 parts:
    // 1. non-int-interval in the middle; this might not exist
    // 2. the interval on the left
    // 2. the interval on the right
    const items: (NonIntIntervalType | IntervalType)[] = [];
    if (minInt < maxInt) {
        items.push(new NonIntIntervalType(minInt, maxInt));
    }
    if (min < minInt) {
        items.push(new IntervalType(min, minInt, newBounds(b.minExclusive, true)));
    }
    if (maxInt < max) {
        items.push(new IntervalType(maxInt, max, newBounds(true, b.maxExclusive)));
    }
    return unionValueTypes(...items);
};
const intersectNumericLiteral = (
    literal: NumericLiteralType,
    other: NumericLiteralType | IntervalType | IntIntervalType | NonIntIntervalType
): NumberPrimitive | NeverType => {
    switch (other.type) {
        case 'interval':
        case 'int-interval':
        case 'non-int-interval':
            if (other.has(literal.value)) return literal;
            return NeverType.instance;
        case 'literal':
            if (sameNumber(literal.value, other.value)) {
                return literal;
            }
            return NeverType.instance;

        default:
            return assertNever(other);
    }
};
const intersectNumber = (a: NumberPrimitive, b: NumberPrimitive): Arg<NumberPrimitive> => {
    if (a.type === 'number') return b;
    if (b.type === 'number') return a;

    if (a.type === 'literal') return intersectNumericLiteral(a, b);
    if (b.type === 'literal') return intersectNumericLiteral(b, a);

    if (a.type === 'int-interval') return intersectIntInterval(a, b);
    if (b.type === 'int-interval') return intersectIntInterval(b, a);

    if (a.type === 'non-int-interval') return intersectNonIntInterval(a, b);
    if (b.type === 'non-int-interval') return intersectNonIntInterval(b, a);

    return intersectInterval(a, b);
};

const intersectStringLiteral = (
    a: StringLiteralType,
    b: InvertedStringSetType | StringLiteralType
): StringPrimitive | NeverType => {
    if (b.type === 'inverted-set') {
        if (!b.has(a.value)) return NeverType.instance;
        return a;
    }

    if (a.value === b.value) return a;
    return NeverType.instance;
};
const intersectInvertedStringSet = (
    a: InvertedStringSetType,
    b: InvertedStringSetType
): StringPrimitive | NeverType => {
    // to find the intersection of 2 inverted sets, we have to compute their union
    const union = new Set<string>([...a.excluded, ...b.excluded]);
    if (union.size === a.excluded.size) return a;
    if (union.size === b.excluded.size) return b;
    return new InvertedStringSetType(union);
};
const intersectString = (a: StringPrimitive, b: StringPrimitive): StringPrimitive | NeverType => {
    if (a.type === 'string') return b;
    if (b.type === 'string') return a;

    if (a.type === 'literal') return intersectStringLiteral(a, b);
    if (b.type === 'literal') return intersectStringLiteral(b, a);

    return intersectInvertedStringSet(a, b);
};

const intersectStructInstance = (
    a: StructInstanceType,
    b: StructInstanceType
): StructInstanceType | NeverType => {
    if (a.descriptor !== b.descriptor) return NeverType.instance;
    if (a.fields.length === 0) return a;

    const fields: NonNeverType[] = [];
    for (let i = 0; i < a.fields.length; i += 1) {
        const t = intersect(a.fields[i], b.fields[i]);
        if (t.type === 'never') return NeverType.instance;
        fields.push(t);
    }
    return StructInstanceType.fromDescriptorUnchecked(a.descriptor, fields);
};
const intersectInvertedStructType = (
    a: InvertedStructType,
    b: StructInstanceType
): StructInstanceType | NeverType => {
    if (a.has(b.descriptor)) return b;
    return NeverType.instance;
};
const intersectStruct = (a: StructValueType, b: StructValueType): StructValueType | NeverType => {
    if (a.type === 'struct') return b;
    if (b.type === 'struct') return a;

    if (a.type === 'instance') {
        if (b.type === 'instance') return intersectStructInstance(a, b);
        return intersectInvertedStructType(b, a);
    }
    if (b.type === 'instance') return intersectInvertedStructType(a, b);

    // to find the intersection of 2 inverted sets, we have to compute their union
    const union = new Set([...a.excluded, ...b.excluded]);
    if (union.size === a.excluded.size) return a;
    if (union.size === b.excluded.size) return b;
    return new InvertedStructType(union);
};

const intersectValueType = (a: ValueType, b: ValueType): Arg<ValueType> => {
    if (a.underlying !== b.underlying) return NeverType.instance;

    switch (a.underlying) {
        case 'number':
            return intersectNumber(a, b as NumberPrimitive);
        case 'string':
            return intersectString(a, b as StringPrimitive);
        case 'struct':
            return intersectStruct(a, b as StructValueType);
        default:
            return assertNever(a);
    }
};

type DisjointUnion = readonly ValueType[] & { __disjointUnion: never };
const asDisjointUnion = (t: Arg<ValueType>): DisjointUnion => {
    if (t.type === 'never') return EMPTY_ARRAY as unknown as DisjointUnion;
    if (t.type === 'union') return t.items as unknown as DisjointUnion;
    return [t] as unknown as DisjointUnion;
};

const intersectDisjointUnion = (a: DisjointUnion, b: DisjointUnion): DisjointUnion => {
    if (a.length === 1 && b.length === 1) {
        // fast path
        return asDisjointUnion(intersectValueType(a[0], b[0]));
    }

    const result: ValueType[] = [];
    for (const t1 of a) {
        for (const t2 of b) {
            const t = intersectValueType(t1, t2);
            if (t.type === 'union') {
                result.push(...t.items);
            } else if (t.type !== 'never') {
                result.push(t);
            }
        }
    }
    return result as unknown as DisjointUnion;
};
const intersectDisjointUnions = (unions: DisjointUnion[]): Type => {
    if (unions.length === 0) return AnyType.instance;

    let left = unions[0];
    for (let i = 1; i < unions.length && left.length > 0; i += 1) {
        left = intersectDisjointUnion(left, unions[i]);
    }

    // while the elements are all disjoint, they may be adjacent and need to be merged
    return unionValueTypes(...left);
};

type InternalIntersectionItem = ValueType | UnionType;

const performIntersection = (items: readonly InternalIntersectionItem[]): Type => {
    if (items.length === 2) {
        // fast path for 2 value types intersection
        const [a, b] = items;
        if (a.type !== 'union' && b.type !== 'union') {
            return intersectValueType(a, b);
        }
    }

    return intersectDisjointUnions(items.map(asDisjointUnion));
};

type BaseValueTypes<T extends ValueType> = T extends NumberPrimitive
    ? NumberPrimitive
    : T extends StringPrimitive
    ? StringPrimitive
    : T extends StructValueType
    ? StructValueType
    : never;
type BaseTypes<T extends Type> = T extends ValueType
    ? BaseValueTypes<T>
    : T extends UnionType<infer U>
    ? BaseValueTypes<U>
    : never;
type Closed<T extends ValueType> = T | UnionType<T>;
type Intersection2<A extends Type, B extends Type> =
    | NeverType
    | (A extends AnyType ? (B extends AnyType ? AnyType : never) : never)
    | Closed<BaseTypes<A> & BaseTypes<B>>;

export function intersect(): AnyType;
export function intersect<A extends Type>(a: A): A;
export function intersect<A extends Type, B extends Type>(a: A, b: B): Intersection2<A, B>;
export function intersect<T extends Type>(
    ...types: T[]
): AnyType | NeverType | Closed<BaseTypes<T>>;
// eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
export function intersect(...types: Type[]): Type {
    const items: InternalIntersectionItem[] = [];
    for (const t of types) {
        if (t.type === 'never') return NeverType.instance;
        if (t.type === 'any') continue;

        items.push(t);
    }

    if (items.length === 0) return AnyType.instance;
    if (items.length === 1) return items[0];

    return performIntersection(items);
}

export const isDisjointWith = (a: Type, b: Type): boolean => intersect(a, b).type === 'never';
