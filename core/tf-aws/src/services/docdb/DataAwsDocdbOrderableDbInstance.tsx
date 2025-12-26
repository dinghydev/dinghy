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

export const InputSchema = z.object({
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  instance_class: resolvableValue(z.string().optional()),
  license_model: resolvableValue(z.string().optional()),
  preferred_instance_classes: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  vpc: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  availability_zones: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/docdb_orderable_db_instance

export function DataAwsDocdbOrderableDbInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_orderable_db_instance'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDocdbOrderableDbInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsDocdbOrderableDbInstance,
    idFilter,
    baseNode,
    optional,
  )
