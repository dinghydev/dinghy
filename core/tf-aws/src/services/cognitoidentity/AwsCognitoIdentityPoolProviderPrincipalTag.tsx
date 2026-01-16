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
  identity_pool_id: resolvableValue(z.string()),
  identity_provider_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  principal_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  use_defaults: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cognito_identity_pool_provider_principal_tag

export function AwsCognitoIdentityPoolProviderPrincipalTag(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_identity_pool_provider_principal_tag'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoIdentityPoolProviderPrincipalTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCognitoIdentityPoolProviderPrincipalTag,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoIdentityPoolProviderPrincipalTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCognitoIdentityPoolProviderPrincipalTag,
    idFilter,
    baseNode,
    optional,
  )
