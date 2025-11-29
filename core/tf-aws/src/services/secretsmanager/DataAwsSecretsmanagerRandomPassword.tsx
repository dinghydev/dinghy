import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/secretsmanager_random_password

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  random_password: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSecretsmanagerRandomPassword(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_random_password'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecretsmanagerRandomPassword = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsSecretsmanagerRandomPassword, node, id)

export const useDataAwsSecretsmanagerRandomPasswords = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsSecretsmanagerRandomPassword, node, id)
