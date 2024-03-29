import {
    Expression,
    FieldAccessExpression,
    FunctionCallExpression,
    FunctionDefinition,
    MatchArm,
    MatchExpression,
    NamedExpression,
    ScopeExpression,
    StructDefinition,
    StructDefinitionField,
    StructExpression,
    StructExpressionField,
    VariableDefinition,
} from './expression';
import { intersect } from './intersection';
import { isSubsetOf } from './relation';
import {
    IntrinsicFunctionDefinition,
    NameResolutionError,
    ResolvedName,
    Scope,
    ScopeBuilder,
    ScopeFunctionDefinition,
    ScopeIntrinsicFunctionDefinition,
    ScopeParameterDefinition,
    ScopeStructDefinition,
    ScopeVariableDefinition,
} from './scope';
import {
    NeverType,
    NonNeverType,
    StructDescriptor,
    StructField,
    StructInstanceType,
    Type,
    UnionType,
    ValueType,
} from './types';
import { union } from './union';
import { assertNever } from './util';
import { without } from './without';

export type ErrorDetails =
    | {
          type: 'Unknown struct field';
          expression: StructExpression;
          definition: StructDefinition;
          field: StructExpressionField;
          message: string;
      }
    | {
          type: 'Unknown type definition';
          expression: NamedExpression;
          message: string;
      }
    | {
          type: 'Unknown function';
          expression: FunctionCallExpression;
          similarNames: string[];
          message: string;
      }
    | {
          type: 'Not a function';
          expression: FunctionCallExpression;
          message: string;
      }
    | {
          type: 'Not a struct';
          expression: StructExpression;
          message: string;
      }
    | {
          type: 'Unknown named';
          expression: NamedExpression;
          similarNames: string[];
          message: string;
      }
    | {
          type: 'Unknown struct';
          expression: StructExpression;
          similarNames: string[];
          message: string;
      }
    | {
          type: 'Cannot reference function';
          expression: NamedExpression | StructExpression;
          message: string;
      }
    | {
          type: 'Incompatible field type';
          expression: StructExpression;
          definition: StructDefinition;
          field: {
              name: string;
              expression: Type;
              definition: Type;
          };
          message: string;
      }
    | {
          type: 'Invalid structure definition';
          definition: StructDefinition;
          details: ErrorDetails;
          message: string;
      }
    | {
          type: 'Invalid structure definition field';
          definition: StructDefinition;
          field: StructDefinitionField;
          message: string;
      }
    | {
          type: 'Invalid field access';
          expression: FieldAccessExpression;
          fullExpressionType: Type;
          offendingType: Type;
          message: string;
      }
    | {
          type: 'Incorrect function argument count';
          expression: FunctionCallExpression;
          definition: IntrinsicFunctionDefinition | FunctionDefinition;
          message: string;
      }
    | {
          type: 'Incompatible argument type';
          expression: FunctionCallExpression;
          definition: IntrinsicFunctionDefinition | FunctionDefinition;
          argument: {
              index: number;
              expression: Type;
              definition: Type;
          };
          message: string;
      }
    | {
          type: 'Incompatible return type';
          definition: FunctionDefinition;
          value: Type;
          assert: Type;
          message: string;
      }
    | {
          type: 'Incompatible variable type';
          definition: VariableDefinition;
          value: Type;
          assert: Type;
          message: string;
      }
    | {
          type: 'Non-exhaustive match';
          expression: MatchExpression;
          of: Type;
          remaining: Type;
          message: string;
      }
    | {
          type: 'Invalid struct spread';
          expression: StructExpression;
          spreadExpression: Expression;
          spread: Type;
          message: string;
      };

export class EvaluationError extends Error {
    details: ErrorDetails;

    constructor(details: ErrorDetails) {
        super(`${details.type}: ${details.message}`);
        this.details = details;
    }
}

const resolveStruct = (
    expression: StructExpression,
    currentScope: Scope
): ResolvedName<ScopeStructDefinition> => {
    let resolved;
    try {
        resolved = currentScope.get(expression.name);
    } catch (error: unknown) {
        if (error instanceof NameResolutionError) {
            throw new EvaluationError({
                type: 'Unknown struct',
                expression,
                similarNames: error.similar,
                message: error.message,
            });
        }
        throw error;
    }

    const { definition, scope } = resolved;
    if (definition.type === 'function' || definition.type === 'intrinsic-function') {
        throw new EvaluationError({
            type: 'Cannot reference function',
            expression,
            message: `The name ${expression.name} resolves to a ${resolved.definition.type} and not a struct.`,
        });
    }

    if (definition.type === 'parameter' || definition.type === 'variable') {
        throw new EvaluationError({
            type: 'Not a struct',
            expression,
            message: `${expression.name} is a ${definition.type} and does not support struct fields.`,
        });
    }

    return { definition, scope };
};
const evaluateStructDefinition = (def: StructDefinition, scope: Scope): StructDescriptor => {
    const fields: StructField[] = [];
    for (const f of def.fields) {
        let type;
        try {
            type = evaluate(f.type, scope);
        } catch (error: unknown) {
            if (error instanceof EvaluationError) {
                throw new EvaluationError({
                    type: 'Invalid structure definition',
                    definition: def,
                    details: error.details,
                    message: `The structure definition for ${def.name} is invalid.`,
                });
            }
            throw error;
        }
        if (type.type === 'never') {
            throw new EvaluationError({
                type: 'Invalid structure definition field',
                definition: def,
                field: f,
                message: `The structure definition field ${f.name} for ${def.name} is always \`never\`.`,
            });
        }
        fields.push(new StructField(f.name, type));
    }
    return new StructDescriptor(def.name, fields);
};
type SpreadType = StructInstanceType | UnionType<StructInstanceType>;
// eslint-disable-next-line prefer-arrow-functions/prefer-arrow-functions
function checkStructSpreadOverlap(
    expression: StructExpression,
    spreadExpression: Expression,
    def: StructDescriptor,
    spread: Type
): asserts spread is SpreadType | NeverType {
    if (spread.type === 'never') return;
    if (spread.type === 'any') {
        throw new EvaluationError({
            type: 'Invalid struct spread',
            expression,
            spreadExpression,
            spread,
            message: `The \`any\` type has no fields cannot be used as a spread value.`,
        });
    }

    const items: readonly ValueType[] = spread.type === 'union' ? spread.items : [spread];
    for (const item of items) {
        if (item.underlying === 'number' || item.underlying === 'string') {
            throw new EvaluationError({
                type: 'Invalid struct spread',
                expression,
                spreadExpression,
                spread,
                message: `The ${item.underlying} types cannot be used as a spread value.`,
            });
        }
        if (item.type === 'struct' || item.type === 'inverted-set') {
            throw new EvaluationError({
                type: 'Invalid struct spread',
                expression,
                spreadExpression,
                spread,
                message: `The ${item.toString()} type is not guaranteed to have any fields and cannot be used as a spread value.`,
            });
        }

        const overlap = item.descriptor.fields.some((f) => def.fieldNames.has(f.name));
        if (!overlap) {
            throw new EvaluationError({
                type: 'Invalid struct spread',
                expression,
                spreadExpression,
                spread,
                message: `Fields of ${item.toString()} do not overlap with the fields of ${
                    def.name
                }: ${[...def.fieldNames].join(', ')}.`,
            });
        }
    }
}
const partialFieldAccess = (type: SpreadType, field: string): [Type, boolean] => {
    const parts: NonNeverType[] = [];
    let partial = false;
    for (const item of type.type === 'union' ? type.items : [type]) {
        const f = item.getField(field);
        if (f) {
            parts.push(f);
        } else {
            partial = true;
        }
    }
    return [union(...parts), partial];
};
const evaluateStructImpl = (
    expression: StructExpression,
    scope: Scope,
    definition: ScopeStructDefinition,
    definitionScope: Scope
): Type => {
    definition.descriptor ??= evaluateStructDefinition(definition.definition, definitionScope);

    if (expression.spread.length + expression.fields.length === 0) {
        return definition.descriptor.default;
    }

    // check for unknown fields
    const unknownField = expression.fields.find(
        (f) => !definition.definition.fieldNames.has(f.name)
    );
    if (unknownField) {
        throw new EvaluationError({
            type: 'Unknown struct field',
            expression,
            definition: definition.definition,
            field: unknownField,
            message: `The struct definition for ${definition.definition.name} has no field ${unknownField.name}.`,
        });
    }

    const spread: SpreadType[] = [];
    let hasNeverSpread = false;
    for (const spreadExpression of expression.spread) {
        const s = evaluate(spreadExpression, scope);

        // check that spread and struct are compatible
        if (definition.descriptor.fields.length === 0) {
            throw new EvaluationError({
                type: 'Invalid struct spread',
                expression,
                spreadExpression,
                spread: s,
                message: `The struct ${definition.descriptor.name} has no fields and does not allow spread values.`,
            });
        }

        checkStructSpreadOverlap(expression, spreadExpression, definition.descriptor, s);

        // if the spread is never, then the whole struct is never
        if (s.type === 'never') {
            // we can't return never directly, because we have to verify the
            // other spread expressions as well
            hasNeverSpread = true;
            continue;
        }

        spread.push(s);
    }
    if (hasNeverSpread) {
        return NeverType.instance;
    }

    const expressionFields = new Map(expression.fields.map((f) => [f.name, f.type]));

    const fields: NonNeverType[] = [];
    for (const dField of definition.descriptor.fields) {
        const { name } = dField;
        const eField = expressionFields.get(name);
        let type;
        if (eField) {
            type = evaluate(eField, scope);
            if (type.type === 'never') return NeverType.instance;

            if (!isSubsetOf(type, dField.type)) {
                throw new EvaluationError({
                    type: 'Incompatible field type',
                    expression,
                    definition: definition.definition,
                    field: { name, expression: type, definition: dField.type },
                    message: `The type ${type.toString()} of the ${name} field is not compatible with its type definition ${dField.type.toString()}.`,
                });
            }
        } else if (spread.length > 0) {
            // we have to go through the spreads in reverse order and keep
            // going until the field access is no longer partial
            type = NeverType.instance;
            let partial = true;
            for (let i = spread.length - 1; i >= 0 && partial; i -= 1) {
                const spreadType = spread[i];
                const [t, p] = partialFieldAccess(spreadType, name);

                if (!isSubsetOf(t, dField.type)) {
                    throw new EvaluationError({
                        type: 'Invalid struct spread',
                        expression,
                        spreadExpression: expression.spread[i],
                        spread: spreadType,
                        message:
                            `The type ${t.toString()} of the ${name} field is not compatible with its type definition ${dField.type.toString()}.` +
                            ` The result of accessing the field ${name} for spread type ${spreadType.toString()} is incompatible with the field of struct type ${
                                definition.descriptor.name
                            }.`,
                    });
                }

                type = union(type, t);
                partial = p;
            }

            if (partial) {
                // still partial, so we have to fall back to the definition type
                type = union(type, dField.type);
            } else {
                // if it's not partial, then this shouldn't be never
                if (type.type === 'never') {
                    throw new Error('Implementation is incorrect');
                }
            }
        } else {
            // default to definition type
            type = dField.type;
        }
        fields.push(type);
    }
    return StructInstanceType.fromDescriptorUnchecked(definition.descriptor, fields);
};
const evaluateStruct = (expression: StructExpression, scope: Scope): Type => {
    const { definition, scope: definitionScope } = resolveStruct(expression, scope);
    return evaluateStructImpl(expression, scope, definition, definitionScope);
};

