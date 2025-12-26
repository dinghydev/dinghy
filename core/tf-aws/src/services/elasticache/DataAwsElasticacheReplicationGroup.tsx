import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticacheReplicationGroup } from './AwsElasticacheReplicationGroup.tsx'

export const InputSchema = z.object({
  replication_group_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  auth_token_enabled: z.boolean().optional(),
  automatic_failover_enabled: z.boolean().optional(),
  cluster_mode: z.string().optional(),
  configuration_endpoint_address: z.string().optional(),
  description: z.string().optional(),
  log_delivery_configuration: z.set(z.object({
    destination: z.string(),
    destination_type: z.string(),
    log_format: z.string(),
    log_type: z.string(),
  })).optional(),
  member_clusters: z.set(z.string()).optional(),
  multi_az_enabled: z.boolean().optional(),
  node_group_configuration: z.set(z.object({
    node_group_id: z.string(),
    primary_availability_zone: z.string(),
    primary_outpost_arn: z.string(),
    replica_availability_zones: z.string().array(),
    replica_count: z.number(),
    replica_outpost_arns: z.string().array(),
    slots: z.string(),
  })).optional(),
  node_type: z.string().optional(),
  num_cache_clusters: z.number().optional(),
  num_node_groups: z.number().optional(),
  port: z.number().optional(),
  primary_endpoint_address: z.string().optional(),
  reader_endpoint_address: z.string().optional(),
  replicas_per_node_group: z.number().optional(),
  snapshot_retention_limit: z.number().optional(),
  snapshot_window: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elasticache_replication_group

export function DataAwsElasticacheReplicationGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsElasticacheReplicationGroup
      _type='aws_elasticache_replication_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticacheReplicationGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsElasticacheReplicationGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticacheReplicationGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsElasticacheReplicationGroup,
    idFilter,
    baseNode,
    optional,
  )
