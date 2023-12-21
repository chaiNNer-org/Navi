import { INT } from '../src/constants';
import { evaluate } from '../src/evaluate';
import {
    Expression,
    FunctionCallExpression,
    MatchArm,
    MatchExpression,
    NamedExpression,
    UnionExpression,
} from '../src/expression';
import { intersect } from '../src/intersection';
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
    const testUnary = (
        name: string,
        data: readonly Type[],
        { inverter = false, oneAndDone = false }: { inverter?: boolean; oneAndDone?: boolean } = {}
    ) => {
        describe(name, () => {
            test('evaluate', () => {
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

            if (inverter) {
                test('inverter', () => {
                    for (const a of data) {
                        assertSame(
                            new FunctionCallExpression(name, [
                                new FunctionCallExpression(name, [a]),
                            ]),
                            a
                        );
                    }
                });
            }
            if (oneAndDone) {
                test('one and done', () => {
                    for (const a of data) {
                        assertSame(
                            new FunctionCallExpression(name, [a]),
                            new FunctionCallExpression(name, [
                                new FunctionCallExpression(name, [a]),
                            ])
                        );
                    }
                });
            }
        });
    };
    const testBinary = (
        name: string,
        data: readonly Type[],
        {
            testName = name,
            evaluate: evaluateTest = true,
            commutative = false,
            reflexive = false,
            associative = false,
        }: {
            testName?: string;
            evaluate?: boolean;
            commutative?: boolean;
            reflexive?: boolean;
            associative?: boolean;
        } = {}
    ) => {
        describe(testName, () => {
            if (evaluateTest) {
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
            }

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
                                        new FunctionCallExpression(name, [b, c]),
                                    ]),
                                    new FunctionCallExpression(name, [
                                        new FunctionCallExpression(name, [a, b]),
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
    const testCall = (name: string, ...data: (readonly Type[])[]) => {
        describe(name, () => {
            test('evaluate', () => {
                let inputs: Type[][] = [[]];
                for (const types of data) {
                    inputs = inputs.flatMap((a) => types.map((b) => [...a, b]));
                }

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

    testUnary('abs', numbers, { oneAndDone: true });
    testUnary('number::neg', numbers, { inverter: true });
    testUnary('round', numbers, { oneAndDone: true });
    testUnary('floor', numbers, { oneAndDone: true });
    testUnary('number::rec', numbers);

    testUnary('number::degToRad', numbers);
    testUnary('number::sin', numbers);
    testUnary('number::cos', numbers);

    testUnary('number::exp', numbers);
    testUnary('number::log', numbers);

    const ints = numbers.map((n) => intersect(n, INT)).filter((n) => n.type !== 'never');

    testBinary('min', numbers, { commutative: true, reflexive: true, associative: true });
    testBinary('number::add', numbers, { commutative: true, associative: false });
    testBinary('number::add', ints, {
        testName: 'number::add with ints',
        evaluate: false,
        commutative: true,
        associative: true,
    });
    testBinary('number::mul', numbers, { commutative: true, associative: false });
    testBinary('number::mod', numbers);
    testBinary('number::pow', numbers);
    testBinary('number::lt', numbers);
    testBinary('number::lte', numbers);

    testCall(
        'number::parseInt',
        [
            ...strings,
            literal('1'),
            literal('123'),
            literal('-123'),
            literal('+123'),
            literal('0123'),
            literal('0xf'),
            literal('0b1001'),
            literal('0o777'),
            literal('0o1'),
            literal('123.2'),
            literal('123f'),
            literal('  3  '),
        ],
        [literal(2), literal(4), literal(8), literal(10), literal(16), literal(36)]
    );

    testUnary('invStrSet', strings);
    testUnary('string::len', strings);
    testBinary('string::indexOf', strings);
    testBinary('string::includes', strings);
    testBinary('string::startsWith', strings);
    testBinary('string::endsWith', strings);
    testCall('string::repeat', strings, [
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
    testCall(
        'string::slice',
        strings,
        [
            literal(0),
            literal(1),
            literal(2),
            literal(10),
            literal(100),
            literal(-1),
            literal(-2),
            literal(-10),
            literal(-100),
            intInterval(0, 1),
            intInterval(2, 6),
            intInterval(0, Infinity),
            intInterval(-1, Infinity),
            intInterval(-1, 1),
        ],
        [
            literal(0),
            literal(1),
            literal(2),
            literal(10),
            literal(100),
            literal(Infinity),
            intInterval(0, 1),
            intInterval(2, 6),
            intInterval(0, Infinity),
        ]
    );
    testCall(
        'string::replace',
        strings,
        strings,
        [literal('x')],
        [literal(0), literal(1), intInterval(0, 2), literal(Infinity)]
    );

    testBinary('bool::and', bools, { commutative: true, reflexive: true, associative: true });
    testBinary('bool::or', bools, { commutative: true, reflexive: true, associative: true });
    testUnary('bool::not', bools, { inverter: true });

    testBinary('any::eq', [...bools, NeverType.instance, AnyType.instance], { commutative: true });
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
        // no arms are only valid if the match expression is never
        assertSame(new MatchExpression(NeverType.instance, []), NeverType.instance);

        for (const type of types) {
            if (type.type !== 'never') {
                expect(() => evaluate(new MatchExpression(type, []), scope)).toThrow();
            }
        }
    });
    test('never', () => {
        // match on never is always never
        assertSame(
            new MatchExpression(NeverType.instance, [
                new MatchArm(AnyType.instance, undefined, AnyType.instance),
            ]),
            NeverType.instance
        );
    });
    test('exhaustive', () => {
        const lines: string[] = [];

        for (const a of types) {
            for (const b of types) {
                const e = new MatchExpression(a, [new MatchArm(b, undefined, literal(1))]);

                let result;
                try {
                    result = evaluate(e, scope).toString();
                } catch (error) {
                    result = String(error);
                }

                lines.push(`${e.toString()}\n => ${result}`);
            }
        }

        expect(lines.join('\n\n')).toMatchSnapshot();
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

        String.raw`1 == 1`,
        String.raw`1 != 1`,
        String.raw`1 > 1`,
        String.raw`1 >= 1`,
        String.raw`1 < 1`,
        String.raw`1 <= 1`,
        String.raw`"foo" == "foo"`,
        String.raw`"foo" == "bar"`,
        String.raw`"foo" == bool`,
        String.raw`true == true`,
        String.raw`true != false`,

        String.raw`string | number`,
        String.raw`string | anyStruct`,
        String.raw`number | anyStruct`,
        String.raw`string | number | anyStruct`,
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
