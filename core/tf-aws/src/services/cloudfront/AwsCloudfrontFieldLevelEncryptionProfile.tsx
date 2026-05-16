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

export const AwsCloudfrontFieldLevelEncryptionProfileInputSchema = TfMetaSchema
  .extend({
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
  })

export const AwsCloudfrontFieldLevelEncryptionProfileOutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type AwsCloudfrontFieldLevelEncryptionProfileInputProps =
  & z.input<typeof AwsCloudfrontFieldLevelEncryptionProfileInputSchema>
  & NodeProps

export type AwsCloudfrontFieldLevelEncryptionProfileOutputProps =
  & z.output<typeof AwsCloudfrontFieldLevelEncryptionProfileOutputSchema>
  & z.output<typeof AwsCloudfrontFieldLevelEncryptionProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_field_level_encryption_profile

export function AwsCloudfrontFieldLevelEncryptionProfile(
  props: Partial<AwsCloudfrontFieldLevelEncryptionProfileInputProps>,
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
      _inputSchema={AwsCloudfrontFieldLevelEncryptionProfileInputSchema}
      _outputSchema={AwsCloudfrontFieldLevelEncryptionProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontFieldLevelEncryptionProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontFieldLevelEncryptionProfileOutputProps>(
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
  useTypedNodes<AwsCloudfrontFieldLevelEncryptionProfileOutputProps>(
    AwsCloudfrontFieldLevelEncryptionProfile,
    idFilter,
    baseNode,
    optional,
  )
