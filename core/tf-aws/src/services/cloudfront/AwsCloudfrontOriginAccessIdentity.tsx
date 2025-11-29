import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_origin_access_identity

export const InputSchema = z.object({
  comment: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  cloudfront_access_identity_path: z.string().optional(),
  etag: z.string().optional(),
  iam_arn: z.string().optional(),
  id: z.string().optional(),
  s3_canonical_user_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontOriginAccessIdentity(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_origin_access_identity'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontOriginAccessIdentity = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontOriginAccessIdentity, node, id)

export const useAwsCloudfrontOriginAccessIdentitys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsCloudfrontOriginAccessIdentity, node, id)
