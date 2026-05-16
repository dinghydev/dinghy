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

export const AwsCognitoIdentityPoolProviderPrincipalTagInputSchema =
  TfMetaSchema.extend({
    identity_pool_id: resolvableValue(z.string()),
    identity_provider_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    principal_tags: resolvableValue(
      z.record(z.string(), z.string()).optional(),
    ),
    region: resolvableValue(z.string().optional()),
    use_defaults: resolvableValue(z.boolean().optional()),
  })

export const AwsCognitoIdentityPoolProviderPrincipalTagOutputSchema = z.object(
  {},
)

export type AwsCognitoIdentityPoolProviderPrincipalTagInputProps =
  & z.input<typeof AwsCognitoIdentityPoolProviderPrincipalTagInputSchema>
  & NodeProps

export type AwsCognitoIdentityPoolProviderPrincipalTagOutputProps =
  & z.output<typeof AwsCognitoIdentityPoolProviderPrincipalTagOutputSchema>
  & z.output<typeof AwsCognitoIdentityPoolProviderPrincipalTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_identity_pool_provider_principal_tag

export function AwsCognitoIdentityPoolProviderPrincipalTag(
  props: Partial<AwsCognitoIdentityPoolProviderPrincipalTagInputProps>,
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
      _inputSchema={AwsCognitoIdentityPoolProviderPrincipalTagInputSchema}
      _outputSchema={AwsCognitoIdentityPoolProviderPrincipalTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoIdentityPoolProviderPrincipalTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoIdentityPoolProviderPrincipalTagOutputProps>(
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
  useTypedNodes<AwsCognitoIdentityPoolProviderPrincipalTagOutputProps>(
    AwsCognitoIdentityPoolProviderPrincipalTag,
    idFilter,
    baseNode,
    optional,
  )
