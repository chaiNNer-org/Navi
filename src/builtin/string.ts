import { EMPTY_STR, UINT } from '../constants';
import {
    Int,
    IntIntervalType,
    NumberPrimitive,
    NumericLiteralType,
    StringLiteralType,
    StringPrimitive,
    StringType,
} from '../types';
import { intInterval, literal } from '../types-util';
import { union } from '../union';
import { unicodeLength } from '../util';
import { handleNumberLiterals } from './util';
import { Arg, wrapBinary, wrapReducerVarArgs, wrapTernary, wrapUnary } from './wrap';

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

const hasAllSubStrings = (text: string, set: ReadonlySet<string>): boolean => {
    if (!set.has('')) {
        return false;
    }

    const chars = [...text];
    for (let start = 0; start < chars.length; start++) {
        for (let end = start + 1; end <= chars.length; end++) {
            const subString = chars.slice(start, end).join('');
            if (!set.has(subString)) {
                return false;
            }
        }
    }

    return true;
};

const INDEX_NOT_FOUND = literal(NaN);
const INDEX_OF_RANGE = union(UINT, INDEX_NOT_FOUND);
export const indexOf = wrapBinary(
    (text: StringPrimitive, needle: StringPrimitive): Arg<NumberPrimitive> => {
        if (needle.type === 'literal' && needle.value === '') {
            // trivially
            return literal(0);
        }

        if (text.type === 'literal') {
            if (needle.type === 'literal') {
                let index = text.value.indexOf(needle.value);
                if (index === -1) {
                    return INDEX_NOT_FOUND;
                }
                if (index >= 2) {
                    // translate UTF-16 index to Unicode index
                    index = unicodeLength(text.value.slice(0, index));
                }
                return literal(index);
            }

            if (needle.type === 'inverted-set') {
                // if the needle excludes all possible substrings of
                if (hasAllSubStrings(text.value, needle.excluded)) {
                    return INDEX_NOT_FOUND;
                }
            }

            const maxIndex = Math.max(0, unicodeLength(text.value) - 1);
            return union(intInterval(0, maxIndex), INDEX_NOT_FOUND);
        }

        return INDEX_OF_RANGE;
    }
);
export const stringLength = wrapUnary((s: StringPrimitive): Arg<NumberPrimitive> => {
    if (s.type === 'literal') {
        return literal(unicodeLength(s.value));
    }
    if (s.type === 'inverted-set' && s.excluded.has('')) {
        return new IntIntervalType(1, Infinity);
    }
    return UINT;
});

const isNum = (type: NumberPrimitive, n: number): type is NumericLiteralType => {
    return type.type === 'literal' && (Object.is(type.value, n) || type.value === n);
};
const collectOffsets = (
    start: Int,
    stringLength: number,
    maxOffsets = 10
): number[] | undefined => {
    let min, max;
    if (start.type === 'literal') {
        min = start.value;
        max = start.value;
    } else {
        min = start.min;
        max = start.max;
    }

    min = Math.max(-stringLength, Math.min(min, stringLength));
    max = Math.max(-stringLength, Math.min(max, stringLength));
    max = Math.min(max, min + stringLength);

    if (max - min >= maxOffsets) {
        return undefined;
    }

    const offsets: number[] = [];
    for (let i = min; i <= max; i++) {
        offsets.push(i < 0 ? i + stringLength : i);
    }
    offsets.sort((a, b) => a - b);
    return offsets;
};
const collectLength = (
    length: NumberPrimitive,
    stringLength: number,
    maxLengths = 10
): number[] | undefined => {
    if (length.type === 'literal') {
        return [Math.min(length.value, stringLength)];
    }
    if (length.type !== 'int-interval') {
        return undefined;
    }

    const min = Math.min(length.min, stringLength);
    const max = Math.min(length.max, stringLength);

    if (max - min >= maxLengths) {
        return undefined;
    }

    const lengths: number[] = [];
    for (let i = min; i <= max; i++) {
        lengths.push(i);
    }
    return lengths;
};
export const stringSlice = wrapTernary(
    (s: StringPrimitive, start: Int, length: NumberPrimitive): Arg<StringPrimitive> => {
        if (isNum(length, 0)) {
            // no matter what we do, the slice is gonna be the empty string
            return literal('');
        }
        if (isNum(start, 0) && isNum(length, Infinity)) {
            // we don't change the string at all
            return s;
        }

        if (s.type === 'literal') {
            // start and length are Unicode-based, so we can't use JS string methods
            const chars = [...s.value];

            const offsets = collectOffsets(start, chars.length);
            if (!offsets) {
                return StringType.instance;
            }

            const substrings = new Set<string>();
            for (const offset of offsets) {
                const lengths = collectLength(length, chars.length - offset);
                if (!lengths) {
                    return StringType.instance;
                }
                for (const l of lengths) {
                    substrings.add(chars.slice(offset, offset + l).join(''));
                }
            }

            return union(...[...substrings].map((s) => new StringLiteralType(s)));
        }
        return StringType.instance;
    }
);
