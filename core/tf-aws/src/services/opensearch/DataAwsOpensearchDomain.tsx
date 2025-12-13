import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchDomain } from './AwsOpensearchDomain.tsx'

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  access_policies: z.string().optional(),
  advanced_options: z.record(z.string(), z.string()).optional(),
  advanced_security_options: z.object({
    anonymous_auth_enabled: z.boolean(),
    enabled: z.boolean(),
    internal_user_database_enabled: z.boolean(),
  }).array().optional(),
  arn: z.string().optional(),
  auto_tune_options: z.object({
    desired_state: z.string(),
    maintenance_schedule: z.set(z.object({
      cron_expression_for_recurrence: z.string(),
      duration: z.object({
        unit: z.string(),
        value: z.number(),
      }).array(),
      start_at: z.string(),
    })),
    rollback_on_disable: z.string(),
    use_off_peak_window: z.boolean(),
  }).array().optional(),
  cluster_config: z.object({
    cold_storage_options: z.object({
      enabled: z.boolean(),
    }).array(),
    dedicated_master_count: z.number(),
    dedicated_master_enabled: z.boolean(),
    dedicated_master_type: z.string(),
    instance_count: z.number(),
    instance_type: z.string(),
    multi_az_with_standby_enabled: z.boolean(),
    node_options: z.object({
      node_config: z.object({
        count: z.number(),
        enabled: z.boolean(),
        type: z.string(),
      }).array(),
      node_type: z.string(),
    }).array(),
    warm_count: z.number(),
    warm_enabled: z.boolean(),
    warm_type: z.string(),
    zone_awareness_config: z.object({
      availability_zone_count: z.number(),
    }).array(),
    zone_awareness_enabled: z.boolean(),
  }).array().optional(),
  cognito_options: z.object({
    enabled: z.boolean(),
    identity_pool_id: z.string(),
    role_arn: z.string(),
    user_pool_id: z.string(),
  }).array().optional(),
  created: z.boolean().optional(),
  dashboard_endpoint: z.string().optional(),
  dashboard_endpoint_v2: z.string().optional(),
  deleted: z.boolean().optional(),
  domain_endpoint_v2_hosted_zone_id: z.string().optional(),
  domain_id: z.string().optional(),
  ebs_options: z.object({
    ebs_enabled: z.boolean(),
    iops: z.number(),
    throughput: z.number(),
    volume_size: z.number(),
    volume_type: z.string(),
  }).array().optional(),
  encryption_at_rest: z.object({
    enabled: z.boolean(),
    kms_key_id: z.string(),
  }).array().optional(),
  endpoint: z.string().optional(),
  endpoint_v2: z.string().optional(),
  engine_version: z.string().optional(),
  identity_center_options: z.object({
    enabled_api_access: z.boolean(),
    identity_center_instance_arn: z.string(),
    roles_key: z.string(),
    subject_key: z.string(),
  }).array().optional(),
  ip_address_type: z.string().optional(),
  log_publishing_options: z.set(z.object({
    cloudwatch_log_group_arn: z.string(),
    enabled: z.boolean(),
    log_type: z.string(),
  })).optional(),
  node_to_node_encryption: z.object({
    enabled: z.boolean(),
  }).array().optional(),
  off_peak_window_options: z.object({
    enabled: z.boolean(),
    off_peak_window: z.object({
      window_start_time: z.object({
        hours: z.number(),
        minutes: z.number(),
      }).array(),
    }).array(),
  }).array().optional(),
  processing: z.boolean().optional(),
  snapshot_options: z.object({
    automated_snapshot_start_hour: z.number(),
  }).array().optional(),
  software_update_options: z.object({
    auto_software_update_enabled: z.boolean(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_options: z.object({
    availability_zones: z.set(z.string()),
    security_group_ids: z.set(z.string()),
    subnet_ids: z.set(z.string()),
    vpc_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/opensearch_domain

export function DataAwsOpensearchDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOpensearchDomain
      _type='aws_opensearch_domain'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchDomain = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsOpensearchDomain, idFilter, baseNode)

export const useDataAwsOpensearchDomains = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsOpensearchDomain, idFilter, baseNode)
