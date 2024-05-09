import {
    CommonToken,
    CommonTokenStream,
    ErrorListener,
    InputStream,
    ParserRuleContext,
} from 'antlr4';
import NaviLexer from './antlr4/NaviLexer';
import NaviParser from './antlr4/NaviParser';
import { Declaration, IntrinsicFunctionDeclaration } from './declaration';
import {
    Definition,
    Expression,
    FieldAccessExpression,
    FunctionCallExpression,
    FunctionDefinition,
    FunctionParameter,
    IntersectionExpression,
    MatchArm,
    MatchExpression,
    NamedExpression,
    ScopeExpression,
    StructDefinition,
    StructDefinitionField,
    StructExpression,
    StructExpressionField,
    UnionExpression,
    VariableDefinition,
} from './expression';
import { isValidIdentifier } from './names';
import { Source, SourceDocument } from './source';
import { BOOL_FALSE, BOOL_TRUE } from './struct-constants';
import {
    AnyType,
    Bounds,
    IntIntervalType,
    IntervalType,
    NeverType,
    NonIntIntervalType,
    NumberType,
    NumericLiteralType,
    StringLiteralType,
    StringType,
} from './types';
import { newBounds } from './types-util';
import { assertNever } from './util';

type FilterContextName<T extends string> = T extends `${string}Context` ? T : never;
type ContextNames = FilterContextName<keyof typeof NaviParser>;
type Contexts = { [K in ContextNames]: InstanceType<typeof NaviParser[K]> };
type RuleNameOfContext<T extends string> = T extends `${infer Rule}Context` ? Rule : never;
type RuleNames = RuleNameOfContext<ContextNames>;

export class ConversionError extends Error {
    context: ParserRuleContext;

    constructor(context: ParserRuleContext, message: string) {
        super(`Unable to convert \`${context.getText()}\`: ${message}`);
        this.context = context;
    }
}

const getOptional = <T extends ParserRuleContext, K extends keyof T & Uncapitalize<RuleNames>>(
    context: T,
    key: K
): Contexts[`${Capitalize<K>}Context`] | undefined => {
    type Result = Contexts[`${Capitalize<K>}Context`];
    const fn = context[key] as unknown as () => Result | null | Result[];
    const result = fn.call(context);
    if (!result) {
        return undefined;
    }
    if (Array.isArray(result)) {
        throw new ConversionError(
            context,
            `Expected there to be a single ${key} rule, but found an array (variable-length) instead.`
        );
    }
    return result;
};
const getRequired = <T extends ParserRuleContext, K extends keyof T & Uncapitalize<RuleNames>>(
    context: T,
    key: K
): Contexts[`${Capitalize<K>}Context`] => {
    const result = getOptional(context, key);
    if (result === undefined) {
        throw new ConversionError(
            context,
            `Expected there to be a ${key} rule, but found null (optional) instead.`
        );
    }
    return result;
};
const getMultiple = <T extends ParserRuleContext, K extends keyof T & Uncapitalize<RuleNames>>(
    context: T,
    key: K
): Contexts[`${Capitalize<K>}Context`][] => {
    type Result = Contexts[`${Capitalize<K>}Context`];
    const fn = context[key] as unknown as () => Result | null | Result[];
    const result = fn.call(context);
    if (!Array.isArray(result)) {
        throw new ConversionError(
            context,
            `Expected there to be multiple ${key} rules, but found a single rule instead.`
        );
    }
    return result;
};

interface Token {
    getText(): string;
    toString(): string;
    getPayload(): CommonToken;
}

const getOptionalToken = <
    T extends ParserRuleContext,
    K extends keyof T & Capitalize<keyof T & string> & string
>(
    context: T,
    key: K
): Token | undefined => {
    const fn = context[key] as unknown as () => Token | null | Token[];
    const result = fn.call(context);
    if (!result) {
        return undefined;
    }
    if (Array.isArray(result)) {
        throw new ConversionError(
            context,
            `Expected there to be a single ${key} token, but found an array (variable-length) instead.`
        );
    }
    return result;
};
const getRequiredToken = <
    T extends ParserRuleContext,
    K extends keyof T & Capitalize<keyof T & string> & string
>(
    context: T,
    key: K
): Token => {
    const result = getOptionalToken(context, key);
    if (result === undefined) {
        throw new ConversionError(
            context,
            `Expected there to be a ${key} token, but found null (optional) instead.`
        );
    }
    return result;
};
const getMultipleTokens = <
    T extends ParserRuleContext,
    K extends keyof T & Capitalize<keyof T & string> & string
