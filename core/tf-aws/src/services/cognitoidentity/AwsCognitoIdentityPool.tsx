import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_identity_pool

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCognitoIdentityPool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_identity_pool'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoIdentityPool = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCognitoIdentityPool, node, id)

export const useAwsCognitoIdentityPools = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCognitoIdentityPool, node, id)
