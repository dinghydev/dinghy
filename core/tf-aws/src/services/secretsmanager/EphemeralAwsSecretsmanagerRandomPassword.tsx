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

export const EphemeralAwsSecretsmanagerRandomPasswordInputSchema = TfMetaSchema
  .extend({
    exclude_characters: resolvableValue(z.string().optional()),
    exclude_lowercase: resolvableValue(z.boolean().optional()),
    exclude_numbers: resolvableValue(z.boolean().optional()),
    exclude_punctuation: resolvableValue(z.boolean().optional()),
    exclude_uppercase: resolvableValue(z.boolean().optional()),
    include_space: resolvableValue(z.boolean().optional()),
    password_length: resolvableValue(z.number().optional()),
    region: resolvableValue(z.string().optional()),
    require_each_included_type: resolvableValue(z.boolean().optional()),
  })

export const EphemeralAwsSecretsmanagerRandomPasswordOutputSchema = z.object({
  random_password: z.string().optional(),
})

export type EphemeralAwsSecretsmanagerRandomPasswordInputProps =
  & z.input<typeof EphemeralAwsSecretsmanagerRandomPasswordInputSchema>
  & NodeProps

export type EphemeralAwsSecretsmanagerRandomPasswordOutputProps =
  & z.output<typeof EphemeralAwsSecretsmanagerRandomPasswordOutputSchema>
  & z.output<typeof EphemeralAwsSecretsmanagerRandomPasswordInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/secretsmanager_random_password

export function EphemeralAwsSecretsmanagerRandomPassword(
  props: Partial<EphemeralAwsSecretsmanagerRandomPasswordInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_random_password'
      _category='ephemeral'
      _title={_title}
      _inputSchema={EphemeralAwsSecretsmanagerRandomPasswordInputSchema}
      _outputSchema={EphemeralAwsSecretsmanagerRandomPasswordOutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsSecretsmanagerRandomPassword = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<EphemeralAwsSecretsmanagerRandomPasswordOutputProps>(
    EphemeralAwsSecretsmanagerRandomPassword,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsSecretsmanagerRandomPasswords = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<EphemeralAwsSecretsmanagerRandomPasswordOutputProps>(
    EphemeralAwsSecretsmanagerRandomPassword,
    idFilter,
    baseNode,
    optional,
  )
