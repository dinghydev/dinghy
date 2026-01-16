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
  logins: resolvableValue(z.record(z.string(), z.string())),
  identity_id: resolvableValue(z.string().optional()),
  principal_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  token_duration: resolvableValue(z.number().optional()),
})

export const OutputSchema = z.object({
  token: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity

export function EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity,
    idFilter,
    baseNode,
    optional,
  )
