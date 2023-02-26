import { concat } from './string';

export * from './wrap';
export { handleNumberLiterals } from './util';

const Intrinsic = {
    concat,
} as const;

export { Intrinsic };
