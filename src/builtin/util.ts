import {
    IntIntervalType,
    NeverType,
    NumberPrimitive,
    StringPrimitive,
    UnionType,
    ValueType,
} from '../types';
import { union } from '../union';

export const fixRoundingError = (n: number): number => {
    if (!Number.isFinite(n)) return n;

    const expS = n.toExponential(15);
    if (/0{6}[0-3]\d[eE][+-]\d+$/.test(expS)) {
        return Number(n.toExponential(12));
    }

    if (Number.isInteger(n)) return n;
    const s = String(n);
    if (/(?:9{6}[6-9]|0{6}[0-3])\d$/.test(s)) {
        return Number(n.toPrecision(12));
    }
    return n;
};

export type Arg<T extends ValueType> = T | UnionType<T> | NeverType;

export type UnaryFn<T extends ValueType, R extends ValueType = T> = (a: Arg<T>) => Arg<R>;
export type BinaryFn<T extends ValueType, R extends ValueType = T> = (
    a: Arg<T>,
    b: Arg<T>
) => Arg<R>;
export type VarArgsFn<T extends ValueType> = (...args: Arg<T>[]) => Arg<T>;

export function wrapUnary(
    fn: (a: StringPrimitive) => Arg<StringPrimitive>
): UnaryFn<StringPrimitive>;
export function wrapUnary(
    fn: (a: NumberPrimitive) => Arg<NumberPrimitive>
): UnaryFn<NumberPrimitive>;
export function wrapUnary<T extends ValueType, R extends ValueType = T>(
    fn: (a: T) => Arg<R>
): UnaryFn<T, R>;
// eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
export function wrapUnary<T extends ValueType, R extends ValueType = T>(
    fn: (a: T) => Arg<R>
): UnaryFn<T, R> {
    return (a) => {
        if (a.type === 'never') return NeverType.instance;
        if (a.type === 'union') return union(...a.items.map(fn)) as Arg<R>;
        return fn(a);
    };
}
export const wrapBinary = <T extends ValueType, R extends ValueType = T>(
    fn: (a: T, b: T) => Arg<R>
): BinaryFn<T, R> => {
    return (a, b) => {
        if (a.type === 'never' || b.type === 'never') return NeverType.instance;
        if (a.type === 'union') {
            if (b.type !== 'union') {
                return union(...a.items.map((aItem) => fn(aItem, b))) as Arg<R>;
            }

            const items: Arg<R>[] = [];
            for (const aItem of a.items) {
                for (const bItem of b.items) {
                    items.push(fn(aItem, bItem));
                }
            }
            return union(...items) as Arg<R>;
        }
        if (b.type === 'union') {
            return union(...b.items.map((bItem) => fn(a, bItem))) as Arg<R>;
        }
        return fn(a, b);
    };
};

export function wrapVarArgs(
    neutral: Arg<StringPrimitive>,
    fn: (a: StringPrimitive, b: StringPrimitive) => Arg<StringPrimitive>
): VarArgsFn<StringPrimitive>;
export function wrapVarArgs(
    neutral: Arg<NumberPrimitive>,
    fn: (a: NumberPrimitive, b: NumberPrimitive) => Arg<NumberPrimitive>
): VarArgsFn<NumberPrimitive>;
// eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
export function wrapVarArgs<T extends ValueType>(
    neutral: Arg<T>,
    fn: (a: T, b: T) => Arg<T>
): VarArgsFn<T> {
    const binary = wrapBinary(fn);
    return (...args) => {
        if (args.length === 0) return neutral;
        let result = args[0];
        for (let i = 1; i < args.length; i += 1) {
            result = binary(result, args[i]);
        }
        return result;
    };
}

export const isSmallIntInterval = (type: IntIntervalType): boolean => {
    return type.max - type.min <= 10;
};
export const mapSmallIntInterval = (
    { min, max }: IntIntervalType,
    mapFn: (i: number) => Arg<NumberPrimitive>
): Arg<NumberPrimitive> => {
    const items: Arg<NumberPrimitive>[] = [];
    for (let i = min; i <= max; i += 1) {
        items.push(mapFn(i));
    }
    return union(...items);
};
