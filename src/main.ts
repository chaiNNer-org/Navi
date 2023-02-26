import * as builtin_ from './builtin/main';

export * from './evaluate';
export * from './expression';
export * from './scope';
export * from './source';
export * from './types';

// work around because parcel doesn't support `export * as name` after over 2 years.
export const builtin = { ...builtin_ };

export { getReferences } from './expression-util';
export { globalScope } from './global-scope';
export {
    intInterval,
    interval,
    isNumericLiteral,
    isSameType,
    isStringLiteral,
    literal,
} from './types-util';
export { intersect, isDisjointWith } from './intersection';
export { isSubsetOf, isSupersetOf } from './relation';
export { parseDefinitions, parseExpression } from './parse';
export { union } from './union';
export { without } from './without';
