import { NumberPrimitive, StringLiteralType, StringPrimitive, StringType } from '../types';
import { wrapReducerVarArgs, wrapUnary } from './wrap';

export const toString = wrapUnary<StringPrimitive | NumberPrimitive, StringPrimitive>((a) => {
    if (a.underlying === 'string') return a;
    if (a.type === 'literal') {
        // Keep in mind, the actual string conversion is done by python and that might implement
        // it differently than JS. As such, we can only convert numbers where we are sure that the
        // result will be the same of python's.
        if (Number.isInteger(a.value) && Math.abs(a.value) <= Number.MAX_SAFE_INTEGER) {
            return new StringLiteralType(String(a.value));
        }
    }
    // we cannot statically determine the output string
    return StringType.instance;
});

export const concat = wrapReducerVarArgs(new StringLiteralType(''), (a, b) => {
    if (a.type === 'literal' && b.type === 'literal') {
        return new StringLiteralType(a.value + b.value);
    }
    return StringType.instance;
});
