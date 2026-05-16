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

export const AwsCloudfrontOriginAccessIdentityInputSchema = TfMetaSchema.extend(
  {
    comment: resolvableValue(z.string().optional()),
  },
)

export const AwsCloudfrontOriginAccessIdentityOutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  cloudfront_access_identity_path: z.string().optional(),
  etag: z.string().optional(),
  iam_arn: z.string().optional(),
  id: z.string().optional(),
  s3_canonical_user_id: z.string().optional(),
})

export type AwsCloudfrontOriginAccessIdentityInputProps =
  & z.input<typeof AwsCloudfrontOriginAccessIdentityInputSchema>
  & NodeProps

export type AwsCloudfrontOriginAccessIdentityOutputProps =
  & z.output<typeof AwsCloudfrontOriginAccessIdentityOutputSchema>
  & z.output<typeof AwsCloudfrontOriginAccessIdentityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_origin_access_identity

export function AwsCloudfrontOriginAccessIdentity(
  props: Partial<AwsCloudfrontOriginAccessIdentityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_origin_access_identity'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontOriginAccessIdentityInputSchema}
      _outputSchema={AwsCloudfrontOriginAccessIdentityOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontOriginAccessIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontOriginAccessIdentityOutputProps>(
    AwsCloudfrontOriginAccessIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontOriginAccessIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontOriginAccessIdentityOutputProps>(
    AwsCloudfrontOriginAccessIdentity,
    idFilter,
    baseNode,
    optional,
  )
