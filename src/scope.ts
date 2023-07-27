import { IntrinsicFunctionDeclaration } from './declaration';
import {
    Definition,
    Expression,
    FunctionDefinition,
    FunctionParameter,
    StructDefinition,
    VariableDefinition,
} from './expression';
import { assertValidFunctionName, assertValidStructName } from './names';
import { isSubsetOf } from './relation';
import { AnyType, StructDescriptor, Type } from './types';
import { assertNever } from './util';

export class IntrinsicFunctionDefinition {
    readonly type = 'intrinsic-function';

    readonly name: string;

    readonly parameters: readonly FunctionParameter[];

    readonly varArgs: FunctionParameter | undefined;

    readonly assert: Expression;

    readonly fn: (scope: Scope, ...args: Type[]) => Type;

    constructor(
        name: string,
        fn: (scope: Scope, ..._: Type[]) => Type,
        parameters: readonly FunctionParameter[],
        varArgs?: FunctionParameter,
        assert?: Expression
    ) {
        assertValidFunctionName(name);
        this.name = name;
        this.parameters = parameters;
        this.varArgs = varArgs;
        this.assert = assert ?? AnyType.instance;
        this.fn = fn;
    }

    static from(
        { name, parameters, varArgs, assert }: IntrinsicFunctionDeclaration,
        fn: (scope: Scope, ...args: Type[]) => Type
    ): IntrinsicFunctionDefinition {
        return new IntrinsicFunctionDefinition(name, fn, parameters, varArgs, assert);
    }
}
export class ParameterDefinition {
    readonly type = 'parameter';

    readonly name: string;

    readonly value: Type;

    constructor(name: string, value: Type = AnyType.instance) {
        assertValidStructName(name);
        this.name = name;
        this.value = value;
    }
}

export type ScopeBuilderDefinition = Definition | IntrinsicFunctionDefinition | ParameterDefinition;

export class ScopeBuilder {
    name: string;

    parent: Scope | undefined;

    private readonly definitions = new Map<string, ScopeBuilderDefinition>();
    private readonly descriptors = new Map<string, StructDescriptor>();

    constructor(name: string, parent?: Scope) {
        this.name = name;
        this.parent = parent;
    }

    private assertNameAvailable(name: string): void {
        const current = this.definitions.get(name);
        if (current) {
            throw new Error(
                `The name "${name}" is already defined by a ${current.type} in ${this.name}.`
            );
        }
    }
    private assertCompatibleStructDescriptor(
        descriptor: StructDescriptor,
        definition: ScopeBuilderDefinition
    ): void {
        if (definition.type !== 'struct') {
            throw new Error(
                `The struct descriptor "${definition.name}" is defined ${this.name}, but the definition with the same is not a struct definition, it's a ${definition.type} definition.`
            );
        }
        if (definition.fields.length !== descriptor.fields.length) {
            throw new Error(
                `The struct descriptor "${definition.name}" is defined ${this.name}, but the struct definition with the same name has a different number of fields.`
            );
        }
        for (let i = 0; i < definition.fields.length; i++) {
            const field = definition.fields[i];
            const fieldDescriptor = descriptor.fields[i];
            if (field.name !== fieldDescriptor.name) {
                throw new Error(
                    `The struct descriptor "${definition.name}" is defined ${this.name}, but the struct definition with the same name has a different field name at index ${i}. The descriptor has "${fieldDescriptor.name}", but the definition has "${field.name}`
                );
            }
        }
    }

    add(definition: ScopeBuilderDefinition): void {
        const { name } = definition;
        this.assertNameAvailable(name);

        const descriptor = this.descriptors.get(name);
        if (descriptor !== undefined) {
            this.assertCompatibleStructDescriptor(descriptor, definition);
        }

        this.definitions.set(name, definition);
    }

    addStructDescriptor(descriptor: StructDescriptor): void {
        const { name } = descriptor;

        const current = this.descriptors.get(name);
        if (current !== undefined) {
            if (current === descriptor) {
                return;
            }
            throw new Error(`Incompatible struct descriptors with the name ${name}.`);
        }

        const definition = this.definitions.get(name);
        if (definition !== undefined) {
            this.assertCompatibleStructDescriptor(descriptor, definition);
        }

        this.descriptors.set(name, descriptor);
    }

    createScope(): Scope {
        return new Scope(this.name, this.parent, this.definitions.values(), this.descriptors);
    }
}

type ScopeDefinition =
    | ScopeStructDefinition
    | ScopeFunctionDefinition
    | ScopeVariableDefinition
    | ScopeIntrinsicFunctionDefinition
    | ScopeParameterDefinition;