const resolveNamed = (
    expression: NamedExpression,
    currentScope: Scope
): ResolvedName<ScopeStructDefinition | ScopeVariableDefinition | ScopeParameterDefinition> => {
    let resolved;
    try {
        resolved = currentScope.get(expression.name);
    } catch (error: unknown) {
        if (error instanceof NameResolutionError) {
            throw new EvaluationError({
                type: 'Unknown named',
                expression,
                similarNames: error.similar,
                message: error.message,
            });
        }
        throw error;
    }

    const { definition, scope } = resolved;
    if (definition.type === 'function' || definition.type === 'intrinsic-function') {
        throw new EvaluationError({
            type: 'Cannot reference function',
            expression,
            message: `The name ${expression.name} resolves to a ${resolved.definition.type} and not a struct.`,
        });
    }

    return { definition, scope };
};
const evaluateVariable = (definition: ScopeVariableDefinition, definitionScope: Scope): Type => {
    if (definition.value === undefined) {
        const value = evaluate(definition.definition.value, definitionScope);

        const assert = (definition.assert ??= evaluate(
            definition.definition.assert,
            definitionScope
        ));
        if (!isSubsetOf(value, assert)) {
            throw new EvaluationError({
                type: 'Incompatible variable type',
                definition: definition.definition,
                value: value,
                assert: assert,
                message: `The type ${value.toString()} is not assignable to ${assert.toString()}`,
            });
        }

        definition.value = value;
    }

    return definition.value;
};
const evaluateNamed = (expression: NamedExpression, scope: Scope): Type => {
    const { definition, scope: definitionScope } = resolveNamed(expression, scope);

    // parameter
    if (definition.type === 'parameter') {
        return definition.value;
    }

    // variable
    if (definition.type === 'variable') {
        return evaluateVariable(definition, definitionScope);
    }

    // struct
    return evaluateStructImpl(expression.toStruct(), scope, definition, definitionScope);
};

