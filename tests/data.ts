import { UINT } from '../src/constants';
import {
    Expression,
    FieldAccessExpression,
    IntersectionExpression,
    UnionExpression,
} from '../src/expression';
import { BOOL, BOOL_FALSE, BOOL_TRUE } from '../src/struct-constants';
import { createInstance } from '../src/struct-util';
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
    StringLiteralType,
    StringPrimitive,
    StringType,
    StructDescriptor,
    StructField,
    StructInstanceType,
    StructType,
    StructValueType,
    Type,
    UnionType,
} from '../src/types';
import { literal } from '../src/types-util';
import { union } from '../src/union';

export const orderedPairs = <T>(array: readonly T[]): [T, T][] => {
    return array.flatMap((a) => array.map<[T, T]>((b) => [a, b]));
};
export const unorderedPairs = <T>(array: readonly T[]): [T, T][] => {
    const result: [T, T][] = [];
    for (let i = 0; i < array.length; i += 1) {
        const a = array[i];
        for (let j = i + 1; j < array.length; j += 1) {
            const b = array[j];
            result.push([a, b]);
        }
    }
    return result;
};

const addExpressions = (expressions: readonly Expression[]): Expression[] => {
    return [
        ...expressions,
        ...unorderedPairs(expressions).map((items) => new UnionExpression(items)),
        ...unorderedPairs(expressions).map((items) => new IntersectionExpression(items)),
    ];
};
const fieldAccess = (expressions: readonly Expression[]): Expression[] => {
    return expressions.map((e) => new FieldAccessExpression(e, 'a'));
};

export const sets = [NeverType.instance, AnyType.instance] as const;
export const numbers: readonly (NumberPrimitive | UnionType<NumberPrimitive>)[] = [
    NumberType.instance,
    literal(-3.14),
    literal(-2),
    literal(-1),
    literal(-0.5),
    literal(0),
    literal(0.5),
    literal(1),
    literal(2),
    literal(2.78),
    literal(3),
    literal(3.14),
    literal(10),
    literal(100),
    literal(-Infinity),
    literal(Infinity),
    literal(NaN),
    new IntervalType(0, 1, Bounds.Inclusive),
    new IntervalType(0, 1, Bounds.MinExclusive),
    new IntervalType(0, 1, Bounds.MaxExclusive),
    new IntervalType(0, 2, Bounds.Inclusive),
    new IntervalType(0, 2, Bounds.Exclusive),
    new IntervalType(0.5, 1.5, Bounds.Inclusive),
    new IntervalType(0.5, 2.5, Bounds.Inclusive),
    new IntervalType(0.5, 2.5, Bounds.MinExclusive),
    new IntervalType(0.5, 2.5, Bounds.MaxExclusive),
    new IntervalType(-2.56, 3.35, Bounds.Inclusive),
    new IntervalType(0.5, 0.75, Bounds.Inclusive),
    new IntervalType(1, 2, Bounds.Inclusive),
    new IntervalType(0, Infinity, Bounds.Inclusive),
    new IntervalType(0, Infinity, Bounds.MinExclusive),
    new IntervalType(0, Infinity, Bounds.MaxExclusive),
    new IntervalType(0, Infinity, Bounds.Exclusive),
    new IntervalType(1, Infinity, Bounds.Inclusive),
    new IntervalType(1, Infinity, Bounds.MinExclusive),
    new IntervalType(1, Infinity, Bounds.MaxExclusive),
    new IntervalType(2, Infinity, Bounds.Inclusive),
    new IntervalType(2, Infinity, Bounds.MinExclusive),
    new IntervalType(2.5, Infinity, Bounds.Inclusive),
    new IntervalType(-Infinity, 0, Bounds.Inclusive),
    new IntervalType(-Infinity, Infinity, Bounds.Inclusive),
    new IntervalType(-Infinity, Infinity, Bounds.MinExclusive),
    new IntervalType(-Infinity, Infinity, Bounds.MaxExclusive),
    new IntervalType(-Infinity, Infinity, Bounds.Exclusive),
    new IntIntervalType(0, 1),
    new IntIntervalType(0, 2),
    new IntIntervalType(1, 2),
    new IntIntervalType(5, 20),
    new IntIntervalType(-20, -5),
    new IntIntervalType(-10, 10),
    new IntIntervalType(0, Infinity),
    new IntIntervalType(1, Infinity),
    new IntIntervalType(-Infinity, 0),
    new IntIntervalType(-Infinity, 1),
    new IntIntervalType(-Infinity, Infinity),
    new NonIntIntervalType(0, 1),
    new NonIntIntervalType(0, 2),
    new NonIntIntervalType(-1, 2),
    new NonIntIntervalType(0, Infinity),
    new NonIntIntervalType(-1, Infinity),
    new NonIntIntervalType(-Infinity, 0),
    new NonIntIntervalType(-Infinity, 1),
    new NonIntIntervalType(-Infinity, Infinity),
    union(literal(1), literal(3), literal(4)),
];
export const strings: readonly (StringPrimitive | UnionType<StringPrimitive>)[] = [
    StringType.instance,
    new StringLiteralType(''),
    new StringLiteralType('foo'),
    new StringLiteralType('bar'),
    new StringLiteralType('💩'),
    union(new StringLiteralType('foo'), new StringLiteralType('bar')),
    union(new StringLiteralType('foo'), new StringLiteralType('baz')),
    new InvertedStringSetType(new Set(['foo'])),
    new InvertedStringSetType(new Set(['foo', 'bar'])),
    new InvertedStringSetType(new Set(['bar'])),
    new InvertedStringSetType(new Set([''])),
];
export const bools: readonly (StructInstanceType | UnionType<StructInstanceType>)[] = [
    BOOL_FALSE,
    BOOL_TRUE,
    BOOL,
];

const FooDesc = new StructDescriptor('Foo', [
    new StructField('a', UINT),
    new StructField('b', NumberType.instance),
]);
export const structs: readonly (StructValueType | UnionType<StructValueType>)[] = [
    ...bools,

    createInstance(FooDesc, { a: literal(1), b: literal(2) }),
    createInstance(FooDesc, { a: literal(3), b: literal(2) }),
    createInstance(FooDesc, { a: literal(3), b: literal(4) }),
    createInstance(FooDesc, { a: union(literal(1), literal(3)), b: literal(2) }),
    createInstance(FooDesc, { a: literal(3) }),
    createInstance(FooDesc),

    new InvertedStructType(new Set([FooDesc])),
    new InvertedStructType(new Set([FooDesc, BOOL_TRUE.descriptor])),
    new InvertedStructType(new Set([BOOL_TRUE.descriptor])),

    StructType.instance,
];

export const nonStructTypes = [...sets, ...numbers, ...strings] as const;
export const types: readonly Type[] = [...sets, ...numbers, ...strings, ...structs];

export const expressions: readonly Expression[] = [
    ...addExpressions([...sets, ...numbers, ...strings]),
    ...addExpressions(structs),
];

export const potentiallyInvalidExpressions: readonly Expression[] = [
    ...fieldAccess([...sets, ...numbers, ...strings, ...addExpressions(structs)]),
];
