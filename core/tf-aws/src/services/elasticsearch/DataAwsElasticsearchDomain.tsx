import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticsearchDomain } from './AwsElasticsearchDomain.tsx'

export const InputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
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
    maintenance_schedule: z.set(z.object({
      cron_expression_for_recurrence: z.string(),
      duration: z.object({
        unit: z.string(),
        value: z.number(),
      }).array(),
      start_at: z.string(),
    })),
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
  log_publishing_options: z.set(z.object({
    cloudwatch_log_group_arn: z.string(),
    enabled: z.boolean(),
    log_type: z.string(),
  })).optional(),
  node_to_node_encryption: z.object({
    enabled: z.boolean(),
  }).array().optional(),
  processing: z.boolean().optional(),
  snapshot_options: z.object({
    automated_snapshot_start_hour: z.number(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/elasticsearch_domain

export function DataAwsElasticsearchDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsElasticsearchDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsElasticsearchDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticsearchDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsElasticsearchDomain,
    idFilter,
    baseNode,
    optional,
  )
