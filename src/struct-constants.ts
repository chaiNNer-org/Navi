import { canonicalize } from './canonical';
import { StructDescriptor, UnionType } from './types';

const trueDescriptor = new StructDescriptor('true');
const falseDescriptor = new StructDescriptor('false');

export const BOOL_TRUE = trueDescriptor.default;
export const BOOL_FALSE = falseDescriptor.default;
export const BOOL = new UnionType(canonicalize([BOOL_FALSE, BOOL_TRUE]));
