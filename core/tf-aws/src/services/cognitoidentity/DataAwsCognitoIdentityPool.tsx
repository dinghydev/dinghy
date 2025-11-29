import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCognitoIdentityPool } from './AwsCognitoIdentityPool.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cognito_identity_pool

export const InputSchema = z.object({
  identity_pool_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  allow_classic_flow: z.boolean().optional(),
  allow_unauthenticated_identities: z.boolean().optional(),
  arn: z.string().optional(),
  cognito_identity_providers: z.object({
    client_id: z.string(),
    provider_name: z.string(),
    server_side_token_check: z.boolean(),
  }).array().optional(),
  developer_provider_name: z.string().optional(),
  id: z.string().optional(),
  openid_connect_provider_arns: z.string().array().optional(),
  saml_provider_arns: z.string().array().optional(),
  supported_login_providers: z.record(z.string(), z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCognitoIdentityPool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCognitoIdentityPool
      _type='aws_cognito_identity_pool'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCognitoIdentityPool = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCognitoIdentityPool, node, id)

export const useDataAwsCognitoIdentityPools = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCognitoIdentityPool, node, id)
