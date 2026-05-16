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

export const DataAwsCloudfrontOriginAccessIdentityInputSchema = TfMetaSchema
  .extend({
    id: resolvableValue(z.string()),
  })

export const DataAwsCloudfrontOriginAccessIdentityOutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  cloudfront_access_identity_path: z.string().optional(),
  comment: z.string().optional(),
  etag: z.string().optional(),
  iam_arn: z.string().optional(),
  s3_canonical_user_id: z.string().optional(),
})

export type DataAwsCloudfrontOriginAccessIdentityInputProps =
  & z.input<typeof DataAwsCloudfrontOriginAccessIdentityInputSchema>
  & NodeProps

export type DataAwsCloudfrontOriginAccessIdentityOutputProps =
  & z.output<typeof DataAwsCloudfrontOriginAccessIdentityOutputSchema>
  & z.output<typeof DataAwsCloudfrontOriginAccessIdentityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudfront_origin_access_identity

export function DataAwsCloudfrontOriginAccessIdentity(
  props: Partial<DataAwsCloudfrontOriginAccessIdentityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontOriginAccessIdentity
      _type='aws_cloudfront_origin_access_identity'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudfrontOriginAccessIdentityInputSchema}
      _outputSchema={DataAwsCloudfrontOriginAccessIdentityOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontOriginAccessIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudfrontOriginAccessIdentityOutputProps>(
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
  useTypedNodes<DataAwsCloudfrontOriginAccessIdentityOutputProps>(
    DataAwsCloudfrontOriginAccessIdentity,
    idFilter,
    baseNode,
    optional,
  )
