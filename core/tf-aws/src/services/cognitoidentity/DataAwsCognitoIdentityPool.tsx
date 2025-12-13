import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCognitoIdentityPool } from './AwsCognitoIdentityPool.tsx'

export const InputSchema = z.object({
  identity_pool_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  allow_classic_flow: z.boolean().optional(),
  allow_unauthenticated_identities: z.boolean().optional(),
  arn: z.string().optional(),
  cognito_identity_providers: z.set(z.object({
    client_id: z.string(),
    provider_name: z.string(),
    server_side_token_check: z.boolean(),
  })).optional(),
  developer_provider_name: z.string().optional(),
  id: z.string().optional(),
  openid_connect_provider_arns: z.set(z.string()).optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cognito_identity_pool

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

export const useDataAwsCognitoIdentityPool = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsCognitoIdentityPool, idFilter, baseNode)

export const useDataAwsCognitoIdentityPools = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsCognitoIdentityPool, idFilter, baseNode)
