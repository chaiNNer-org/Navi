import { canonicalize } from './canonical';
import {
    AnyType,
    Bounds,
    CanonicalTypes,
    IntIntervalType,
    IntervalType,
    InvertedStringSetType,
    InvertedStructType,
    NeverType,
    NonIntIntervalType,
    NonNever,
    NonNeverType,
    NonTrivialType,
    NumberPrimitive,
    NumberType,
    NumericLiteralType,
    StringLiteralType,
    StringPrimitive,
    StringType,
    StructDescriptor,
    StructInstanceType,
    StructType,
    StructValueType,
    Type,
    UnionType,
    ValueType,
} from './types';
import { intInterval, isSameType, newBounds } from './types-util';
import { NonEmptyArray, assertNever, sameNumber } from './util';

const unionLiteralIntInterval = (n: number, b: IntIntervalType): NumberPrimitive | undefined => {
    if (Number.isInteger(n)) {
        // the literal is an integer, so we might be able to add it to the interval
        if (n === b.min - 1) return new IntIntervalType(n, b.max);
        if (n === b.max + 1) return new IntIntervalType(b.min, n);
    }
    return undefined;
};
const unionLiteralNonIntInterval = (
    n: number,
    b: NonIntIntervalType
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    if (Number.isInteger(n) && b.min <= n && n <= b.max) {
        // the literal is an integer and fills as hole

        // middle
        let middle;
        if (n === b.min) {
            middle = new IntervalType(n, n + 1, Bounds.MaxExclusive);
        } else if (n === b.max) {
            middle = new IntervalType(n - 1, n, Bounds.MinExclusive);
        } else {
            middle = new IntervalType(n - 1, n + 1, Bounds.Exclusive);
        }

        const items: NonEmptyArray<NumberPrimitive> = [middle];

        // left
        const leftMax = n - 1;
        if (b.min < leftMax) {
            items.push(new NonIntIntervalType(b.min, leftMax));
        }

        // right
        const rightMin = n + 1;
        if (rightMin < b.max) {
            items.push(new NonIntIntervalType(rightMin, b.max));
        }

        return items;
    }
    return undefined;
};
const unionLiteralInterval = (n: number, b: IntervalType): NumberPrimitive | undefined => {
    if (
        Number.isNaN(n) &&
        b.min === -Infinity &&
        b.max === Infinity &&
        b.bounds === Bounds.Inclusive
    ) {
        return NumberType.instance;
    }
    if (b.min === n && b.minExclusive) {
        return new IntervalType(b.min, b.max, b.bounds & Bounds.MaxExclusive);
    }
    if (b.max === n && b.maxExclusive) {
        return new IntervalType(b.min, b.max, b.bounds & Bounds.MinExclusive);
    }

    return undefined;
};
const unionLiteralNumber = (
    a: NumericLiteralType,
    b: NumericLiteralType | IntervalType | IntIntervalType | NonIntIntervalType
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    if (b.type === 'literal') {
        if (sameNumber(a.value, b.value)) return a;

        if (Number.isInteger(a.value) && Number.isInteger(b.value)) {
            const min = Math.min(a.value, b.value);
            const max = Math.max(a.value, b.value);
            if (min + 1 === max) return new IntIntervalType(min, max);
        }
        return undefined;
    }

    if (b.has(a.value)) return b;

    if (b.type === 'int-interval') return unionLiteralIntInterval(a.value, b);
    if (b.type === 'non-int-interval') return unionLiteralNonIntInterval(a.value, b);
    return unionLiteralInterval(a.value, b);
};

