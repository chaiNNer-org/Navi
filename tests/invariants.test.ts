import { evaluate } from '../src/evaluate';
import { IntersectionExpression, UnionExpression } from '../src/expression';
import { intersect, isDisjointWith } from '../src/intersection';
import { isSubsetOf } from '../src/relation';
import { NeverType, NumberType, StringType, Type } from '../src/types';
import { isSameType } from '../src/types-util';
import { union } from '../src/union';
import { without } from '../src/without';
import { expressions, nonStructTypes, numbers, strings, types } from './data';
import { assertSame, scope } from './scope';

const fail = (reason: string) => {
    throw new Error(reason);
};

interface SetElements {
    name: string;
    universe: Type;
    testElements: readonly Type[];
}
const testSetInvariants = ({ name, universe, testElements }: SetElements): void => {
    const assertSame2 = (
        fn: () => readonly [Type, Type],
        equation: string,
        inputs: Partial<Record<'A' | 'B' | 'C' | 'D', Type>>
    ): void => {
        const [left, right] = fn();
        const l = left.getTypeId();
        const r = right.getTypeId();
        if (l !== r) {
            let prefix = Object.entries(inputs)
                .map(([k, v]) => `${k} = ${v.getTypeId()}`)
                .join('\n');
            prefix += '\n' + equation + '\n';

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _ = fn();

            expect(prefix + 'l: ' + l).toBe(prefix + 'r: ' + r);
        }
    };

    const test1 = (eq: string, f: (a: Type) => [Type, Type]): void => {
        for (const a of testElements) {
            assertSame2(() => f(a), eq, { A: a });
        }
    };
    const test2 = (eq: string, f: (a: Type, b: Type) => [Type, Type]): void => {
        for (const a of testElements) {
            for (const b of testElements) {
                assertSame2(() => f(a, b), eq, { A: a, B: b });
            }
        }
    };
    const test3 = (eq: string, f: (a: Type, b: Type, c: Type) => [Type, Type]): void => {
        for (const a of testElements) {
            for (const b of testElements) {
                for (const c of testElements) {
                    assertSame2(() => f(a, b, c), eq, { A: a, B: b, C: c });
                }
            }
        }
    };

    describe('set invariants for ' + name, () => {
        // single element

        test1('A & A = A', (a) => [intersect(a, a), a]);
        test1('A & A = A', (a) => [union(a, a), a]);
        test1('A \\ A = ∅', (a) => [without(a, a), NeverType.instance]);
        test1('A \\ U = ∅', (a) => [without(a, universe), NeverType.instance]);
        test1('U \\ (U \\ A) = A', (a) => [without(universe, without(universe, a)), a]);

        test2('A & B = B & A', (a, b) => [intersect(a, b), intersect(b, a)]);
        test2('A | B = B | A', (a, b) => [union(a, b), union(b, a)]);
        test2('A \\ B = A & (W \\ B)', (a, b) => [
            without(a, b),
            intersect(a, without(universe, b)),
        ]);
        test2('A \\ B = (A | B) \\ B', (a, b) => [without(a, b), without(union(a, b), b)]);
        test2('A \\ (B \\ A) = A', (a, b) => [without(a, without(b, a)), a]);
        test2('((A | B) \\ A) \\ B = ∅', (a, b) => [
            without(without(union(a, b), a), b),
            NeverType.instance,
        ]);
        test2('(A \\ B) & B = ∅', (a, b) => [intersect(without(a, b), b), NeverType.instance]);

        test3('A & (B & C) = (A & B) & C', (a, b, c) => [
            intersect(a, intersect(b, c)),
            intersect(intersect(a, b), c),
        ]);
        test3('A | (B | C) = (A | B) | C', (a, b, c) => [
            union(a, union(b, c)),
            union(union(a, b), c),
        ]);
        test3('A & (B | C) = (A & B) | (A & C)', (a, b, c) => [
            intersect(a, union(b, c)),
            union(intersect(a, b), intersect(a, c)),
        ]);
        test3('A | (B & C) = (A | B) & (A | C)', (a, b, c) => [
            union(a, intersect(b, c)),
            intersect(union(a, b), union(a, c)),
        ]);
        test3('A \\ (B | C) = (A \\ B) & (A \\ C)', (a, b, c) => [
            without(a, union(b, c)),
            intersect(without(a, b), without(a, c)),
        ]);
        test3('A \\ (B & C) = (A \\ B) | (A \\ C)', (a, b, c) => [
            without(a, intersect(b, c)),
            union(without(a, b), without(a, c)),
        ]);

        test('A ⊆ A', () => {
            for (const a of testElements) {
                if (!isSubsetOf(a, a)) {
                    fail(`Expected ${a.toString()} to be a subset of itself`);
                }
            }
        });
        test('A \\ B ⊆ A', () => {
            for (const a of testElements) {
                for (const b of testElements) {
                    const r = without(a, b);
                    if (!isSubsetOf(r, a)) {
                        fail(
                            `Expected ${a.toString()} \\ ${b.toString()} = ${r.toString()} to be a subset of ${a.toString()}`
                        );
                    }
                }
            }
        });
        test('A ⊆ B ∧ B ⊆ C -> A ⊆ C', () => {
            for (const a of testElements) {
                for (const b of testElements) {
                    if (isSubsetOf(a, b)) {
                        for (const c of testElements) {
                            if (isSubsetOf(b, c)) {
                                if (!isSubsetOf(a, c)) {
                                    fail(
                                        `Expected ${a.toString()} to be a subset of ${c.toString()}`
                                    );
                                }
                            }
                        }
                    }
                }
            }
        });
        test('A∩B!=∅ -> A \\ B != A', () => {
            for (const a of testElements) {
                for (const b of testElements) {
                    if (!isDisjointWith(a, b)) {
                        const r = without(a, b);
                        if (isSameType(r, a)) {
                            fail(
                                `Expected ${a.toString()} \\ ${b.toString()} = ${r.toString()} to be different from ${a.toString()}`
                            );
                        }
                    }
                }
            }
        });
    });
};

