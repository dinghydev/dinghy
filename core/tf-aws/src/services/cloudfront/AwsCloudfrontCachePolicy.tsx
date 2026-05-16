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

export const AwsCloudfrontCachePolicyInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  parameters_in_cache_key_and_forwarded_to_origin: resolvableValue(z.object({
    enable_accept_encoding_brotli: z.boolean().optional(),
    enable_accept_encoding_gzip: z.boolean().optional(),
    cookies_config: z.object({
      cookie_behavior: z.string(),
      cookies: z.object({
        items: z.string().array().optional(),
      }).optional(),
    }),
    headers_config: z.object({
      header_behavior: z.string().optional(),
      headers: z.object({
        items: z.string().array().optional(),
      }).optional(),
    }),
    query_strings_config: z.object({
      query_string_behavior: z.string(),
      query_strings: z.object({
        items: z.string().array().optional(),
      }).optional(),
    }),
  })),
  comment: resolvableValue(z.string().optional()),
  default_ttl: resolvableValue(z.number().optional()),
  max_ttl: resolvableValue(z.number().optional()),
  min_ttl: resolvableValue(z.number().optional()),
})

export const AwsCloudfrontCachePolicyOutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type AwsCloudfrontCachePolicyInputProps =
  & z.input<typeof AwsCloudfrontCachePolicyInputSchema>
  & NodeProps

export type AwsCloudfrontCachePolicyOutputProps =
  & z.output<typeof AwsCloudfrontCachePolicyOutputSchema>
  & z.output<typeof AwsCloudfrontCachePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_cache_policy

export function AwsCloudfrontCachePolicy(
  props: Partial<AwsCloudfrontCachePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_cache_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontCachePolicyInputSchema}
      _outputSchema={AwsCloudfrontCachePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontCachePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontCachePolicyOutputProps>(
    AwsCloudfrontCachePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontCachePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontCachePolicyOutputProps>(
    AwsCloudfrontCachePolicy,
    idFilter,
    baseNode,
    optional,
  )
