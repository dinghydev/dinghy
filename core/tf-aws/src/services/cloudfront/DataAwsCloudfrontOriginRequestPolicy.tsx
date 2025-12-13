import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontOriginRequestPolicy } from './AwsCloudfrontOriginRequestPolicy.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  comment: z.string().optional(),
  cookies_config: z.object({
    cookie_behavior: z.string(),
    cookies: z.object({
      items: z.set(z.string()),
    }).array(),
  }).array().optional(),
  etag: z.string().optional(),
  headers_config: z.object({
    header_behavior: z.string(),
    headers: z.object({
      items: z.set(z.string()),
    }).array(),
  }).array().optional(),
  query_strings_config: z.object({
    query_string_behavior: z.string(),
    query_strings: z.object({
      items: z.set(z.string()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_origin_request_policy

export function DataAwsCloudfrontOriginRequestPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudfrontOriginRequestPolicy
      _type='aws_cloudfront_origin_request_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontOriginRequestPolicy = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudfrontOriginRequestPolicy,
    idFilter,
    baseNode,
  )

export const useDataAwsCloudfrontOriginRequestPolicys = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudfrontOriginRequestPolicy,
    idFilter,
    baseNode,
  )