>(
    context: T,
    key: K
): Token[] => {
    const fn = context[key] as unknown as () => Token | null | Token[];
    const result = fn.call(context);
    if (!Array.isArray(result)) {
        throw new ConversionError(
            context,
            `Expected there to be multiple ${key} tokens, but found a single token instead.`
        );
    }
    return result;
};

interface OperatorToken<T> {
    type: T;
    token: Token;
}
const getOperatorsInOrder = <
    T extends ParserRuleContext,
    K extends keyof T & Capitalize<keyof T & string> & string
>(
    context: T,
    keys: K[]
): OperatorToken<K>[] => {
    type ExtendedToken = OperatorToken<K> & { start: number };
    const result: ExtendedToken[] = keys.flatMap((k) => {
        const tokens = getMultipleTokens(context, k);
        return tokens.map((t) => ({ type: k, token: t, start: t.getPayload().start }));
    });
    result.sort((a, b) => a.start - b.start);
    return result;
};

const parseStringType = (text: string) => new StringLiteralType(JSON.parse(text) as string);
const parseNumber = (text: string): number => {
    if (text === 'nan') return NaN;
    if (text === 'inf') return Infinity;
    if (text === '-inf') return -Infinity;
    return JSON.parse(text) as number;
};
const parseNumberType = (text: string) => new NumericLiteralType(parseNumber(text));
const parseInterval = (
    text: string
): { min: number; max: number; minExclusive: boolean; maxExclusive: boolean } => {
    // e.g. "123.4..4.567e+2" "!..5", "1..!3"
    let [min, max] = text.split('..');
    let minExclusive = false;
    let maxExclusive = false;
    if (min.endsWith('!')) {
        min = min.slice(0, -1);
        minExclusive = true;
    }
    if (max.startsWith('!')) {
        max = max.slice(1);
        maxExclusive = true;
    }
    return {
        min: parseNumber(min || '-inf'),
        max: parseNumber(max || 'inf'),
        minExclusive,
        maxExclusive,
    };
};
const parseIntervalType = (text: string) => {
    const { min, max, minExclusive, maxExclusive } = parseInterval(text);
    const bounds = newBounds(minExclusive, maxExclusive);
    if (bounds === Bounds.Exclusive && min + 1 === max && Number.isInteger(min)) {
        return new NonIntIntervalType(min, max);
    }
    return new IntervalType(min, max, bounds);
};
const parseIntIntervalType = (text: string) => {
    const inner = text.slice('int'.length).trim().slice(1, -1).trim();
    const { min, max } = parseInterval(inner);
    return new IntIntervalType(min, max);
};
const parseNonIntIntervalType = (text: string) => {
    const inner = text.slice('nonInt'.length).trim().slice(1, -1).trim();
    const { min, max } = parseInterval(inner);
    return new NonIntIntervalType(min, max);
};

class AstConverter {
    readonly document: SourceDocument;

    constructor(document: SourceDocument) {
        this.document = document;
    }

    private getSource(context: ParserRuleContext): Source {
        return {
            document: this.document,
            span: [
                context.start.tokenIndex,
                context.stop ? context.stop.tokenIndex : context.start.stop,
            ],
        };
    }

    private argsToExpression(args: Contexts['ArgsContext']): Expression[] {
        return getMultiple(args, 'expression').map((e) => this.toExpression(e));
    }

    private getAssert(
        context:
            | Contexts['FieldContext']
            | Contexts['ParameterContext']
            | Contexts['VarArgParameterContext']
    ): Expression {
        const assert = getRequired(context, 'assert');
        return this.toExpression(getRequired(assert, 'expression'));
    }
    private getOptionalAssert(
        context:
            | Contexts['VariableDefinitionContext']
            | Contexts['FunctionDefinitionContext']
            | Contexts['IntrinsicFunctionDeclarationContext']
    ): Expression | undefined {
        const assert = getOptional(context, 'assert');
        if (assert === undefined) return undefined;
        return this.toExpression(getRequired(assert, 'expression'));
    }

    private fieldsToList(
        args: Contexts['FieldsContext']
    ): (readonly [name: string, expressions: Expression])[] {
        return getMultiple(args, 'field').map((f) => {
            return [getRequiredToken(f, 'Identifier').getText(), this.getAssert(f)] as const;
        });
    }

