import {
    Bounds,
    IntIntervalType,
    IntervalType,
    NeverType,
    NonIntIntervalType,
    NumericLiteralType,
    StringLiteralType,
    Type,
    WithUnderlying,
} from './types';

export type UnderlyingGroup<T extends Type> = {
    [key in Type['underlying']]: WithUnderlying<key, T>[];
};
export const groupByUnderlying = <T extends Type>(types: readonly T[]): UnderlyingGroup<T> => {
    const groups: UnderlyingGroup<T> = {
        never: [],
        any: [],
        number: [],
        string: [],
        struct: [],
        union: [],
    };
    for (const t of types) {
        groups[t.underlying].push(t as never);
    }
    return groups;
};

export const isSameType = (a: Type, b: Type): boolean =>
    a === b || (a.type === b.type && a.getTypeId() === b.getTypeId());

export function literal(number: number): NumericLiteralType;
export function literal(string: string): StringLiteralType;
// eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
export function literal(value: number | string) {
    if (typeof value === 'number') return new NumericLiteralType(value);
    return new StringLiteralType(value);
}
export const interval = (min: number, max: number, exclusivity: Bounds) => {
    if (min === max) {
        if (exclusivity === Bounds.Inclusive) {
            return new NumericLiteralType(min);
        } else {
            return NeverType.instance;
        }
    }
    if (exclusivity === Bounds.Exclusive && min + 1 === max && Number.isInteger(min)) {
        return new NonIntIntervalType(min, max);
    }
    return new IntervalType(min, max, exclusivity);
};
export const closedInterval = (min: number, max: number): NumericLiteralType | IntervalType => {
    if (min === max) return new NumericLiteralType(min);
    return new IntervalType(min, max, Bounds.Inclusive);
};
export const openInterval = (
    min: number,
    max: number
): NeverType | IntervalType | NonIntIntervalType => {
    if (min === max) return NeverType.instance;
    if (min + 1 === max && Number.isInteger(min)) return new NonIntIntervalType(min, max);
    return new IntervalType(min, max, Bounds.Exclusive);
};
export const intInterval = (min: number, max: number) => {
    if (min === max && Number.isFinite(min)) return new NumericLiteralType(min);
    return new IntIntervalType(min, max);
};
export const nonIntInterval = (min: number, max: number) => {
    if (min === max) return NeverType.instance;
    return new NonIntIntervalType(min, max);
};

export const isNumericLiteral = (type: Type): type is NumericLiteralType => {
    return type.type === 'literal' && type.underlying === 'number';
};
export const isStringLiteral = (type: Type): type is StringLiteralType => {
    return type.type === 'literal' && type.underlying === 'string';
};

export const newBounds = (minExclusive: boolean, maxExclusive: boolean): Bounds => {
    let e = Bounds.Inclusive;
    if (minExclusive) e |= Bounds.MinExclusive;
    if (maxExclusive) e |= Bounds.MaxExclusive;
    return e;
};
