import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_token_vault_cmk

export const InputSchema = z.object({
  kms_configuration: resolvableValue(
    z.object({
      key_type: z.string(),
      kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  token_vault_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentcoreTokenVaultCmk(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_token_vault_cmk'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreTokenVaultCmk = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockagentcoreTokenVaultCmk, node, id)

export const useAwsBedrockagentcoreTokenVaultCmks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockagentcoreTokenVaultCmk, node, id)
