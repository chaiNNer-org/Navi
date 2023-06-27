/* eslint-disable @typescript-eslint/no-empty-function */

import { assertValidStructFieldName, assertValidStructName } from './names';
import { EMPTY_ARRAY, binaryCompare } from './util';

export type Type = PrimitiveType | NeverType | AnyType | UnionType | StructValueType;
export type ValueType = PrimitiveType | StructValueType;
export type StructValueType = StructInstanceType | StructType | InvertedStructType;
export type PrimitiveType = NumberPrimitive | StringPrimitive;
export type NumberPrimitive =
    | NumberType
    | NumericLiteralType
    | IntervalType
    | IntIntervalType
    | NonIntIntervalType;
export type StringPrimitive = StringType | StringLiteralType | InvertedStringSetType;

// Integers are very useful and very common, so they get their own type alias.
export type Int = NumericLiteralType | IntIntervalType;

/**
 * A de-duplicated and sorted array of types.
 */
export type CanonicalTypes<T extends Type> = readonly T[] & { readonly __CanonicalTypes: never };

export type WithUnderlying<U extends Type['underlying'], T extends Type = Type> = T extends {
    readonly underlying: U;
}
    ? T
    : never;
export type WithType<U extends Type['type'], T extends Type = Type> = T extends {
    readonly type: U;
}
    ? T
    : never;

export type NonTrivialType = ValueType | UnionType;
export type NonNeverType = Exclude<Type, NeverType>;
export type NonNever<T extends Type> = Exclude<T, NeverType>;

export enum Bounds {
    Inclusive = 0,
    MinExclusive = 1,
    MaxExclusive = 2,
    Exclusive = 3,
}

const formatNumber = (n: number): string => {
    if (Number.isNaN(n)) return 'nan';
    if (n === Infinity) return 'inf';
    if (n === -Infinity) return '-inf';
    return String(n);
};
const INTERVAL_BOUNDS: Record<Bounds, string> = {
    [Bounds.Inclusive]: '..',
    [Bounds.MinExclusive]: '!..',
    [Bounds.MaxExclusive]: '..!',
    [Bounds.Exclusive]: '!..!',
};
const formatInterval = (min: number, max: number, bounds: Bounds) => {
    return `${formatNumber(min)}${INTERVAL_BOUNDS[bounds]}${formatNumber(max)}`;
};

interface TypeBase {
    readonly type: Type['type'];
    readonly underlying: Type['underlying'];
    /**
     * Returns a unique string representation for the given type.
     *
     * It is guaranteed that any two types with the same type id are equivalent. Likewise, any two
     * equivalent types are guaranteed to have the same type id.
     */
    getTypeId(): string;
    toString(): string;
}

export class NumberType implements TypeBase {
    readonly type = 'number';

    readonly underlying = 'number';

    private constructor() {}

    getTypeId(): string {
        return 'number';
    }

    toString(): string {
        return this.getTypeId();
    }

    static readonly instance = new NumberType();
}
export class NumericLiteralType implements TypeBase {
    readonly type = 'literal';

    readonly underlying = 'number';

    readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    getTypeId(): string {
        return formatNumber(this.value);
    }

    toString(): string {
        return this.getTypeId();
    }
}
interface Interval {
    readonly min: number;
    readonly max: number;
    /**
     * Returns `true` if the given number is contained in this interval.
     */
    has(n: number): boolean;
    /**
     * Returns `true` if the given interval is a subset of this interval.
     */
    hasInterval(i: IntervalType): boolean;
    /**
     * Returns `true` if the given interval is a subset of this interval.
     */
    hasIntInterval(i: IntIntervalType): boolean;
    /**
     * Returns `true` if the given interval is a subset of this interval.
     */
    hasNonIntInterval(i: NonIntIntervalType): boolean;
}
/**
 * An interval of numbers. The interval may be closed or open on either end.
 */
export class IntervalType implements TypeBase, Interval {
    readonly type = 'interval';

    readonly underlying = 'number';

    readonly min: number;

    readonly max: number;

    readonly bounds: Bounds;

    get minExclusive(): boolean {
        return (this.bounds & Bounds.MinExclusive) !== 0;
    }
    get maxExclusive(): boolean {
        return (this.bounds & Bounds.MaxExclusive) !== 0;
    }

    constructor(min: number, max: number, bounds: Bounds) {
        if (Number.isNaN(min) || Number.isNaN(max)) {
            throw new Error(`min=${min} and max=${max} cannot be NaN`);
        }
        if (!(min < max)) {
            throw new Error(`min=${min} must be < max=${max}`);
        }

        if (bounds === Bounds.Exclusive && min + 1 === max && Number.isInteger(min)) {
            throw new Error(
                `Open interval min=${min} max=${max} must be represented as a NonIntInterval`
            );
        }

        this.min = min;
        this.max = max;
        this.bounds = bounds;
    }

