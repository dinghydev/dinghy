import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_user_login_profile

export const InputSchema = z.object({
  user: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  password_length: resolvableValue(z.number().optional()),
  password_reset_required: resolvableValue(z.boolean().optional()),
  pgp_key: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  encrypted_password: z.string().optional(),
  key_fingerprint: z.string().optional(),
  password: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamUserLoginProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_login_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserLoginProfile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamUserLoginProfile, node, id)

export const useAwsIamUserLoginProfiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamUserLoginProfile, node, id)
