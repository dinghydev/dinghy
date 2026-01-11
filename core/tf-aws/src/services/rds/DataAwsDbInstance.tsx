import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDbInstance } from './AwsDbInstance.tsx'

export const InputSchema = z.object({
  db_instance_identifier: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  address: z.string().optional(),
  allocated_storage: z.number().optional(),
  auto_minor_version_upgrade: z.boolean().optional(),
  availability_zone: z.string().optional(),
  backup_retention_period: z.number().optional(),
  ca_cert_identifier: z.string().optional(),
  database_insights_mode: z.string().optional(),
  db_cluster_identifier: z.string().optional(),
  db_instance_arn: z.string().optional(),
  db_instance_class: z.string().optional(),
  db_instance_port: z.number().optional(),
  db_name: z.string().optional(),
  db_parameter_groups: z.string().array().optional(),
  db_subnet_group: z.string().optional(),
  enabled_cloudwatch_logs_exports: z.string().array().optional(),
  endpoint: z.string().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  iops: z.number().optional(),
  kms_key_id: z.string().optional(),
  license_model: z.string().optional(),
  master_user_secret: z.object({
    kms_key_id: z.string(),
    secret_arn: z.string(),
    secret_status: z.string(),
  }).array().optional(),
  master_username: z.string().optional(),
  max_allocated_storage: z.number().optional(),
  monitoring_interval: z.number().optional(),
  monitoring_role_arn: z.string().optional(),
  multi_az: z.boolean().optional(),
  network_type: z.string().optional(),
  option_group_memberships: z.string().array().optional(),
  port: z.number().optional(),
  preferred_backup_window: z.string().optional(),
  preferred_maintenance_window: z.string().optional(),
  publicly_accessible: z.boolean().optional(),
  replicate_source_db: z.string().optional(),
  resource_id: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  storage_throughput: z.number().optional(),
  storage_type: z.string().optional(),
  timezone: z.string().optional(),
  upgrade_rollout_order: z.string().optional(),
  vpc_security_groups: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/db_instance

export function DataAwsDbInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDbInstance
      _type='aws_db_instance'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDbInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsDbInstance, idFilter, baseNode, optional)

export const useDataAwsDbInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsDbInstance, idFilter, baseNode, optional)
