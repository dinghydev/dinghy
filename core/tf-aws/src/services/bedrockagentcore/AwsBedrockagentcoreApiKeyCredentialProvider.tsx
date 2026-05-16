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

export const AwsBedrockagentcoreApiKeyCredentialProviderInputSchema =
  TfMetaSchema.extend({
    name: resolvableValue(z.string()),
    api_key: resolvableValue(z.string().optional()),
    api_key_wo: resolvableValue(z.string().optional()),
    api_key_wo_version: resolvableValue(z.number().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsBedrockagentcoreApiKeyCredentialProviderOutputSchema = z.object(
  {
    api_key_secret_arn: z.object({
      secret_arn: z.string(),
    }).array().optional(),
    credential_provider_arn: z.string().optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
  },
)

export type AwsBedrockagentcoreApiKeyCredentialProviderInputProps =
  & z.input<typeof AwsBedrockagentcoreApiKeyCredentialProviderInputSchema>
  & NodeProps

export type AwsBedrockagentcoreApiKeyCredentialProviderOutputProps =
  & z.output<typeof AwsBedrockagentcoreApiKeyCredentialProviderOutputSchema>
  & z.output<typeof AwsBedrockagentcoreApiKeyCredentialProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_api_key_credential_provider

export function AwsBedrockagentcoreApiKeyCredentialProvider(
  props: Partial<AwsBedrockagentcoreApiKeyCredentialProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_api_key_credential_provider'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreApiKeyCredentialProviderInputSchema}
      _outputSchema={AwsBedrockagentcoreApiKeyCredentialProviderOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreApiKeyCredentialProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreApiKeyCredentialProviderOutputProps>(
    AwsBedrockagentcoreApiKeyCredentialProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreApiKeyCredentialProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentcoreApiKeyCredentialProviderOutputProps>(
    AwsBedrockagentcoreApiKeyCredentialProvider,
    idFilter,
    baseNode,
    optional,
  )