    has(n: number): boolean {
        const min = this.minExclusive ? this.min < n : this.min <= n;
        const max = this.maxExclusive ? n < this.max : n <= this.max;
        return min && max;
    }
    hasInterval(i: IntervalType): boolean {
        return (
            this.min <= i.min &&
            i.max <= this.max &&
            (i.minExclusive || this.has(i.min)) &&
            (i.maxExclusive || this.has(i.max))
        );
    }
    hasIntInterval(i: IntIntervalType): boolean {
        const min = i.min === -Infinity ? this.min === -Infinity : this.has(i.min);
        const max = i.max === Infinity ? this.max === Infinity : this.has(i.max);
        return min && max;
    }
    hasNonIntInterval(i: NonIntIntervalType): boolean {
        // we don't have to check exclusivity, because the ends of non int intervals are exclusive
        return this.min <= i.min && i.max <= this.max;
    }
    hasAnyInteger(): boolean {
        const m = Math.floor(this.min);
        return m === -Infinity || this.has(m) || this.has(m + 1);
    }

    getTypeId(): string {
        return formatInterval(this.min, this.max, this.bounds);
    }

    toString(): string {
        return this.getTypeId();
    }
}
/**
 * An interval of integers. Both ends are inclusive unless they are infinite.
 */
export class IntIntervalType implements TypeBase, Interval {
    readonly type = 'int-interval';

    readonly underlying = 'number';

    readonly min: number;

    readonly max: number;

    constructor(min: number, max: number) {
        if (Number.isNaN(min) || Number.isNaN(max)) {
            throw new Error(`min=${min} and max=${max} cannot be NaN`);
        }
        if (
            !(Number.isInteger(min) || min === -Infinity) ||
            !(Number.isInteger(max) || max === Infinity)
        ) {
            throw new Error(`min=${min} and max=${max} must be integers or infinity`);
        }
        if (!(min < max)) {
            throw new Error(`min=${min} must be < max=${max}`);
        }

        this.min = min;
        this.max = max;
    }

