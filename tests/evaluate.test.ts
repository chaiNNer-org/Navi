import { evaluate } from '../src/evaluate';
import {
    Expression,
    FunctionCallExpression,
    MatchArm,
    MatchExpression,
    NamedExpression,
    UnionExpression,
} from '../src/expression';
import { AnyType, NeverType, NumberType, StringLiteralType, StringType, Type } from '../src/types';
import { literal } from '../src/types-util';
import { without } from '../src/without';
import {
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
    const testUnaryNumber = (name: string) => {
        test(name, () => {
            const actual = [...numbers, ...sets]
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
    const testUnaryString = (name: string) => {
        test(name, () => {
            const actual = [...strings, ...sets]
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
    const testBinaryNumber = (
        name: string,
        properties: { commutative: boolean; reflexive: boolean; associative: boolean }
    ) => {
        describe(name, () => {
            test('evaluate', () => {
                const inputs = properties.commutative
                    ? unorderedPairs(numbers)
                    : orderedPairs(numbers);

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

            if (properties.commutative) {
                test('commutative', () => {
                    for (const a of numbers) {
                        for (const b of numbers) {
                            assertSame(
                                new FunctionCallExpression(name, [a, b]),
                                new FunctionCallExpression(name, [b, a])
                            );
                        }
                    }
                });
            }

            if (properties.reflexive) {
                test('reflexive', () => {
                    for (const a of numbers) {
                        assertSame(a, new FunctionCallExpression(name, [a, a]));
                    }
                });
            }

            if (properties.associative) {
                test('associative', () => {
                    for (const a of numbers) {
                        for (const b of numbers) {
                            for (const c of numbers) {
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

    testUnaryNumber('abs');
    testUnaryNumber('number::neg');
    testUnaryNumber('round');
    testUnaryNumber('floor');
    testUnaryNumber('number::rec');

    testUnaryNumber('degToRad');
    testUnaryNumber('sin');
    testUnaryNumber('cos');

    testUnaryNumber('exp');
    testUnaryNumber('log');

    testBinaryNumber('min', { commutative: true, reflexive: true, associative: true });
    testBinaryNumber('number::add', { commutative: true, reflexive: false, associative: false });
    testBinaryNumber('number::mul', { commutative: true, reflexive: false, associative: false });
    testBinaryNumber('mod', { commutative: false, reflexive: false, associative: false });
    testBinaryNumber('pow', { commutative: false, reflexive: false, associative: false });
    testBinaryNumber('number::lt', { commutative: false, reflexive: false, associative: false });
    testBinaryNumber('number::lte', { commutative: false, reflexive: false, associative: false });

    testUnaryString('invStrSet');
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
