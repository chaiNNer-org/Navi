import { format } from '../src/format';
import { parseExpression } from '../src/parse';
import { SourceDocument } from '../src/source';

const expressionSnippets: string[] = [
    // comments and spaces
    String.raw`/* some comment */ 0 // another comment
    // and another`,

    // numbers
    String.raw`0`,
    String.raw`123`,
    String.raw`-123`,
    String.raw`-123e45`,
    String.raw`-123E+45`,
    String.raw`123e-45`,
    String.raw`123.456e-45`,
    String.raw`-123.456E-45`,
    String.raw`nan`,
    String.raw`inf`,
    String.raw`-inf`,

    // intervals
    String.raw`1..2`,
    String.raw`1..2.5`,
    String.raw`1e2..2.5e4`,
    String.raw`-inf..inf`,
    String.raw`-inf..0`,
    String.raw`..`,
    String.raw`..0`,
    String.raw`1..`,

    String.raw`1!..2`,
    String.raw`1!..2.5`,
    String.raw`1e2!..2.5e4`,
    String.raw`-inf!..inf`,
    String.raw`-inf!..0`,
    String.raw`!..`,
    String.raw`!..0`,
    String.raw`1!..`,

    String.raw`1..!2`,
    String.raw`1..!2.5`,
    String.raw`1e2..!2.5e4`,
    String.raw`-inf..!inf`,
    String.raw`-inf..!0`,
    String.raw`..!`,
    String.raw`..!0`,
    String.raw`1..!`,

    String.raw`1!..!2`,
    String.raw`1!..!2.5`,
    String.raw`1e2!..!2.5e4`,
    String.raw`-inf!..!inf`,
    String.raw`-inf!..!0`,
    String.raw`!..!`,
    String.raw`!..!0`,
    String.raw`1!..!`,

    // int intervals
    String.raw`int(1..2)`,
    String.raw`  int   (   1..2   )  `,
    String.raw`int(1e2..2.5e4)`,
    String.raw`int(-inf..inf)`,
    String.raw`int(-inf..0)`,
    String.raw`int(..)`,
    String.raw`int(..0)`,
    String.raw`int(1..)`,

    // non-int intervals
    String.raw`nonInt(1..2)`,
    String.raw`  nonInt   (   1..2   )  `,
    String.raw`nonInt(1e2..2.5e4)`,
    String.raw`nonInt(-inf..inf)`,
    String.raw`nonInt(-inf..0)`,
    String.raw`nonInt(..)`,
    String.raw`nonInt(..0)`,
    String.raw`nonInt(1..)`,

    // strings
    String.raw`""`,
    String.raw`"foo"`,
    String.raw`"foo\r\n\""`,

    // function call
    String.raw`foo()`,
    String.raw`foo(1)`,
    String.raw`foo(1, )`,
    String.raw`foo(1, 2)`,
    String.raw`foo(1, 2,)`,
    String.raw`foo (  1  , 2  )`,
    String.raw`any()`,
    String.raw`never()`,
    String.raw`number()`,
    String.raw`string()`,
    String.raw`int()`,
    String.raw`uint()`,
    String.raw`foo::bar::baz()`,

    // named
    String.raw`null`,
    String.raw`foo`,
    String.raw`foo {}`,
    String.raw`foo { foo: 3 }`,
    String.raw`foo { foo: uint }`,
    String.raw`Image { width: uint, height: uint, channels: int(1..inf) }`,
    String.raw`bar { any: any, never: never, number: number, string: string }`,
    String.raw`foo::bar::baz`,
    String.raw`foo::bar::baz {}`,
    String.raw`Image { ...never }`,
    String.raw`Image { ...i, height: uint, channels: int(1..inf) }`,
    String.raw`Image { .....3 }`,
    String.raw`Image { ...i , }`,
    String.raw`Image { ...i, ...j }`,
    String.raw`Image { width, height, channels: 3 }`,

    // match
    String.raw`match never {}`,
    String.raw`match (a) {}`,
    String.raw`match a|b {}`,
    String.raw`match a {}`,
    String.raw`match a {} {}`,
    String.raw`match a { foo: uint } { number => 1 }`,
    String.raw`match a { number => 1, }`,
    String.raw`match a { number => 1, string => 2, any => 5 }`,
    String.raw`match a { number => 1, string => 2, _ => 5 }`,
    String.raw`match a { _ => 234, number => 1, string => 2, _ => 5 }`,
    String.raw`match a {  number as foo => add(foo, 1), _ as foo => foo, }`,
    String.raw`match a { 1 | 2 as foo => add(foo, 1), "bar" => "baz", _ as foo => foo, }`,
    String.raw`match a { foo::bar => baz, }`,

    // if
    String.raw`if a { 1 } else { 2 }`,
    String.raw`if (a) { 1 } else { 2 }`,
    String.raw`if a { 1 } else if b { 2 } else { 3}`,

    // field access
    String.raw`a.b.c.d.e.f`,
    String.raw`foo::bar.baz`,
    String.raw`foo { foo: uint }.foo`,
    String.raw`a::and::or::not::b.c`,

    // intersection and union
    String.raw`a | b | c | d`,
    String.raw`a & b & c & d`,
    String.raw`a & b | c & d`,

    // comparisons
    String.raw`a == b`,
    String.raw`a != b`,
    String.raw`a > b`,
    String.raw`a >= b`,
    String.raw`a < b`,
    String.raw`a <= b`,
    String.raw`a == b & c`,
    String.raw`a == b | c`,
    String.raw`a == b * c`,

    // arithmetic
    String.raw`a + b - c + d - e + f`,
    String.raw`a * b / c * d / e * f`,
    String.raw`a * (-b+c) / -2`,
    String.raw`-a--b`,
    String.raw`-a+-b`,
    String.raw`a + b * c`,
    String.raw`-100 - -100`,
    String.raw`a---100`,

    // logical
    String.raw`not a and b or c`,
    String.raw`a and b or c`,
    String.raw`bool::and(a, b or c)`,
    String.raw`a::and and b::or or c::not`,

    // scope
    String.raw`{ 0 }`,
    String.raw`{ let foo = 0; foo }`,
    String.raw`{ def getFoo() = 0; getFoo() }`,
    String.raw`{ def getFoo() { 0 } getFoo() }`,
    String.raw`{ struct Foo { bar: 0 } Foo.bar }`,

    // definitions

    // struct
    String.raw`struct false; false`,
    String.raw`struct Image { width: uint, height: uint, channels: int(1..) } Image`,
    String.raw`struct foo::bar; foo::bar`,

    // let
    String.raw`let bool = true | false; bool`,
    String.raw`let std::bool = true | false; std::bool`,
    String.raw`let a: int = 0; a`,
    String.raw`let a: any = 0; a`,

    // enum
    String.raw`enum Direction { North, East, South, West } Direction`,
    String.raw`enum Empty { } Empty`,

    // def
    String.raw`def inc(a: number) = add(a, 1); inc(0)`,
    String.raw`def math :: inc(a: number) = add(a, 1); math::inc(0)`,
    String.raw`def foo(a: int): int = a; foo(int)`,
    String.raw`def foo(a: int): int { a + 1 } foo(int)`,
    String.raw`def foo(a: uint): Image { width: uint } { let width = a + 1; Image { width: width } } foo(int)`,
];
const invalidExpressionSnippets: string[] = [
    String.raw``,

    // numbers
    String.raw`öäü0`,
    String.raw`+0`,
    String.raw`+123`,
    String.raw`.2e4`,
    String.raw`2.`,
    String.raw`+inf`,

    // intervals
    String.raw`1..1`,
    String.raw`2..1`,
    String.raw`-inf..nan`,
    String.raw`nan..nan`,

    // int intervals
    String.raw`int(1..2.5)`,
    String.raw`int(1..1)`,
    String.raw`int(2..1)`,
    String.raw`int(-inf..nan)`,
    String.raw`int(nan..nan)`,

    // non-int intervals
    String.raw`nonInt(1..2.5)`,
    String.raw`nonInt(1..1)`,
    String.raw`nonInt(2..1)`,
    String.raw`nonInt(-inf..nan)`,
    String.raw`nonInt(nan..nan)`,

    // strings
    String.raw`"""`,
    String.raw`"\g"`,
    String.raw`"
    "`,

    // function call
    String.raw`as()`,
    String.raw`match()`,
    String.raw`struct()`,
    String.raw`let()`,
    String.raw`def()`,
    String.raw`bar.baz()`,
    String.raw`foo::bar.baz()`,

    // named
    String.raw`match { }`,
    String.raw`as { }`,
    String.raw`struct { }`,
    String.raw`def { }`,
    String.raw`let { }`,
    String.raw`foo { as: as }`,
    String.raw`Image { , height: uint }`,
    String.raw`Image { height: uint, ...i,}`,

    // match
    String.raw`match a`,
    String.raw`match a { foo: uint }`,
    String.raw`match a { foo as bar::baz }`,

    // if
    String.raw`if a`,
    String.raw`if a 1 else 2`,
    String.raw`if a { 2 }`,
    String.raw`if a { 2 } else if b { 3 }`,

    // field access
    String.raw`a.match`,
    String.raw`a.as`,
    String.raw`a.def`,
    String.raw`a.let`,
    String.raw`a.struct`,
    String.raw`a.1`,
    String.raw`a.b.(c.d).e.f`,
    String.raw`a.`,
    String.raw`foo.bar::baz`,

    // intersection and union
    String.raw`a | b |`,
    String.raw`a & b &`,
    String.raw`| b`,
    String.raw`& b`,

    // comparisons
    String.raw`a === b`,
    String.raw`a !== b`,
    String.raw`a == b | c == d`,
    String.raw`a == b & c == d`,
    String.raw`a == b || c == d`,
    String.raw`a == b && c == d`,

    // arithmetic
    String.raw`a-`,
    String.raw`a+`,
    String.raw`a*`,
    String.raw`a/`,
    String.raw`+a`,
    String.raw`*a`,
    String.raw`/a`,
    String.raw`--a`,
    String.raw`a+--a`,
    String.raw`a++a`,
    String.raw`a**a`,
    String.raw`a-100`,

    // logical
    String.raw`not not a`,
    String.raw`not and a`,
    String.raw`and and b`,

    // definitions

    // struct
    String.raw`struct A { a::bar: bool } A`,

    // enum
    String.raw`enum Direction { North, East, South, S::West } Direction`,

    // def
    String.raw`def inc(a::b: number) = add(a, 1); inc(0)`,
];

