import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontCachePolicy } from './AwsCloudfrontCachePolicy.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_cache_policy

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  comment: z.string().optional(),
  default_ttl: z.number().optional(),
  etag: z.string().optional(),
  max_ttl: z.number().optional(),
  min_ttl: z.number().optional(),
  parameters_in_cache_key_and_forwarded_to_origin: z.object({
    cookies_config: z.object({
      cookie_behavior: z.string(),
      cookies: z.object({
        items: z.string().array(),
      }).array(),
    }).array(),
    enable_accept_encoding_brotli: z.boolean(),
    enable_accept_encoding_gzip: z.boolean(),
    headers_config: z.object({
      header_behavior: z.string(),
      headers: z.object({
        items: z.string().array(),
      }).array(),
    }).array(),
    query_strings_config: z.object({
      query_string_behavior: z.string(),
      query_strings: z.object({
        items: z.string().array(),
      }).array(),
    }).array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudfrontCachePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudfrontCachePolicy
      _type='aws_cloudfront_cache_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontCachePolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCloudfrontCachePolicy, node, id)

export const useDataAwsCloudfrontCachePolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCloudfrontCachePolicy, node, id)