const unionIntIntervalIntInterval = (
    a: IntIntervalType,
    b: IntIntervalType
): NumberPrimitive | undefined => {
    const minMin = Math.min(a.min, b.min);
    const maxMin = Math.max(a.min, b.min);
    const minMax = Math.min(a.max, b.max);
    const maxMax = Math.max(a.max, b.max);

    if (maxMin - 1 > minMax) return undefined;
    return new IntIntervalType(minMin, maxMax);
};
const unionIntIntervalNonIntInterval = (
    a: IntIntervalType,
    b: NonIntIntervalType
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    // the two intervals are disjoint
    if (b.max < a.min || a.max < b.min) return undefined;

    // there is *some* overlap
    let min = Math.max(a.min, b.min);
    let max = Math.min(a.max, b.max);
    let minExclusive = min === -Infinity;
    let maxExclusive = max === Infinity;

    // extend the overlap to include adjacent non-integers
    if (b.min < min) {
        min--;
        minExclusive = true;
    }
    if (max < b.max) {
        max++;
        maxExclusive = true;
    }

    const items: NonEmptyArray<NumberPrimitive> = [
        min === max
            ? new NumericLiteralType(min)
            : new IntervalType(min, max, newBounds(minExclusive, maxExclusive)),
    ];

    // left of overlap
    if (a.min < b.min) {
        items.push(intInterval(a.min, b.min - 1));
    }
    if (b.min < min) {
        items.push(new NonIntIntervalType(b.min, min));
    }

    // right of overlap
    if (max < b.max) {
        items.push(new NonIntIntervalType(max, b.max));
    }
    if (b.max < a.max) {
        items.push(intInterval(b.max + 1, a.max));
    }

    return items;
};
const unionIntIntervalInterval = (
    a: IntIntervalType,
    b: IntervalType
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    if (b.hasIntInterval(a)) return b;

    // the two intervals are disjoint
    if (b.max < a.min || a.max < b.min) return undefined;

    const bIntMin = Math.ceil(b.min);
    const bIntMax = Math.floor(b.max);

    // the interval contains no integers
    if (bIntMin > bIntMax) return undefined;

    // we now know that the two intervals have at least one integer in common
    const leftMax = bIntMin - 1;
    const rightMin = bIntMax + 1;

    const result: NonEmptyArray<NumberPrimitive> = [
        new IntervalType(
            b.min,
            b.max,
            newBounds(b.minExclusive && !a.has(b.min), b.maxExclusive && !a.has(b.max))
        ),
    ];

    if (a.min <= leftMax && leftMax !== -Infinity) result.push(intInterval(a.min, leftMax));
    if (rightMin <= a.max && rightMin !== Infinity) result.push(intInterval(rightMin, a.max));

    return result;
};
const unionIntInterval = (
    a: IntIntervalType,
    b: IntervalType | IntIntervalType | NonIntIntervalType
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    if (b.type === 'int-interval') return unionIntIntervalIntInterval(a, b);
    if (b.type === 'non-int-interval') return unionIntIntervalNonIntInterval(a, b);
    return unionIntIntervalInterval(a, b);
};

