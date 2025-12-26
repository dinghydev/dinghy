import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontOriginAccessIdentity } from './AwsCloudfrontOriginAccessIdentity.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  cloudfront_access_identity_path: z.string().optional(),
  comment: z.string().optional(),
  etag: z.string().optional(),
  iam_arn: z.string().optional(),
  s3_canonical_user_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_origin_access_identity

export function DataAwsCloudfrontOriginAccessIdentity(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudfrontOriginAccessIdentity
      _type='aws_cloudfront_origin_access_identity'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontOriginAccessIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudfrontOriginAccessIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudfrontOriginAccessIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudfrontOriginAccessIdentity,
    idFilter,
    baseNode,
    optional,
  )
