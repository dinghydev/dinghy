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

export const DataAwsSecretsmanagerRandomPasswordInputSchema = TfMetaSchema
  .extend({
    exclude_characters: resolvableValue(z.string().optional()),
    exclude_lowercase: resolvableValue(z.boolean().optional()),
    exclude_numbers: resolvableValue(z.boolean().optional()),
    exclude_punctuation: resolvableValue(z.boolean().optional()),
    exclude_uppercase: resolvableValue(z.boolean().optional()),
    id: resolvableValue(z.string().optional()),
    include_space: resolvableValue(z.boolean().optional()),
    password_length: resolvableValue(z.number().optional()),
    region: resolvableValue(z.string().optional()),
    require_each_included_type: resolvableValue(z.boolean().optional()),
  })

export const DataAwsSecretsmanagerRandomPasswordOutputSchema = z.object({
  random_password: z.string().optional(),
})

export type DataAwsSecretsmanagerRandomPasswordInputProps =
  & z.input<typeof DataAwsSecretsmanagerRandomPasswordInputSchema>
  & NodeProps

export type DataAwsSecretsmanagerRandomPasswordOutputProps =
  & z.output<typeof DataAwsSecretsmanagerRandomPasswordOutputSchema>
  & z.output<typeof DataAwsSecretsmanagerRandomPasswordInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/secretsmanager_random_password

export function DataAwsSecretsmanagerRandomPassword(
  props: Partial<DataAwsSecretsmanagerRandomPasswordInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_random_password'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSecretsmanagerRandomPasswordInputSchema}
      _outputSchema={DataAwsSecretsmanagerRandomPasswordOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecretsmanagerRandomPassword = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSecretsmanagerRandomPasswordOutputProps>(
    DataAwsSecretsmanagerRandomPassword,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSecretsmanagerRandomPasswords = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSecretsmanagerRandomPasswordOutputProps>(
    DataAwsSecretsmanagerRandomPassword,
    idFilter,
    baseNode,
    optional,
  )
