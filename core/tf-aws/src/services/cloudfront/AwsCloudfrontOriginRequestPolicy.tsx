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
  cookies_config: resolvableValue(z.object({
    cookie_behavior: z.string(),
    cookies: z.object({
      items: z.string().array().optional(),
    }).optional(),
  })),
  headers_config: resolvableValue(z.object({
    header_behavior: z.string().optional(),
    headers: z.object({
      items: z.string().array().optional(),
    }).optional(),
  })),
  name: resolvableValue(z.string()),
  query_strings_config: resolvableValue(z.object({
    query_string_behavior: z.string(),
    query_strings: z.object({
      items: z.string().array().optional(),
    }).optional(),
  })),
  comment: resolvableValue(z.string().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_origin_request_policy

export function AwsCloudfrontOriginRequestPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_origin_request_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontOriginRequestPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudfrontOriginRequestPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontOriginRequestPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontOriginRequestPolicy,
    idFilter,
    baseNode,
    optional,
  )
