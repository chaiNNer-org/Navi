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
