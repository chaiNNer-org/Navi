import fs from 'fs';
import { equal } from './builtin/any';
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
import { makeScoped } from './builtin/wrap';
import { VariableDefinition } from './expression';
import { parseDefinitions } from './parse';
import { IntrinsicFunctionDefinition, Scope, ScopeBuilder } from './scope';
import { SourceDocument } from './source';
import { BOOL_FALSE, BOOL_TRUE } from './struct-constants';
import { AnyType, NeverType, NumberType, StringType, StructType, Type } from './types';
import { assertNever } from './util';

const createGlobalScope = (): Scope => {
    const builder = new ScopeBuilder('Global scope');

    // fail-safes for primitives
    builder.add(new VariableDefinition('any', AnyType.instance));
    builder.add(new VariableDefinition('never', NeverType.instance));
    builder.add(new VariableDefinition('number', NumberType.instance));
    builder.add(new VariableDefinition('string', StringType.instance));
    builder.add(new VariableDefinition('anyStruct', StructType.instance));

    const intrinsic: Record<string, (scope: Scope, ...args: NeverType[]) => Type> = {
        // number
        'number::neg': makeScoped(negate),
        'number::add': makeScoped(add),
        'number::sub': makeScoped(subtract),
        'number::mul': makeScoped(multiply),
        'number::div': makeScoped(divide),
        'number::rec': makeScoped(reciprocal),
        'number::mod': makeScoped(modulo),

        'number::lte': makeScoped(lessThanEqual),
        'number::lt': makeScoped(lessThan),

        min: makeScoped(minimum),
        max: makeScoped(maximum),

        round: makeScoped(round),
        floor: makeScoped(floor),
        ceil: makeScoped(ceil),

        'number::sin': makeScoped(sin),
        'number::cos': makeScoped(cos),

        'number::exp': makeScoped(exp),
        'number::log': makeScoped(log),
        'number::pow': makeScoped(pow),

        'number::parseInt': makeScoped(parseInt),

        // string

        'string::len': makeScoped(stringLength),
        'string::concat': makeScoped(concat),
        'string::indexOf': makeScoped(indexOf),
        'string::slice': makeScoped(stringSlice),
        'string::repeat': makeScoped(repeat),
        'string::replace': makeScoped(stringReplace),

        toString: makeScoped(toString),

        // any

        'any::eq': makeScoped(equal),

        // bool
        'bool::and': makeScoped(and),
        'bool::or': makeScoped(or),
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
                        IntrinsicFunctionDefinition.from(
                            d,
                            fn as (scope: Scope, ...args: Type[]) => Type
                        )
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

    builder.addStructDescriptor(BOOL_TRUE.descriptor);
    builder.addStructDescriptor(BOOL_FALSE.descriptor);

    return builder.createScope();
};

/**
 * The global scope.
 *
 * This is Navi's top-level scope. It contains all of Navi's builtin types and functions.
 */
export const globalScope: Scope = createGlobalScope();
