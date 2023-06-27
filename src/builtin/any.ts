import { BOOL, BOOL_FALSE, BOOL_TRUE } from '../struct-constants';
import { NeverType, StructInstanceType, Type } from '../types';
import { valueEqual } from '../value-equal';
import { Arg } from './wrap';

export const equal = (a: Type, b: Type): Arg<StructInstanceType> => {
    const { someEqual, someNotEqual } = valueEqual(a, b);

    if (someEqual) {
        if (someNotEqual) {
            return BOOL;
        } else {
            return BOOL_TRUE;
        }
    } else {
        if (someNotEqual) {
            return BOOL_FALSE;
        } else {
            return NeverType.instance;
        }
    }
};
