import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRdsCluster } from './AwsRdsCluster.tsx'

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  availability_zones: resolvableValue(z.string().array()),
  backtrack_window: resolvableValue(z.number()),
  backup_retention_period: resolvableValue(z.number()),
  cluster_identifier: resolvableValue(z.string()),
  cluster_members: resolvableValue(z.string().array()),
  cluster_resource_id: resolvableValue(z.string()),
  cluster_scalability_type: resolvableValue(z.string()),
  database_insights_mode: resolvableValue(z.string()),
  database_name: resolvableValue(z.string()),
  db_cluster_parameter_group_name: resolvableValue(z.string()),
  db_subnet_group_name: resolvableValue(z.string()),
  db_system_id: resolvableValue(z.string()),
  enabled_cloudwatch_logs_exports: resolvableValue(z.string().array()),
  endpoint: resolvableValue(z.string()),
  engine: resolvableValue(z.string()),
  engine_mode: resolvableValue(z.string()),
  engine_version: resolvableValue(z.string()),
  final_snapshot_identifier: resolvableValue(z.string()),
  hosted_zone_id: resolvableValue(z.string()),
  iam_database_authentication_enabled: resolvableValue(z.boolean()),
  iam_roles: resolvableValue(z.string().array()),
  kms_key_id: resolvableValue(z.string()),
  master_user_secret: resolvableValue(
    z.object({
      kms_key_id: z.string(),
      secret_arn: z.string(),
      secret_status: z.string(),
    }).array(),
  ),
  master_username: resolvableValue(z.string()),
  monitoring_interval: resolvableValue(z.number()),
  monitoring_role_arn: resolvableValue(z.string()),
  network_type: resolvableValue(z.string()),
  port: resolvableValue(z.number()),
  preferred_backup_window: resolvableValue(z.string()),
  preferred_maintenance_window: resolvableValue(z.string()),
  reader_endpoint: resolvableValue(z.string()),
  replication_source_identifier: resolvableValue(z.string()),
  storage_encrypted: resolvableValue(z.boolean()),
  upgrade_rollout_order: resolvableValue(z.string()),
  vpc_security_group_ids: resolvableValue(z.string().array()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/rds_cluster

export function DataAwsRdsCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRdsCluster
      _type='aws_rds_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRdsCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsRdsCluster, idFilter, baseNode, optional)

export const useDataAwsRdsClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsRdsCluster, idFilter, baseNode, optional)
