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

export const AwsCloudfrontPublicKeyInputSchema = TfMetaSchema.extend({
  encoded_key: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
})

export const AwsCloudfrontPublicKeyOutputSchema = z.object({
  caller_reference: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type AwsCloudfrontPublicKeyInputProps =
  & z.input<typeof AwsCloudfrontPublicKeyInputSchema>
  & NodeProps

export type AwsCloudfrontPublicKeyOutputProps =
  & z.output<typeof AwsCloudfrontPublicKeyOutputSchema>
  & z.output<typeof AwsCloudfrontPublicKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_public_key

export function AwsCloudfrontPublicKey(
  props: Partial<AwsCloudfrontPublicKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_public_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontPublicKeyInputSchema}
      _outputSchema={AwsCloudfrontPublicKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontPublicKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontPublicKeyOutputProps>(
    AwsCloudfrontPublicKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontPublicKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontPublicKeyOutputProps>(
    AwsCloudfrontPublicKey,
    idFilter,
    baseNode,
    optional,
  )