const unionNonIntIntervalNonIntInterval = (
    a: NonIntIntervalType,
    b: NonIntIntervalType
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    let l, r;
    if (a.min < b.min) {
        l = a;
        r = b;
    } else {
        l = b;
        r = a;
    }

    if (l.max < r.min) return undefined;

    const min = l.min;
    const max = Math.max(l.max, r.max);
    return new NonIntIntervalType(min, max);
};
const unionNonIntIntervalInterval = (
    a: NonIntIntervalType,
    b: IntervalType
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    if (b.hasNonIntInterval(a)) return b;
    if (a.hasInterval(b)) return a;

    // disjoint
    if (a.max < b.min || b.max < a.min) return undefined;
    // almost touching, but still disjoint
    if ((b.max === a.min && b.maxExclusive) || (a.max === b.min && b.minExclusive))
        return undefined;

    // this union basically just extends the interval and splits the non-int-interval
    // so we calculate the interval first and see what's left of the non-int-interval

    let { min, max, minExclusive, maxExclusive } = b;
    if (max === a.min && !maxExclusive) {
        max++;
        maxExclusive = true;
    }
    if (min === a.max && !minExclusive) {
        min--;
        minExclusive = true;
    }
    if (a.min < min) {
        const minInt = Math.floor(min);
        if (minInt < min) {
            min = minInt;
            minExclusive = true;
        } else if (!minExclusive) {
            min--;
            minExclusive = true;
        }
    }
    if (max < a.max) {
        const maxInt = Math.ceil(max);
        if (max < maxInt) {
            max = maxInt;
            maxExclusive = true;
        } else if (!maxExclusive) {
            max++;
            maxExclusive = true;
        }
    }

    const items: NonEmptyArray<NumberPrimitive> = [
        new IntervalType(min, max, newBounds(minExclusive, maxExclusive)),
    ];

    if (a.min < min) {
        items.push(new NonIntIntervalType(a.min, min));
    }
    if (max < a.max) {
        items.push(new NonIntIntervalType(max, a.max));
    }

    return items;
};
const unionNonIntInterval = (
    a: NonIntIntervalType,
    b: IntervalType | NonIntIntervalType
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    if (b.type === 'non-int-interval') return unionNonIntIntervalNonIntInterval(a, b);
    return unionNonIntIntervalInterval(a, b);
};

const unionInterval = (a: IntervalType, b: IntervalType): NumberPrimitive | undefined => {
    let l, r;
    if (a.min < b.min) {
        l = a;
        r = b;
    } else {
        l = b;
        r = a;
    }

    if (l.max < r.min) return undefined;
    if (l.max === r.min && l.maxExclusive && r.minExclusive) return undefined;

    const min = l.min;
    const max = Math.max(l.max, r.max);

    const minInclusive = !l.minExclusive || r.has(min);
    const maxInclusive = l.has(max) || r.has(max);

    const bounds = newBounds(!minInclusive, !maxInclusive);

    if (bounds === Bounds.Exclusive && min + 1 === max && Number.isInteger(min)) {
        return new NonIntIntervalType(min, max);
    }

    return new IntervalType(min, max, bounds);
};

const unionNumber = (
    a: NumberPrimitive,
    b: NumberPrimitive
): NumberPrimitive | NonEmptyArray<NumberPrimitive> | undefined => {
    if (a.type === 'number' || b.type === 'number') return NumberType.instance;

    if (a.type === 'literal') return unionLiteralNumber(a, b);
    if (b.type === 'literal') return unionLiteralNumber(b, a);

    if (a.type === 'int-interval') return unionIntInterval(a, b);
    if (b.type === 'int-interval') return unionIntInterval(b, a);

    if (a.type === 'non-int-interval') return unionNonIntInterval(a, b);
    if (b.type === 'non-int-interval') return unionNonIntInterval(b, a);

    return unionInterval(a, b);
};

const unionInvertedStringSet = (
    a: InvertedStringSetType,
    b: InvertedStringSetType | StringLiteralType
): StringPrimitive => {
    if (b.type === 'literal') {
        if (a.has(b.value)) return a;

        // remove b's string value from the set of excluded strings
        if (a.excluded.size === 1) return StringType.instance;

        const excluded = new Set(a.excluded);
        excluded.delete(b.value);
        return new InvertedStringSetType(excluded);
    }

    // we need to the intersection of the excluded strings
    const intersection = new Set<string>();
    for (const aValue of a.excluded) {
        if (b.excluded.has(aValue)) {
            intersection.add(aValue);
        }
    }

    if (intersection.size === 0) return StringType.instance;
    if (intersection.size === a.excluded.size) return a;
    if (intersection.size === b.excluded.size) return b;
    return new InvertedStringSetType(intersection);
};

const unionString = (a: StringPrimitive, b: StringPrimitive): StringPrimitive | undefined => {
    if (a.type === 'string' || b.type === 'string') return StringType.instance;

    if (a.type === 'inverted-set') return unionInvertedStringSet(a, b);
    if (b.type === 'inverted-set') return unionInvertedStringSet(b, a);

    if (a.value === b.value) return a;
    return undefined;
};

