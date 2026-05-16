import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsDocdbOrderableDbInstanceInputSchema = TfMetaSchema.extend({
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  instance_class: resolvableValue(z.string().optional()),
  license_model: resolvableValue(z.string().optional()),
  preferred_instance_classes: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  vpc: resolvableValue(z.boolean().optional()),
})

export const DataAwsDocdbOrderableDbInstanceOutputSchema = z.object({
  availability_zones: z.string().array().optional(),
})

export type DataAwsDocdbOrderableDbInstanceInputProps =
  & z.input<typeof DataAwsDocdbOrderableDbInstanceInputSchema>
  & NodeProps

export type DataAwsDocdbOrderableDbInstanceOutputProps =
  & z.output<typeof DataAwsDocdbOrderableDbInstanceOutputSchema>
  & z.output<typeof DataAwsDocdbOrderableDbInstanceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/docdb_orderable_db_instance

export function DataAwsDocdbOrderableDbInstance(
  props: Partial<DataAwsDocdbOrderableDbInstanceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_orderable_db_instance'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDocdbOrderableDbInstanceInputSchema}
      _outputSchema={DataAwsDocdbOrderableDbInstanceOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDocdbOrderableDbInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDocdbOrderableDbInstanceOutputProps>(
    DataAwsDocdbOrderableDbInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDocdbOrderableDbInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDocdbOrderableDbInstanceOutputProps>(
    DataAwsDocdbOrderableDbInstance,
    idFilter,
    baseNode,
    optional,
  )
