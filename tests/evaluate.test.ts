import { evaluate } from '../src/evaluate';
import {
    Expression,
    FunctionCallExpression,
    MatchArm,
    MatchExpression,
    NamedExpression,
    UnionExpression,
} from '../src/expression';
import { parseExpression } from '../src/parse';
import { SourceDocument } from '../src/source';
import { AnyType, NeverType, NumberType, StringLiteralType, StringType, Type } from '../src/types';
import { intInterval, literal } from '../src/types-util';
import { without } from '../src/without';
import {
    bools,
    expressions,
    numbers,
    orderedPairs,
    potentiallyInvalidExpressions,
    sets,
    strings,
    types,
    unorderedPairs,
} from './data';
import { assertSame, scope } from './scope';

const isIncompatibleUnderlyingType = (a: Type, b: Type): boolean => {
    if (a.underlying === 'any' || a.underlying === 'never') return false;
    if (b.underlying === 'any' || b.underlying === 'never') return false;

    const getApproximateUnderlying = (t: Type): Type['underlying'] => {
        if (t.underlying !== 'union') return t.underlying;
        const u = [...new Set(t.items.map((i) => i.underlying))];
        if (u.length === 1) return u[0];
        return 'any';
    };

    return getApproximateUnderlying(a) !== getApproximateUnderlying(b);
};

test('Expression evaluation', () => {
    const actual = [...expressions, ...potentiallyInvalidExpressions]
        .map((e) => {
            let result;
            try {
                result = evaluate(e, scope).toString();
            } catch (error) {
                result = String(error);
            }
            return `${e.toString()} => ${result}`;
        })
        .join('\n');
    expect(actual).toMatchSnapshot();
});

describe('without', () => {
    test('evaluation', () => {
        const actual = orderedPairs(types.filter((t) => t.type !== 'any' && t.type !== 'never'))
            .filter(([a, b]) => !isIncompatibleUnderlyingType(a, b))
            .map(([a, b]) => {
                let result;
                try {
                    result = without(a, b).toString();
                } catch (error) {
                    result = String(error);
                }
                return `${a.toString()} \\ ${b.toString()} => ${result}`;
            })
            .join('\n');
        expect(actual).toMatchSnapshot();
    });
});

describe('Builtin functions', () => {
    const testUnary = (name: string, data: readonly Type[]) => {
        test(name, () => {
            const actual = [...data, ...sets]
                .map((e) => new FunctionCallExpression(name, [e]))
                .map((e) => {
                    let result;
                    try {
                        result = evaluate(e, scope).toString();
                    } catch (error) {
                        result = String(error);
                    }
                    return `${e.toString()} => ${result}`;
                })
                .join('\n');
            expect(actual).toMatchSnapshot();
        });
    };
    const testBinary = (
        name: string,
        data: readonly Type[],
        {
            commutative = false,
            reflexive = false,
            associative = false,
        }: { commutative?: boolean; reflexive?: boolean; associative?: boolean } = {}
    ) => {
        describe(name, () => {
            test('evaluate', () => {
                const inputs = commutative ? unorderedPairs(data) : orderedPairs(data);

                const actual = inputs
                    .map((args) => new FunctionCallExpression(name, args))
                    .map((e) => {
                        let result;
                        try {
                            result = evaluate(e, scope).toString();
                        } catch (error) {
                            result = String(error);
                        }
                        return `${e.toString()} => ${result}`;
                    })
                    .join('\n');
                expect(actual).toMatchSnapshot();
            });

            if (commutative) {
                test('commutative', () => {
                    for (const a of data) {
                        for (const b of data) {
                            assertSame(
                                new FunctionCallExpression(name, [a, b]),
                                new FunctionCallExpression(name, [b, a])
                            );
                        }
                    }
                });
            }

            if (reflexive) {
                test('reflexive', () => {
                    for (const a of data) {
                        assertSame(a, new FunctionCallExpression(name, [a, a]));
                    }
                });
            }

            if (associative) {
                test('associative', () => {
                    for (const a of data) {
                        for (const b of data) {
                            for (const c of data) {
                                assertSame(
                                    new FunctionCallExpression(name, [
                                        a,
                                        evaluate(new FunctionCallExpression(name, [b, c]), scope),
                                    ]),
                                    new FunctionCallExpression(name, [
                                        evaluate(new FunctionCallExpression(name, [a, b]), scope),
                                        c,
                                    ])
                                );
                            }
                        }
                    }
                });
            }
        });
    };
    const testBinary2 = (name: string, data1: readonly Type[], data2: readonly Type[]) => {
        describe(name, () => {
            test('evaluate', () => {
                const inputs = data1.flatMap((a) => data2.map((b) => [a, b] as const));

                const actual = inputs
                    .map((args) => new FunctionCallExpression(name, args))
                    .map((e) => {
                        let result;
                        try {
                            result = evaluate(e, scope).toString();
                        } catch (error) {
                            result = String(error);
                        }
                        return `${e.toString()} => ${result}`;
                    })
                    .join('\n');
                expect(actual).toMatchSnapshot();
            });
        });
    };

    testUnary('abs', numbers);
    testUnary('number::neg', numbers);
    testUnary('round', numbers);
    testUnary('floor', numbers);
    testUnary('number::rec', numbers);

    testUnary('degToRad', numbers);
    testUnary('sin', numbers);
    testUnary('cos', numbers);

    testUnary('exp', numbers);
    testUnary('log', numbers);

    testBinary('min', numbers, { commutative: true, reflexive: true, associative: true });
    testBinary('number::add', numbers, { commutative: true, reflexive: false, associative: false });
    testBinary('number::mul', numbers, { commutative: true, reflexive: false, associative: false });
    testBinary('mod', numbers);
    testBinary('pow', numbers);
    testBinary('number::lt', numbers);
    testBinary('number::lte', numbers);

    testUnary('invStrSet', strings);
    testBinary('string::includes', strings);
    testBinary('string::startsWith', strings);
    testBinary('string::endsWith', strings);
    testBinary2('string::repeat', strings, [
        literal(0),
        literal(1),
        literal(2),
        literal(10),
        literal(100),
        intInterval(0, 1),
        intInterval(2, 6),
        intInterval(0, Infinity),
        intInterval(-1, Infinity),
    ]);

    testBinary('bool::and', bools);
    testBinary('bool::or', bools);
    testUnary('bool::not', bools);

    testBinary('any::eq', [...bools, NeverType.instance, AnyType.instance]);
});

