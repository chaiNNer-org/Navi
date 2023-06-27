import { BOOL_FALSE, BOOL_TRUE } from '../struct-constants';
import { StructInstanceType } from '../types';
import { wrapReducerVarArgs } from './wrap';

export const and = wrapReducerVarArgs<StructInstanceType>(BOOL_TRUE, (a, b) => {
    return a.descriptor === BOOL_TRUE.descriptor && b.descriptor === BOOL_TRUE.descriptor
        ? BOOL_TRUE
        : BOOL_FALSE;
});

export const or = wrapReducerVarArgs<StructInstanceType>(BOOL_TRUE, (a, b) => {
    return a.descriptor === BOOL_TRUE.descriptor || b.descriptor === BOOL_TRUE.descriptor
        ? BOOL_TRUE
        : BOOL_FALSE;
});
