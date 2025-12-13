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
  engine: resolvableValue(z.string()),
  allocated_storage: resolvableValue(z.number().optional()),
  allow_major_version_upgrade: resolvableValue(z.boolean().optional()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  availability_zones: resolvableValue(z.string().array().optional()),
  backtrack_window: resolvableValue(z.number().optional()),
  backup_retention_period: resolvableValue(z.number().optional()),
  ca_certificate_identifier: resolvableValue(z.string().optional()),
  cluster_identifier: resolvableValue(z.string().optional()),
  cluster_identifier_prefix: resolvableValue(z.string().optional()),
  cluster_scalability_type: resolvableValue(z.string().optional()),
  copy_tags_to_snapshot: resolvableValue(z.boolean().optional()),
  database_insights_mode: resolvableValue(z.string().optional()),
  database_name: resolvableValue(z.string().optional()),
  db_cluster_instance_class: resolvableValue(z.string().optional()),
  db_cluster_parameter_group_name: resolvableValue(z.string().optional()),
  db_instance_parameter_group_name: resolvableValue(z.string().optional()),
  db_subnet_group_name: resolvableValue(z.string().optional()),
  db_system_id: resolvableValue(z.string().optional()),
  delete_automated_backups: resolvableValue(z.boolean().optional()),
  deletion_protection: resolvableValue(z.boolean().optional()),
  domain: resolvableValue(z.string().optional()),
  domain_iam_role_name: resolvableValue(z.string().optional()),
  enable_global_write_forwarding: resolvableValue(z.boolean().optional()),
  enable_http_endpoint: resolvableValue(z.boolean().optional()),
  enable_local_write_forwarding: resolvableValue(z.boolean().optional()),
  enabled_cloudwatch_logs_exports: resolvableValue(
    z.string().array().optional(),
  ),
  engine_lifecycle_support: resolvableValue(z.string().optional()),
  engine_mode: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  final_snapshot_identifier: resolvableValue(z.string().optional()),
  global_cluster_identifier: resolvableValue(z.string().optional()),
  iam_database_authentication_enabled: resolvableValue(z.boolean().optional()),
  iam_roles: resolvableValue(z.string().array().optional()),
  iops: resolvableValue(z.number().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  manage_master_user_password: resolvableValue(z.boolean().optional()),
  master_password: resolvableValue(z.string().optional()),
  master_password_wo: resolvableValue(z.string().optional()),
  master_password_wo_version: resolvableValue(z.number().optional()),
  master_user_secret_kms_key_id: resolvableValue(z.string().optional()),
  master_username: resolvableValue(z.string().optional()),
  monitoring_interval: resolvableValue(z.number().optional()),
  monitoring_role_arn: resolvableValue(z.string().optional()),
  network_type: resolvableValue(z.string().optional()),
  performance_insights_enabled: resolvableValue(z.boolean().optional()),
  performance_insights_kms_key_id: resolvableValue(z.string().optional()),
  performance_insights_retention_period: resolvableValue(z.number().optional()),
  port: resolvableValue(z.number().optional()),
  preferred_backup_window: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_source_identifier: resolvableValue(z.string().optional()),
  restore_to_point_in_time: resolvableValue(
    z.object({
      restore_to_time: z.string().optional(),
      restore_type: z.string().optional(),
      source_cluster_identifier: z.string().optional(),
      source_cluster_resource_id: z.string().optional(),
      use_latest_restorable_time: z.boolean().optional(),
    }).optional(),
  ),
  s3_import: resolvableValue(
    z.object({
      bucket_name: z.string(),
      bucket_prefix: z.string().optional(),
      ingestion_role: z.string(),
      source_engine: z.string(),
      source_engine_version: z.string(),
    }).optional(),
  ),
  scaling_configuration: resolvableValue(
    z.object({
      auto_pause: z.boolean().optional(),
      max_capacity: z.number().optional(),
      min_capacity: z.number().optional(),
      seconds_before_timeout: z.number().optional(),
      seconds_until_auto_pause: z.number().optional(),
      timeout_action: z.string().optional(),
    }).optional(),
  ),
  serverlessv2_scaling_configuration: resolvableValue(
    z.object({
      max_capacity: z.number(),
      min_capacity: z.number(),
      seconds_until_auto_pause: z.number().optional(),
    }).optional(),
  ),
  skip_final_snapshot: resolvableValue(z.boolean().optional()),
  snapshot_identifier: resolvableValue(z.string().optional()),
  source_region: resolvableValue(z.string().optional()),
  storage_encrypted: resolvableValue(z.boolean().optional()),
  storage_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zones: z.set(z.string()).optional(),
  backup_retention_period: z.number().optional(),
  ca_certificate_identifier: z.string().optional(),
  ca_certificate_valid_till: z.string().optional(),
  cluster_identifier: z.string().optional(),
  cluster_members: z.set(z.string()).optional(),
  cluster_resource_id: z.string().optional(),
  database_name: z.string().optional(),
  endpoint: z.string().optional(),
  engine: z.string().optional(),
  engine_version_actual: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  master_user_secret: z.object({
    kms_key_id: z.string(),
    secret_arn: z.string(),
    secret_status: z.string(),
  }).array().optional(),
  master_username: z.string().optional(),
  port: z.number().optional(),
  preferred_backup_window: z.string().optional(),
  preferred_maintenance_window: z.string().optional(),
  reader_endpoint: z.string().optional(),
  replication_source_identifier: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rds_cluster

export function AwsRdsCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsCluster = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsRdsCluster, idFilter, baseNode)

export const useAwsRdsClusters = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsRdsCluster, idFilter, baseNode)