export interface ScopeStructDefinition {
    readonly type: 'struct';
    readonly definition: StructDefinition;
    descriptor?: StructDescriptor;
}
export interface ScopeFunctionDefinition {
    readonly type: 'function';
    readonly definition: FunctionDefinition;
    parameters?: readonly Type[];
    assert?: Type;
    varArgs?: undefined;
}
export interface ScopeVariableDefinition {
    readonly type: 'variable';
    readonly definition: VariableDefinition;
    assert?: Type;
    value?: Type;
}
export interface ScopeParameterDefinition {
    readonly type: 'parameter';
    readonly definition: ParameterDefinition;
    value: Type;
}
export interface ScopeIntrinsicFunctionDefinition {
    readonly type: 'intrinsic-function';
    readonly definition: IntrinsicFunctionDefinition;
    parameters?: readonly Type[];
    varArgs?: Type;
}

/**
 * Implements an F1 score based on bi-grams.
 */
const getSimilarityScore = (a: string, b: string): number => {
    const getBiGrams = (s: string): Set<string> => {
        const bi = new Set<string>();
        for (let i = 1; i < s.length; i += 1) {
            bi.add(s.substring(i - 1, i + 1));
        }
        return bi;
    };

    const aBi = getBiGrams(a);
    const bBi = getBiGrams(b);
    if (aBi.size === 0 || bBi.size === 0) return 0;

    const intersection = [...aBi].filter((g) => bBi.has(g));

    return (2 * intersection.length) / (aBi.size + bBi.size);
};
const getMostSimilar = (target: string, topK: number, others: Iterable<string>): string[] => {
    return [...others]
        .map((name) => {
            return { name, score: getSimilarityScore(name, target) };
        })
        .sort((a, b) => a.score - b.score)
        .map((n) => n.name)
        .slice(-topK)
        .reverse();
};

export class NameResolutionError extends Error {
    similar: string[];

    constructor(message: string, similar: string[]) {
        super(message);
        this.similar = similar;
    }
}
export class ParameterAssignmentError extends Error {}

export interface ResolvedName<D extends ScopeDefinition = ScopeDefinition> {
    definition: D;
    scope: Scope;
}
export class Scope {
    readonly name: string;

    readonly parent: Scope | undefined;

    private readonly definitions: ReadonlyMap<string, ScopeDefinition>;

    constructor(
        name: string,
        parent: Scope | undefined,
        definitions: Iterable<ScopeBuilderDefinition>,
        structDescriptors: ReadonlyMap<string, StructDescriptor>
    ) {
        this.name = name;
        this.parent = parent;

        const defs = new Map<string, ScopeDefinition>();
        for (const definition of definitions) {
            defs.set(definition.name, Scope.toScopeDefinition(definition, structDescriptors));
        }
        this.definitions = defs;
    }

    private static toScopeDefinition(
        definition: ScopeBuilderDefinition,
        structDescriptors: ReadonlyMap<string, StructDescriptor>
    ): ScopeDefinition {
        const { type } = definition;
        switch (type) {
            case 'intrinsic-function':
                return { type, definition };
            case 'function':
                return { type, definition };
            case 'struct':
                return { type, definition, descriptor: structDescriptors.get(definition.name) };
            case 'variable':
                return { type, definition };
            case 'parameter':
                return { type, definition, value: definition.value };
            default:
                return assertNever(definition);
        }
    }

    private getOptional(name: string): ResolvedName | undefined {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        for (let scope: Scope | undefined = this; scope; scope = scope.parent) {
            const definition = scope.definitions.get(name);
            if (definition) {
                return { definition, scope };
            }
        }
        return undefined;
    }

    has(name: string): boolean {
        return this.getOptional(name) !== undefined;
    }

    get(name: string): ResolvedName {
        const resolution = this.getOptional(name);
        if (resolution) return resolution;

        // Find similar names for the name resolution error
        const allNames = new Set<string>();
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        for (let s: Scope | undefined = this; s; s = s.parent) {
            for (const n of s.definitions.keys()) {
                allNames.add(n);
            }
        }
        const similar = getMostSimilar(name, 3, allNames);

        throw new NameResolutionError(
            `Unable to resolve name '${name}'. Did you mean: ${similar.join(', ')}?`,
            similar
        );
    }

    assignParameter(name: string, value: Type) {
        const p = this.definitions.get(name);
        if (!p) {
            throw new ParameterAssignmentError(
                `There is no parameter ${name} in scope ${this.name}`
            );
        }
        if (p.type !== 'parameter') {
            throw new ParameterAssignmentError(
                `${name} refers to a ${p.type} and not a parameter in scope ${this.name}`
            );
        }
        if (!isSubsetOf(value, p.definition.value)) {
            throw new ParameterAssignmentError(
                `Type cannot be assigned to parameter ${name} in scope ${
                    this.name
                }. The type ${value.toString()} is not a subset of ${p.definition.value.toString()}`
            );
        }

        p.value = value;
    }

    /**
     * Returns a iterable of all definition in this scope, not including parent scopes.
     */
    entries(): Iterable<[string, ScopeDefinition]> {
        return this.definitions.entries();
    }
}
