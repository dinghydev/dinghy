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

export const AwsQuicksightRoleMembershipInputSchema = TfMetaSchema.extend({
  member_name: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsQuicksightRoleMembershipOutputSchema = z.object({})

export type AwsQuicksightRoleMembershipInputProps =
  & z.input<typeof AwsQuicksightRoleMembershipInputSchema>
  & NodeProps

export type AwsQuicksightRoleMembershipOutputProps =
  & z.output<typeof AwsQuicksightRoleMembershipOutputSchema>
  & z.output<typeof AwsQuicksightRoleMembershipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_role_membership

export function AwsQuicksightRoleMembership(
  props: Partial<AwsQuicksightRoleMembershipInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_role_membership'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightRoleMembershipInputSchema}
      _outputSchema={AwsQuicksightRoleMembershipOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightRoleMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightRoleMembershipOutputProps>(
    AwsQuicksightRoleMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightRoleMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightRoleMembershipOutputProps>(
    AwsQuicksightRoleMembership,
    idFilter,
    baseNode,
    optional,
  )
