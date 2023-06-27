import {
    NeverType,
    NumberPrimitive,
    StringPrimitive,
    StructValueType,
    UnionType,
    ValueType,
} from '../types';
import { union } from '../union';
import { EMPTY_ARRAY, assertNever } from '../util';

export type Arg<T extends ValueType> = T | UnionType<T> | NeverType;

export type UnaryFn<A extends ValueType, R extends ValueType = A> = (a: Arg<A>) => Arg<R>;
export type BinaryFn<A extends ValueType, B extends ValueType = A, R extends ValueType = A & B> = (
    a: Arg<A>,
    b: Arg<B>
) => Arg<R>;
export type TernaryFn<
    A extends ValueType,
    B extends ValueType = A,
    C extends ValueType = B,
    R extends ValueType = A & B & C
> = (a: Arg<A>, b: Arg<B>, c: Arg<C>) => Arg<R>;
export type QuaternaryFn<
    A extends ValueType,
    B extends ValueType = A,
    C extends ValueType = B,
    D extends ValueType = C,
    R extends ValueType = A & B & C & D
> = (a: Arg<A>, b: Arg<B>, c: Arg<C>, d: Arg<D>) => Arg<R>;

const toValues = <T extends ValueType>(arg: Arg<T>): readonly T[] => {
    if (arg.type === 'never') {
        return EMPTY_ARRAY;
    }
    if (arg.type === 'union') {
        return arg.items;
    }
    return [arg];
};

export function wrapUnary(
    fn: (a: StringPrimitive) => Arg<StringPrimitive>
): UnaryFn<StringPrimitive>;
export function wrapUnary(
    fn: (a: NumberPrimitive) => Arg<NumberPrimitive>
): UnaryFn<NumberPrimitive>;
export function wrapUnary<A extends ValueType, R extends ValueType = A>(
    fn: (a: A) => Arg<R>
): UnaryFn<A, R>;
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

export const wrapBinary = <
    A extends ValueType,
    B extends ValueType = A,
    R extends ValueType = A & B
>(
    fn: (a: A, b: B) => Arg<R>
): BinaryFn<A, B, R> => {
    return (a, b) => {
        if (a.type === 'never' || b.type === 'never') return NeverType.instance;

        const aValues = toValues(a);
        const bValues = toValues(b);
        const items: Arg<R>[] = [];
        for (const aItem of aValues) {
            for (const bItem of bValues) {
                items.push(fn(aItem, bItem));
            }
        }
        return union(...items) as Arg<R>;
    };
};

export const wrapTernary = <
    A extends ValueType,
    B extends ValueType = A,
    C extends ValueType = B,
    R extends ValueType = A & B & C
>(
    fn: (a: A, b: B, c: C) => Arg<R>
): TernaryFn<A, B, C, R> => {
    return (a, b, c) => {
        if (a.type === 'never' || b.type === 'never' || c.type === 'never')
            return NeverType.instance;

        const aValues = toValues(a);
        const bValues = toValues(b);
        const cValues = toValues(c);
        const items: Arg<R>[] = [];
        for (const aItem of aValues) {
            for (const bItem of bValues) {
                for (const cItem of cValues) {
                    items.push(fn(aItem, bItem, cItem));
                }
            }
        }
        return union(...items) as Arg<R>;
    };
};

export const wrapQuaternary = <
    A extends ValueType,
    B extends ValueType = A,
    C extends ValueType = B,
    D extends ValueType = C,
    R extends ValueType = A & B & C & D
>(
    fn: (a: A, b: B, c: C, d: D) => Arg<R>
): QuaternaryFn<A, B, C, D, R> => {
    return (a, b, c, d) => {
        if (a.type === 'never' || b.type === 'never' || c.type === 'never' || d.type === 'never')
            return NeverType.instance;

        const aValues = toValues(a);
        const bValues = toValues(b);
        const cValues = toValues(c);
        const dValues = toValues(d);
        const items: Arg<R>[] = [];
        for (const aItem of aValues) {
            for (const bItem of bValues) {
                for (const cItem of cValues) {
                    for (const dItem of dValues) {
                        items.push(fn(aItem, bItem, cItem, dItem));
                    }
                }
            }
        }
        return union(...items) as Arg<R>;
    };
};

export type ReducerVarArgsFn<T extends ValueType> = (...args: Arg<T>[]) => Arg<T>;

export function wrapReducerVarArgs(
    neutral: Arg<StringPrimitive>,
    fn: (a: StringPrimitive, b: StringPrimitive) => Arg<StringPrimitive>
): ReducerVarArgsFn<StringPrimitive>;
export function wrapReducerVarArgs(
    neutral: Arg<NumberPrimitive>,
    fn: (a: NumberPrimitive, b: NumberPrimitive) => Arg<NumberPrimitive>
): ReducerVarArgsFn<NumberPrimitive>;
export function wrapReducerVarArgs(
    neutral: Arg<StructValueType>,
    fn: (a: StructValueType, b: StructValueType) => Arg<StructValueType>
): ReducerVarArgsFn<StructValueType>;
export function wrapReducerVarArgs<T extends ValueType>(
    neutral: Arg<T>,
    fn: (a: T, b: T) => Arg<T>
): ReducerVarArgsFn<T>;
// eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
export function wrapReducerVarArgs<T extends ValueType>(
    neutral: Arg<T>,
    fn: (a: T, b: T) => Arg<T>
): ReducerVarArgsFn<T> {
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

const getComplexity = (n: Arg<NumberPrimitive>): number => {
    switch (n.type) {
        case 'never':
            return 0;
        case 'literal':
            return 10;
        case 'int-interval':
            return 20;
        case 'non-int-interval':
            return 21;
        case 'interval':
            return 30;
        case 'number':
            return 40;
        case 'union':
            return 5 + n.items.reduce((a, b) => Math.max(a, getComplexity(b)), 0);
        default:
            return assertNever(n);
    }
};

/**
 * This function differs from {@link wrapReducerVarArgs} in that it will try to reduce widening.
 *
 * Navi function are allowed to return a superset of the actual result. This is what makes it
 * possible for Navi to expressive, but it also creates problems. In particular, it breaks
 * associativity.
 *
 * This function tries to makes this problem a little better. It will reorder arguments in hopes of
 * reducing potential widening. In practice, it will process numeric literals before anything else.
 */
export const wrapAssociativeCommutativeReducerVarArgs = (
    neutral: Arg<NumberPrimitive>,
    fn: (a: NumberPrimitive, b: NumberPrimitive) => Arg<NumberPrimitive>
): ReducerVarArgsFn<NumberPrimitive> => {
    const binary = wrapBinary(fn);
    return (...args) => {
        if (args.length === 0) return neutral;
        if (args.length === 1) return args[0];
        if (args.length === 2) return binary(args[0], args[1]);

        args.sort((a, b) => getComplexity(a) - getComplexity(b));

        let result = args[0];
        for (let i = 1; i < args.length; i += 1) {
            result = binary(result, args[i]);
        }
        return result;
    };
};