    private parametersToList(
        args: Contexts['ParametersContext']
    ): (readonly [name: string, expressions: Expression])[] {
        return getMultiple(args, 'parameter').map((f) => {
            return [getRequiredToken(f, 'Identifier').getText(), this.getAssert(f)] as const;
        });
    }
    private varArgsParametersToList(args: Contexts['VarArgParametersContext']): {
        parameters: (readonly [name: string, expressions: Expression])[];
        varArgs?: readonly [name: string, expressions: Expression];
    } {
        const parameters = getMultiple(args, 'parameter').map((f) => {
            return [getRequiredToken(f, 'Identifier').getText(), this.getAssert(f)] as const;
        });
        const varArgsToken = getOptional(args, 'varArgParameter');
        const varArgs = varArgsToken
            ? ([
                  getRequiredToken(varArgsToken, 'Identifier').getText(),
                  this.getAssert(varArgsToken),
              ] as const)
            : undefined;
        return { parameters, varArgs };
    }

    private getName(name: Contexts['NameContext']): string {
        const identifiers = getMultipleTokens(name, 'Identifier');
        const contextual = getMultiple(name, 'contextualKeyword');
        if (contextual.length === 0) {
            return identifiers.map((id) => id.getText()).join('::');
        }

        interface T {
            pos: number;
            text: string;
        }
        const tokens: T[] = [
            ...identifiers.map((t): T => ({ pos: t.getPayload().start, text: t.getText() })),
            ...contextual.map((c): T => {
                const t = c.start;
                return { pos: t.start, text: t.text };
            }),
        ];
        tokens.sort((a, b) => a.pos - b.pos);
        return tokens.map((t) => t.text).join('::');
    }

    toExpression = (
        context: Parameters<AstConverter['toExpressionWithoutSource']>[0]
    ): Expression => {
        const expression = this.toExpressionWithoutSource(context);
        // can't add source info to types
        if (expression.underlying !== 'expression') return expression;
        // already has source info
        if (expression.source) return expression;

        expression.source = this.getSource(context);
        return expression;
    };

