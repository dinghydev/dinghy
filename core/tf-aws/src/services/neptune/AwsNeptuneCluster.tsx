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
  allow_major_version_upgrade: resolvableValue(z.boolean().optional()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  availability_zones: resolvableValue(z.string().array().optional()),
  backup_retention_period: resolvableValue(z.number().optional()),
  cluster_identifier: resolvableValue(z.string().optional()),
  cluster_identifier_prefix: resolvableValue(z.string().optional()),
  copy_tags_to_snapshot: resolvableValue(z.boolean().optional()),
  deletion_protection: resolvableValue(z.boolean().optional()),
  enable_cloudwatch_logs_exports: resolvableValue(
    z.string().array().optional(),
  ),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  final_snapshot_identifier: resolvableValue(z.string().optional()),
  global_cluster_identifier: resolvableValue(z.string().optional()),
  iam_database_authentication_enabled: resolvableValue(z.boolean().optional()),
  iam_roles: resolvableValue(z.string().array().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  neptune_cluster_parameter_group_name: resolvableValue(z.string().optional()),
  neptune_instance_parameter_group_name: resolvableValue(z.string().optional()),
  neptune_subnet_group_name: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  preferred_backup_window: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_source_identifier: resolvableValue(z.string().optional()),
  serverless_v2_scaling_configuration: resolvableValue(
    z.object({
      max_capacity: z.number().optional(),
      min_capacity: z.number().optional(),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cluster_members: z.set(z.string()).optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/neptune_cluster

export function AwsNeptuneCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptuneCluster = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsNeptuneCluster, idFilter, baseNode)

export const useAwsNeptuneClusters = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsNeptuneCluster, idFilter, baseNode)
