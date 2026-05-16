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

export const DataAwsCognitoIdentityPoolInputSchema = TfMetaSchema.extend({
  identity_pool_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCognitoIdentityPoolOutputSchema = z.object({
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

export type DataAwsCognitoIdentityPoolInputProps =
  & z.input<typeof DataAwsCognitoIdentityPoolInputSchema>
  & NodeProps

export type DataAwsCognitoIdentityPoolOutputProps =
  & z.output<typeof DataAwsCognitoIdentityPoolOutputSchema>
  & z.output<typeof DataAwsCognitoIdentityPoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cognito_identity_pool

export function DataAwsCognitoIdentityPool(
  props: Partial<DataAwsCognitoIdentityPoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCognitoIdentityPool
      _type='aws_cognito_identity_pool'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCognitoIdentityPoolInputSchema}
      _outputSchema={DataAwsCognitoIdentityPoolOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCognitoIdentityPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCognitoIdentityPoolOutputProps>(
    DataAwsCognitoIdentityPool,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCognitoIdentityPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCognitoIdentityPoolOutputProps>(
    DataAwsCognitoIdentityPool,
    idFilter,
    baseNode,
    optional,
  )
