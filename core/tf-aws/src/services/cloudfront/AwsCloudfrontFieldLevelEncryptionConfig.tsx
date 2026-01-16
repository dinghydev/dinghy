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

export const InputSchema = TfMetaSchema.extend({
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_field_level_encryption_config

export function AwsCloudfrontFieldLevelEncryptionConfig(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontFieldLevelEncryptionConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCloudfrontFieldLevelEncryptionConfig,
    idFilter,
    baseNode,
    optional,
  )
