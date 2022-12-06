import { BOOL_FALSE, BOOL_TRUE } from '../constants';
import { StructType } from '../types';
import { wrapReducerVarArgs } from './wrap';

const assertBool: (type: StructType) => asserts type is StructType & {
    readonly name: 'true' | 'false';
    readonly fields: readonly [];
} = (type) => {
    if (type.fields.length !== 0 || (type.name !== 'true' && type.name !== 'false')) {
        throw new Error(`The type ${type.toString()} is not a value bool type`);
    }
};

export const and = wrapReducerVarArgs(BOOL_TRUE, (a: StructType, b: StructType) => {
    assertBool(a);
    assertBool(b);
    return a.name === 'true' && b.name === 'true' ? BOOL_TRUE : BOOL_FALSE;
});

export const or = wrapReducerVarArgs(BOOL_TRUE, (a, b) => {
    assertBool(a);
    assertBool(b);
    return a.name === 'true' || b.name === 'true' ? BOOL_TRUE : BOOL_FALSE;
});
