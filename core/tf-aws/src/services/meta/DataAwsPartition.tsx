import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/partition

export const InputSchema = z.object({})

export const OutputSchema = z.object({
  dns_suffix: z.string().optional(),
  id: z.string().optional(),
  partition: z.string().optional(),
  reverse_dns_prefix: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsPartition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_partition'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPartition = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsPartition, node, id)

export const useDataAwsPartitions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsPartition, node, id)
