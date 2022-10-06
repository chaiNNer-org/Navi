import { evaluate } from '../src/evaluate';
import { IntersectionExpression, UnionExpression } from '../src/expression';
import { isDisjointWith } from '../src/intersection';
import { isSubsetOf } from '../src/relation';
import { isSameType } from '../src/types-util';
import { union } from '../src/union';
import { without } from '../src/without';
import { expressions, nonStructTypes, strings, types } from './data';
import { assertSame, scope } from './scope';

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
