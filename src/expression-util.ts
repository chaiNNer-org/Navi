import { Definition, Expression } from './expression';
import { assertNever } from './util';

export function* getReferences(expression: Expression | Definition): Iterable<string> {
    if (expression.underlying === 'expression') {
        switch (expression.type) {
            case 'intersection':
            case 'union':
                for (const e of expression.items) {
                    yield* getReferences(e);
                }
                break;
            case 'named':
                yield expression.name;
                break;
            case 'struct':
                yield expression.name;
                for (const f of expression.fields) {
                    yield* getReferences(f.type);
                }
                break;
            case 'field-access':
                yield* getReferences(expression.of);
                break;
            case 'function-call':
                for (const f of expression.args) {
                    yield* getReferences(f);
                }
                break;
            case 'match':
                yield* getReferences(expression.of);
                for (const arm of expression.arms) {
                    yield* getReferences(arm.pattern);
                    yield* getReferences(arm.to);
                }
                break;
            case 'scope':
                for (const d of expression.definitions) {
                    yield* getReferences(d);
                }
                yield* getReferences(expression.expression);
                break;
            default:
                yield assertNever(expression);
        }
    }

    if (expression.underlying === 'definition') {
        const definition: Definition = expression;
        switch (definition.type) {
            case 'variable':
                yield* getReferences(definition.value);
                break;
            case 'struct':
                for (const f of definition.fields) {
                    yield* getReferences(f.type);
                }
                break;
            case 'function':
                for (const f of definition.parameters) {
                    yield* getReferences(f.type);
                }
                break;
            default:
                yield assertNever(definition);
        }
    }
}
