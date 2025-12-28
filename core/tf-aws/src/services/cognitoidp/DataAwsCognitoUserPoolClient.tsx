import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCognitoUserPoolClient } from './AwsCognitoUserPoolClient.tsx'

export const InputSchema = z.object({
  client_id: resolvableValue(z.string()),
  enable_propagate_additional_user_context_data: resolvableValue(z.boolean()),
  name: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  access_token_validity: z.number().optional(),
  allowed_oauth_flows: z.set(z.string()).optional(),
  allowed_oauth_flows_user_pool_client: z.boolean().optional(),
  allowed_oauth_scopes: z.set(z.string()).optional(),
  analytics_configuration: z.object({
    application_arn: z.string(),
    application_id: z.string(),
    external_id: z.string(),
    role_arn: z.string(),
    user_data_shared: z.boolean(),
  }).array().optional(),
  callback_urls: z.set(z.string()).optional(),
  client_secret: z.string().optional(),
  default_redirect_uri: z.string().optional(),
  enable_token_revocation: z.boolean().optional(),
  explicit_auth_flows: z.set(z.string()).optional(),
  generate_secret: z.boolean().optional(),
  id_token_validity: z.number().optional(),
  logout_urls: z.set(z.string()).optional(),
  prevent_user_existence_errors: z.string().optional(),
  read_attributes: z.set(z.string()).optional(),
  refresh_token_rotation: z.object({
    feature: z.string(),
    retry_grace_period_seconds: z.number(),
  }).array().optional(),
  refresh_token_validity: z.number().optional(),
  supported_identity_providers: z.set(z.string()).optional(),
  token_validity_units: z.object({
    access_token: z.string(),
    id_token: z.string(),
    refresh_token: z.string(),
  }).array().optional(),
  write_attributes: z.set(z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cognito_user_pool_client

export function DataAwsCognitoUserPoolClient(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCognitoUserPoolClient
      _type='aws_cognito_user_pool_client'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCognitoUserPoolClient = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCognitoUserPoolClient,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCognitoUserPoolClients = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCognitoUserPoolClient,
    idFilter,
    baseNode,
    optional,
  )
