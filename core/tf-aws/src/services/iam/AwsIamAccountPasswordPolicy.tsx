import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_account_password_policy

export const InputSchema = z.object({
  allow_users_to_change_password: resolvableValue(z.boolean().optional()),
  hard_expiry: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  max_password_age: resolvableValue(z.number().optional()),
  minimum_password_length: resolvableValue(z.number().optional()),
  password_reuse_prevention: resolvableValue(z.number().optional()),
  require_lowercase_characters: resolvableValue(z.boolean().optional()),
  require_numbers: resolvableValue(z.boolean().optional()),
  require_symbols: resolvableValue(z.boolean().optional()),
  require_uppercase_characters: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  expire_passwords: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamAccountPasswordPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_account_password_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamAccountPasswordPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamAccountPasswordPolicy, node, id)

export const useAwsIamAccountPasswordPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamAccountPasswordPolicy, node, id)