    has(n: number): boolean {
        return Number.isInteger(n) && this.min <= n && n <= this.max;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hasInterval(_: IntervalType): false {
        return false;
    }
    hasIntInterval(i: IntIntervalType): boolean {
        return this.min <= i.min && i.max <= this.max;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hasNonIntInterval(_: NonIntIntervalType): false {
        return false;
    }

    getTypeId(): string {
        return `int(${formatInterval(this.min, this.max, Bounds.Inclusive)})`;
    }

    toString(): string {
        return this.getTypeId();
    }
}
/**
 * An interval of numbers that are not integers. Both ends are integers (or infinite) and exclusive.
 */
export class NonIntIntervalType implements TypeBase, Interval {
    readonly type = 'non-int-interval';

    readonly underlying = 'number';

    readonly min: number;

    readonly max: number;

    constructor(min: number, max: number) {
        if (Number.isNaN(min) || Number.isNaN(max)) {
            throw new Error(`min=${min} and max=${max} cannot be NaN`);
        }
        if (
            !(Number.isInteger(min) || min === -Infinity) ||
            !(Number.isInteger(max) || max === Infinity)
        ) {
            throw new Error(`min=${min} and max=${max} must be integers or infinity`);
        }
        if (!(min < max)) {
            throw new Error(`min=${min} must be < max=${max}`);
        }

        this.min = min;
        this.max = max;
    }

    has(n: number): boolean {
        return !Number.isInteger(n) && this.min < n && n < this.max;
    }
    hasInterval(i: IntervalType): boolean {
        return !i.hasAnyInteger() && this.min <= i.min && i.max <= this.max;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hasIntInterval(_: IntIntervalType): false {
        return false;
    }
    hasNonIntInterval(i: NonIntIntervalType): boolean {
        return this.min <= i.min && i.max <= this.max;
    }

    getTypeId(): string {
        return `nonInt(${formatInterval(this.min, this.max, Bounds.Inclusive)})`;
    }

    toString(): string {
        return this.getTypeId();
    }
}

export class StringType implements TypeBase {
    readonly type = 'string';

    readonly underlying = 'string';

    private constructor() {}

    getTypeId(): string {
        return 'string';
    }

    toString(): string {
        return this.getTypeId();
    }

    static readonly instance = new StringType();
}
export class StringLiteralType implements TypeBase {
    readonly type = 'literal';

    readonly underlying = 'string';

    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    getTypeId(): string {
        return JSON.stringify(this.value);
    }

    toString(): string {
        return this.getTypeId();
    }
}
export class InvertedStringSetType implements TypeBase {
    readonly type = 'inverted-set';

    readonly underlying = 'string';

    readonly excluded: ReadonlySet<string>;

    private cachedTypeId: string | undefined;

    constructor(excluded: ReadonlySet<string>) {
        if (excluded.size === 0)
            throw new Error('An inverted string set must exclude at least one string.');
        this.excluded = excluded;
    }

    has(s: string): boolean {
        return !this.excluded.has(s);
    }

    getTypeId(): string {
        if (this.cachedTypeId === undefined) {
            const union = [...this.excluded]
                .sort(binaryCompare)
                .map((s) => JSON.stringify(s))
                .join(' | ');
            this.cachedTypeId = `invStrSet(${union})`;
        }
        return this.cachedTypeId;
    }

    toString(): string {
        return this.getTypeId();
    }
}

export class AnyType implements TypeBase {
    readonly type = 'any';

    readonly underlying = 'any';

    private constructor() {}

    getTypeId(): string {
        return 'any';
    }

    toString(): string {
        return this.getTypeId();
    }

    static readonly instance = new AnyType();
}

export class UnionType<T extends ValueType = ValueType> implements TypeBase {
    readonly type = 'union';

    readonly underlying = 'union';

    readonly items: CanonicalTypes<T>;

    private cachedTypeId: string | undefined;

    constructor(items: CanonicalTypes<T>) {
        if (items.length < 2) throw new Error('A union has to have at least 2 items.');
        this.items = items;
    }

    getTypeId(): string {
        if (this.cachedTypeId === undefined) {
            this.cachedTypeId = this.items.map((item) => item.getTypeId()).join(' | ');
        }
        return this.cachedTypeId;
    }

    toString(): string {
        return this.getTypeId();
    }
}
export class NeverType implements TypeBase {
    readonly type = 'never';

    readonly underlying = 'never';

    private constructor() {}

    getTypeId(): string {
        return 'never';
    }

    toString(): string {
        return this.getTypeId();
    }

    static readonly instance = new NeverType();
}

export class StructField {
    readonly name: string;

    readonly type: NonNeverType;

    constructor(name: string, type: NonNeverType) {
        assertValidStructFieldName(name);
        this.name = name;
        this.type = type;
    }
}
export class StructDescriptor {
    readonly name: string;
    readonly fields: readonly StructField[];
    readonly default: StructInstanceType;

    constructor(name: string, fields: readonly StructField[] = EMPTY_ARRAY) {
        assertValidStructName(name);
        this.name = name;
        this.fields = fields;

        this.default = StructInstanceType.fromDescriptorUnchecked(
            this,
            fields.length === 0 ? EMPTY_ARRAY : fields.map((f) => f.type)
        );
    }

    getField(name: string): StructField | undefined {
        const index = this.fields.findIndex((f) => f.name === name);
        if (index === -1) {
            return undefined;
        }
        return this.fields[index];
    }

    static compare = (a: StructDescriptor, b: StructDescriptor): number => {
        if (a.fields.length !== b.fields.length) {
            return a.fields.length - b.fields.length;
        }

        return binaryCompare(a.name, b.name);
    };
}
export class StructInstanceType implements TypeBase {
    readonly type = 'instance';

    readonly underlying = 'struct';

    readonly descriptor: StructDescriptor;

    readonly fields: readonly NonNeverType[];

    private cachedTypeId: string | undefined;

    private constructor(descriptor: StructDescriptor, fields: readonly NonNeverType[]) {
        if (fields.length !== descriptor.fields.length) {
            throw new Error(
                `The number of fields (${fields.length}) for ${descriptor.name} does not match the number of fields in the descriptor (${descriptor.fields.length}).`
            );
        }
        this.descriptor = descriptor;
        this.fields = fields;
    }

    /**
     * Creates a new instance of the given struct *without* verifying that the fields match the descriptor.
     *
     * Prefer using `createInstance` instead.
     */
    static fromDescriptorUnchecked(
        descriptor: StructDescriptor,
        fields: readonly NonNeverType[]
    ): StructInstanceType {
        return new StructInstanceType(descriptor, fields);
    }

    getField(name: string): NonNeverType | undefined {
        const index = this.descriptor.fields.findIndex((f) => f.name === name);
        if (index === -1) {
            return undefined;
        }
        return this.fields[index];
    }

    getTypeId(): string {
        if (this.fields.length === 0) return this.descriptor.name;
        if (this.cachedTypeId === undefined) {
            this.cachedTypeId = `${this.descriptor.name} { ${this.descriptor.fields
                .map((f, i) => `${f.name}: ${this.fields[i].getTypeId()}`)
                .join(', ')} }`;
        }
        return this.cachedTypeId;
    }

    toString(): string {
        return this.getTypeId();
    }
}
export class InvertedStructType implements TypeBase {
    readonly type = 'inverted-set';

    readonly underlying = 'struct';

    readonly excluded: ReadonlySet<StructDescriptor>;

    private cachedTypeId: string | undefined;

    constructor(excluded: ReadonlySet<StructDescriptor>) {
        if (excluded.size === 0)
            throw new Error('An inverted struct set must exclude at least one struct.');
        this.excluded = excluded;
    }

    has(s: StructDescriptor): boolean {
        return !this.excluded.has(s);
    }

    getTypeId(): string {
        if (this.cachedTypeId === undefined) {
            const union = [...this.excluded]
                .sort(StructDescriptor.compare)
                .map((s) => s.name)
                .join(' | ');
            this.cachedTypeId = `notStructs(${union})`;
        }
        return this.cachedTypeId;
    }

    toString(): string {
        return this.getTypeId();
    }
}
export class StructType implements TypeBase {
    readonly type = 'struct';

    readonly underlying = 'struct';

    private constructor() {}

    getTypeId(): string {
        return 'anyStruct';
    }

    toString(): string {
        return this.getTypeId();
    }

    static readonly instance = new StructType();
}
