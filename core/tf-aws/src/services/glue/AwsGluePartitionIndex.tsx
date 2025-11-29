import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_partition_index

export const InputSchema = z.object({
  database_name: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  partition_index: resolvableValue(z.object({
    index_name: z.string().optional(),
    index_status: z.string(),
    keys: z.string().array().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGluePartitionIndex(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_partition_index'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGluePartitionIndex = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGluePartitionIndex, node, id)

export const useAwsGluePartitionIndexs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGluePartitionIndex, node, id)
