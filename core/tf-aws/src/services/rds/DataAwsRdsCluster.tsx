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
  cluster_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zones: z.set(z.string()).optional(),
  backtrack_window: z.number().optional(),
  backup_retention_period: z.number().optional(),
  cluster_members: z.set(z.string()).optional(),
  cluster_resource_id: z.string().optional(),
  cluster_scalability_type: z.string().optional(),
  database_insights_mode: z.string().optional(),
  database_name: z.string().optional(),
  db_cluster_parameter_group_name: z.string().optional(),
  db_subnet_group_name: z.string().optional(),
  db_system_id: z.string().optional(),
  enabled_cloudwatch_logs_exports: z.string().array().optional(),
  endpoint: z.string().optional(),
  engine: z.string().optional(),
  engine_mode: z.string().optional(),
  engine_version: z.string().optional(),
  final_snapshot_identifier: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  iam_database_authentication_enabled: z.boolean().optional(),
  iam_roles: z.set(z.string()).optional(),
  kms_key_id: z.string().optional(),
  master_user_secret: z.object({
    kms_key_id: z.string(),
    secret_arn: z.string(),
    secret_status: z.string(),
  }).array().optional(),
  master_username: z.string().optional(),
  monitoring_interval: z.number().optional(),
  monitoring_role_arn: z.string().optional(),
  network_type: z.string().optional(),
  port: z.number().optional(),
  preferred_backup_window: z.string().optional(),
  preferred_maintenance_window: z.string().optional(),
  reader_endpoint: z.string().optional(),
  replication_source_identifier: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  upgrade_rollout_order: z.string().optional(),
  vpc_security_group_ids: z.set(z.string()).optional(),
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
