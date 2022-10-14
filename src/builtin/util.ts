import { IntIntervalType, NumberPrimitive } from '../types';
import { union } from '../union';
import { Arg } from './wrap';

export const fixRoundingError = (n: number): number => {
    if (!Number.isFinite(n)) return n;

    const expS = n.toExponential(15);
    if (/0{6}[0-3]\d[eE][+-]\d+$/.test(expS)) {
        return Number(n.toExponential(12));
    }

    if (Number.isInteger(n)) return n;
    const s = String(n);
    if (/(?:9{6}[6-9]|0{6}[0-3])\d$/.test(s)) {
        return Number(n.toPrecision(12));
    }
    return n;
};

export const isSmallIntInterval = (type: IntIntervalType): boolean => {
    return type.max - type.min <= 10;
};
export const mapSmallIntInterval = (
    { min, max }: IntIntervalType,
    mapFn: (i: number) => Arg<NumberPrimitive>
): Arg<NumberPrimitive> => {
    const items: Arg<NumberPrimitive>[] = [];
    for (let i = min; i <= max; i += 1) {
        items.push(mapFn(i));
    }
    return union(...items);
};
