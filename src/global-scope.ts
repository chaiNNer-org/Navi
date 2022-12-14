import { equal } from './builtin/any';
import { and, or } from './builtin/bool';
import {
    abs,
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
    pow,
    reciprocal,
    round,
    sin,
    subtract,
} from './builtin/number';
import { lessThan, lessThanEqual } from './builtin/number-compare';
import { concat, endsWith, includes, repeat, startsWith, toString } from './builtin/string';
import { BOOL, UINT } from './constants';
import { VariableDefinition } from './expression';
import { parseDefinitions } from './parse';
import { BuiltinFunctionDefinition, Scope, ScopeBuilder } from './scope';
import { SourceDocument } from './source';
import { AnyType, NeverType, NumberType, StringType } from './types';
import { union } from './union';

const builder = new ScopeBuilder('Global scope');

// fail-safes for primitives
builder.add(new VariableDefinition('any', AnyType.instance));
builder.add(new VariableDefinition('never', NeverType.instance));
builder.add(new VariableDefinition('number', NumberType.instance));
builder.add(new VariableDefinition('string', StringType.instance));

// builtin functions
// eslint-disable-next-line @typescript-eslint/unbound-method
const { unary, binary, varArgs } = BuiltinFunctionDefinition;
builder.add(varArgs('min', minimum, NumberType.instance));
builder.add(varArgs('max', maximum, NumberType.instance));
builder.add(unary('abs', abs, NumberType.instance));
builder.add(unary('round', round, NumberType.instance));
builder.add(unary('floor', floor, NumberType.instance));
builder.add(unary('ceil', ceil, NumberType.instance));
builder.add(binary('mod', modulo, NumberType.instance, NumberType.instance));

builder.add(unary('sin', sin, NumberType.instance));
builder.add(unary('cos', cos, NumberType.instance));

builder.add(unary('exp', exp, NumberType.instance));
builder.add(unary('log', log, NumberType.instance));
builder.add(binary('pow', pow, NumberType.instance, NumberType.instance));

builder.add(varArgs('concat', concat, StringType.instance));
builder.add(unary('toString', toString, union(StringType.instance, NumberType.instance)));
builder.add(binary('string::repeat', repeat, StringType.instance, UINT));
builder.add(binary('string::includes', includes, StringType.instance, StringType.instance));
builder.add(binary('string::startsWith', startsWith, StringType.instance, StringType.instance));
builder.add(binary('string::endsWith', endsWith, StringType.instance, StringType.instance));

// function for syntax desugaring
builder.add(unary('number::neg', negate, NumberType.instance));
builder.add(varArgs('number::add', add, NumberType.instance));
builder.add(binary('number::sub', subtract, NumberType.instance, NumberType.instance));
builder.add(varArgs('number::mul', multiply, NumberType.instance));
builder.add(binary('number::div', divide, NumberType.instance, NumberType.instance));
builder.add(unary('number::rec', reciprocal, NumberType.instance));
builder.add(binary('number::lt', lessThan, NumberType.instance, NumberType.instance));
builder.add(binary('number::lte', lessThanEqual, NumberType.instance, NumberType.instance));

builder.add(varArgs('bool::and', and, BOOL));
builder.add(varArgs('bool::or', or, BOOL));

builder.add(binary('any::eq', equal, AnyType.instance, AnyType.instance));

const code = `
// invStrSet is an interesting function, because it cannot be a built-in function.
// For correctness, all built-in functions must guarantee the following property:
//   f(A) ??? f(B) if A???B
// This is necessary for the whole type system to work.
//
// This property is also expected of functions defined in Navi,
// but functions that do not follow this property can still be non-problematic in some cases.
def invStrSet(set: string) {
    match string { set => never, _ as inv => inv }
}

let int = int(..);
let uint = int(0..);

struct true;
struct false;
let bool = true | false;

def bool::not(value: bool): bool = match value { true => false, false => true };

def any::neq(a: any, b: any) = bool::not(any::eq(a, b));

def number::gte(a: number, b: number): bool = number::lte(b, a);
def number::gt(a: number, b: number): bool = number::lt(b, a);

let number::PI = 3.141592653589793;
let number::E = 2.718281828459045;

def degToRad(deg: number) = deg * (number::PI / 180);
def radToDeg(rad: number) = rad / (number::PI * 180);
`;
const definitions = parseDefinitions(new SourceDocument(code, 'global-internal'));
for (const d of definitions) {
    builder.add(d);
}

/**
 * The global scope.
 *
 * This is Navi's top-level scope. It contains all of Navi's builtin types and functions.
 */
export const globalScope: Scope = builder.createScope();
