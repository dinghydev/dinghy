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

export const AwsIamAccountPasswordPolicyInputSchema = TfMetaSchema.extend({
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

export const AwsIamAccountPasswordPolicyOutputSchema = z.object({
  expire_passwords: z.boolean().optional(),
})

export type AwsIamAccountPasswordPolicyInputProps =
  & z.input<typeof AwsIamAccountPasswordPolicyInputSchema>
  & NodeProps

export type AwsIamAccountPasswordPolicyOutputProps =
  & z.output<typeof AwsIamAccountPasswordPolicyOutputSchema>
  & z.output<typeof AwsIamAccountPasswordPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_account_password_policy

export function AwsIamAccountPasswordPolicy(
  props: Partial<AwsIamAccountPasswordPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_account_password_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamAccountPasswordPolicyInputSchema}
      _outputSchema={AwsIamAccountPasswordPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamAccountPasswordPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamAccountPasswordPolicyOutputProps>(
    AwsIamAccountPasswordPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamAccountPasswordPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamAccountPasswordPolicyOutputProps>(
    AwsIamAccountPasswordPolicy,
    idFilter,
    baseNode,
    optional,
  )
