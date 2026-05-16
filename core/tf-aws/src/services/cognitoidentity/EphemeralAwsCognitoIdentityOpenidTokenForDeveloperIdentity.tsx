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

export const EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityInputSchema =
  TfMetaSchema.extend({
    identity_pool_id: resolvableValue(z.string()),
    logins: resolvableValue(z.record(z.string(), z.string())),
    identity_id: resolvableValue(z.string().optional()),
    principal_tags: resolvableValue(
      z.record(z.string(), z.string()).optional(),
    ),
    region: resolvableValue(z.string().optional()),
    token_duration: resolvableValue(z.number().optional()),
  })

export const EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityOutputSchema =
  z.object({
    token: z.string().optional(),
  })

export type EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityInputProps =
  & z.input<
    typeof EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityInputSchema
  >
  & NodeProps

export type EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityOutputProps =
  & z.output<
    typeof EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityOutputSchema
  >
  & z.output<
    typeof EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity

export function EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity(
  props: Partial<
    EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_identity_openid_token_for_developer_identity'
      _category='ephemeral'
      _title={_title}
      _inputSchema={EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityInputSchema}
      _outputSchema={EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityOutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<
    EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityOutputProps
  >(
    EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityOutputProps
  >(
    EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity,
    idFilter,
    baseNode,
    optional,
  )