const expressionParsing = (expr: string): string => {
    let result: string;
    try {
        const parsed = parseExpression(new SourceDocument(expr, 'test document'));
        result = format(parsed);
    } catch (error) {
        result = String(error);
    }
    return `${expr
        .split('\n')
        .map((l) => (l ? '>>> ' + l : '>>>'))
        .join('\n')}\n${result}`;
};

test('Expression parsing', () => {
    const results = expressionSnippets.map(expressionParsing);
    expect(results.join('\n\n')).toMatchSnapshot();
});

test('Invalid expression parsing', () => {
    const results = invalidExpressionSnippets.map(expressionParsing);
    expect(results.join('\n\n')).toMatchSnapshot();
});

const complexExpressions = String.raw`
def bool::not(value: bool): bool {
    match value {
        true => false,
        false => true
    }
}
not true
---
def bool::not(value: bool): bool {
    if value { false } else { true }
}
not true
---
def any::neq(a: any, b: any): bool {
    not a == b
}
1 != 2
---
def string::includes(s: string, needle: string): bool {
    string::indexOf(s, needle) != nan
}
def string::startsWith(s: string, needle: string): bool {
    string::indexOf(s, needle) == 0
}
def string::endsWith(s: string, needle: string): bool {
    let l = string::len(needle);
    string::slice(s, -l, l) == needle
}
string::endsWith(s, "foo")
`
    .split(/^-{3,}$/m)
    .map((l) => l.trim())
    .filter(Boolean);

test('Parse complex expressions', () => {
    const results = complexExpressions.map(expressionParsing);
    expect(results.join('\n\n')).toMatchSnapshot();
});
