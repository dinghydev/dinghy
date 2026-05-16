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

export const AwsCognitoIdentityProviderInputSchema = TfMetaSchema.extend({
  provider_details: resolvableValue(z.record(z.string(), z.string())),
  provider_name: resolvableValue(z.string()),
  provider_type: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  attribute_mapping: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  idp_identifiers: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCognitoIdentityProviderOutputSchema = z.object({})

export type AwsCognitoIdentityProviderInputProps =
  & z.input<typeof AwsCognitoIdentityProviderInputSchema>
  & NodeProps

export type AwsCognitoIdentityProviderOutputProps =
  & z.output<typeof AwsCognitoIdentityProviderOutputSchema>
  & z.output<typeof AwsCognitoIdentityProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_identity_provider

export function AwsCognitoIdentityProvider(
  props: Partial<AwsCognitoIdentityProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_identity_provider'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoIdentityProviderInputSchema}
      _outputSchema={AwsCognitoIdentityProviderOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoIdentityProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoIdentityProviderOutputProps>(
    AwsCognitoIdentityProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoIdentityProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoIdentityProviderOutputProps>(
    AwsCognitoIdentityProvider,
    idFilter,
    baseNode,
    optional,
  )
