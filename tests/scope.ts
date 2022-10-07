import { evaluate } from '../src/evaluate';
import { Expression, StructDefinition } from '../src/expression';
import { globalScope } from '../src/global-scope';
import { ScopeBuilder } from '../src/scope';

const scopeBuilder = new ScopeBuilder('test scope', globalScope);
scopeBuilder.add(new StructDefinition('null'));
export const scope = scopeBuilder.createScope();

export const assertSame = (a: Expression, b: Expression): void => {
    const expected = evaluate(a, scope).getTypeId();
    const actual = evaluate(b, scope).getTypeId();
    if (expected !== actual) {
        const prefix = `a = ${a.toString()}\nb = ${b.toString()}\n`;
        expect(prefix + actual).toBe(prefix + expected);
    }
};
