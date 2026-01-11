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
  global_replication_group_id_suffix: resolvableValue(z.string()),
  primary_replication_group_id: resolvableValue(z.string()),
  automatic_failover_enabled: resolvableValue(z.boolean().optional()),
  cache_node_type: resolvableValue(z.string().optional()),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  global_replication_group_description: resolvableValue(z.string().optional()),
  num_node_groups: resolvableValue(z.number().optional()),
  parameter_group_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  at_rest_encryption_enabled: z.boolean().optional(),
  auth_token_enabled: z.boolean().optional(),
  cluster_enabled: z.boolean().optional(),
  engine_version_actual: z.string().optional(),
  global_node_groups: z.set(z.object({
    global_node_group_id: z.string(),
    slots: z.string(),
  })).optional(),
  global_replication_group_id: z.string().optional(),
  id: z.string().optional(),
  transit_encryption_enabled: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elasticache_global_replication_group

export function AwsElasticacheGlobalReplicationGroup(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_global_replication_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheGlobalReplicationGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsElasticacheGlobalReplicationGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticacheGlobalReplicationGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsElasticacheGlobalReplicationGroup,
    idFilter,
    baseNode,
    optional,
  )
