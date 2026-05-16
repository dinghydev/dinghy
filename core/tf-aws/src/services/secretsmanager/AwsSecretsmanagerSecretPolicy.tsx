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

export const AwsSecretsmanagerSecretPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  secret_arn: resolvableValue(z.string()),
  block_public_policy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSecretsmanagerSecretPolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsSecretsmanagerSecretPolicyImportSchema = z.object({
  secret_arn: resolvableValue(z.string()),
})

export type AwsSecretsmanagerSecretPolicyInputProps =
  & z.input<typeof AwsSecretsmanagerSecretPolicyInputSchema>
  & z.input<typeof AwsSecretsmanagerSecretPolicyImportSchema>
  & NodeProps

export type AwsSecretsmanagerSecretPolicyOutputProps =
  & z.output<typeof AwsSecretsmanagerSecretPolicyOutputSchema>
  & z.output<typeof AwsSecretsmanagerSecretPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/secretsmanager_secret_policy

export function AwsSecretsmanagerSecretPolicy(
  props: Partial<AwsSecretsmanagerSecretPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecretsmanagerSecretPolicyInputSchema}
      _outputSchema={AwsSecretsmanagerSecretPolicyOutputSchema}
      _importSchema={AwsSecretsmanagerSecretPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerSecretPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecretsmanagerSecretPolicyOutputProps>(
    AwsSecretsmanagerSecretPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecretsmanagerSecretPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecretsmanagerSecretPolicyOutputProps>(
    AwsSecretsmanagerSecretPolicy,
    idFilter,
    baseNode,
    optional,
  )
