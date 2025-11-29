import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontResponseHeadersPolicy } from './AwsCloudfrontResponseHeadersPolicy.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_response_headers_policy

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  comment: z.string().optional(),
  cors_config: z.object({
    access_control_allow_credentials: z.boolean(),
    access_control_allow_headers: z.object({
      items: z.string().array(),
    }).array(),
    access_control_allow_methods: z.object({
      items: z.string().array(),
    }).array(),
    access_control_allow_origins: z.object({
      items: z.string().array(),
    }).array(),
    access_control_expose_headers: z.object({
      items: z.string().array(),
    }).array(),
    access_control_max_age_sec: z.number(),
    origin_override: z.boolean(),
  }).array().optional(),
  custom_headers_config: z.object({
    items: z.object({
      header: z.string(),
      override: z.boolean(),
      value: z.string(),
    }).array(),
  }).array().optional(),
  etag: z.string().optional(),
  remove_headers_config: z.object({
    items: z.object({
      header: z.string(),
    }).array(),
  }).array().optional(),
  security_headers_config: z.object({
    content_security_policy: z.object({
      content_security_policy: z.string(),
      override: z.boolean(),
    }).array(),
    content_type_options: z.object({
      override: z.boolean(),
    }).array(),
    frame_options: z.object({
      frame_option: z.string(),
      override: z.boolean(),
    }).array(),
    referrer_policy: z.object({
      override: z.boolean(),
      referrer_policy: z.string(),
    }).array(),
    strict_transport_security: z.object({
      access_control_max_age_sec: z.number(),
      include_subdomains: z.boolean(),
      override: z.boolean(),
      preload: z.boolean(),
    }).array(),
    xss_protection: z.object({
      mode_block: z.boolean(),
      override: z.boolean(),
      protection: z.boolean(),
      report_uri: z.string(),
    }).array(),
  }).array().optional(),
  server_timing_headers_config: z.object({
    enabled: z.boolean(),
    sampling_rate: z.number(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudfrontResponseHeadersPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudfrontResponseHeadersPolicy
      _type='aws_cloudfront_response_headers_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontResponseHeadersPolicy = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsCloudfrontResponseHeadersPolicy, node, id)

export const useDataAwsCloudfrontResponseHeadersPolicys = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsCloudfrontResponseHeadersPolicy, node, id)