const unionStructInstance = (
    a: StructInstanceType,
    b: StructInstanceType
): StructInstanceType | undefined => {
    if (a.descriptor !== b.descriptor) return undefined;

    if (a.fields.length === 0) return a;

    const fields: NonNeverType[] = [];
    for (let i = 0; i < a.fields.length; i += 1) {
        const aField = a.fields[i];
        const bField = b.fields[i];

        fields.push(union(aField, bField));
    }
    return StructInstanceType.fromDescriptorUnchecked(a.descriptor, fields);
};
const unionInvertedStruct = (
    a: InvertedStructType,
    b: InvertedStructType | StructInstanceType
): InvertedStructType | StructType | undefined => {
    if (b.type === 'instance') {
        if (a.has(b.descriptor)) return a;

        if (!isSameType(b, b.descriptor.default)) {
            // Since b is only a subset of the full definition type, we can't add the full definition type to the inverted set
            return undefined;
        }

        // remove b's descriptor from the set of excluded descriptor
        if (a.excluded.size === 1) return StructType.instance;

        const excluded = new Set(a.excluded);
        excluded.delete(b.descriptor);
        return new InvertedStructType(excluded);
    }

    // we need to the intersection of the excluded strings
    const intersection = new Set<StructDescriptor>();
    for (const aValue of a.excluded) {
        if (b.excluded.has(aValue)) {
            intersection.add(aValue);
        }
    }

    if (intersection.size === 0) return StructType.instance;
    if (intersection.size === a.excluded.size) return a;
    if (intersection.size === b.excluded.size) return b;
    return new InvertedStructType(intersection);
};
const unionStruct = (a: StructValueType, b: StructValueType): StructValueType | undefined => {
    if (a.type === 'struct' || b.type === 'struct') return StructType.instance;

    if (a.type === 'inverted-set') return unionInvertedStruct(a, b);
    if (b.type === 'inverted-set') return unionInvertedStruct(b, a);

    return unionStructInstance(a, b);
};

const unionIntoSet = <T>(
    set: T[],
    item: T,
    union: (a: T, b: T) => T | NonEmptyArray<T> | undefined
): void => {
    let didChange = true;
    while (didChange) {
        didChange = false;
        for (let i = 0; i < set.length; i += 1) {
            const setItem = set[i];
            const u = union(setItem, item);
            if (u === undefined) continue;

            set.splice(i, 1);
            didChange = true;

            if (Array.isArray(u)) {
                item = u[0];
                for (const v of u.slice(1)) {
                    unionIntoSet(set, v, union);
                }
                break;
            } else {
                item = u;
                i -= 1;
            }
        }
    }
    set.push(item);
};

class Union {
    private readonly number: NumberPrimitive[] = [];

    private readonly string: StringPrimitive[] = [];

    private readonly struct: StructValueType[] = [];

    constructor(items?: CanonicalTypes<ValueType>) {
        if (items) {
            for (const t of items) {
                switch (t.underlying) {
                    case 'number':
                        this.number.push(t);
                        break;
                    case 'string':
                        this.string.push(t);
                        break;
                    case 'struct':
                        this.struct.push(t);
                        break;
                    default:
                        break;
                }
            }
        }
    }

    union(item: ValueType | UnionType): void {
        switch (item.underlying) {
            case 'number':
                unionIntoSet(this.number, item, unionNumber);
                break;
            case 'string':
                unionIntoSet(this.string, item, unionString);
                break;
            case 'struct':
                unionIntoSet(this.struct, item, unionStruct);
                break;
            case 'union':
                for (const t of item.items) {
                    this.union(t);
                }
                break;
            default:
                assertNever(item);
        }
    }

