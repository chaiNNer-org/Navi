import { canonicalize } from './canonical';
import { StructDescriptor, UnionType } from './types';
import { EMPTY_ARRAY } from './util';

const trueDescriptor = new StructDescriptor('true', EMPTY_ARRAY);
const falseDescriptor = new StructDescriptor('false', EMPTY_ARRAY);

export const BOOL_TRUE = trueDescriptor.default;
export const BOOL_FALSE = falseDescriptor.default;
export const BOOL = new UnionType(canonicalize([BOOL_FALSE, BOOL_TRUE]));
