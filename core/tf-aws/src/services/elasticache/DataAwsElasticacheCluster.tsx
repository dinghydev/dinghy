import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticacheCluster } from './AwsElasticacheCluster.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  cluster_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  availability_zone: z.string().optional(),
  cache_nodes: z.object({
    address: z.string(),
    availability_zone: z.string(),
    id: z.string(),
    outpost_arn: z.string(),
    port: z.number(),
  }).array().optional(),
  cluster_address: z.string().optional(),
  configuration_endpoint: z.string().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  ip_discovery: z.string().optional(),
  log_delivery_configuration: z.set(z.object({
    destination: z.string(),
    destination_type: z.string(),
    log_format: z.string(),
    log_type: z.string(),
  })).optional(),
  maintenance_window: z.string().optional(),
  network_type: z.string().optional(),
  node_type: z.string().optional(),
  notification_topic_arn: z.string().optional(),
  num_cache_nodes: z.number().optional(),
  parameter_group_name: z.string().optional(),
  port: z.number().optional(),
  preferred_outpost_arn: z.string().optional(),
  replication_group_id: z.string().optional(),
  security_group_ids: z.set(z.string()).optional(),
  snapshot_retention_limit: z.number().optional(),
  snapshot_window: z.string().optional(),
  subnet_group_name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elasticache_cluster

export function DataAwsElasticacheCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsElasticacheCluster
      _type='aws_elasticache_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticacheCluster = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsElasticacheCluster, idFilter, baseNode)

export const useDataAwsElasticacheClusters = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsElasticacheCluster, idFilter, baseNode)
