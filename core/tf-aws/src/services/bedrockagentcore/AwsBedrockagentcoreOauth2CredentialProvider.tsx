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

export const AwsBedrockagentcoreOauth2CredentialProviderInputSchema =
  TfMetaSchema.extend({
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
          oauth_discovery: z.object({
            discovery_url: z.string().optional(),
            authorization_server_metadata: z.object({
              authorization_endpoint: z.string(),
              issuer: z.string(),
              response_types: z.string().array().optional(),
              token_endpoint: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
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
          }).array().optional(),
        }).array().optional(),
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
          }).array().optional(),
        }).array().optional(),
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
          }).array().optional(),
        }).array().optional(),
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
          }).array().optional(),
        }).array().optional(),
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
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsBedrockagentcoreOauth2CredentialProviderOutputSchema = z.object(
  {
    client_secret_arn: z.object({
      secret_arn: z.string(),
    }).array().optional(),
    credential_provider_arn: z.string().optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
  },
)

export type AwsBedrockagentcoreOauth2CredentialProviderInputProps =
  & z.input<typeof AwsBedrockagentcoreOauth2CredentialProviderInputSchema>
  & NodeProps

export type AwsBedrockagentcoreOauth2CredentialProviderOutputProps =
  & z.output<typeof AwsBedrockagentcoreOauth2CredentialProviderOutputSchema>
  & z.output<typeof AwsBedrockagentcoreOauth2CredentialProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_oauth2_credential_provider

export function AwsBedrockagentcoreOauth2CredentialProvider(
  props: Partial<AwsBedrockagentcoreOauth2CredentialProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_oauth2_credential_provider'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreOauth2CredentialProviderInputSchema}
      _outputSchema={AwsBedrockagentcoreOauth2CredentialProviderOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreOauth2CredentialProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreOauth2CredentialProviderOutputProps>(
    AwsBedrockagentcoreOauth2CredentialProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreOauth2CredentialProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentcoreOauth2CredentialProviderOutputProps>(
    AwsBedrockagentcoreOauth2CredentialProvider,
    idFilter,
    baseNode,
    optional,
  )
