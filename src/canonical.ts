import {
    CanonicalTypes,
    NumberPrimitive,
    StructDescriptor,
    Type,
    WithType,
    WithUnderlying,
} from './types';
import { Comparator, binaryCompare, compareNumber, compareSequences } from './util';

const numberOrder: readonly WithUnderlying<'number'>['type'][] = [
    'literal',
    'int-interval',
    'non-int-interval',
    'interval',
    'number',
];
const stringOrder: readonly WithUnderlying<'string'>['type'][] = [
    'literal',
    'string',
    'inverted-set',
];
const structOrder: readonly WithUnderlying<'struct'>['type'][] = [
    'instance',
    'inverted-set',
    'struct',
];
const underlyingOrder: readonly Type['underlying'][] = [
    'never',
    'any',
    'number',
    'string',
    'struct',
    'union',
];

const getMin = (a: NumberPrimitive): number => {
    switch (a.type) {
        case 'literal':
            return a.value;
        case 'int-interval':
        case 'non-int-interval':
        case 'interval':
            return a.min;
        case 'number':
            return Number.NEGATIVE_INFINITY;
    }
};

type Comparators<T extends Type['underlying']> = {
    [key in WithUnderlying<T>['type']]: Comparator<WithType<key, WithUnderlying<T>>>;
};
const numberComparators: Comparators<'number'> = {
    number: () => 0,
    literal: (a, b) => compareNumber(a.value, b.value),
    'int-interval': (a, b) => compareNumber(a.min, b.min) || compareNumber(a.max, b.max),
    'non-int-interval': (a, b) => compareNumber(a.min, b.min) || compareNumber(a.max, b.max),
    interval: (a, b) =>
        compareNumber(a.min, b.min) ||
        compareNumber(a.max, b.max) ||
        compareNumber(a.bounds, b.bounds),
};
const stringComparators: Comparators<'string'> = {
    string: () => 0,
    literal: (a, b) => binaryCompare(a.value, b.value),
    'inverted-set': (a, b) => {
        if (a.excluded.size !== b.excluded.size) return a.excluded.size - b.excluded.size;
        return compareSequences(
            [...a.excluded].sort(binaryCompare),
            [...b.excluded].sort(binaryCompare),
            binaryCompare
        );
    },
};
const structComparators: Comparators<'struct'> = {
    instance: (a, b) => {
        if (a.descriptor !== b.descriptor)
            return StructDescriptor.compare(a.descriptor, b.descriptor);
        return compareSequences(a.fields, b.fields, compareTypes);
    },
    'inverted-set': (a, b) => {
        if (a.excluded.size !== b.excluded.size) return a.excluded.size - b.excluded.size;
        return compareSequences(
            [...a.excluded].sort(StructDescriptor.compare),
            [...b.excluded].sort(StructDescriptor.compare),
            StructDescriptor.compare
        );
    },
    struct: () => 0,
};
const comparators: {
    [key in Type['underlying']]: Comparator<WithUnderlying<key>>;
} = {
    never: () => 0,
    any: () => 0,
    number: (a, b) => {
        const aMin = getMin(a);
        const bMin = getMin(b);
        const minCompare = compareNumber(aMin, bMin);
        if (minCompare !== 0) return minCompare;
        if (a.type !== b.type) {
            return numberOrder.indexOf(a.type) - numberOrder.indexOf(b.type);
        }
        return numberComparators[a.type](a as never, b as never);
    },
    string: (a, b) => {
        if (a.type !== b.type) {
            return stringOrder.indexOf(a.type) - stringOrder.indexOf(b.type);
        }
        return stringComparators[a.type](a as never, b as never);
    },
    struct: (a, b) => {
        if (a.type !== b.type) {
            return structOrder.indexOf(a.type) - structOrder.indexOf(b.type);
        }
        return structComparators[a.type](a as never, b as never);
    },
    union: (a, b) => {
        return compareSequences(a.items, b.items, compareTypes);
    },
};

const compareTypes = (a: Type, b: Type): number => {
    if (a.underlying !== b.underlying) {
        return underlyingOrder.indexOf(a.underlying) - underlyingOrder.indexOf(b.underlying);
    }

    return comparators[a.underlying](a as never, b as never);
};

export const canonicalize = <T extends Type>(types: readonly T[]): CanonicalTypes<T> => {
    const result: T[] = [];

    // de-dup
    const seen = new Set<string>();
    for (const t of types) {
        const key = t.getTypeId();
        if (!seen.has(key)) {
            seen.add(key);
            result.push(t);
        }
    }

    // sort
    result.sort(compareTypes);

    return result as unknown as CanonicalTypes<T>;
};
