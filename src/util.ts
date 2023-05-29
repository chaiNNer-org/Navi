export const EMPTY_ARRAY: readonly never[] = [];

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export const assertNever = (value: never): never => {
    throw new Error(`Unreachable code path. The value ${String(value)} is invalid.`);
};
export const assertType: <T>(_: T) => void = noop;

export const binaryCompare = (a: string, b: string) => (a < b ? -1 : a > b ? 1 : 0);

export const sameNumber = (a: number, b: number): boolean =>
    a === b || (Number.isNaN(a) && Number.isNaN(b));

export type Comparator<T> = (a: T, b: T) => number;
export const compareSequences = <T>(
    a: readonly T[],
    b: readonly T[],
    compare: Comparator<T>
): number => {
    if (a.length !== b.length) return a.length - b.length;
    for (let i = 0; i < a.length; i += 1) {
        const r = compare(a[i], b[i]);
        if (r !== 0) return r;
    }
    return 0;
};

/**
 * Sorts numbers in the order:
 * 1. -Infinity
 * 2. Negative real numbers. E.g. -2
 * 3. -0.0
 * 4. 0.0
 * 5. Positive real numbers. E.g. 2
 * 6. Infinity
 * 7. NaN
 */
export const compareNumber = (a: number, b: number): number => {
    if (a === 0 && b === 0) {
        // compare -0 and 0
        return compareNumber(1 / a, 1 / b);
    }
    if (Number.isFinite(a) && Number.isFinite(b)) {
        return a - b;
    }
    if (sameNumber(a, b)) return 0;
    if (Number.isNaN(a)) return +1;
    if (Number.isNaN(b)) return -1;
    return a - b;
};

/**
 * Returns the number of Unicode code points in the given string.
 */
export const unicodeLength = (s: string): number => [...s].length;

/**
 * Given some string, this function will return the regex pattern that matches exactly the given string.
 */
export const escapeLiteralRegex = (s: string): string => {
    return s.replace(/[()[\]{}\\.+*?^$|]/g, (m) => '\\' + m);
};

export const fillArray = <T>(array: readonly T[], value: T, length: number): readonly T[] => {
    if (array.length >= length) return array;

    const result = [...array];
    while (result.length < length) {
        result.push(value);
    }
    return result;
};

/**
 * Removes the element at the given index from the array and returns it.
 *
 * This is done by swapping the element at the given index with the last element in the array,
 * and then popping the last element.
 */
export const swapRemove = <T>(array: T[], index: number): T => {
    const length = array.length;
    if (index < 0 || index >= length) {
        throw new Error(`Index out of bounds. index = ${index}, length = ${length}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const last = array.pop()!;

    if (index === length - 1) {
        return last;
    }

    const value = array[index];
    array[index] = last;
    return value;
};
