import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskTopic } from './AwsMskTopic.tsx'

export const DataAwsMskTopicInputSchema = TfMetaSchema.extend({
  cluster_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMskTopicOutputSchema = z.object({
  arn: z.string().optional(),
  configs: z.string().optional(),
  partition_count: z.number().optional(),
  replication_factor: z.number().optional(),
})

export type DataAwsMskTopicInputProps =
  & z.input<typeof DataAwsMskTopicInputSchema>
  & NodeProps

export type DataAwsMskTopicOutputProps =
  & z.output<typeof DataAwsMskTopicOutputSchema>
  & z.output<typeof DataAwsMskTopicInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/msk_topic

export function DataAwsMskTopic(props: Partial<DataAwsMskTopicInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMskTopic
      _type='aws_msk_topic'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMskTopicInputSchema}
      _outputSchema={DataAwsMskTopicOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskTopic = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMskTopicOutputProps>(
    DataAwsMskTopic,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMskTopics = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMskTopicOutputProps>(
    DataAwsMskTopic,
    idFilter,
    baseNode,
    optional,
  )