    private toExpressionWithoutSource(
        context:
            | Contexts['ExpressionDocumentContext']
            | Contexts['ExpressionContext']
            | Contexts['LogicalOrExpressionContext']
            | Contexts['LogicalAndExpressionContext']
            | Contexts['ComparisonExpressionContext']
            | Contexts['UnionExpressionContext']
            | Contexts['IntersectionExpressionContext']
            | Contexts['AdditiveExpressionContext']
            | Contexts['MultiplicativeExpressionContext']
            | Contexts['UnaryExpressionContext']
            | Contexts['FieldAccessExpressionContext']
            | Contexts['PrimaryExpressionContext']
            | Contexts['FunctionCallContext']
            | Contexts['MatchExpressionContext']
            | Contexts['IfExpressionContext']
            | Contexts['NamedContext']
            | Contexts['StructExpressionContext']
            | Contexts['ScopeExpressionContext']
    ): Expression {
        if (
            context instanceof NaviParser.ExpressionDocumentContext ||
            context instanceof NaviParser.ScopeExpressionContext
        ) {
            const definitions = getMultiple(context, 'definition').flatMap(this.toDefinitions);
            const expression = this.toExpression(getRequired(context, 'expression'));
            if (definitions.length === 0) return expression;
            return new ScopeExpression(definitions, expression);
        }
        if (context instanceof NaviParser.ExpressionContext) {
            return this.toExpression(getRequired(context, 'logicalOrExpression'));
        }
        if (context instanceof NaviParser.LogicalOrExpressionContext) {
            const items = getMultiple(context, 'logicalAndExpression').map(this.toExpression);
            if (items.length === 1) return items[0];
            return new FunctionCallExpression('bool::or', items);
        }
        if (context instanceof NaviParser.LogicalAndExpressionContext) {
            const items = getMultiple(context, 'comparisonExpression').map(this.toExpression);
            if (items.length === 1) return items[0];
            return new FunctionCallExpression('bool::and', items);
        }
        if (context instanceof NaviParser.ComparisonExpressionContext) {
            const items = getMultiple(context, 'unionExpression').map(this.toExpression);
            if (items.length === 1) return items[0];
            const [lhs, rhs] = items;

            const opToken = context.getChild(1) as Token;
            const op = opToken.getText();

            const functions: Record<string, string> = {
                '==': 'any::eq',
                '!=': 'any::neq',
                '>': 'number::gt',
                '>=': 'number::gte',
                '<': 'number::lt',
                '<=': 'number::lte',
            };
            return new FunctionCallExpression(functions[op], [lhs, rhs]);
        }
        if (context instanceof NaviParser.UnionExpressionContext) {
            const items = getMultiple(context, 'intersectionExpression').map(this.toExpression);
            if (items.length === 1) return items[0];
            return new UnionExpression(items);
        }
        if (context instanceof NaviParser.IntersectionExpressionContext) {
            const items = getMultiple(context, 'additiveExpression').map(this.toExpression);
            if (items.length === 1) return items[0];
            return new IntersectionExpression(items);
        }
        if (context instanceof NaviParser.AdditiveExpressionContext) {
            const exprs = getMultiple(context, 'multiplicativeExpression').map(this.toExpression);
            if (exprs.length === 1) return exprs[0];
            const operators = getOperatorsInOrder(context, ['OpMinus', 'OpPlus']);
            return new FunctionCallExpression(
                'number::add',
                exprs.map((e, i) => {
                    const op = operators[i - 1]?.type;
                    if (op === 'OpMinus') {
                        return new FunctionCallExpression('number::neg', [e]);
                    }
                    return e;
                })
            );
        }
        if (context instanceof NaviParser.MultiplicativeExpressionContext) {
            const exprs = getMultiple(context, 'unaryExpression').map(this.toExpression);
            if (exprs.length === 1) return exprs[0];
            const operators = getOperatorsInOrder(context, ['OpDiv', 'OpMult']);
            return new FunctionCallExpression(
                'number::mul',
                exprs.map((e, i) => {
                    const op = operators[i - 1]?.type;
                    if (op === 'OpDiv') {
                        return new FunctionCallExpression('number::rec', [e]);
                    }
                    return e;
                })
            );
        }
        if (context instanceof NaviParser.UnaryExpressionContext) {
            const expr = this.toExpression(getRequired(context, 'fieldAccessExpression'));
            if (getOptionalToken(context, 'OpMinus')) {
                return new FunctionCallExpression('number::neg', [expr]);
            }
            if (getOptionalToken(context, 'Not')) {
                return new FunctionCallExpression('bool::not', [expr]);
            }
            return expr;
        }
        if (context instanceof NaviParser.FieldAccessExpressionContext) {
            const ofExpression = this.toExpression(getRequired(context, 'primaryExpression'));
            const fields = getMultipleTokens(context, 'Identifier').map((t) => t.getText());
            return fields.reduce((e, field) => new FieldAccessExpression(e, field), ofExpression);
        }
        if (context instanceof NaviParser.PrimaryExpressionContext) {
            let text = getOptionalToken(context, 'String')?.getText();
            if (text !== undefined) return parseStringType(text);
            text = getOptionalToken(context, 'Number')?.getText();
            if (text !== undefined) return parseNumberType(text);
            text =
                getOptionalToken(context, 'IntervalInclusive')?.getText() ??
                getOptionalToken(context, 'IntervalMinExclusive')?.getText() ??
                getOptionalToken(context, 'IntervalMaxExclusive')?.getText() ??
                getOptionalToken(context, 'IntervalExclusive')?.getText();
            if (text !== undefined) return parseIntervalType(text);
            text = getOptionalToken(context, 'IntInterval')?.getText();
            if (text !== undefined) return parseIntIntervalType(text);
            text = getOptionalToken(context, 'NonIntInterval')?.getText();
            if (text !== undefined) return parseNonIntIntervalType(text);

            const rule =
                getOptional(context, 'expression') ??
                getOptional(context, 'scopeExpression') ??
                getOptional(context, 'functionCall') ??
                getOptional(context, 'matchExpression') ??
                getOptional(context, 'ifExpression') ??
                getOptional(context, 'named') ??
                getOptional(context, 'structExpression');
            if (!rule) throw new ConversionError(context, `No known rule or token`);
            return this.toExpression(rule);
        }
        if (context instanceof NaviParser.NamedContext) {
            const name = this.getName(getRequired(context, 'name'));
            if (name === 'any') return AnyType.instance;
            if (name === 'never') return NeverType.instance;
            if (name === 'number') return NumberType.instance;
            if (name === 'string') return StringType.instance;
            return new NamedExpression(name);
        }
        if (context instanceof NaviParser.StructExpressionContext) {
            const name = this.getName(getRequired(context, 'name'));
            const fields = getRequired(context, 'fieldsSpread');
            const spread = getMultiple(fields, 'spread').map((s) =>
                this.toExpression(getRequired(s, 'expression'))
            );
            return new StructExpression(
                name,
                spread,
                this.fieldsToList(fields).map(
                    ([fieldName, e]) => new StructExpressionField(fieldName, e)
                )
            );
        }
        if (context instanceof NaviParser.FunctionCallContext) {
            const name = this.getName(getRequired(context, 'name'));
            return new FunctionCallExpression(
                name,
                this.argsToExpression(getRequired(context, 'args'))
            );
        }
        if (context instanceof NaviParser.MatchExpressionContext) {
            const ofExpression = this.toExpression(getRequired(context, 'expression'));
            const arms = getMultiple(context, 'matchArm').map((a) => {
                const binding = getOptionalToken(a, 'Identifier')?.getText();
                const expressions = getMultiple(a, 'expression');

                if (getOptionalToken(a, 'Discard')) {
                    if (expressions.length !== 1)
                        throw new ConversionError(a, 'Expected a single expression');
                    const [to] = expressions;
                    return new MatchArm(AnyType.instance, binding, this.toExpression(to));
                }

                if (expressions.length !== 2)
                    throw new ConversionError(a, 'Expected 2 expressions');
                const [pattern, to] = expressions;
                return new MatchArm(this.toExpression(pattern), binding, this.toExpression(to));
            });

            if (ofExpression.type === 'named') {
                const isIdent = isValidIdentifier(ofExpression.name);
                for (let i = 0; i < arms.length; i++) {
                    const arm = arms[i];
                    if (arm.binding && arm.binding === ofExpression.name) {
                        // we don't need to do anything
                    } else if (!arm.binding && isIdent) {
                        arms[i] = new MatchArm(arm.pattern, ofExpression.name, arm.to);
                    } else {
                        const temp = `__temp`;
                        const definitions: Definition[] = [
                            new VariableDefinition(ofExpression.name, new NamedExpression(temp)),
                        ];
                        if (arm.binding) {
                            definitions.push(
                                new VariableDefinition(arm.binding, new NamedExpression(temp))
                            );
                        }

                        arms[i] = new MatchArm(
                            arm.pattern,
                            temp,
                            new ScopeExpression(definitions, arm.to)
                        );
                    }
                }
            }

            return new MatchExpression(ofExpression, arms);
        }
        if (context instanceof NaviParser.IfExpressionContext) {
            const condition = this.toExpression(getRequired(context, 'expression'));
            const elseIf = getOptional(context, 'ifExpression');
            if (elseIf) {
                const [trueBranch] = getMultiple(context, 'scopeExpression').map(this.toExpression);
                return new MatchExpression(condition, [
                    new MatchArm(BOOL_TRUE, undefined, trueBranch),
                    new MatchArm(BOOL_FALSE, undefined, this.toExpression(elseIf)),
                ]);
            } else {
                const [trueBranch, falseBranch] = getMultiple(context, 'scopeExpression').map(
                    this.toExpression
                );
                return new MatchExpression(condition, [
                    new MatchArm(BOOL_TRUE, undefined, trueBranch),
                    new MatchArm(BOOL_FALSE, undefined, falseBranch),
                ]);
            }
        }

        return assertNever(context);
    }

