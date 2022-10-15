import { canonicalize } from './canonical';
import {
    IntIntervalType,
    IntervalType,
    NumericLiteralType,
    StringLiteralType,
    StructType,
    UnionType,
} from './types';

export const NAN = new NumericLiteralType(NaN);
export const INF = new NumericLiteralType(Infinity);
export const NEG_INF = new NumericLiteralType(-Infinity);
export const ZERO = new NumericLiteralType(0);
export const ONE = new NumericLiteralType(1);

export const REAL = new IntervalType(-Infinity, Infinity);
export const INT = new IntIntervalType(-Infinity, Infinity);
export const UINT = new IntIntervalType(0, Infinity);

export const EMPTY_STR = new StringLiteralType('');

export const BOOL_TRUE = new StructType('true');
export const BOOL_FALSE = new StructType('false');
export const BOOL = new UnionType(canonicalize([BOOL_FALSE, BOOL_TRUE]));
