import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elasticsearch_domain

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string()),
  access_policies: resolvableValue(z.string().optional()),
  advanced_options: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  advanced_security_options: resolvableValue(
    z.object({
      enabled: z.boolean(),
      internal_user_database_enabled: z.boolean().optional(),
    }).optional(),
  ),
  auto_tune_options: resolvableValue(
    z.object({
      desired_state: z.string(),
      rollback_on_disable: z.string().optional(),
    }).optional(),
  ),
  cluster_config: resolvableValue(
    z.object({
      dedicated_master_count: z.number().optional(),
      dedicated_master_enabled: z.boolean().optional(),
      dedicated_master_type: z.string().optional(),
      instance_count: z.number().optional(),
      instance_type: z.string().optional(),
      warm_count: z.number().optional(),
      warm_enabled: z.boolean().optional(),
      warm_type: z.string().optional(),
      zone_awareness_enabled: z.boolean().optional(),
    }).optional(),
  ),
  cognito_options: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      identity_pool_id: z.string(),
      role_arn: z.string(),
      user_pool_id: z.string(),
    }).optional(),
  ),
  domain_endpoint_options: resolvableValue(
    z.object({
      custom_endpoint: z.string().optional(),
      custom_endpoint_certificate_arn: z.string().optional(),
      custom_endpoint_enabled: z.boolean().optional(),
      enforce_https: z.boolean().optional(),
      tls_security_policy: z.string().optional(),
    }).optional(),
  ),
  ebs_options: resolvableValue(
    z.object({
      ebs_enabled: z.boolean(),
      iops: z.number().optional(),
      throughput: z.number().optional(),
      volume_size: z.number().optional(),
      volume_type: z.string().optional(),
    }).optional(),
  ),
  elasticsearch_version: resolvableValue(z.string().optional()),
  encrypt_at_rest: resolvableValue(
    z.object({
      enabled: z.boolean(),
      kms_key_id: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  log_publishing_options: resolvableValue(
    z.object({
      cloudwatch_log_group_arn: z.string(),
      enabled: z.boolean().optional(),
      log_type: z.string(),
    }).array().optional(),
  ),
  node_to_node_encryption: resolvableValue(
    z.object({
      enabled: z.boolean(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  snapshot_options: resolvableValue(
    z.object({
      automated_snapshot_start_hour: z.number(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_options: resolvableValue(
    z.object({
      availability_zones: z.string().array(),
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array().optional(),
      vpc_id: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  domain_id: z.string().optional(),
  endpoint: z.string().optional(),
  kibana_endpoint: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsElasticsearchDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticsearch_domain'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticsearchDomain = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsElasticsearchDomain, node, id)

export const useAwsElasticsearchDomains = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsElasticsearchDomain, node, id)
