import { Definition, Expression } from './expression';
import { Type } from './types';
import { isSameType } from './types-util';
import { assertNever } from './util';

const MAX_EXPRESSION_LENGTH = 80;
const INDENT = '    ';

const isMultiline = (s: string): boolean => s.includes('\n');
const indent = (s: string, indent = INDENT): string => {
    return s
        .split('\n')
        .map((line) => (line ? indent + line : ''))
        .join('\n');
};

const bracketFormat = (expression: Expression): string => {
    const formatted = format(expression);
    if (expression.type === 'union' || expression.type === 'intersection') {
        if (isMultiline(formatted)) {
            return `(\n${indent(formatted)}\n)`;
        }
        return `(${formatted})`;
    }
    return formatted;
};

const formatIntersectionOrUnion = (
    items: readonly Expression[],
    type: 'intersection' | 'union'
): string => {
    if (items.length === 0) {
        return type === 'union' ? '/* empty union */ never' : '/* empty intersection */ any';
    }

    const formattedItems = items.map(bracketFormat);
    if (formattedItems.length === 1) {
        return '/* single-item ' + type + ' */ ' + formattedItems[0];
    }

    const delimiter = type === 'intersection' ? '&' : '|';
    if (!formattedItems.some(isMultiline)) {
        const singleLine = formattedItems.join(` ${delimiter} `);
        if (singleLine.length <= MAX_EXPRESSION_LENGTH) {
            return singleLine;
        }
    }
    return formattedItems.join(`\n  ${delimiter} `);
};

const formatDefinition = (def: Definition): string => {
    switch (def.type) {
        case 'function': {
            // TODO:
            const params = def.parameters.map((p) => `${p.name}: ${format(p.type)}`).join(', ');
            const value =
                def.value.type === 'scope'
                    ? format(def.value)
                    : `{\n${indent(format(def.value))}\n}`;
            const assert = def.assert.type === 'any' ? '' : `: ${format(def.assert)}`;
            return `def ${def.name}(${params})${assert} ${value}`;
        }
        case 'struct': {
            const pre = 'struct ' + def.name;
            if (def.fields.length === 0) {
                return pre + ';';
            }
            const fields = def.fields.map((f) => {
                let type = format(f.type);
                if (isMultiline(type)) {
                    type = indent(type).trimStart();
                }
                return f.name + ': ' + type + ',';
            });
            return pre + ' {\n' + indent(fields.join('\n')) + '\n}';
        }
        case 'variable': {
            const pre = 'let ' + def.name;
            let assert = '';
            if (def.assert.underlying !== 'any') {
                assert = `: ${format(def.assert)}`;
            }
            return pre + assert + ' = ' + format(def.value) + ';';
        }
        default:
            return assertNever(def);
    }
};

const formatExpression = (expr: Expression): string => {
    if (expr.underlying !== 'expression') {
        return formatType(expr);
    }

    switch (expr.type) {
        case 'field-access': {
            return `${bracketFormat(expr.of)}.${expr.field}`;
        }
        case 'function-call': {
            // TODO: multiline
            return `${expr.functionName}(${expr.args.map((e) => format(e)).join(', ')})`;
        }
        case 'intersection':
        case 'union': {
            return formatIntersectionOrUnion(expr.items, expr.type);
        }
        case 'match': {
            const pre = `match ${bracketFormat(expr.of)}`;
            if (expr.arms.length === 0) {
                return pre + ' {}';
            }
            const arms = expr.arms
                .map((a) => {
                    const pattern = a.pattern.type === 'any' ? '_' : format(a.pattern);
                    const binding = a.binding === undefined ? '' : `as ${a.binding} `;
                    let to = format(a.to);
                    if (!isMultiline(to)) {
                        const single = `${pattern} ${binding}=> ${to},`;
                        if (single.length <= MAX_EXPRESSION_LENGTH) {
                            return single;
                        }
                    }
                    const allowed =
                        (a.to.underlying === 'struct' && a.to.type === 'instance') ||
                        (a.to.underlying === 'expression' &&
                            (a.to.type === 'struct' || a.to.type === 'scope'));
                    if (!allowed) to = `{\n${indent(to)}\n}`;
                    return `${pattern} ${binding}=> ${to},`;
                })
                .join('\n');
            return `${pre} {\n${indent(arms)}\n}`;
        }
        case 'scope': {
            return (
                '{\n' +
                indent([...expr.definitions.map(format), format(expr.expression)].join('\n')) +
                '\n}'
            );
        }
        case 'struct': {
            const spread = expr.spread.map((s) => '...' + bracketFormat(s));
            const fields = expr.fields.map((f) => {
                let type = format(f.type);
                if (isMultiline(type)) {
                    type = indent(type).trimStart();
                }
                return f.name + ': ' + type;
            });

            if (spread.length + fields.length === 0) {
                return expr.name;
            }

            if (!spread.some(isMultiline) && !fields.some(isMultiline)) {
                const singleLine = expr.name + ' { ' + [...spread, ...fields].join(', ') + ' }';
                if (singleLine.length <= MAX_EXPRESSION_LENGTH) {
                    return singleLine;
                }
            }
            return (
                expr.name +
                ' {\n' +
                indent([...spread, ...fields].map((l) => l + ',').join('\n')) +
                '\n}'
            );
        }
        default:
            return expr.toString();
    }
};

const formatType = (type: Type): string => {
    switch (type.underlying) {
        case 'any':
        case 'never':
        case 'number':
        case 'string': {
            return type.toString();
        }
        case 'union': {
            return formatIntersectionOrUnion(type.items, 'union');
        }
        case 'struct': {
            if (type.type !== 'instance') {
                return type.toString();
            }

            const { name, default: defaultInstance, fields: fieldInfo } = type.descriptor;
            if (type.fields.length === 0 || isSameType(defaultInstance, type)) {
                return name;
            }

            const fields = type.fields.map((f, i) => {
                let type = format(f);
                if (isMultiline(type)) {
                    type = indent(type).trimStart();
                }
                return fieldInfo[i].name + ': ' + type;
            });

            if (!fields.some(isMultiline)) {
                const singleLine = name + ' { ' + fields.join(', ') + ' }';
                if (singleLine.length <= MAX_EXPRESSION_LENGTH) {
                    return singleLine;
                }
            }
            return name + ' {\n' + indent(fields.map((l) => l + ',').join('\n')) + '\n}';
        }
        default:
            return assertNever(type);
    }
};

export const format = (value: Expression | Definition): string => {
    if (value.underlying === 'definition') {
        return formatDefinition(value);
    }
    return formatExpression(value);
};
