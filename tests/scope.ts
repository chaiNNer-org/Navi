import { evaluate } from '../src/evaluate';
import { Expression, StructDefinition } from '../src/expression';
import { globalScope } from '../src/global-scope';
import { ScopeBuilder } from '../src/scope';

const scopeBuilder = new ScopeBuilder('test scope', globalScope);
scopeBuilder.add(new StructDefinition('null'));
export const scope = scopeBuilder.createScope();

export const assertSame = (left: Expression, right: Expression): void => {
    const l = evaluate(left, scope).getTypeId();
    const r = evaluate(right, scope).getTypeId();
    if (l !== r) {
        const prefix = `l = ${left.toString()}\nr = ${right.toString()}\n`;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _l = evaluate(left, scope);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _r = evaluate(right, scope);

        expect(prefix + 'l => ' + l).toBe(prefix + 'r => ' + r);
    }
};