const evaluateFieldAccess = (expression: FieldAccessExpression, scope: Scope): Type => {
    const type = evaluate(expression.of, scope);
    if (type.type === 'never') return NeverType.instance;
    if (type.type === 'any') {
        throw new EvaluationError({
            type: 'Invalid field access',
            expression,
            fullExpressionType: type,
            offendingType: type,
            message: `The \`any\` type is not guaranteed to have a field \`${expression.field}\`.`,
        });
    }

    const types = type.type === 'union' ? type.items : [type];
    const accessed: Type[] = [];
    for (const t of types) {
        if (t.underlying === 'number' || t.underlying === 'string') {
            throw new EvaluationError({
                type: 'Invalid field access',
                expression,
                fullExpressionType: type,
                offendingType: t,
                message: `Primitive types do not have fields.`,
            });
        }

        if (t.type === 'struct' || t.type === 'inverted-set') {
            throw new EvaluationError({
                type: 'Invalid field access',
                expression,
                fullExpressionType: type,
                offendingType: type,
                message: `\`${t.getTypeId()}\` is not guaranteed to have a field \`${
                    expression.field
                }\`.`,
            });
        }

        const field = t.getField(expression.field);
        if (!field) {
            throw new EvaluationError({
                type: 'Invalid field access',
                expression,
                fullExpressionType: type,
                offendingType: t,
                message: `The ${t.descriptor.name} structure does not define a field \`${expression.field}\`.`,
            });
        }

        accessed.push(field);
    }
    return union(...accessed);
};

const resolveFunction = (
    expression: FunctionCallExpression,
    currentScope: Scope
): ResolvedName<ScopeFunctionDefinition | ScopeIntrinsicFunctionDefinition> => {
    let resolved;
    try {
        resolved = currentScope.get(expression.functionName);
    } catch (error: unknown) {
        if (error instanceof NameResolutionError) {
            throw new EvaluationError({
                type: 'Unknown function',
                expression,
                similarNames: error.similar,
                message: error.message,
            });
        }
        throw error;
    }

    const { definition, scope } = resolved;
    if (definition.type === 'function' || definition.type === 'intrinsic-function') {
        return { definition, scope };
    }

    throw new EvaluationError({
        type: 'Not a function',
        expression,
        message: `The name ${expression.functionName} resolves to a ${resolved.definition.type} and not a function.`,
    });
};
const evaluateFunctionCall = (expression: FunctionCallExpression, scope: Scope): Type => {
    const { definition, scope: definitionScope } = resolveFunction(expression, scope);

    // check argument number
    if (definition.type === 'intrinsic-function' && definition.definition.varArgs) {
        if (definition.definition.parameters.length > expression.args.length) {
            throw new EvaluationError({
                type: 'Incorrect function argument count',
                expression,
                definition: definition.definition,
                message: `${expression.functionName} expected at least ${definition.definition.parameters.length} but got ${expression.args.length}.`,
            });
        }
    } else if (definition.definition.parameters.length !== expression.args.length) {
        throw new EvaluationError({
            type: 'Incorrect function argument count',
            expression,
            definition: definition.definition,
            message: `${expression.functionName} expected ${definition.definition.parameters.length} but got ${expression.args.length}.`,
        });
    }

    // evaluate parameter types
    if (!definition.parameters) {
        definition.parameters = definition.definition.parameters.map((p) =>
            evaluate(p.type, definitionScope)
        );
    }
    if (
        definition.type === 'intrinsic-function' &&
        !definition.varArgs &&
        definition.definition.varArgs
    ) {
        definition.varArgs = evaluate(definition.definition.varArgs.type, definitionScope);
    }

    // evaluate arguments
    const args = expression.args.map((arg) => evaluate(arg, scope));

    // check argument types
    for (let i = 0; i < definition.parameters.length; i += 1) {
        const eType = args[i];
        const dType = definition.parameters[i];

        if (!isSubsetOf(eType, dType)) {
            throw new EvaluationError({
                type: 'Incompatible argument type',
                expression,
                definition: definition.definition,
                argument: { index: i, expression: eType, definition: dType },
                message: `The supplied argument type ${eType.toString()} is not compatible with the definition type.`,
            });
        }
    }
    if (definition.varArgs) {
        for (let i = definition.parameters.length; i < args.length; i += 1) {
            const eType = args[i];
            const dType = definition.varArgs;

            if (!isSubsetOf(eType, dType)) {
                throw new EvaluationError({
                    type: 'Incompatible argument type',
                    expression,
                    definition: definition.definition,
                    argument: { index: i, expression: eType, definition: dType },
                    message: `The supplied argument type ${eType.toString()} is not compatible with the definition type.`,
                });
            }
        }
    }

    // run function
    if (definition.type === 'function') {
        const functionScope = new ScopeBuilder('function scope', definitionScope);
        definition.definition.parameters.forEach(({ name }, i) => {
            functionScope.add(new VariableDefinition(name, args[i]));
        });

        const assert = (definition.assert ??= evaluate(
            definition.definition.assert,
            definitionScope
        ));
        const value = evaluate(definition.definition.value, functionScope.createScope());
        if (!isSubsetOf(value, assert)) {
            throw new EvaluationError({
                type: 'Incompatible return type',
                definition: definition.definition,
                value,
                assert,
                message: `The return value ${value.toString()} is not allowed by the return type ${assert.toString()}`,
            });
        }
        return value;
    }
    return definition.definition.fn(definitionScope, ...args);
};

