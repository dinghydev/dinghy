import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_oauth2_credential_provider

export const InputSchema = z.object({
  credential_provider_vendor: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  oauth2_provider_config: resolvableValue(
    z.object({
      custom_oauth2_provider_config: z.object({
        client_credentials_wo_version: z.number().optional(),
        client_id: z.string().optional(),
        client_id_wo: z.string().optional(),
        client_secret: z.string().optional(),
        client_secret_wo: z.string().optional(),
      }).optional(),
      github_oauth2_provider_config: z.object({
        client_credentials_wo_version: z.number().optional(),
        client_id: z.string().optional(),
        client_id_wo: z.string().optional(),
        client_secret: z.string().optional(),
        client_secret_wo: z.string().optional(),
        oauth_discovery: z.object({
          authorization_server_metadata: z.object({
            authorization_endpoint: z.string(),
            issuer: z.string(),
            response_types: z.string().array(),
            token_endpoint: z.string(),
          }).array(),
          discovery_url: z.string(),
        }).array(),
      }).optional(),
      google_oauth2_provider_config: z.object({
        client_credentials_wo_version: z.number().optional(),
        client_id: z.string().optional(),
        client_id_wo: z.string().optional(),
        client_secret: z.string().optional(),
        client_secret_wo: z.string().optional(),
        oauth_discovery: z.object({
          authorization_server_metadata: z.object({
            authorization_endpoint: z.string(),
            issuer: z.string(),
            response_types: z.string().array(),
            token_endpoint: z.string(),
          }).array(),
          discovery_url: z.string(),
        }).array(),
      }).optional(),
      microsoft_oauth2_provider_config: z.object({
        client_credentials_wo_version: z.number().optional(),
        client_id: z.string().optional(),
        client_id_wo: z.string().optional(),
        client_secret: z.string().optional(),
        client_secret_wo: z.string().optional(),
        oauth_discovery: z.object({
          authorization_server_metadata: z.object({
            authorization_endpoint: z.string(),
            issuer: z.string(),
            response_types: z.string().array(),
            token_endpoint: z.string(),
          }).array(),
          discovery_url: z.string(),
        }).array(),
      }).optional(),
      salesforce_oauth2_provider_config: z.object({
        client_credentials_wo_version: z.number().optional(),
        client_id: z.string().optional(),
        client_id_wo: z.string().optional(),
        client_secret: z.string().optional(),
        client_secret_wo: z.string().optional(),
        oauth_discovery: z.object({
          authorization_server_metadata: z.object({
            authorization_endpoint: z.string(),
            issuer: z.string(),
            response_types: z.string().array(),
            token_endpoint: z.string(),
          }).array(),
          discovery_url: z.string(),
        }).array(),
      }).optional(),
      slack_oauth2_provider_config: z.object({
        client_credentials_wo_version: z.number().optional(),
        client_id: z.string().optional(),
        client_id_wo: z.string().optional(),
        client_secret: z.string().optional(),
        client_secret_wo: z.string().optional(),
        oauth_discovery: z.object({
          authorization_server_metadata: z.object({
            authorization_endpoint: z.string(),
            issuer: z.string(),
            response_types: z.string().array(),
            token_endpoint: z.string(),
          }).array(),
          discovery_url: z.string(),
        }).array(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  client_secret_arn: z.object({
    secret_arn: z.string(),
  }).array().optional(),
  credential_provider_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentcoreOauth2CredentialProvider(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_oauth2_credential_provider'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreOauth2CredentialProvider = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentcoreOauth2CredentialProvider,
    node,
    id,
  )

export const useAwsBedrockagentcoreOauth2CredentialProviders = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentcoreOauth2CredentialProvider,
    node,
    id,
  )
