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

export const AwsIamUserLoginProfileInputSchema = TfMetaSchema.extend({
  user: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  password_length: resolvableValue(z.number().optional()),
  password_reset_required: resolvableValue(z.boolean().optional()),
  pgp_key: resolvableValue(z.string().optional()),
})

export const AwsIamUserLoginProfileOutputSchema = z.object({
  encrypted_password: z.string().optional(),
  key_fingerprint: z.string().optional(),
  password: z.string().optional(),
})

export type AwsIamUserLoginProfileInputProps =
  & z.input<typeof AwsIamUserLoginProfileInputSchema>
  & NodeProps

export type AwsIamUserLoginProfileOutputProps =
  & z.output<typeof AwsIamUserLoginProfileOutputSchema>
  & z.output<typeof AwsIamUserLoginProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_user_login_profile

export function AwsIamUserLoginProfile(
  props: Partial<AwsIamUserLoginProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_login_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamUserLoginProfileInputSchema}
      _outputSchema={AwsIamUserLoginProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserLoginProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamUserLoginProfileOutputProps>(
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
  useTypedNodes<AwsIamUserLoginProfileOutputProps>(
    AwsIamUserLoginProfile,
    idFilter,
    baseNode,
    optional,
  )
