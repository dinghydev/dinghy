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

export const AwsBedrockagentcoreTokenVaultCmkInputSchema = TfMetaSchema.extend({
  kms_configuration: resolvableValue(
    z.object({
      key_type: z.string(),
      kms_key_arn: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  token_vault_id: resolvableValue(z.string().optional()),
})

export const AwsBedrockagentcoreTokenVaultCmkOutputSchema = z.object({})

export type AwsBedrockagentcoreTokenVaultCmkInputProps =
  & z.input<typeof AwsBedrockagentcoreTokenVaultCmkInputSchema>
  & NodeProps

export type AwsBedrockagentcoreTokenVaultCmkOutputProps =
  & z.output<typeof AwsBedrockagentcoreTokenVaultCmkOutputSchema>
  & z.output<typeof AwsBedrockagentcoreTokenVaultCmkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_token_vault_cmk

export function AwsBedrockagentcoreTokenVaultCmk(
  props: Partial<AwsBedrockagentcoreTokenVaultCmkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_token_vault_cmk'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreTokenVaultCmkInputSchema}
      _outputSchema={AwsBedrockagentcoreTokenVaultCmkOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreTokenVaultCmk = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreTokenVaultCmkOutputProps>(
    AwsBedrockagentcoreTokenVaultCmk,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreTokenVaultCmks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentcoreTokenVaultCmkOutputProps>(
    AwsBedrockagentcoreTokenVaultCmk,
    idFilter,
    baseNode,
    optional,
  )
