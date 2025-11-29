import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/msk_replicator

export const InputSchema = z.object({
  current_version: resolvableValue(z.string()),
  replication_info_list: resolvableValue(z.object({
    source_kafka_cluster_alias: z.string(),
    source_kafka_cluster_arn: z.string(),
    target_compression_type: z.string(),
    target_kafka_cluster_alias: z.string(),
    target_kafka_cluster_arn: z.string(),
  })),
  replicator_name: resolvableValue(z.string()),
  service_execution_role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kafka_cluster: resolvableValue(
    z.object({
      amazon_msk_cluster: z.object({
        msk_cluster_arn: z.string(),
      }),
      vpc_config: z.object({
        security_groups_ids: z.string().array().optional(),
        subnet_ids: z.string().array(),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMskReplicator(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_replicator'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMskReplicator = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMskReplicator, node, id)

export const useAwsMskReplicators = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMskReplicator, node, id)
