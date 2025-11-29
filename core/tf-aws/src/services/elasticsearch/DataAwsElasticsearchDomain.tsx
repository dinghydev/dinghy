import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticsearchDomain } from './AwsElasticsearchDomain.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elasticsearch_domain

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string()),
  snapshot_options: resolvableValue(
    z.object({
      automated_snapshot_start_hour: z.number(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  access_policies: z.string().optional(),
  advanced_options: z.record(z.string(), z.string()).optional(),
  advanced_security_options: z.object({
    enabled: z.boolean(),
    internal_user_database_enabled: z.boolean(),
  }).array().optional(),
  arn: z.string().optional(),
  auto_tune_options: z.object({
    desired_state: z.string(),
    maintenance_schedule: z.object({
      cron_expression_for_recurrence: z.string(),
      duration: z.object({
        unit: z.string(),
        value: z.number(),
      }).array(),
      start_at: z.string(),
    }).array(),
    rollback_on_disable: z.string(),
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
  deleted: z.boolean().optional(),
  domain_id: z.string().optional(),
  ebs_options: z.object({
    ebs_enabled: z.boolean(),
    iops: z.number(),
    throughput: z.number(),
    volume_size: z.number(),
    volume_type: z.string(),
  }).array().optional(),
  elasticsearch_version: z.string().optional(),
  encryption_at_rest: z.object({
    enabled: z.boolean(),
    kms_key_id: z.string(),
  }).array().optional(),
  endpoint: z.string().optional(),
  kibana_endpoint: z.string().optional(),
  log_publishing_options: z.object({
    cloudwatch_log_group_arn: z.string(),
    enabled: z.boolean(),
    log_type: z.string(),
  }).array().optional(),
  node_to_node_encryption: z.object({
    enabled: z.boolean(),
  }).array().optional(),
  processing: z.boolean().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_options: z.object({
    availability_zones: z.string().array(),
    security_group_ids: z.string().array(),
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsElasticsearchDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsElasticsearchDomain
      _type='aws_elasticsearch_domain'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticsearchDomain = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsElasticsearchDomain, node, id)

export const useDataAwsElasticsearchDomains = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsElasticsearchDomain, node, id)
