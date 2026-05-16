import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsPartitionInputSchema = TfMetaSchema.extend({})

export const DataAwsPartitionOutputSchema = z.object({
  dns_suffix: z.string().optional(),
  id: z.string().optional(),
  partition: z.string().optional(),
  reverse_dns_prefix: z.string().optional(),
})

export type DataAwsPartitionInputProps =
  & z.input<typeof DataAwsPartitionInputSchema>
  & NodeProps

export type DataAwsPartitionOutputProps =
  & z.output<typeof DataAwsPartitionOutputSchema>
  & z.output<typeof DataAwsPartitionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/partition

export function DataAwsPartition(props: Partial<DataAwsPartitionInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_partition'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsPartitionInputSchema}
      _outputSchema={DataAwsPartitionOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPartition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsPartitionOutputProps>(
    DataAwsPartition,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsPartitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsPartitionOutputProps>(
    DataAwsPartition,
    idFilter,
    baseNode,
    optional,
  )
