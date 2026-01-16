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

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  api_key: resolvableValue(z.string().optional()),
  api_key_wo: resolvableValue(z.string().optional()),
  api_key_wo_version: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  api_key_secret_arn: z.object({
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_api_key_credential_provider

export function AwsBedrockagentcoreApiKeyCredentialProvider(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreApiKeyCredentialProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsBedrockagentcoreApiKeyCredentialProvider,
    idFilter,
    baseNode,
    optional,
  )