describe('Match', () => {
    // typeName(x) = match x { number => "number", string => "string", null => "null", any => "other" }
    const typeName = (e: Expression) =>
        new MatchExpression(e, [
            new MatchArm(literal(2), undefined, new StringLiteralType('2')),
            new MatchArm(NumberType.instance, undefined, new StringLiteralType('number')),
            new MatchArm(StringType.instance, undefined, new StringLiteralType('string')),
            new MatchArm(new NamedExpression('null'), undefined, new StringLiteralType('null')),
            new MatchArm(AnyType.instance, undefined, new StringLiteralType('other')),
        ]);

    test('no arms', () => {
        for (const type of types) {
            assertSame(new MatchExpression(type, []), NeverType.instance);
        }
    });
    test('default', () => {
        const value = new StringLiteralType('hey yo');
        for (const type of types) {
            const expected = type.type === 'never' ? NeverType.instance : value;
            assertSame(
                new MatchExpression(type, [new MatchArm(AnyType.instance, undefined, value)]),
                expected
            );
        }
    });
    test('type name mapping', () => {
        // by the properties of match, typeName(X | Y) == typeName(X) | typeName(Y)
        for (const a of types) {
            for (const b of types) {
                assertSame(
                    typeName(new UnionExpression([a, b])),
                    new UnionExpression([typeName(a), typeName(b)])
                );
            }
        }
    });

    test('evaluate', () => {
        const actual = types
            .map(typeName)
            .map((e) => {
                let result;
                try {
                    result = evaluate(e, scope).toString();
                } catch (error) {
                    result = String(error);
                }
                return `${e.toString()} => ${result}`;
            })
            .join('\n');
        expect(actual).toMatchSnapshot();
    });
});

test('Snippet evaluation', () => {
    const snippets: readonly string[] = [
        String.raw`1 + 1`,
        String.raw`2 * uint`,
        String.raw`true | false`,

        String.raw`let foo: int = 4; foo`,
        String.raw`let foo: int = 1.2; foo`,
        String.raw`let foo: int = "1"; foo`,

        String.raw`def foo(): int = 4; foo()`,
        String.raw`def foo(): int = 1.2; foo()`,
        String.raw`def foo(): int = "1"; foo()`,
    ];

    const actual = snippets
        .map((s) => {
            let result: string;
            try {
                const e = parseExpression(new SourceDocument(s, 'snippet'));
                result = evaluate(e, scope).toString();
            } catch (error) {
                result = String(error);
            }
            return `${s}\n=>> ${result}`;
        })
        .join('\n\n');
    expect(actual).toMatchSnapshot();
});
