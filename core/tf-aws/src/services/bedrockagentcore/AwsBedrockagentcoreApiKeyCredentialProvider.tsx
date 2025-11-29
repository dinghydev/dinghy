import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_api_key_credential_provider

export const InputSchema = z.object({
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

export function AwsBedrockagentcoreApiKeyCredentialProvider(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentcoreApiKeyCredentialProvider,
    node,
    id,
  )

export const useAwsBedrockagentcoreApiKeyCredentialProviders = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentcoreApiKeyCredentialProvider,
    node,
    id,
  )
