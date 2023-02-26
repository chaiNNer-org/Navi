import { evaluate } from '../src/evaluate';
import { FunctionCallExpression } from '../src/expression';
import { globalScope } from '../src/global-scope';
import { isSubsetOf } from '../src/relation';
import { ScopeFunctionDefinition, ScopeIntrinsicFunctionDefinition } from '../src/scope';

describe('Global scope functions', () => {
    const functions: ScopeFunctionDefinition[] = [];
    const intrinsicFunctions: ScopeIntrinsicFunctionDefinition[] = [];
    for (const [, def] of globalScope.entries()) {
        if (def.type === 'function') functions.push(def);
        if (def.type === 'intrinsic-function') intrinsicFunctions.push(def);
    }

    for (const fn of functions) {
        test(fn.definition.name, () => {
            const parameters = fn.definition.parameters.map((p) => evaluate(p.type, globalScope));
            const assertType = evaluate(fn.definition.assert, globalScope);

            const result = evaluate(
                new FunctionCallExpression(fn.definition.name, parameters),
                globalScope
            );
            expect(isSubsetOf(result, assertType)).toBeTruthy();
        });
    }

    for (const fn of intrinsicFunctions) {
        test(fn.definition.name, () => {
            const parameters = fn.definition.parameters.map((p) => evaluate(p.type, globalScope));
            const assertType = evaluate(fn.definition.assert, globalScope);

            const calls: FunctionCallExpression[] = [
                new FunctionCallExpression(fn.definition.name, parameters),
            ];
            if (fn.definition.varArgs) {
                const varArgs = evaluate(fn.definition.varArgs.type, globalScope);
                for (let i = 1; i <= 10; i++) {
                    calls.push(
                        new FunctionCallExpression(fn.definition.name, [
                            ...parameters,
                            ...Array.from({ length: i }, () => varArgs),
                        ])
                    );
                }
            }

            for (const call of calls) {
                const result = evaluate(call, globalScope);
                expect(isSubsetOf(result, assertType)).toBeTruthy();
            }
        });
    }
});
