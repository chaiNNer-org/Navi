import { BOOL, BOOL_FALSE, BOOL_TRUE, EMPTY_STR } from '../constants';
import { Int, NumberPrimitive, StringLiteralType, StringPrimitive, StringType } from '../types';
import { handleNumberLiterals } from './util';
import { wrapBinary, wrapReducerVarArgs, wrapUnary } from './wrap';

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

export const concat = wrapReducerVarArgs(EMPTY_STR, (a, b) => {
    if (a.type === 'literal' && b.type === 'literal') {
        return new StringLiteralType(a.value + b.value);
    }
    return StringType.instance;
});

export const repeat = wrapBinary((text: StringPrimitive, count: Int) => {
    if (text.type === 'literal' && text.value === '') return EMPTY_STR;

    return handleNumberLiterals<StringPrimitive>(count, StringType.instance, (i) => {
        if (i === 0) return EMPTY_STR;
        if (i === 1) return text;

        if (text.type === 'literal') {
            return new StringLiteralType(text.value.repeat(i));
        }

        // inverted string set are super complex to repeat, so I just give up
        return StringType.instance;
    });
});

export const includes = wrapBinary((text: StringPrimitive, needle: StringPrimitive) => {
    if (needle.type === 'literal') {
        if (needle.value === '') {
            // trivially true
            return BOOL_TRUE;
        }

        if (text.type === 'literal') {
            return text.value.includes(needle.value) ? BOOL_TRUE : BOOL_FALSE;
        }
    }

    return BOOL;
});
export const startsWith = wrapBinary((text: StringPrimitive, needle: StringPrimitive) => {
    if (needle.type === 'literal') {
        if (needle.value === '') {
            // trivially true
            return BOOL_TRUE;
        }

        if (text.type === 'literal') {
            return text.value.startsWith(needle.value) ? BOOL_TRUE : BOOL_FALSE;
        }
    }

    return BOOL;
});
export const endsWith = wrapBinary((text: StringPrimitive, needle: StringPrimitive) => {
    if (needle.type === 'literal') {
        if (needle.value === '') {
            // trivially true
            return BOOL_TRUE;
        }

        if (text.type === 'literal') {
            return text.value.endsWith(needle.value) ? BOOL_TRUE : BOOL_FALSE;
        }
    }

    return BOOL;
});
