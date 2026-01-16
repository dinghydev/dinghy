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

export const InputSchema = TfMetaSchema.extend({
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile

export function AwsIamUserLoginProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsIamUserLoginProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsIamUserLoginProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamUserLoginProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsIamUserLoginProfile,
    idFilter,
    baseNode,
    optional,
  )
