import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_field_level_encryption_config

export const InputSchema = z.object({
  content_type_profile_config: resolvableValue(z.object({
    forward_when_content_type_is_unknown: z.boolean(),
  })),
  query_arg_profile_config: resolvableValue(z.object({
    forward_when_query_arg_profile_is_unknown: z.boolean(),
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

export function AwsCloudfrontFieldLevelEncryptionConfig(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsCloudfrontFieldLevelEncryptionConfig, node, id)

export const useAwsCloudfrontFieldLevelEncryptionConfigs = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsCloudfrontFieldLevelEncryptionConfig, node, id)