testSetInvariants({
    name: 'number',
    universe: NumberType.instance,
    testElements: numbers,
});
testSetInvariants({
    name: 'string',
    universe: StringType.instance,
    testElements: strings,
});

describe('set invariants', () => {
    test('A ∩ A = A', () => {
        for (const a of expressions) {
            assertSame(a, new IntersectionExpression([a, a]));
        }
    });
    test('A ∩ B = B ∩ A', () => {
        for (const a of types) {
            for (const b of types) {
                assertSame(new IntersectionExpression([a, b]), new IntersectionExpression([b, a]));
            }
        }
    });
    test('A ∩ (B ∩ C) = (A ∩ B) ∩ C', () => {
        for (const a of types) {
            for (const b of types) {
                for (const c of types) {
                    assertSame(
                        new IntersectionExpression([
                            a,
                            evaluate(new IntersectionExpression([b, c]), scope),
                        ]),
                        new IntersectionExpression([
                            evaluate(new IntersectionExpression([a, b]), scope),
                            c,
                        ])
                    );
                }
            }
        }
    });

    test('A ∪ A = A', () => {
        for (const a of expressions) {
            assertSame(a, new UnionExpression([a, a]));
        }
    });
    test('A ∪ B = B ∪ A', () => {
        for (const a of types) {
            for (const b of types) {
                assertSame(new UnionExpression([a, b]), new UnionExpression([b, a]));
            }
        }
    });
    test('A ∪ (B ∪ C) = (A ∪ B) ∪ C', () => {
        for (const a of types) {
            for (const b of types) {
                for (const c of types) {
                    assertSame(
                        new UnionExpression([a, evaluate(new UnionExpression([b, c]), scope)]),
                        new UnionExpression([evaluate(new UnionExpression([a, b]), scope), c])
                    );
                }
            }
        }
    });

    test('A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)', () => {
        for (const a of nonStructTypes) {
            for (const b of nonStructTypes) {
                for (const c of nonStructTypes) {
                    assertSame(
                        new UnionExpression([a, new IntersectionExpression([b, c])]),
                        new IntersectionExpression([
                            new UnionExpression([a, b]),
                            new UnionExpression([a, c]),
                        ])
                    );
                }
            }
        }
    });
    test('A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)', () => {
        for (const a of nonStructTypes) {
            for (const b of nonStructTypes) {
                for (const c of nonStructTypes) {
                    assertSame(
                        new IntersectionExpression([a, new UnionExpression([b, c])]),
                        new UnionExpression([
                            new IntersectionExpression([a, b]),
                            new IntersectionExpression([a, c]),
                        ])
                    );
                }
            }
        }
    });

    test('A \\ A = ∅', () => {
        for (const a of expressions.map((e) => evaluate(e, scope))) {
            const actual = without(a, a);
            if (actual.type !== 'never') {
                const prefix = `A = ${a.toString()}\nA \\ A = `;
                expect(prefix + actual.toString()).toBe(`${prefix}never`);
            }
        }
    });
    test('A \\ B ⊆ A', () => {
        for (const a of types) {
            for (const b of types) {
                const r = without(a, b);
                if (!isSubsetOf(r, a)) {
                    fail(
                        `Expected ${a.toString()} \\ ${b.toString()} = ${r.toString()} to be a subset of ${a.toString()}`
                    );
                }
            }
        }
    });
    test('A∩B!=∅ -> A \\ B != A', () => {
        const targets = [...strings];
        for (const a of targets) {
            for (const b of targets) {
                if (!isDisjointWith(a, b)) {
                    const r = without(a, b);
                    if (isSameType(r, a)) {
                        expect(
                            `Expected ${a.toString()} \\ ${b.toString()} = ${r.toString()} to be different from ${a.toString()}`
                        ).toBeFalsy();
                    }
                }
            }
        }
    });
    test('((A | B) \\ A) \\ B = ∅', () => {
        for (const a of nonStructTypes) {
            for (const b of nonStructTypes) {
                const actual = without(without(union(a, b), a), b);
                if (actual.type !== 'never') {
                    const prefix = `a = ${a.toString()}\nb = ${b.toString()}\n((a | b) \\ a) \\ b = `;
                    expect(prefix + actual.toString()).toBe(`${prefix}never`);
                }
            }
        }
    });
});