    toDefinitions = (
        context: Parameters<AstConverter['toDefinitionsWithoutSource']>[0]
    ): Definition[] => {
        const definitions = this.toDefinitionsWithoutSource(context);
        const source = this.getSource(context);
        for (const d of definitions) {
            d.source ??= source;
        }
        return definitions;
    };

    private toDefinitionsWithoutSource(
        context:
            | Contexts['DefinitionContext']
            | Contexts['StructDefinitionContext']
            | Contexts['FunctionDefinitionContext']
            | Contexts['VariableDefinitionContext']
            | Contexts['EnumDefinitionContext']
    ): Definition[] {
        if (context instanceof NaviParser.DefinitionContext) {
            const rule =
                getOptional(context, 'structDefinition') ??
                getOptional(context, 'functionDefinition') ??
                getOptional(context, 'variableDefinition') ??
                getOptional(context, 'enumDefinition');
            if (!rule) throw new ConversionError(context, `No known rule or token`);
            return this.toDefinitions(rule);
        }
        if (context instanceof NaviParser.StructDefinitionContext) {
            const name = this.getName(getRequired(context, 'name'));
            const fields = getOptional(context, 'fields');
            if (!fields) return [new StructDefinition(name)];
            return [
                new StructDefinition(
                    name,
                    this.fieldsToList(fields).map(
                        ([fieldName, type]) => new StructDefinitionField(fieldName, type)
                    )
                ),
            ];
        }
        if (context instanceof NaviParser.FunctionDefinitionContext) {
            const name = this.getName(getRequired(context, 'name'));
            const parameters = this.parametersToList(getRequired(context, 'parameters'));
            const rule =
                getOptional(context, 'expression') ?? getOptional(context, 'scopeExpression');
            if (!rule) throw new ConversionError(context, `No known rule or token`);
            const assert = this.getOptionalAssert(context);
            return [
                new FunctionDefinition(
                    name,
                    parameters.map(
                        ([parameterName, type]) => new FunctionParameter(parameterName, type)
                    ),
                    this.toExpression(rule),
                    assert
                ),
            ];
        }
        if (context instanceof NaviParser.VariableDefinitionContext) {
            const name = this.getName(getRequired(context, 'name'));
            const value = this.toExpression(getRequired(context, 'expression'));
            const assert = this.getOptionalAssert(context);
            return [new VariableDefinition(name, value, assert)];
        }
        if (context instanceof NaviParser.EnumDefinitionContext) {
            const name = this.getName(getRequired(context, 'name'));
            const variants = getMultiple(context, 'enumVariant').map((v) => {
                const fields = getOptional(v, 'fields');
                return {
                    name: getRequiredToken(v, 'Identifier').getText(),
                    fields: fields === undefined ? [] : this.fieldsToList(fields),
                };
            });
            return [
                new VariableDefinition(
                    name,
                    new UnionExpression(
                        variants.map((v) => new NamedExpression(`${name}::${v.name}`))
                    )
                ),
                ...variants.map(
                    (v) =>
                        new StructDefinition(
                            `${name}::${v.name}`,
                            v.fields.map(
                                ([fieldName, type]) => new StructDefinitionField(fieldName, type)
                            )
                        )
                ),
            ];
        }

        return assertNever(context);
    }

