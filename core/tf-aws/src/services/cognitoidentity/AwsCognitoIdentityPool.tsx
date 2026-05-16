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

export const AwsCognitoIdentityPoolInputSchema = TfMetaSchema.extend({
  identity_pool_name: resolvableValue(z.string()),
  allow_classic_flow: resolvableValue(z.boolean().optional()),
  allow_unauthenticated_identities: resolvableValue(z.boolean().optional()),
  cognito_identity_providers: resolvableValue(
    z.object({
      client_id: z.string().optional(),
      provider_name: z.string().optional(),
      server_side_token_check: z.boolean().optional(),
    }).array().optional(),
  ),
  developer_provider_name: resolvableValue(z.string().optional()),
  openid_connect_provider_arns: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  saml_provider_arns: resolvableValue(z.string().array().optional()),
  supported_login_providers: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCognitoIdentityPoolOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCognitoIdentityPoolInputProps =
  & z.input<typeof AwsCognitoIdentityPoolInputSchema>
  & NodeProps

export type AwsCognitoIdentityPoolOutputProps =
  & z.output<typeof AwsCognitoIdentityPoolOutputSchema>
  & z.output<typeof AwsCognitoIdentityPoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_identity_pool

export function AwsCognitoIdentityPool(
  props: Partial<AwsCognitoIdentityPoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_identity_pool'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoIdentityPoolInputSchema}
      _outputSchema={AwsCognitoIdentityPoolOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoIdentityPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoIdentityPoolOutputProps>(
    AwsCognitoIdentityPool,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoIdentityPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoIdentityPoolOutputProps>(
    AwsCognitoIdentityPool,
    idFilter,
    baseNode,
    optional,
  )
