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
  cluster_identifier: resolvableValue(z.string()),
  engine: resolvableValue(z.string()),
  instance_class: resolvableValue(z.string()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  auto_minor_version_upgrade: resolvableValue(z.boolean().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  ca_cert_identifier: resolvableValue(z.string().optional()),
  copy_tags_to_snapshot: resolvableValue(z.boolean().optional()),
  custom_iam_instance_profile: resolvableValue(z.string().optional()),
  db_parameter_group_name: resolvableValue(z.string().optional()),
  db_subnet_group_name: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  identifier: resolvableValue(z.string().optional()),
  identifier_prefix: resolvableValue(z.string().optional()),
  monitoring_interval: resolvableValue(z.number().optional()),
  monitoring_role_arn: resolvableValue(z.string().optional()),
  performance_insights_enabled: resolvableValue(z.boolean().optional()),
  performance_insights_kms_key_id: resolvableValue(z.string().optional()),
  performance_insights_retention_period: resolvableValue(z.number().optional()),
  preferred_backup_window: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  promotion_tier: resolvableValue(z.number().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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
  availability_zone: z.string().optional(),
  cluster_identifier: z.string().optional(),
  dbi_resource_id: z.string().optional(),
  endpoint: z.string().optional(),
  engine: z.string().optional(),
  engine_version_actual: z.string().optional(),
  id: z.string().optional(),
  identifier: z.string().optional(),
  kms_key_id: z.string().optional(),
  network_type: z.string().optional(),
  performance_insights_enabled: z.boolean().optional(),
  performance_insights_kms_key_id: z.string().optional(),
  port: z.number().optional(),
  storage_encrypted: z.boolean().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  writer: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rds_cluster_instance

export function AwsRdsClusterInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsClusterInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsRdsClusterInstance, idFilter, baseNode, optional)

export const useAwsRdsClusterInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRdsClusterInstance,
    idFilter,
    baseNode,
    optional,
  )
