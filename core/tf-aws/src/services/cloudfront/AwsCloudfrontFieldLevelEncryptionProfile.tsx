import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_field_level_encryption_profile

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  encryption_entities: resolvableValue(z.object({
    items: z.object({
      provider_id: z.string(),
      public_key_id: z.string(),
    }).array().optional(),
  })),
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

export function AwsCloudfrontFieldLevelEncryptionProfile(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsCloudfrontFieldLevelEncryptionProfile, node, id)

export const useAwsCloudfrontFieldLevelEncryptionProfiles = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsCloudfrontFieldLevelEncryptionProfile, node, id)
