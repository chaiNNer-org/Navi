import { IntIntervalType, IntervalType, NonIntIntervalType, NumericLiteralType } from './types';

export class Range {
    readonly min: number;

    readonly max: number;

    readonly minExclusive: boolean;

    readonly maxExclusive: boolean;

    constructor(min: number, max: number, minExclusive: boolean, maxExclusive: boolean) {
        this.min = min;
        this.max = max;
        this.minExclusive = minExclusive;
        this.maxExclusive = maxExclusive;
    }

    static from(
        n: NumericLiteralType | IntervalType | IntIntervalType | NonIntIntervalType
    ): Range {
        if (n.type === 'literal') {
            if (Number.isNaN(n.value)) {
                throw new Error('NaN cannot be converted to a range');
            }
            return new Range(n.value, n.value, false, false);
        }
        return new Range(n.min, n.max, !n.has(n.min), !n.has(n.max));
    }

    has(n: number): boolean {
        if (n === this.min && !this.minExclusive) return true;
        if (n === this.max && !this.maxExclusive) return true;
        return this.min < n && n < this.max;
    }

    someLess(right: Range): boolean {
        return this.min < right.max;
    }

    someLessEqual(right: Range): boolean {
        return (
            this.min < right.max ||
            (this.min === right.max && !this.minExclusive && !right.maxExclusive)
        );
    }

    someGreater(right: Range): boolean {
        return right.someLess(this);
    }

    someGreaterEqual(right: Range): boolean {
        return right.someLessEqual(this);
    }
}
