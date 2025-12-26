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
import { AWS_IOT_GREENGRASS_DEPLOYMENT } from '@dinghy/diagrams/containersAwsGroups'
import { CLOUDFRONT } from '@dinghy/diagrams/entitiesAwsNetworkContentDelivery'

export const InputSchema = z.object({
  default_cache_behavior: resolvableValue(z.object({
    allowed_methods: z.string().array(),
    cache_policy_id: z.string().optional(),
    cached_methods: z.string().array(),
    compress: z.boolean().optional(),
    default_ttl: z.number().optional(),
    field_level_encryption_id: z.string().optional(),
    max_ttl: z.number().optional(),
    min_ttl: z.number().optional(),
    origin_request_policy_id: z.string().optional(),
    realtime_log_config_arn: z.string().optional(),
    response_headers_policy_id: z.string().optional(),
    smooth_streaming: z.boolean().optional(),
    target_origin_id: z.string(),
    trusted_key_groups: z.string().array().optional(),
    trusted_signers: z.string().array().optional(),
    viewer_protocol_policy: z.string(),
    forwarded_values: z.object({
      headers: z.string().array().optional(),
      query_string: z.boolean(),
      query_string_cache_keys: z.string().array().optional(),
      cookies: z.object({
        forward: z.string(),
        whitelisted_names: z.string().array().optional(),
      }),
    }).optional(),
    function_association: z.object({
      event_type: z.string(),
      function_arn: z.string(),
    }).array().optional(),
    grpc_config: z.object({
      enabled: z.boolean().optional(),
    }).optional(),
    lambda_function_association: z.object({
      event_type: z.string(),
      include_body: z.boolean().optional(),
      lambda_arn: z.string(),
    }).array().optional(),
  })),
  enabled: resolvableValue(z.boolean()),
  origin: resolvableValue(
    z.object({
      connection_attempts: z.number().optional(),
      connection_timeout: z.number().optional(),
      domain_name: z.string(),
      origin_access_control_id: z.string().optional(),
      origin_id: z.string(),
      origin_path: z.string().optional(),
      response_completion_timeout: z.number().optional(),
      custom_header: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
      custom_origin_config: z.object({
        http_port: z.number(),
        https_port: z.number(),
        ip_address_type: z.string().optional(),
        origin_keepalive_timeout: z.number().optional(),
        origin_protocol_policy: z.string(),
        origin_read_timeout: z.number().optional(),
        origin_ssl_protocols: z.string().array(),
      }).optional(),
      origin_shield: z.object({
        enabled: z.boolean(),
        origin_shield_region: z.string().optional(),
      }).optional(),
      s3_origin_config: z.object({
        origin_access_identity: z.string(),
      }).optional(),
      vpc_origin_config: z.object({
        origin_keepalive_timeout: z.number().optional(),
        origin_read_timeout: z.number().optional(),
        vpc_origin_id: z.string(),
      }).optional(),
    }).array(),
  ),
  restrictions: resolvableValue(z.object({
    geo_restriction: z.object({
      locations: z.string().array().optional(),
      restriction_type: z.string(),
    }),
  })),
  viewer_certificate: resolvableValue(z.object({
    acm_certificate_arn: z.string().optional(),
    cloudfront_default_certificate: z.boolean().optional(),
    iam_certificate_id: z.string().optional(),
    minimum_protocol_version: z.string().optional(),
    ssl_support_method: z.string().optional(),
  })),
  aliases: resolvableValue(z.string().array().optional()),
  anycast_ip_list_id: resolvableValue(z.string().optional()),
  comment: resolvableValue(z.string().optional()),
  continuous_deployment_policy_id: resolvableValue(z.string().optional()),
  custom_error_response: resolvableValue(
    z.object({
      error_caching_min_ttl: z.number().optional(),
      error_code: z.number(),
      response_code: z.number().optional(),
      response_page_path: z.string().optional(),
    }).array().optional(),
  ),
  default_root_object: resolvableValue(z.string().optional()),
  http_version: resolvableValue(z.string().optional()),
  is_ipv6_enabled: resolvableValue(z.boolean().optional()),
  logging_config: resolvableValue(
    z.object({
      bucket: z.string().optional(),
      include_cookies: z.boolean().optional(),
      prefix: z.string().optional(),
    }).optional(),
  ),
  ordered_cache_behavior: resolvableValue(
    z.object({
      allowed_methods: z.string().array(),
      cache_policy_id: z.string().optional(),
      cached_methods: z.string().array(),
      compress: z.boolean().optional(),
      default_ttl: z.number().optional(),
      field_level_encryption_id: z.string().optional(),
      max_ttl: z.number().optional(),
      min_ttl: z.number().optional(),
      origin_request_policy_id: z.string().optional(),
      path_pattern: z.string(),
      realtime_log_config_arn: z.string().optional(),
      response_headers_policy_id: z.string().optional(),
      smooth_streaming: z.boolean().optional(),
      target_origin_id: z.string(),
      trusted_key_groups: z.string().array().optional(),
      trusted_signers: z.string().array().optional(),
      viewer_protocol_policy: z.string(),
      forwarded_values: z.object({
        headers: z.string().array().optional(),
        query_string: z.boolean(),
        query_string_cache_keys: z.string().array().optional(),
        cookies: z.object({
          forward: z.string(),
          whitelisted_names: z.string().array().optional(),
        }),
      }).optional(),
      function_association: z.object({
        event_type: z.string(),
        function_arn: z.string(),
      }).array().optional(),
      grpc_config: z.object({
        enabled: z.boolean().optional(),
      }).optional(),
      lambda_function_association: z.object({
        event_type: z.string(),
        include_body: z.boolean().optional(),
        lambda_arn: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  origin_group: resolvableValue(
    z.object({
      origin_id: z.string(),
      failover_criteria: z.object({
        status_codes: z.number().array(),
      }),
      member: z.object({
        origin_id: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  price_class: resolvableValue(z.string().optional()),
  retain_on_delete: resolvableValue(z.boolean().optional()),
  staging: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  wait_for_deployment: resolvableValue(z.boolean().optional()),
  web_acl_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  domain_name: z.string().optional(),
  enabled: z.boolean().optional(),
  etag: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  in_progress_validation_batches: z.number().optional(),
  last_modified_time: z.string().optional(),
  logging_v1_enabled: z.boolean().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  trusted_key_groups: z.object({
    enabled: z.boolean(),
    items: z.object({
      key_group_id: z.string(),
      key_pair_ids: z.set(z.string()),
    }).array(),
  }).array().optional(),
  trusted_signers: z.object({
    enabled: z.boolean(),
    items: z.object({
      aws_account_number: z.string(),
      key_pair_ids: z.set(z.string()),
    }).array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_distribution

export function AwsCloudfrontDistribution(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_distribution'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
      _style={extendStyle(props, AWS_IOT_GREENGRASS_DEPLOYMENT, CLOUDFRONT)}
    />
  )
}

export const useAwsCloudfrontDistribution = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudfrontDistribution,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontDistributions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontDistribution,
    idFilter,
    baseNode,
    optional,
  )
