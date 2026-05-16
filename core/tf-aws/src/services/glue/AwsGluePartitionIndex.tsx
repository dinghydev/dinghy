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

export const AwsGluePartitionIndexInputSchema = TfMetaSchema.extend({
  database_name: resolvableValue(z.string()),
  partition_index: resolvableValue(z.object({
    index_name: z.string().optional(),
    index_status: z.string().optional(),
    keys: z.string().array().optional(),
  })),
  table_name: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsGluePartitionIndexOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsGluePartitionIndexInputProps =
  & z.input<typeof AwsGluePartitionIndexInputSchema>
  & NodeProps

export type AwsGluePartitionIndexOutputProps =
  & z.output<typeof AwsGluePartitionIndexOutputSchema>
  & z.output<typeof AwsGluePartitionIndexInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_partition_index

export function AwsGluePartitionIndex(
  props: Partial<AwsGluePartitionIndexInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_partition_index'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGluePartitionIndexInputSchema}
      _outputSchema={AwsGluePartitionIndexOutputSchema}
      {...props}
    />
  )
}

export const useAwsGluePartitionIndex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGluePartitionIndexOutputProps>(
    AwsGluePartitionIndex,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGluePartitionIndexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGluePartitionIndexOutputProps>(
    AwsGluePartitionIndex,
    idFilter,
    baseNode,
    optional,
  )