    getResult(): ValueType | NeverType | UnionType | AnyType {
        if (
            this.number.length === 1 &&
            this.number[0].type === 'number' &&
            this.string.length === 1 &&
            this.string[0].type === 'string' &&
            this.struct.length === 1 &&
            this.struct[0].type === 'struct'
        ) {
            // any = number | string | struct
            return AnyType.instance;
        }

        const items = canonicalize<ValueType>([...this.number, ...this.string, ...this.struct]);

        if (items.length === 0) return NeverType.instance;
        if (items.length === 1) return items[0];
        return new UnionType(items);
    }
}

export function unionValueTypes(
    ...types: NumberPrimitive[]
): NumberPrimitive | UnionType<NumberPrimitive> | NeverType;
export function unionValueTypes(
    ...types: StringPrimitive[]
): StringPrimitive | UnionType<StringPrimitive> | NeverType;
export function unionValueTypes(
    ...types: StructValueType[]
): StructValueType | UnionType<StructValueType> | NeverType;
export function unionValueTypes(...types: ValueType[]): ValueType | UnionType | NeverType | AnyType;
// eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
export function unionValueTypes(
    ...types: ValueType[]
): ValueType | UnionType | NeverType | AnyType {
    if (types.length === 0) return NeverType.instance;
    if (types.length === 1) return types[0];

    const u = new Union();

    for (const t of types) {
        u.union(t);
    }

    return u.getResult();
}

type ClosedValueType<T extends ValueType> =
    | (T extends NumberPrimitive ? NumberPrimitive : never)
    | (T extends StringPrimitive ? StringPrimitive : never)
    | T;
type CanBeAny<T extends Type> = (T extends NumberPrimitive ? unknown : never) &
    (T extends StringPrimitive ? unknown : never) &
    (T extends StructValueType ? unknown : never);
type UnderUnion<T extends ValueType> = T | UnionType<T>;
type Closed<T extends Type> =
    | (T extends NumberPrimitive ? UnderUnion<NumberPrimitive> : never)
    | (T extends StringPrimitive ? UnderUnion<StringPrimitive> : never)
    | (T extends StructInstanceType
          ? UnderUnion<StructInstanceType>
          : T extends StructValueType
          ? UnderUnion<StructValueType>
          : never)
    | (CanBeAny<T> & AnyType)
    | (T extends UnionType<infer U> ? UnderUnion<ClosedValueType<U>> : never)
    | T;

type Union2<A extends Type, B extends Type> =
    | Closed<NonNever<A>>
    | Closed<NonNever<B>>
    | (A extends NeverType ? (B extends NeverType ? NeverType : never) : never);

export function union(): NeverType;
export function union<A extends Type>(a: A): A;
export function union<A extends Type, B extends Type>(a: A, b: B): Union2<A, B>;
export function union<A extends Type, B extends Type, C extends Type>(
    a: A,
    b: B,
    c: C
): Union2<A, B | C>;
export function union<A extends Type, B extends Type, C extends Type, D extends Type>(
    a: A,
    b: B,
    c: C,
    d: D
): Union2<A, B | C | D>;
export function union<T extends Type>(...types: T[]): Closed<T> | NeverType;
// eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
export function union(...types: Type[]): Type {
    if (types.length === 0) return NeverType.instance;
    if (types.length === 1) return types[0];

    const items: NonTrivialType[] = [];
    let startUnionIndex: number | undefined;
    for (const t of types) {
        if (t.type === 'any') return AnyType.instance;
        if (t.type === 'never') continue;

        if (t.type === 'union') startUnionIndex = items.length;

        items.push(t);
    }

    if (items.length === 0) return NeverType.instance;
    if (items.length === 1) return items[0];

    let u: Union;
    if (startUnionIndex !== undefined) {
        u = new Union((items[startUnionIndex] as UnionType).items);
        items.splice(startUnionIndex, 1);
    } else {
        u = new Union();
    }

    for (const t of items) {
        u.union(t);
    }

    return u.getResult();
}
