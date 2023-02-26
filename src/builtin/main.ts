import { StringPrimitive } from '../types';
import { concat } from './string';
import { ReducerVarArgsFn } from './wrap';

export * from './wrap';
export { handleNumberLiterals } from './util';

const Intrinsic = {
    // the type cast is necessary to work around a bug in parcel
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    concat: concat as ReducerVarArgsFn<StringPrimitive>,
} as const;

export { Intrinsic };
