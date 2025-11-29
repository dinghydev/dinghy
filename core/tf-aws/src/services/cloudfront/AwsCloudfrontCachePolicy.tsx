import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_cache_policy

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  default_ttl: resolvableValue(z.number().optional()),
  max_ttl: resolvableValue(z.number().optional()),
  min_ttl: resolvableValue(z.number().optional()),
  parameters_in_cache_key_and_forwarded_to_origin: resolvableValue(z.object({
    enable_accept_encoding_brotli: z.boolean().optional(),
    enable_accept_encoding_gzip: z.boolean().optional(),
  })),
})

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

export function AwsCloudfrontCachePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_cache_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontCachePolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontCachePolicy, node, id)

export const useAwsCloudfrontCachePolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudfrontCachePolicy, node, id)
