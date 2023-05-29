import fs from 'fs';
import { equal } from './builtin/any';
import { arrayLength } from './builtin/array';
import { and, or } from './builtin/bool';
import {
    add,
    ceil,
    cos,
    divide,
    exp,
    floor,
    log,
    maximum,
    minimum,
    modulo,
    multiply,
    negate,
    parseInt,
    pow,
    reciprocal,
    round,
    sin,
    subtract,
} from './builtin/number';
import { lessThan, lessThanEqual } from './builtin/number-compare';
import {
    concat,
    indexOf,
    repeat,
    stringLength,
    stringReplace,
    stringSlice,
    toString,
} from './builtin/string';
import { VariableDefinition } from './expression';
import { parseDefinitions } from './parse';
import { IntrinsicFunctionDefinition, Scope, ScopeBuilder } from './scope';
import { SourceDocument } from './source';
import { AnyType, NeverType, NumberType, StringType, Type } from './types';
import { assertNever } from './util';

const createGlobalScope = (): Scope => {
    const builder = new ScopeBuilder('Global scope');

    // fail-safes for primitives
    builder.add(new VariableDefinition('any', AnyType.instance));
    builder.add(new VariableDefinition('never', NeverType.instance));
    builder.add(new VariableDefinition('number', NumberType.instance));
    builder.add(new VariableDefinition('string', StringType.instance));

    const intrinsic: Record<string, (...args: NeverType[]) => Type> = {
        // number
        'number::neg': negate,
        'number::add': add,
        'number::sub': subtract,
        'number::mul': multiply,
        'number::div': divide,
        'number::rec': reciprocal,
        'number::mod': modulo,

        'number::lte': lessThanEqual,
        'number::lt': lessThan,

        min: minimum,
        max: maximum,

        round: round,
        floor: floor,
        ceil: ceil,

        'number::sin': sin,
        'number::cos': cos,

        'number::exp': exp,
        'number::log': log,
        'number::pow': pow,

        'number::parseInt': parseInt,

        // string

        'string::len': stringLength,
        'string::concat': concat,
        'string::indexOf': indexOf,
        'string::slice': stringSlice,
        'string::repeat': repeat,
        'string::replace': stringReplace,

        toString: toString,

        // array

        'array::len': arrayLength,

        // any

        'any::eq': equal,

        // bool
        'bool::and': and,
        'bool::or': or,
    };

    const code = fs.readFileSync(__dirname + '/global.navi', 'utf-8');
    const definitions = parseDefinitions(new SourceDocument(code, 'global.navi'));
    for (const d of definitions) {
        if (d.underlying === 'declaration') {
            switch (d.type) {
                case 'intrinsic-function': {
                    const known = Object.prototype.hasOwnProperty.call(intrinsic, d.name);
                    if (!known) {
                        throw new Error('Unknown intrinsic function: ' + d.toString());
                    }
                    const fn = intrinsic[d.name];
                    builder.add(
                        IntrinsicFunctionDefinition.from(d, fn as (...args: Type[]) => Type)
                    );
                    break;
                }
                default:
                    assertNever(d);
            }
        } else {
            builder.add(d);
        }
    }

    return builder.createScope();
};

/**
 * The global scope.
 *
 * This is Navi's top-level scope. It contains all of Navi's builtin types and functions.
 */
export const globalScope: Scope = createGlobalScope();
