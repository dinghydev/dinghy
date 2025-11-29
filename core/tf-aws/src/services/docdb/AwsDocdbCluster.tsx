import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/docdb_cluster

export const InputSchema = z.object({
  master_user_secret: resolvableValue(
    z.object({
      kms_key_id: z.string(),
      secret_arn: z.string(),
      secret_status: z.string(),
    }).array(),
  ),
  allow_major_version_upgrade: resolvableValue(z.boolean().optional()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  availability_zones: resolvableValue(z.string().array().optional()),
  backup_retention_period: resolvableValue(z.number().optional()),
  cluster_identifier: resolvableValue(z.string().optional()),
  cluster_identifier_prefix: resolvableValue(z.string().optional()),
  db_cluster_parameter_group_name: resolvableValue(z.string().optional()),
  db_subnet_group_name: resolvableValue(z.string().optional()),
  deletion_protection: resolvableValue(z.boolean().optional()),
  enabled_cloudwatch_logs_exports: resolvableValue(
    z.string().array().optional(),
  ),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  final_snapshot_identifier: resolvableValue(z.string().optional()),
  global_cluster_identifier: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  manage_master_user_password: resolvableValue(z.boolean().optional()),
  master_password: resolvableValue(z.string().optional()),
  master_password_wo: resolvableValue(z.string().optional()),
  master_password_wo_version: resolvableValue(z.number().optional()),
  master_username: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  preferred_backup_window: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  restore_to_point_in_time: resolvableValue(
    z.object({
      restore_to_time: z.string().optional(),
      restore_type: z.string().optional(),
      source_cluster_identifier: z.string(),
      use_latest_restorable_time: z.boolean().optional(),
    }).optional(),
  ),
  serverless_v2_scaling_configuration: resolvableValue(
    z.object({
      max_capacity: z.number(),
      min_capacity: z.number(),
    }).optional(),
  ),
  skip_final_snapshot: resolvableValue(z.boolean().optional()),
  snapshot_identifier: resolvableValue(z.string().optional()),
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
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cluster_members: z.string().array().optional(),
  cluster_resource_id: z.string().optional(),
  endpoint: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  reader_endpoint: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDocdbCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDocdbCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDocdbCluster, node, id)

export const useAwsDocdbClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDocdbCluster, node, id)
