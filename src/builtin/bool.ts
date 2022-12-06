import { BOOL_FALSE, BOOL_TRUE } from '../constants';
import { wrapReducerVarArgs } from './wrap';

export const and = wrapReducerVarArgs(BOOL_TRUE, (a, b) => {
    return a.name === 'true' && b.name === 'true' ? BOOL_TRUE : BOOL_FALSE;
});

export const or = wrapReducerVarArgs(BOOL_TRUE, (a, b) => {
    return a.name === 'true' || b.name === 'true' ? BOOL_TRUE : BOOL_FALSE;
});
