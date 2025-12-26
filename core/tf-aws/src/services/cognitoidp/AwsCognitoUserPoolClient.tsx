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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  access_token_validity: resolvableValue(z.number().optional()),
  allowed_oauth_flows: resolvableValue(z.string().array().optional()),
  allowed_oauth_flows_user_pool_client: resolvableValue(z.boolean().optional()),
  allowed_oauth_scopes: resolvableValue(z.string().array().optional()),
  analytics_configuration: resolvableValue(
    z.object({
      application_arn: z.string().optional(),
      application_id: z.string().optional(),
      external_id: z.string().optional(),
      role_arn: z.string().optional(),
      user_data_shared: z.boolean().optional(),
    }).array().optional(),
  ),
  auth_session_validity: resolvableValue(z.number().optional()),
  callback_urls: resolvableValue(z.string().array().optional()),
  default_redirect_uri: resolvableValue(z.string().optional()),
  enable_propagate_additional_user_context_data: resolvableValue(
    z.boolean().optional(),
  ),
  enable_token_revocation: resolvableValue(z.boolean().optional()),
  explicit_auth_flows: resolvableValue(z.string().array().optional()),
  generate_secret: resolvableValue(z.boolean().optional()),
  id_token_validity: resolvableValue(z.number().optional()),
  logout_urls: resolvableValue(z.string().array().optional()),
  prevent_user_existence_errors: resolvableValue(z.string().optional()),
  read_attributes: resolvableValue(z.string().array().optional()),
  refresh_token_rotation: resolvableValue(
    z.object({
      feature: z.string(),
      retry_grace_period_seconds: z.number().optional(),
    }).array().optional(),
  ),
  refresh_token_validity: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  supported_identity_providers: resolvableValue(z.string().array().optional()),
  token_validity_units: resolvableValue(
    z.object({
      access_token: z.string().optional(),
      id_token: z.string().optional(),
      refresh_token: z.string().optional(),
    }).array().optional(),
  ),
  write_attributes: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  client_secret: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_user_pool_client

export function AwsCognitoUserPoolClient(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool_client'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUserPoolClient = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCognitoUserPoolClient,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoUserPoolClients = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCognitoUserPoolClient,
    idFilter,
    baseNode,
    optional,
  )
