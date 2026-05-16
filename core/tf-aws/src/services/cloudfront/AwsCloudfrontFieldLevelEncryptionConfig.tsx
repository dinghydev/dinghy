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

export const AwsCloudfrontFieldLevelEncryptionConfigInputSchema = TfMetaSchema
  .extend({
    content_type_profile_config: resolvableValue(z.object({
      forward_when_content_type_is_unknown: z.boolean(),
      content_type_profiles: z.object({
        items: z.object({
          content_type: z.string(),
          format: z.string(),
          profile_id: z.string().optional(),
        }).array(),
      }),
    })),
    query_arg_profile_config: resolvableValue(z.object({
      forward_when_query_arg_profile_is_unknown: z.boolean(),
      query_arg_profiles: z.object({
        items: z.object({
          profile_id: z.string(),
          query_arg: z.string(),
        }).array().optional(),
      }).optional(),
    })),
    comment: resolvableValue(z.string().optional()),
  })

export const AwsCloudfrontFieldLevelEncryptionConfigOutputSchema = z.object({
  arn: z.string().optional(),
  caller_reference: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type AwsCloudfrontFieldLevelEncryptionConfigInputProps =
  & z.input<typeof AwsCloudfrontFieldLevelEncryptionConfigInputSchema>
  & NodeProps

export type AwsCloudfrontFieldLevelEncryptionConfigOutputProps =
  & z.output<typeof AwsCloudfrontFieldLevelEncryptionConfigOutputSchema>
  & z.output<typeof AwsCloudfrontFieldLevelEncryptionConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_field_level_encryption_config

export function AwsCloudfrontFieldLevelEncryptionConfig(
  props: Partial<AwsCloudfrontFieldLevelEncryptionConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_field_level_encryption_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontFieldLevelEncryptionConfigInputSchema}
      _outputSchema={AwsCloudfrontFieldLevelEncryptionConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontFieldLevelEncryptionConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontFieldLevelEncryptionConfigOutputProps>(
    AwsCloudfrontFieldLevelEncryptionConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontFieldLevelEncryptionConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontFieldLevelEncryptionConfigOutputProps>(
    AwsCloudfrontFieldLevelEncryptionConfig,
    idFilter,
    baseNode,
    optional,
  )
