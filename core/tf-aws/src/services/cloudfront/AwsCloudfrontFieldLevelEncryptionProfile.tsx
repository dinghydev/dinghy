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
  encryption_entities: resolvableValue(z.object({
    items: z.object({
      provider_id: z.string(),
      public_key_id: z.string(),
      field_patterns: z.object({
        items: z.string().array().optional(),
      }),
    }).array().optional(),
  })),
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_field_level_encryption_profile

export function AwsCloudfrontFieldLevelEncryptionProfile(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_field_level_encryption_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontFieldLevelEncryptionProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudfrontFieldLevelEncryptionProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontFieldLevelEncryptionProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontFieldLevelEncryptionProfile,
    idFilter,
    baseNode,
    optional,
  )
