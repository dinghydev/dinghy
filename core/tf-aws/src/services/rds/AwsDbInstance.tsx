import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { RDS_INSTANCE } from '@dinghy/diagrams/entitiesAwsDatabase'

export const InputSchema = z.object({
  instance_class: resolvableValue(z.string()),
  allocated_storage: resolvableValue(z.number().optional()),
  allow_major_version_upgrade: resolvableValue(z.boolean().optional()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  auto_minor_version_upgrade: resolvableValue(z.boolean().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  backup_retention_period: resolvableValue(z.number().optional()),
  backup_target: resolvableValue(z.string().optional()),
  backup_window: resolvableValue(z.string().optional()),
  blue_green_update: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  ca_cert_identifier: resolvableValue(z.string().optional()),
  character_set_name: resolvableValue(z.string().optional()),
  copy_tags_to_snapshot: resolvableValue(z.boolean().optional()),
  custom_iam_instance_profile: resolvableValue(z.string().optional()),
  customer_owned_ip_enabled: resolvableValue(z.boolean().optional()),
  database_insights_mode: resolvableValue(z.string().optional()),
  db_name: resolvableValue(z.string().optional()),
  db_subnet_group_name: resolvableValue(z.string().optional()),
  dedicated_log_volume: resolvableValue(z.boolean().optional()),
  delete_automated_backups: resolvableValue(z.boolean().optional()),
  deletion_protection: resolvableValue(z.boolean().optional()),
  domain: resolvableValue(z.string().optional()),
  domain_auth_secret_arn: resolvableValue(z.string().optional()),
  domain_dns_ips: resolvableValue(z.string().array().optional()),
  domain_fqdn: resolvableValue(z.string().optional()),
  domain_iam_role_name: resolvableValue(z.string().optional()),
  domain_ou: resolvableValue(z.string().optional()),
  enabled_cloudwatch_logs_exports: resolvableValue(
    z.string().array().optional(),
  ),
  engine: resolvableValue(z.string().optional()),
  engine_lifecycle_support: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  final_snapshot_identifier: resolvableValue(z.string().optional()),
  iam_database_authentication_enabled: resolvableValue(z.boolean().optional()),
  identifier: resolvableValue(z.string().optional()),
  identifier_prefix: resolvableValue(z.string().optional()),
  iops: resolvableValue(z.number().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  license_model: resolvableValue(z.string().optional()),
  maintenance_window: resolvableValue(z.string().optional()),
  manage_master_user_password: resolvableValue(z.boolean().optional()),
  master_user_secret_kms_key_id: resolvableValue(z.string().optional()),
  max_allocated_storage: resolvableValue(z.number().optional()),
  monitoring_interval: resolvableValue(z.number().optional()),
  monitoring_role_arn: resolvableValue(z.string().optional()),
  multi_az: resolvableValue(z.boolean().optional()),
  nchar_character_set_name: resolvableValue(z.string().optional()),
  network_type: resolvableValue(z.string().optional()),
  option_group_name: resolvableValue(z.string().optional()),
  parameter_group_name: resolvableValue(z.string().optional()),
  password: resolvableValue(z.string().optional()),
  password_wo: resolvableValue(z.string().optional()),
  password_wo_version: resolvableValue(z.number().optional()),
  performance_insights_enabled: resolvableValue(z.boolean().optional()),
  performance_insights_kms_key_id: resolvableValue(z.string().optional()),
  performance_insights_retention_period: resolvableValue(z.number().optional()),
  port: resolvableValue(z.number().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  replica_mode: resolvableValue(z.string().optional()),
  replicate_source_db: resolvableValue(z.string().optional()),
  restore_to_point_in_time: resolvableValue(
    z.object({
      restore_time: z.string().optional(),
      source_db_instance_automated_backups_arn: z.string().optional(),
      source_db_instance_identifier: z.string().optional(),
      source_dbi_resource_id: z.string().optional(),
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
  skip_final_snapshot: resolvableValue(z.boolean().optional()),
  snapshot_identifier: resolvableValue(z.string().optional()),
  storage_encrypted: resolvableValue(z.boolean().optional()),
  storage_throughput: resolvableValue(z.number().optional()),
  storage_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  timezone: resolvableValue(z.string().optional()),
  upgrade_storage_config: resolvableValue(z.boolean().optional()),
  username: resolvableValue(z.string().optional()),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  address: z.string().optional(),
  allocated_storage: z.number().optional(),
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  backup_retention_period: z.number().optional(),
  backup_window: z.string().optional(),
  ca_cert_identifier: z.string().optional(),
  character_set_name: z.string().optional(),
  db_name: z.string().optional(),
  domain: z.string().optional(),
  domain_auth_secret_arn: z.string().optional(),
  domain_dns_ips: z.string().array().optional(),
  domain_fqdn: z.string().optional(),
  domain_iam_role_name: z.string().optional(),
  domain_ou: z.string().optional(),
  endpoint: z.string().optional(),
  engine: z.string().optional(),
  engine_version_actual: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  latest_restorable_time: z.string().optional(),
  listener_endpoint: z.object({
    address: z.string(),
    hosted_zone_id: z.string(),
    port: z.number(),
  }).array().optional(),
  maintenance_window: z.string().optional(),
  master_user_secret: z.object({
    kms_key_id: z.string(),
    secret_arn: z.string(),
    secret_status: z.string(),
  }).array().optional(),
  multi_az: z.boolean().optional(),
  port: z.number().optional(),
  resource_id: z.string().optional(),
  status: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  username: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/db_instance

export function AwsDbInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
      _style={extendStyle(props, RDS_INSTANCE)}
    />
  )
}

export const useAwsDbInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsDbInstance, idFilter, baseNode, optional)

export const useAwsDbInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsDbInstance, idFilter, baseNode, optional)
