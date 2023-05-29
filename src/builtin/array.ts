import { ArrayType, IntIntervalType, NumberPrimitive, NumericLiteralType } from '../types';
import { Arg, wrapUnary } from './wrap';

export const arrayLength = wrapUnary((a: ArrayType): Arg<NumberPrimitive> => {
    const min = a.fixed.length;
    if (a.repeated.type === 'never') {
        return new NumericLiteralType(min);
    } else {
        return new IntIntervalType(min, Infinity);
    }
});
