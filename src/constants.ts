import {
    Bounds,
    IntIntervalType,
    IntervalType,
    NumericLiteralType,
    StringLiteralType,
} from './types';

export const NAN = new NumericLiteralType(NaN);
export const INF = new NumericLiteralType(Infinity);
export const NEG_INF = new NumericLiteralType(-Infinity);
export const ZERO = new NumericLiteralType(0);
export const ONE = new NumericLiteralType(1);
export const NEG_ONE = new NumericLiteralType(-1);

export const REAL = new IntervalType(-Infinity, Infinity, Bounds.Inclusive);
export const INT = new IntIntervalType(-Infinity, Infinity);
export const UINT = new IntIntervalType(0, Infinity);

export const EMPTY_STR = new StringLiteralType('');
