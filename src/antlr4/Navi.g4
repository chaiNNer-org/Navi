grammar Navi;
options {
	language = JavaScript;
}

definitionDocument: (definition | declaration)* EOF;
expressionDocument: definition* expression EOF;

// declarations
declaration: intrinsicFunctionDeclaration;
intrinsicFunctionDeclaration:
	Intrinsic Def name varArgParameters assert? ';';

// definitions
definition:
	structDefinition
	| functionDefinition
	| variableDefinition
	| enumDefinition;
structDefinition: Struct name (';' | fields);
functionDefinition:
	Def name parameters assert? (
		'=' expression ';'
		| scopeExpression
	);
variableDefinition: Let name assert? '=' expression ';';
enumDefinition:
	Enum name '{' (enumVariant (',' enumVariant)* ','?)* '}';
enumVariant: Identifier fields?;

// expression
primaryExpression:
	IntInterval
	| NonIntInterval
	| IntervalInclusive
	| IntervalMinExclusive
	| IntervalMaxExclusive
	| IntervalExclusive
	| Number
	| String
	| matchExpression
	| ifExpression
	| functionCall
	| named
	| structExpression
	| scopeExpression
	| '(' expression ')';

matchExpression:
	Match expression '{' (matchArm (',' matchArm)* ','?)? '}';
matchArm: (Discard | expression) (As Identifier)? '=>' expression;
functionCall: name '(' args ')';
named: name;
structExpression: name fieldsSpread;
scopeExpression: '{' definition* expression '}';
ifExpression:
	If expression scopeExpression Else (
		scopeExpression
		| ifExpression
	);

fieldAccessExpression: primaryExpression ('.' Identifier)*;

negateExpression: OpMinus? fieldAccessExpression;

multiplicativeExpression:
	negateExpression ((OpMult | OpDiv) negateExpression)*;

additiveExpression:
	multiplicativeExpression (
		(OpMinus | OpPlus) multiplicativeExpression
	)*;

intersectionExpression:
	additiveExpression ('&' additiveExpression)*;

unionExpression:
	intersectionExpression ('|' intersectionExpression)*;

comparisonExpression:
	unionExpression (
		(OpEqual | OpNotEqual | OpGt | OpGte | OpLt | OpLte) unionExpression
	)?;

logicalNotExpression: Not* comparisonExpression;

logicalAndExpression:
	logicalNotExpression (And logicalNotExpression)*;

logicalOrExpression:
	logicalAndExpression (Or logicalAndExpression)*;

expression: logicalOrExpression;

// misc
args: (expression (',' expression)* ','?)?;
fields: '{' (field (',' field)* ','?)? '}';
fieldsSpread:
	'{' (
		spread (',' spread)* (
			',' (fieldMaybeAssert (',' fieldMaybeAssert)* ','?)?
		)?
		| (fieldMaybeAssert (',' fieldMaybeAssert)* ','?)?
	) '}';
spread: OpSpread expression;
field: Identifier assert;
fieldMaybeAssert: Identifier assert?;
parameters: '(' (parameter (',' parameter)* ','?)? ')';
varArgParameters:
	'(' (
		(
			parameter (',' parameter)* (',' varArgParameter)?
			| varArgParameter
		) ','?
	)? ')';
parameter: Identifier assert;
varArgParameter: OpSpread Identifier assert;
assert: ':' expression;

contextualKeyword: And | Or | Not;
name: Identifier ('::' (Identifier | contextualKeyword))*;

// keywords
And: 'and';
As: 'as';
Def: 'def';
Else: 'else';
Enum: 'enum';
If: 'if';
Intrinsic: 'intrinsic';
Let: 'let';
Match: 'match';
Not: 'not';
Or: 'or';
Struct: 'struct';
// reserved
Self: 'self';
Trait: 'trait';

Discard: '_';

// literals
IntInterval:
	'int' Space? '(' Space? IntervalInclusive Space? ')';
NonIntInterval:
	'nonInt' Space? '(' Space? IntervalInclusive Space? ')';

IntervalInclusive: Number? '..' Number?;
IntervalMinExclusive: Number? '!..' Number?;
IntervalMaxExclusive: Number? '..!' Number?;
IntervalExclusive: Number? '!..!' Number?;

Number:
	'-'? DIGITS ('.' [0-9]+)? ([eE] [+\-]? DIGITS)?
	| 'inf'
	| '-inf'
	| 'nan';
String: '"' (~[\u0000-\u001f"\\] | '\\' ~[\r\n])* '"';

fragment DIGITS: '0' | [1-9][0-9]*;
fragment HEX: [0-9a-fA-F];

// identifier
Identifier: [a-zA-Z][a-zA-Z0-9_]*;

// operators
OpMinus: '-';
OpPlus: '+';
OpMult: '*';
OpDiv: '/';
OpEqual: '==';
OpNotEqual: '!=';
OpGt: '>';
OpLt: '<';
OpGte: '>=';
OpLte: '<=';
OpSpread: '...';

// skip
Space: [ \t\r\n]+ -> skip;
LineComment: '//' ~[\r\n]* -> skip;
BlockComment: '/*' .*? '*/' -> skip;
