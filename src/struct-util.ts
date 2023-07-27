import { evaluate } from './evaluate';
import { NamedExpression } from './expression';
import { isSubsetOf } from './relation';
import { Scope } from './scope';
import { NonNeverType, StructDescriptor, StructInstanceType } from './types';
import { isReadonlyArray } from './util';

const createInstanceFromFields = (
    descriptor: StructDescriptor,
    fields: readonly NonNeverType[]
): StructInstanceType => {
    if (fields.length !== descriptor.fields.length) {
        throw new Error(
            `Invalid number of fields: Expected ${descriptor.fields.length}, got ${fields.length}`
        );
    }

    for (let i = 0; i < fields.length; i += 1) {
        const field = descriptor.fields[i];
        const value = fields[i];
        if (!isSubsetOf(value, field.type)) {
            throw new Error(
                `Invalid field value ${
                    field.name
                }: \`${value.toString()}\` is not a subset of \`${field.type.toString()}\``
            );
        }
    }

    return StructInstanceType.fromDescriptorUnchecked(descriptor, fields);
};

const toFields = (
    descriptor: StructDescriptor,
    fieldsMap: Partial<Readonly<Record<string, NonNeverType>>>
): readonly NonNeverType[] => {
    const fields: NonNeverType[] = [];

    const map = new Map(Object.entries(fieldsMap));
    for (const field of descriptor.fields) {
        fields.push(map.get(field.name) ?? field.type);
        map.delete(field.name);
    }

    for (const entry of map) {
        if (entry[1] !== undefined) {
            throw new Error(
                `Extraneous field: The descriptor for ${descriptor.name} has no field "${entry[0]}"`
            );
        }
    }

    return fields;
};

/**
 * This function creates an instance of a struct and checks that the fields are valid.
 *
 * ### Examples:
 *
 * ```ts
 * const pointDesc = new StructDescriptor('Point', [
 *     new StructField('x', NumberType.instance),
 *     new StructField('y', NumberType.instance),
 *     new StructField('z', NumberType.instance),
 * ]);
 *
 * // create the default instance
 * createInstance(pointDesc);
 *
 * // create an instance with named fields
 * // (this can include only a subset of the fields)
 * createInstance(pointDesc, {
 *     x: literal(1),
 *     y: literal(2),
 * });
 * createInstance(pointDesc, {
 *    x: literal(1),
 *    y: literal(2),
 *    z: literal(3),
 * });
 *
 * // create an instance with the given field array
 * // (this has to include all fields in the correct order)
 * createInstance(pointDesc, [
 *    literal(1),
 *    literal(2),
 *    literal(3),
 * ]);
 * ```
 */
export const createInstance = (
    descriptor: StructDescriptor,
    fields?: Partial<Readonly<Record<string, NonNeverType>>> | readonly NonNeverType[]
): StructInstanceType => {
    if (!fields) {
        return descriptor.default;
    }

    if (isReadonlyArray(fields)) {
        return createInstanceFromFields(descriptor, fields);
    }
    return createInstanceFromFields(descriptor, toFields(descriptor, fields));
};

/**
 * Returns the struct descriptor with the given name in the given scope. If no such struct exists,
 * an error is thrown.
 *
 * Use `Scope.has` to check if a struct exists.
 */
export const getStructDescriptor = (scope: Scope, name: string): StructDescriptor => {
    const { definition } = scope.get(name);
    if (definition.type !== 'struct') {
        throw new Error(
            `Expected ${name} to be a struct definition, found a ${definition.type} definition.`
        );
    }

    // the descriptor has already been added
    if (definition.descriptor) {
        return definition.descriptor;
    }

    // the descriptor has not been added yet,
    // so we need to evaluate the default instance of the struct
    const instance = evaluate(new NamedExpression(name), scope);
    if (instance.underlying !== 'struct' || instance.type !== 'instance') {
        throw new Error(
            'Internal implementation error: Expected struct instance. This is a bug in the implementation.'
        );
    }
    return instance.descriptor;
};
