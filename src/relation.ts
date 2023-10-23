import { intersect } from './intersection';
import { Type } from './types';
import { isSameType } from './types-util';

export const isSubsetOf = (left: Type, right: Type): boolean => {
    if (left.type === 'never') return true;
    if (right.type === 'any') return true;
    if (right.type === 'never') return false;
    if (left.type === 'any') return false;

    return isSameType(intersect(left, right), left);
};

export const isSupersetOf = (left: Type, right: Type): boolean => isSubsetOf(right, left);