const evaluateMatch = (expression: MatchExpression, scope: Scope): Type => {
    let type = evaluate(expression.of, scope);
    if (type.type === 'never') return NeverType.instance;
    const initialOf = type;

    const withBinding = (arm: MatchArm, armType: Type): Scope => {
        if (arm.binding === undefined) return scope;

        const armScope = new ScopeBuilder(`match arm`, scope);
        armScope.add(new VariableDefinition(arm.binding, armType));
        return armScope.createScope();
    };

    const matchTypes: Type[] = [];
    for (const arm of expression.arms) {
        const armType = evaluate(arm.pattern, scope);
        const t = intersect(armType, type);
        if (t.type !== 'never') {
            matchTypes.push(evaluate(arm.to, withBinding(arm, t)));
            type = without(type, armType);
        }
    }

    if (type.type !== 'never') {
        throw new EvaluationError({
            type: 'Non-exhaustive match',
            expression,
            of: initialOf,
            remaining: type,
            message: `The match expression does not cover all possible cases. \`${type.toString()}\` is not matched by any arm. Either adjust the patterns of match arms or add a \`_\` arm to match all remaining types.`,
        });
    }

    return union(...matchTypes);
};

const evaluateScope = (expression: ScopeExpression, parentScope: Scope): Type => {
    let name = 'scope expression';
    if (expression.source) {
        const { document, span } = expression.source;
        name += ` at ${document.name}:${span[0]}`;
    }

    const scope = new ScopeBuilder(name, parentScope);
    for (const def of expression.definitions) {
        scope.add(def);
    }

    return evaluate(expression.expression, scope.createScope());
};

/**
 * Evaluates the given expression. If a type is given, then the type will be returned as is.
 *
 * @throws {@link EvaluationError}
 */
export const evaluate = (expression: Expression, scope: Scope): Type => {
    if (expression.underlying !== 'expression') {
        // type
        return expression;
    }

    switch (expression.type) {
        case 'named':
            return evaluateNamed(expression, scope);
        case 'struct':
            return evaluateStruct(expression, scope);
        case 'union':
            return union(...expression.items.map((e) => evaluate(e, scope)));
        case 'intersection':
            return intersect(...expression.items.map((e) => evaluate(e, scope)));
        case 'field-access':
            return evaluateFieldAccess(expression, scope);
        case 'function-call':
            return evaluateFunctionCall(expression, scope);
        case 'match':
            return evaluateMatch(expression, scope);
        case 'scope':
            return evaluateScope(expression, scope);
        default:
            return assertNever(expression);
    }
};