    toDeclarations = (
        context: Parameters<AstConverter['toDeclarationsWithoutSource']>[0]
    ): (Definition | Declaration)[] => {
        const definitions = this.toDeclarationsWithoutSource(context);
        const source = this.getSource(context);
        for (const d of definitions) {
            d.source ??= source;
        }
        return definitions;
    };

    private toDeclarationsWithoutSource(
        context:
            | Parameters<AstConverter['toDefinitionsWithoutSource']>[0]
            | Contexts['DefinitionDocumentContext']
            | Contexts['DeclarationContext']
            | Contexts['IntrinsicFunctionDeclarationContext']
    ): (Definition | Declaration)[] {
        if (context instanceof NaviParser.DefinitionDocumentContext) {
            return [
                ...getMultiple(context, 'definition').flatMap(this.toDefinitions),
                ...getMultiple(context, 'declaration').flatMap(this.toDeclarations),
            ];
        }
        if (context instanceof NaviParser.DeclarationContext) {
            const rule = getOptional(context, 'intrinsicFunctionDeclaration');
            if (!rule) throw new ConversionError(context, `No known rule or token`);
            return this.toDeclarations(rule);
        }
        if (context instanceof NaviParser.IntrinsicFunctionDeclarationContext) {
            const name = this.getName(getRequired(context, 'name'));
            const { parameters, varArgs } = this.varArgsParametersToList(
                getRequired(context, 'varArgParameters')
            );
            const assert = this.getOptionalAssert(context);
            return [
                new IntrinsicFunctionDeclaration(
                    name,
                    parameters.map(
                        ([parameterName, type]) => new FunctionParameter(parameterName, type)
                    ),
                    varArgs ? new FunctionParameter(...varArgs) : undefined,
                    assert
                ),
            ];
        }

        return this.toDefinitions(context);
    }
}

class MyErrorListener extends ErrorListener<unknown> {
    syntaxError(
        recognizer: unknown,
        offendingSymbol: unknown,
        line: number,
        column: number,
        msg: string
    ): void {
        throw new SyntaxError(`At ${line}:${column}: ${msg}`);
    }
}
const errorListener = new MyErrorListener();
const getParser = (code: string): NaviParser => {
    const chars = new InputStream(code);
    const lexer = new NaviLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    const tokens = new CommonTokenStream(lexer);
    const parser = new NaviParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.buildParseTrees = true;
    return parser;
};

export const parseExpression = (document: SourceDocument): Expression => {
    const parser = getParser(document.text);
    return new AstConverter(document).toExpression(parser.expressionDocument());
};
export const parseDefinitions = (document: SourceDocument): (Definition | Declaration)[] => {
    const parser = getParser(document.text);
    return new AstConverter(document).toDeclarations(parser.definitionDocument());
};
