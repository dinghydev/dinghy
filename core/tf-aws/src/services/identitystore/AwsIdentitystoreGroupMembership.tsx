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

export const AwsIdentitystoreGroupMembershipInputSchema = TfMetaSchema.extend({
  group_id: resolvableValue(z.string()),
  identity_store_id: resolvableValue(z.string()),
  member_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsIdentitystoreGroupMembershipOutputSchema = z.object({
  membership_id: z.string().optional(),
})

export type AwsIdentitystoreGroupMembershipInputProps =
  & z.input<typeof AwsIdentitystoreGroupMembershipInputSchema>
  & NodeProps

export type AwsIdentitystoreGroupMembershipOutputProps =
  & z.output<typeof AwsIdentitystoreGroupMembershipOutputSchema>
  & z.output<typeof AwsIdentitystoreGroupMembershipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/identitystore_group_membership

export function AwsIdentitystoreGroupMembership(
  props: Partial<AwsIdentitystoreGroupMembershipInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_group_membership'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIdentitystoreGroupMembershipInputSchema}
      _outputSchema={AwsIdentitystoreGroupMembershipOutputSchema}
      {...props}
    />
  )
}

export const useAwsIdentitystoreGroupMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIdentitystoreGroupMembershipOutputProps>(
    AwsIdentitystoreGroupMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIdentitystoreGroupMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIdentitystoreGroupMembershipOutputProps>(
    AwsIdentitystoreGroupMembership,
    idFilter,
    baseNode,
    optional,
  )
