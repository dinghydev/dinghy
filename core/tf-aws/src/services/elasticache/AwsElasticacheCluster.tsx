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
  cluster_id: resolvableValue(z.string()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  auto_minor_version_upgrade: resolvableValue(z.string().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  az_mode: resolvableValue(z.string().optional()),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  final_snapshot_identifier: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  ip_discovery: resolvableValue(z.string().optional()),
  log_delivery_configuration: resolvableValue(
    z.object({
      destination: z.string(),
      destination_type: z.string(),
      log_format: z.string(),
      log_type: z.string(),
    }).array().optional(),
  ),
  maintenance_window: resolvableValue(z.string().optional()),
  network_type: resolvableValue(z.string().optional()),
  node_type: resolvableValue(z.string().optional()),
  notification_topic_arn: resolvableValue(z.string().optional()),
  num_cache_nodes: resolvableValue(z.number().optional()),
  outpost_mode: resolvableValue(z.string().optional()),
  parameter_group_name: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  preferred_availability_zones: resolvableValue(z.string().array().optional()),
  preferred_outpost_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_group_id: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cache_nodes: z.object({
    address: z.string(),
    availability_zone: z.string(),
    id: z.string(),
    outpost_arn: z.string(),
    port: z.number(),
  }).array().optional(),
  cluster_address: z.string().optional(),
  configuration_endpoint: z.string().optional(),
  engine_version_actual: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elasticache_cluster

export function AwsElasticacheCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsElasticacheCluster, idFilter, baseNode, optional)

export const useAwsElasticacheClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsElasticacheCluster,
    idFilter,
    baseNode,
    optional,
  )
