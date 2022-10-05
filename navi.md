# Navi

Navi is type system, but also a programming language.
This document will explain basics of how Navi works.

## What are types?

Conceptually, types are sets of their possible value.
E.g. the type `string` is the set of all possible strings (e.g. `""`, `"foo"`), and the type `number` is the set of all numbers (e.g. 0, 1, -2, 3.14).

Since types are sets, set operations are as usual.
In particular, we denote set intersection as `A & B`, and set union as `A | B`, where `A` and `B` are types.
Set difference is also possible, but with some limitation, [more on that later](#match).

However, types cannot be arbitrary sets.
E.g. the set of all prime numbers cannot be expressed in Navi.
Navi provides primitive types from which more types can be constructed.

## Primitive types

### `never`

This type represents the empty set.

Within Navi, `never` generally represents a dead end or an error.
Assumptions about input types are typically represented using intersection.
E.g. "the result is an integer" would be expressed as `int & result`.
So if the assumption is not met, `never` appears.

### `any`

This type represents the set containing all values.

### `number`

This type represents any real number plus ±infinity and NaN.

Navi uses 64bit floating values to represent numbers internally.

#### Numeric literal types

Numeric literal types (e.g. `2`, `3`, `3.1415`) are types that represent their numeric value.
E.g. `2` (the type) is equal to the set that contain the number 2.

#### Interval types

Interval types (e.g. `0..4`, `0.25..3.14`, `-inf..inf`, `0..inf`) are types that represent all numbers between and including their ends.
E.g. 0..4 includes all number 0 to 4 including 0 and 4.

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

Structure types are class-like types.
They have a name and any number of fields.
Structures with no fields are constants (e.g. `null`).

E.g. `Image { width: uint, height: uint, channels: uint }` and `null` are structure types.

### Structure type definitions

Structure types also have type definitions.
These definitions specify the fields all structure types of that name have.

E.g. `struct Image { width: uint, height: uint, channels: uint }` and `struct null;` are structure type definitions.

Fields are declared as name-type pairs.
Field names have to unique per structure definition.
The field type may be any type except `never`.

### Instantiation

All fields are optional when instantiating a type from a structure definition.
So `Image`, `Image { width: uint }`, `Image { height: uint }`, and `Image { width: uint, height: uint, channels: uint }` all create the same type given the above type definition for `Image`.

### New type pattern

Structure types are only equivalent if they have the same definition and all their fields are equivalent.
This means that each structure type definitions creates a new type of structure types.

### Generics

Each structure definition is generic over all its field types.

E.g. `Image { width: int(100..) }` is the type of all images with a width of at least 100.

If a field is assigned `never` (e.g. `Image { width: never, height: uint }`), then the resulting type will also be `never`.

### Field access

Using a field access expression, it is possible to access for type of a field a structure or union of structures.

The syntax is the dot syntax that is also using in other languages.
E.g. `Image { width: 100 }.width` is `100` and `Image.width` is `uint`.

## Variable definitions

There is no proper programming language without variables and Navi has them too of course.

However, Navi's variables are immutable.
Once a value is assigned to them, it cannot be changed.
So variables can also be thought of as an alias for a specific type expression.

Example:

```
let int = int(..);
let uint = int(0..);

let a = 1;
let b = a + 1; // b will be 2
```

Since variables are immutable, Navi will evaluate them only as needed, so you can define them in any order.

Example:

```
let b = a + 1; // b will still be 2
let a = 1;
```

However, be careful not to create cyclical variables.

Example:

```
let x = x + 1; // self-referential variables are not allowed

let a = b + 1;
let b = a + 1; // cyclic references are also forbidden
```

#### Example: boolean type

Navi intentionally does not include a boolean primitive.
This is because it doesn't need one.

Boolean values can be `true` or `false`, so the `bool` type is implemented like this:

```
struct false;
struct true;
let bool = false | true;
```

Note that this is not the only possible implementation for a boolean type.
We simply need 2 disjoint types to represent the true and false variants.
So a sum type can also be defined using numeric literals (e.g. `let bool = 0 | 1;`) or string literals (e.g. `let bool = "true" | "false";`).

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

The `::` is a namespace accessor.
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

User-defined functions are supported.
While they cannot be used as values, they can be used to factor out common functionality and to create abstraction boundaries.

Functions can have any number of parameters and must always return a value.

Example:

```
def inc(n: number) = n + 1;
```

Functions can also contain definitions using a scope:

```
def inc(n: number) = { let result = n + 1; result };
```

Since scopes and functions are often used together, there a short-hand notation:

```
def inc(n: number) {
    let result = n + 1;
    result
}
```

### Generics

Just like how structs are generic over all their fields, functions are generic over all their parameters.
This property can be used to create types.

#### Example: Option type

We already looked at how to define an option type using an [enum definition](#enum-definitions).
This was simple, but it wasn't easy to use.
E.g. the express "an optional `int`", we had to write `Option::Some { value: int } | Option::None`.

This can be fixed by using a function instead of an enum:

```
struct Some { value: any };
struct None;

def Option(value: any) = Some { value: value } | None;

// Instantiation
Option(int) == Some { value: int } | None
Option(never) == None
```

#### Example: Result type

Many languages (e.g. Rust) have a result type.
Here is how a result type would be implemented in this type system:

```
struct Success { value: any };
struct Error { value: any };

def Result(success: any, error: any) = Success { value: success } | Error { value: error };

# Instantiation
Result(int, string) == Success { value: int } | Error { value: string }
Result(int, never) == Success { value: int }
```

## Built-in type definitions

```
let int = int(..);
let uint = int(0..);

struct true;
struct false;
let bool = true | false;
```

More types are defined by Chainner.

## Built-in functions

Built-in functions are functions that takes types are positional arguments and return a type.
The behave just like user-defined functions, but they are not implemented with Navi but in the host language (in this case TypeScript).

The following built-in functions are supported:

-   `number::add(...numbers: number) -> number`

    Takes any number of numbers and returns their sum.

-   `number::sub(a: number, b: number) -> number`

    Takes 2 number types and returns the type that represents `a - b`.

-   `number::mul(...numbers: number) -> number`

    Takes any number of numbers and returns their product.

-   `number::div(a: number, b: number) -> number`

    Takes 2 number types and returns the type that represents `a / b`.

-   `number::neg(a: number) -> number`

    Takes a number type and returns the type that represents `-a`.

-   `number::gt(a: number, b: number) -> bool` <br>
    `number::gte(a: number, b: number) -> bool` <br>
    `number::lt(a: number, b: number) -> bool` <br>
    `number::lte(a: number, b: number) -> bool`

    Takes 2 numbers and compares them.

-   `round(a: number) -> number`

    Takes a number type and returns the type that represents the nearest whole numbers to the given numbers. The behavior is consistent with JavaScript's `Math.round(a)`.

-   `min(...numbers: number) -> number`

    Takes any number of numbers and returns their minimum. The behavior is consistent with JavaScript's `Math.min(a, b)`.

-   `max(...numbers: number) -> number`

    Takes any number of numbers and returns their maximum. The behavior is consistent with JavaScript's `Math.max(a, b)`.

-   `concat(...segments: string) -> string`

    Takes any number of strings and returns their concatenation.

### Syntax sugar

Special syntax is available for all `number::*` functions.
This includes the following operators:

-   Unary operators: `-a` for `number::neg`.
-   Binary operators: `a + b`, `a - b`, `a * b`, and `a / b` for the respective functions.
-   Comparison operators: `a > b`, `a >= b`, `a < b`, and `a <= b` for the respective functions.

Operator precedence is as you would expect it to be.
E.g. `a + b * c` de-sugars to `number::add(a, number::mul(b, c))`.

## `match`

`match` expressions enable conditional types.
A `match` expressions consists of an input type and any number of arms.
A match arm consists of a pattern, an optional binding, and an expression the matching type will be mapped to.

Example:

```
match 1 | 3 {
    1 => 1,
    _ as x => x + 1
}
```

This match expression evaluates to `1 | 4`.
It behaves as "if the given number is 1, return 1, else return the given number plus 1."

`1` and `_` are both match patterns.
`1` matches the numeric literal 1.
`_` matches any type.
`as x` is a binding and means that the part of the type that matches the pattern of the arm will be assigned to this variable.
The variable is only available in the arm's expression.

Arms are matched in order and parts of the input type matched by previous arms will not be matched again.
I.e. the `_ as x => x + 1` arm did not match the `1` in `1 | 3` because it was already matched by `1 => 1`.

### Patterns

Every match arm has a pattern that describes which parts of the input type the arm handles.
A pattern is just a type, so `1`, `1 | 4`, `-inf..0 | int(1..10) | inf`, `number`, `"foo"`, `string`, `Image { width: 128 }` are all valid patterns.

Note that an arm with a `never` pattern will never be evaluated.

### Binding

Like in the example above (`as x`), the currently matched value can be assigned to a variable that is available to the expression of the arm.

### Limitations

`match` is actually a little too powerful for Navi.
The problem is that `match` can be used to complement types, which breaks some assumptions the type system makes.

As a result, match arm patterns must be [static expression](#static-expressions).
However, this restriction is not enforced right now.

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

This means that it is of upmost importance that the order of fields is consistent when creating structure types.
While the order of fields doesn't matter to users, it is vital for the implementation.

### Static expressions

Static expression are not defined in terms of what they are, but in terms of what they are not.

Rules:
- All parameters (scope parameters and function parameters) are not static expressions.
- The result of an expression that references a non-static expression is also a non-static expression.


