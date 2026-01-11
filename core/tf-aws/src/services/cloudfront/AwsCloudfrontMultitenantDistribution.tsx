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
  comment: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean()),
  cache_behavior: resolvableValue(
    z.object({
      cache_policy_id: z.string().optional(),
      compress: z.boolean().optional(),
      field_level_encryption_id: z.string().optional(),
      origin_request_policy_id: z.string().optional(),
      path_pattern: z.string(),
      realtime_log_config_arn: z.string().optional(),
      response_headers_policy_id: z.string().optional(),
      target_origin_id: z.string(),
      viewer_protocol_policy: z.string(),
      allowed_methods: z.object({
        cached_methods: z.string().array(),
        items: z.string().array(),
      }).array().optional(),
      function_association: z.object({
        event_type: z.string(),
        function_arn: z.string(),
      }).array().optional(),
      lambda_function_association: z.object({
        event_type: z.string(),
        include_body: z.boolean().optional(),
        lambda_function_arn: z.string(),
      }).array().optional(),
      trusted_key_groups: z.object({
        enabled: z.boolean().optional(),
        items: z.string().array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  custom_error_response: resolvableValue(
    z.object({
      error_caching_min_ttl: z.number().optional(),
      error_code: z.number(),
      response_code: z.string().optional(),
      response_page_path: z.string().optional(),
    }).array().optional(),
  ),
  default_cache_behavior: resolvableValue(
    z.object({
      cache_policy_id: z.string().optional(),
      compress: z.boolean().optional(),
      field_level_encryption_id: z.string().optional(),
      origin_request_policy_id: z.string().optional(),
      realtime_log_config_arn: z.string().optional(),
      response_headers_policy_id: z.string().optional(),
      target_origin_id: z.string(),
      viewer_protocol_policy: z.string(),
      allowed_methods: z.object({
        cached_methods: z.string().array(),
        items: z.string().array(),
      }).array().optional(),
      function_association: z.object({
        event_type: z.string(),
        function_arn: z.string(),
      }).array().optional(),
      lambda_function_association: z.object({
        event_type: z.string(),
        include_body: z.boolean().optional(),
        lambda_function_arn: z.string(),
      }).array().optional(),
      trusted_key_groups: z.object({
        enabled: z.boolean().optional(),
        items: z.string().array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  default_root_object: resolvableValue(z.string().optional()),
  http_version: resolvableValue(z.string().optional()),
  origin: resolvableValue(
    z.object({
      connection_attempts: z.number().optional(),
      connection_timeout: z.number().optional(),
      domain_name: z.string(),
      id: z.string(),
      origin_access_control_id: z.string().optional(),
      origin_path: z.string().optional(),
      response_completion_timeout: z.number().optional(),
      custom_header: z.object({
        header_name: z.string(),
        header_value: z.string(),
      }).array().optional(),
      custom_origin_config: z.object({
        http_port: z.number(),
        https_port: z.number(),
        ip_address_type: z.string().optional(),
        origin_keepalive_timeout: z.number().optional(),
        origin_protocol_policy: z.string(),
        origin_read_timeout: z.number().optional(),
        origin_ssl_protocols: z.string().array(),
      }).array().optional(),
      origin_shield: z.object({
        enabled: z.boolean(),
        origin_shield_region: z.string().optional(),
      }).array().optional(),
      vpc_origin_config: z.object({
        origin_keepalive_timeout: z.number().optional(),
        origin_read_timeout: z.number().optional(),
        vpc_origin_id: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  origin_group: resolvableValue(
    z.object({
      origin_id: z.string(),
      failover_criteria: z.object({
        status_codes: z.number().array(),
      }).array().optional(),
      member: z.object({
        origin_id: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  restrictions: resolvableValue(
    z.object({
      geo_restriction: z.object({
        items: z.string().array().optional(),
        restriction_type: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tenant_config: resolvableValue(
    z.object({
      parameter_definition: z.object({
        name: z.string(),
        definition: z.object({
          string_schema: z.object({
            comment: z.string().optional(),
            default_value: z.string().optional(),
            required: z.boolean(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  viewer_certificate: resolvableValue(
    z.object({
      acm_certificate_arn: z.string().optional(),
      cloudfront_default_certificate: z.boolean().optional(),
      minimum_protocol_version: z.string().optional(),
      ssl_support_method: z.string().optional(),
    }).array().optional(),
  ),
  web_acl_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  active_trusted_key_groups: z.object({
    enabled: z.boolean(),
    items: z.object({
      key_group_id: z.string(),
      key_pair_ids: z.string().array(),
    }).array().optional(),
  }).array().optional().optional(),
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  connection_mode: z.string().optional(),
  domain_name: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  in_progress_invalidation_batches: z.number().optional(),
  last_modified_time: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_multitenant_distribution

export function AwsCloudfrontMultitenantDistribution(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_multitenant_distribution'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontMultitenantDistribution = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudfrontMultitenantDistribution,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontMultitenantDistributions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontMultitenantDistribution,
    idFilter,
    baseNode,
    optional,
  )
