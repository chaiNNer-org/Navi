import { IntIntervalType, NumberPrimitive, ValueType } from '../types';
import { interval, newBounds } from '../types-util';
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

export const handleNumberLiterals = <R extends ValueType>(
    value: NumberPrimitive,
    defaultValue: Arg<R>,
    fn: (n: number) => Arg<R>
): Arg<R> => {
    if (value.type === 'literal') return fn(value.value);
    if (value.type === 'int-interval' && value.max - value.min <= 10) {
        const items: Arg<R>[] = [];
        for (let i = value.min; i <= value.max; i += 1) {
            items.push(fn(i));
        }
        return union(...items) as Arg<R>;
    }
    return defaultValue;
};

export interface RangePoint {
    value: number;
    exclusive: boolean;
}
export const combineRangePoints = (points: readonly RangePoint[]) => {
    // remove invalid points
    points = points.filter((p) => !Number.isNaN(p.value));

    let min = points[0].value;
    let max = points[0].value;
    let minExclusive = points[0].exclusive;
    let maxExclusive = points[0].exclusive;
    for (let j = 1; j < points.length; j++) {
        const p = points[j];
        if (p.value < min) {
            min = p.value;
            minExclusive = p.exclusive;
        } else if (p.value === min) {
            minExclusive = minExclusive && p.exclusive;
        }
        if (p.value > max) {
            max = p.value;
            maxExclusive = p.exclusive;
        } else if (p.value === max) {
            maxExclusive = maxExclusive && p.exclusive;
        }
    }

    return interval(min, max, newBounds(minExclusive, maxExclusive));
};
