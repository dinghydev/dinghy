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
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  cors_config: resolvableValue(
    z.object({
      access_control_allow_credentials: z.boolean(),
      access_control_max_age_sec: z.number().optional(),
      origin_override: z.boolean(),
      access_control_allow_headers: z.object({
        items: z.string().array().optional(),
      }),
      access_control_allow_methods: z.object({
        items: z.string().array().optional(),
      }),
      access_control_allow_origins: z.object({
        items: z.string().array().optional(),
      }),
      access_control_expose_headers: z.object({
        items: z.string().array().optional(),
      }).optional(),
    }).optional(),
  ),
  custom_headers_config: resolvableValue(
    z.object({
      items: z.object({
        header: z.string(),
        override: z.boolean(),
        value: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  remove_headers_config: resolvableValue(
    z.object({
      items: z.object({
        header: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  security_headers_config: resolvableValue(
    z.object({
      content_security_policy: z.object({
        content_security_policy: z.string(),
        override: z.boolean(),
      }).optional(),
      content_type_options: z.object({
        override: z.boolean(),
      }).optional(),
      frame_options: z.object({
        frame_option: z.string(),
        override: z.boolean(),
      }).optional(),
      referrer_policy: z.object({
        override: z.boolean(),
        referrer_policy: z.string(),
      }).optional(),
      strict_transport_security: z.object({
        access_control_max_age_sec: z.number(),
        include_subdomains: z.boolean().optional(),
        override: z.boolean(),
        preload: z.boolean().optional(),
      }).optional(),
      xss_protection: z.object({
        mode_block: z.boolean().optional(),
        override: z.boolean(),
        protection: z.boolean(),
        report_uri: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  server_timing_headers_config: resolvableValue(
    z.object({
      enabled: z.boolean(),
      sampling_rate: z.number(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_response_headers_policy

export function AwsCloudfrontResponseHeadersPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_response_headers_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontResponseHeadersPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudfrontResponseHeadersPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontResponseHeadersPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontResponseHeadersPolicy,
    idFilter,
    baseNode,
    optional,
  )
