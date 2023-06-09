import { BOOL, BOOL_FALSE, BOOL_TRUE, REAL } from '../constants';
import { Range } from '../range';
import {
    IntIntervalType,
    IntervalType,
    NonIntIntervalType,
    NumberPrimitive,
    NumericLiteralType,
    StructType,
} from '../types';
import { union } from '../union';
import { Arg, wrapBinary } from './wrap';

type NonNan = NumericLiteralType | IntervalType | IntIntervalType | NonIntIntervalType;
const handleNan = (
    n: NumberPrimitive
): { has: false; without: NonNan } | { has: true; without: NonNan | undefined } => {
    if (n.type === 'int-interval' || n.type === 'non-int-interval' || n.type === 'interval') {
        return { has: false, without: n };
    }
    if (n.type === 'number') {
        return { has: true, without: REAL };
    }

    if (Number.isNaN(n.value)) {
        return { has: true, without: undefined };
    }
    return { has: false, without: n };
};

const lessThenReal = (a: NonNan, b: NonNan): Arg<StructType> => {
    const l = Range.from(a);
    const r = Range.from(b);

    if (l.someLess(r)) {
        if (l.someGreaterEqual(r)) {
            return BOOL;
        }
        return BOOL_TRUE;
    }
    return BOOL_FALSE;
};
export const lessThan = wrapBinary((a: NumberPrimitive, b: NumberPrimitive) => {
    const aNan = handleNan(a);
    const bNan = handleNan(b);

    if (aNan.has || bNan.has) {
        if (aNan.without && bNan.without) {
            return union(BOOL_FALSE, lessThenReal(aNan.without, bNan.without));
        }
        return BOOL_FALSE;
    }
    return lessThenReal(aNan.without, bNan.without);
});
const lessThenEqualReal = (a: NonNan, b: NonNan): Arg<StructType> => {
    const l = Range.from(a);
    const r = Range.from(b);

    if (l.someLessEqual(r)) {
        if (l.someGreater(r)) {
            return BOOL;
        }
        return BOOL_TRUE;
    }
    return BOOL_FALSE;
};
export const lessThanEqual = wrapBinary((a: NumberPrimitive, b: NumberPrimitive) => {
    const aNan = handleNan(a);
    const bNan = handleNan(b);

    if (aNan.has || bNan.has) {
        if (aNan.without && bNan.without) {
            return union(BOOL_FALSE, lessThenEqualReal(aNan.without, bNan.without));
        }
        return BOOL_FALSE;
    }
    return lessThenEqualReal(aNan.without, bNan.without);
});
