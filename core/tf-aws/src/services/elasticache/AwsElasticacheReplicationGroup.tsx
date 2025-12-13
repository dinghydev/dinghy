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
  description: resolvableValue(z.string()),
  replication_group_id: resolvableValue(z.string()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  at_rest_encryption_enabled: resolvableValue(z.string().optional()),
  auth_token: resolvableValue(z.string().optional()),
  auth_token_update_strategy: resolvableValue(z.string().optional()),
  auto_minor_version_upgrade: resolvableValue(z.string().optional()),
  automatic_failover_enabled: resolvableValue(z.boolean().optional()),
  cluster_mode: resolvableValue(z.string().optional()),
  data_tiering_enabled: resolvableValue(z.boolean().optional()),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  final_snapshot_identifier: resolvableValue(z.string().optional()),
  global_replication_group_id: resolvableValue(z.string().optional()),
  ip_discovery: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  log_delivery_configuration: resolvableValue(
    z.object({
      destination: z.string(),
      destination_type: z.string(),
      log_format: z.string(),
      log_type: z.string(),
    }).array().optional(),
  ),
  maintenance_window: resolvableValue(z.string().optional()),
  multi_az_enabled: resolvableValue(z.boolean().optional()),
  network_type: resolvableValue(z.string().optional()),
  node_group_configuration: resolvableValue(
    z.object({
      node_group_id: z.string().optional(),
      primary_availability_zone: z.string().optional(),
      primary_outpost_arn: z.string().optional(),
      replica_availability_zones: z.string().array().optional(),
      replica_count: z.number().optional(),
      replica_outpost_arns: z.string().array().optional(),
      slots: z.string().optional(),
    }).array().optional(),
  ),
  node_type: resolvableValue(z.string().optional()),
  notification_topic_arn: resolvableValue(z.string().optional()),
  num_cache_clusters: resolvableValue(z.number().optional()),
  num_node_groups: resolvableValue(z.number().optional()),
  parameter_group_name: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  preferred_cache_cluster_azs: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  replicas_per_node_group: resolvableValue(z.number().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  security_group_names: resolvableValue(z.string().array().optional()),
  snapshot_arns: resolvableValue(z.string().array().optional()),
  snapshot_name: resolvableValue(z.string().optional()),
  snapshot_retention_limit: resolvableValue(z.number().optional()),
  snapshot_window: resolvableValue(z.string().optional()),
  subnet_group_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  transit_encryption_enabled: resolvableValue(z.boolean().optional()),
  transit_encryption_mode: resolvableValue(z.string().optional()),
  user_group_ids: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cluster_enabled: z.boolean().optional(),
  configuration_endpoint_address: z.string().optional(),
  engine_version_actual: z.string().optional(),
  id: z.string().optional(),
  member_clusters: z.set(z.string()).optional(),
  primary_endpoint_address: z.string().optional(),
  reader_endpoint_address: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elasticache_replication_group

export function AwsElasticacheReplicationGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_replication_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheReplicationGroup = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(AwsElasticacheReplicationGroup, idFilter, baseNode)

export const useAwsElasticacheReplicationGroups = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsElasticacheReplicationGroup, idFilter, baseNode)
