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

export const AwsMskTopicInputSchema = TfMetaSchema.extend({
  cluster_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  partition_count: resolvableValue(z.number()),
  replication_factor: resolvableValue(z.number()),
  configs: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMskTopicOutputSchema = z.object({
  arn: z.string().optional(),
  configs_actual: z.string().optional(),
})

export const AwsMskTopicImportSchema = z.object({
  cluster_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsMskTopicInputProps =
  & z.input<typeof AwsMskTopicInputSchema>
  & z.input<typeof AwsMskTopicImportSchema>
  & NodeProps

export type AwsMskTopicOutputProps =
  & z.output<typeof AwsMskTopicOutputSchema>
  & z.output<typeof AwsMskTopicInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_topic

export function AwsMskTopic(props: Partial<AwsMskTopicInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_topic'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskTopicInputSchema}
      _outputSchema={AwsMskTopicOutputSchema}
      _importSchema={AwsMskTopicImportSchema}
      {...props}
    />
  )
}

export const useAwsMskTopic = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskTopicOutputProps>(
    AwsMskTopic,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskTopics = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskTopicOutputProps>(
    AwsMskTopic,
    idFilter,
    baseNode,
    optional,
  )
