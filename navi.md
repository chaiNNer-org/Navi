# Navi

Navi is type system, but also a programming language.
This document will explain basics of how Navi works.

## What are types?

Conceptually, types are sets of their possible value.
E.g. the type `string` is the set of all possible strings (e.g. `""`, `"foo"`), and the type `number` is the set of all numbers (e.g. 0, 1, -2, 3.14).

Since types are sets, set operations are as usual.
In particular, we denote set intersection as `A & B`, and set union as `A | B`, where `A` and `B` are types.
Set difference is also supported as `without(A, B)`, but with some limitation, [more on that later](#match).

However, types cannot be arbitrary sets.
E.g. the set of all prime numbers cannot be expressed in Navi.
Navi provides primitive types from which more types can be constructed. All sets that can be constructed from finitely many primitives are types.

## Why is this a programming language?

Many programming languages (e.g. C++, Rust, TypeScript) have turing-complete type systems. However, while these type systems are powerful, we typically don't think of them as programming languages.

Navi is different. Navi doesn't hide the fact that type systems are programming languages. It embraces it. So Navi's syntax is designed to be as close to a programming language as possible. E.g. here's how you define a type definition in Navi:

```
struct Size {
    width: uint,
    height: uint,
}
```

This would look pretty familiar to anyone who has programmed in Rust before. Here's how you define functions:

```
def area(size: Size): uint {
    size.width * size.height
}
def diagonal(size: Size): number {
    let x = size.width;
    let y = size.height;
    number::sqrt(x ** 2 + y ** 2)
}
```

Note that the last expression is the return value if the function. Aside from that, this should look pretty familiar again. This is how you would write this function in Rust, TypeScript, and many other languages, but it's done entirely within a type system.

Here's a more complex example to show that we are actually working in a type system:

```
def scale(size: Size, factor: 0..): Size {
    Size {
        width: uint & round(size.width * factor),
        height: uint & round(size.height * factor),
    }
}
```

Two things to note:

1. `0..`: This is the interval type containing all numbers greater than or equal to 0. This means that `factor` accepts values such as 0, 1, 2, 3.14, and inf.
2. `uint & round(...)`: This is a type intersection or type cast. This is needed, because the return type of `round(size.width * factor)` is actually `uint | nan` (because `0 * inf == nan`). Since `nan` isn't an unsigned integer, it's not assignable to `Size.width: uint`, so Navi actually gives us a type error when we try to write `Size { width: round(size.width * factor), ... }`. To fix this, we need to cast the return type of `round(size.width * factor)` to `uint` using the `&` operator.

As we can see, Navi is really strict about types, so we sometimes need to employ tricks (like type casts) to get the type system to accept our code.

## Primitive types

### `any`

This type represents the set containing all values.

### `never`

This type represents the empty set.

Within Navi, `never` generally represents a dead end or an error.
Assumptions about input types are typically represented using intersection.
E.g. "the result is an integer" would be expressed as `int & result`.
So if the assumption is not met, `never` appears.

### `number`

This type represents any real number plus ±infinity and NaN.

Navi uses 64bit floating values to represent numbers internally.

#### Numeric literal types

Numeric literal types (e.g. `2`, `3`, `3.1415`) are types that represent their numeric value.
E.g. `2` (the type) is equal to the set that contains the number 2.

#### Interval types

Interval types (e.g. `0..4`, `0.25..3.14`, `-inf..inf`, `0..inf`) are types that represent all numbers between and including their ends.
E.g. `0..4` includes all number 0 to 4 including 0 and 4.

Note that `-inf` and `inf` can be omitted. E.g. `0..inf` = `0..` and `-inf..inf` = `..`.

#### Integer interval types

Integer interval types (e.g. `int(0..4)`, `int(-inf..inf)`, `int(0..inf)`) are types that represent all integer numbers between and including their integer ends.
E.g. `int(0..4)` includes 0, 1, 2, 3, and 4.
Importantly, the infinities are not integers, so e.g. `int(-inf..inf)` does not include infinity.

Same as with intervals, `-inf` and `inf` can be omitted. E.g. `int(0..inf)` = `int(0..)` and `int(-inf..inf)` = `int(..)`.

### `string`

This type represents any string.

#### String literal types

String literal types (e.g. `""`, `"foo"`) are types that represent their string value.
E.g. `"foo"` (the type) is equal to the set that contain the string "foo".

#### String sets and inverted string sets

Strings support all set operations, so you can union, intersect, and complement them.
This means that "the set of all strings expect `"foo"`" is a valid primitive type.
The "all strings except X" types are called inverted string sets.

While inverted string sets are a primitive type, they do not have special syntax.
They are denoted using the `invStrSet` function.
E.g. `invStrSet("foo" | "bar")` is the set of all strings except `"foo"` and `"bar"`.
While this is awkward to use, they also don't come up a lot.

## Structure types

Structure types are class-like product types.
They have a name and any number of fields.
Structures with no fields are constants (e.g. `null`).

E.g. `Image { width: uint, height: uint, channels: uint }` and `null` are structure types.

### Structure type definitions

All structure types have a type definition.
The structure type definition specifies the fields all of its structure types will have.

E.g. `struct Image { width: uint, height: uint, channels: uint }` and `struct null;` are structure type definitions.

Fields are declared as `name: type` pairs.
Field names have to be unique per structure definition.

The field type may be any type except `never`. E.g. `struct Foo { bar: never }` is invalid.

### Instantiation

All fields are optional when instantiating a type from a structure definition.
So `Image`, `Image { width: uint }`, `Image { height: uint }`, and `Image { width: uint, height: uint, channels: uint }` all create the same type given the above type definition for `Image`.

If any field is assigned `never`, then the resulting type will also be `never`. Example:

```
let image = Image { width: uint, height: never };
// image is never
```

### Spread

Just like in JavaScript, it is possible to spread a structure type into another structure type using the `...` operator.

Example:

```
struct Image { width: uint, height: uint, channels: uint }

let imageA = Image { width: 100, height: 100, channels: 3 };
let imageB = Image { ...imageA, width: 200 };
// imageB is Image { width: 200, height: 100, channels: 3 }
```

The structure type of the spread expression doesn't have to be the same as the structure type it is spread into. Only the field names have to be compatible.

Example:

```
struct Size { width: uint, height: uint }
struct Image { width: uint, height: uint, channels: uint }

let size = Size { width: 100, height: 100 };
let image = Image { ...size, channels: 3 };
// image is Image { width: 100, height: 100, channels: 3 }
```

### New type pattern

Structure types are only equivalent if they have the same definition and all their fields are equivalent.
This means that each structure type definitions creates a new type of structure types.

### Generics

Each structure definition is generic over all its field types.

E.g. `Image { width: int(100..) }` is the type of all images with a width of at least 100.

### Field access

The type of a field can be accessed using the `.name` syntax. Example:

```
let image = Image { width: 100, height: 200, channels: 3 };
let width = image.width;
// width is 100
```

Since fields are optional and default to the definition type, it's possible to access the definition type of a field like this:

```
let widthDef = Image.width;
// widthDef is uint
```

## Variable definitions

There is no proper programming language without variables and Navi has them too of course.

Variables are defined using the `let` keyword. Examples:

```
let int = int(..);
let uint = int(0..);

let a = 1;
let b = a + 1; // b will be 2
```

Note that all Navi variables are immutable. Once a value is assigned, it cannot be changed.

While this is a limitation, immutability also allows for variables to be defined in any order. Example:

```
let b = a + 1; // b will still be 2
let a = 1;
```

However, be careful not to create cyclical variable references. Example:

```
let x = x + 1; // self-referential variables are not allowed

let a = b + 1;
let b = a + 1; // cyclic references are also forbidden
```

#### Example: boolean type

Navi intentionally does not include a boolean primitive.
This is because it doesn't need one.

Boolean values can only be `true` or `false`, so the `bool` type is implemented like this:

```
struct false;
struct true;
let bool = false | true;
```

Note that this is not the only possible implementation for a boolean type.
We simply need 2 disjoint types to represent the true and false variants.
So a sum type can also be defined using numeric literals (e.g. `let bool = 0 | 1;`) or string literals (e.g. `let bool = "true" | "false";`).

### Type assertions

Variables may have an optional type assertion.
E.g. `let a: int = foo;`.
If the value assigned to the variable is not assignable to the asserted type, an evaluation error will be thrown.

This is mostly useful to:

1. Document the intended type of a variable.
2. Verify the correctness of complex expressions.

## Scopes

Scopes are a tool to limit the access of variables and structures/function definitions. They are denoted with curly brackets `{}` and are themselves expressions. Example:

```
let a = {
    let b = 1;
    b + 1
}; // b is no longer accessible after the scope ends
// a is 2

let c = b; // reference error
```

Note that the last expression in a scope is the return value of the scope.

## Enum definitions

Enums are syntactic sugar to more easily create sum types (disjoint union).
Example:

```
enum Direction { North, East, South, West }
```

is equivalent to:

```
let Direction = Direction::North | Direction::East | Direction::South | Direction::West;
struct Direction::North;
struct Direction::East;
struct Direction::South;
struct Direction::West;
```

The `::` is the namespace accessor.
It allows names to be separated into groups.

Enum variants can also have fields.
Example:

```
enum Option { Some { value: any }, None }
```

is equivalent to:

```
let Option = Option::Some | Option::None;
struct Option::Some { value: any }
struct Option::None;
```

## Function definitions

User-defined functions can be used to factor out common functionality and to create abstraction boundaries. Functions can have any number of parameters and must always return a value. Example:

```
def add(a: number, b: number) {
    a + b
}
```

The last expression in a function body is the return value. If the function body is only a single expression, a shorthand syntax can also be used:

```
def add(a: number, b: number) = a + b;
```

Just like with variable definitions, functions can have an optional type assertion for the return type. Example:

```
def add(a: number, b: number): number {
    a + b
}
```

### Generics

Just like how structs are generic over all their fields, functions are generic over all their parameters.
This property can be used to create types.

#### Example: Result type

Many languages (e.g. Rust) have a result type.
Here is how a result type would be implemented in Navi:

```
struct Success { value: any };
struct Error { value: any };

def Result(success: any, error: any) = Success { value: success } | Error { value: error };

# Instantiation
Result(int, string) == Success { value: int } | Error { value: string }
Result(int, never) == Success { value: int }
```

## `match`

`match` expressions enable conditional types and pattern matching on types.

```
let a = 1 | 3;
let b = match a {
    1 => 0,
    _ => a + 1
};
// b is 0 | 4
```

This `match` expression behaves as "if `a` is 1, return 0, else return `a` plus 1."

`1 => 0` and `_ => a + 1` are called match arms or just arms.`1` and `_` are the patterns of the arms. Everything after the `=>` is the expression of the arm. The expression of an arm is only evaluated if the pattern matches the input type. Lastly, `_` is the default pattern and matches any type (it's similar to the `default` case in `switch` statement in TypeScript or C).

Arms are matched in order and parts of the input type matched by previous arms will not be matched again.
I.e. the `_ => a + 1` arm did not match the `1` in `1 | 3` because it was already matched by `1 => 0`.

### Patterns

Every match arm has a pattern that describes which parts of the input type the arm handles.
A pattern is just a type, so `1`, `1 | 4`, `-inf..0 | int(1..10) | inf`, `number`, `"foo"`, `string`, `Image { width: 128 }` are all valid patterns.

Note that an arm with a `never` pattern will never be matched.

### Binding

Match arms can optionally bind the matched value to a variable. This is most useful when the matched value is an expression and not a variable. Example:

```
let a = 1 | 3;
let b = match a * 2 - 1 {
    1 => 0,
    _ as x => x + 1
};
// b is 0 | 6
```

In this example, `a * 2 - 1` evaluates to `1 | 5`, so `1 => 0` handles the 1, and the `_ as x` arm matches the `5` and binds it to `x`.

### Limitations

`match` is actually a little too powerful for Navi.
The problem is that `match` can be used to complement types, which breaks some assumptions the type system makes.

As a result, match arm patterns must be [static expression](#static-expressions).
However, this restriction is not enforced right now.

## `if`/`else`

Navi's if-else expression is syntactic sugar for a boolean `match` expression.
The following two expressions are equivalent:

```
if condition { a } else { b }

match condition {
    true => { a },
    false => { b }
}
```

Note that both branches require a scoped expression.
The curly brackets are mandatory.

### `else if`

`else if` is also supported:

```
if condition1 { a } else if condition2 { b } else { c }
```

And behaves like this:

```
if condition1 {
    a
} else {
    if condition2 { b } else { c }
}
```

## Built-in type definitions and functions

Just like other programming languages, Navi provides a set of built-in types and functions.

### Types

```
let int = int(..);
let uint = int(0..);

struct true;
struct false;
let bool = true | false;
```

More types are defined by chaiNNer.

### Functions

Built-in functions behave just like user-defined functions, but they are not implemented with Navi but in the host language (in this case TypeScript). This allows them to express behavior that cannot be expressed in Navi.

For the full list of built-in functions, see [global.navi](src/global.navi).

### Syntax sugar

Special syntax is available for some `number::*` functions.
This includes the following operators:

-   Unary operators: `-a` for `number::neg`.
-   Binary operators: `a + b`, `a - b`, `a * b`, `a / b`, and `a ** b` for the respective functions.
-   Comparison operators: `a > b`, `a >= b`, `a < b`, and `a <= b` for the respective functions.

Operator precedence is as you would expect it to be.
E.g. `a + b * c` de-sugars to `number::add(a, number::mul(b, c))`.

Syntax sugar is available for `any::eq` and `any::neq`. They use `==` and `!=` respectively.

Logical operations also have Python-like syntax. E.g. `not a and b` is equivalent to `bool::and(bool::not(a), b)`.

## Rules of the type system

This is technical section intended for those implementing the type system.
If you are only using Navi and don't plan on implementing new type primitives or built-in functions, you can ignore this section.

### Requirements for primitive types

There are a few requirements for primitive types that are necessary for the type system to work:

1. The intersection and union of any two primitives must be unique.
2. The intersection of two primitives must either the empty (`never`) or a primitive.
3. For any set that can be represented as a union of primitives, there must only be one union of primitives that represents the set.

### Requirements for built-in functions

See https://github.com/chaiNNer-org/Navi/issues/3.

### Set representation of structs

Internally, structure types are represented as a tuple `(name, field_1, field_2, ..., field_n)`.

E.g. the set representation of the above `Image` structure is `("Image", uint, uint, uint)`.

This means that it is of utmost importance that the order of fields is consistent when creating structure types.
While the order of fields doesn't matter to users, it is vital for the implementation.

### Static expressions

Static expression are not defined in terms of what they are, but in terms of what they are not.

Rules:

-   All parameters (scope parameters and function parameters) are not static expressions.
-   The result of an expression that references a non-static expression is also a non-static expression.
