import { Expression, FunctionParameter } from './expression';
import { assertValidFunctionName } from './names';
import { Source } from './source';
import { AnyType } from './types';

export type Declaration = IntrinsicFunctionDeclaration;

interface DeclarationBase {
    readonly type: Declaration['type'];
    readonly underlying: 'declaration';
    source: Source | undefined;
    toString(): string;
}

export class IntrinsicFunctionDeclaration implements DeclarationBase {
    readonly type = 'intrinsic-function';

    readonly underlying = 'declaration';

    readonly name: string;

    readonly parameters: readonly FunctionParameter[];

    readonly varArgs: FunctionParameter | undefined;

    readonly assert: Expression;

    source: Source | undefined;

    constructor(
        name: string,
        parameters: readonly FunctionParameter[],
        varArgs?: FunctionParameter,
        assert?: Expression
    ) {
        assertValidFunctionName(name);
        this.name = name;
        this.parameters = parameters;
        this.varArgs = varArgs;
        this.assert = assert ?? AnyType.instance;
    }

    toString(): string {
        const params = this.parameters.map((p) => `${p.name}: ${p.type.toString()}`);
        if (this.varArgs) {
            params.push(`...${this.varArgs.name}: ${this.varArgs.type.toString()}`);
        }
        const assert = this.assert.type === 'any' ? '' : `: ${this.assert.toString()}`;
        return `intrinsic def ${this.name}(${params.join(', ')})${assert};`;
    }
}
