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

export const AwsIamUserGroupMembershipInputSchema = TfMetaSchema.extend({
  groups: resolvableValue(z.string().array()),
  user: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const AwsIamUserGroupMembershipOutputSchema = z.object({})

export type AwsIamUserGroupMembershipInputProps =
  & z.input<typeof AwsIamUserGroupMembershipInputSchema>
  & NodeProps

export type AwsIamUserGroupMembershipOutputProps =
  & z.output<typeof AwsIamUserGroupMembershipOutputSchema>
  & z.output<typeof AwsIamUserGroupMembershipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_user_group_membership

export function AwsIamUserGroupMembership(
  props: Partial<AwsIamUserGroupMembershipInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_group_membership'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamUserGroupMembershipInputSchema}
      _outputSchema={AwsIamUserGroupMembershipOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserGroupMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamUserGroupMembershipOutputProps>(
    AwsIamUserGroupMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamUserGroupMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamUserGroupMembershipOutputProps>(
    AwsIamUserGroupMembership,
    idFilter,
    baseNode,
    optional,
  )
