import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rds_shard_group

export const InputSchema = z.object({
  db_cluster_identifier: resolvableValue(z.string()),
  db_shard_group_identifier: resolvableValue(z.string()),
  max_acu: resolvableValue(z.number()),
  compute_redundancy: resolvableValue(z.number().optional()),
  min_acu: resolvableValue(z.number().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
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
  db_shard_group_resource_id: z.string().optional(),
  endpoint: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRdsShardGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_shard_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsShardGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRdsShardGroup, node, id)

export const useAwsRdsShardGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRdsShardGroup, node, id)
