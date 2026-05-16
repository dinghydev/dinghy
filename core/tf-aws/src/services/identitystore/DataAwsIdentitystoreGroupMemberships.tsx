import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIdentitystoreGroupMembershipsInputSchema = TfMetaSchema
  .extend({
    group_id: resolvableValue(z.string()),
    identity_store_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsIdentitystoreGroupMembershipsOutputSchema = z.object({
  group_memberships: z.object({
    group_id: z.string(),
    identity_store_id: z.string(),
    member_id: z.object({
      user_id: z.string(),
    }),
    membership_id: z.string(),
  }).array().optional(),
})

export type DataAwsIdentitystoreGroupMembershipsInputProps =
  & z.input<typeof DataAwsIdentitystoreGroupMembershipsInputSchema>
  & NodeProps

export type DataAwsIdentitystoreGroupMembershipsOutputProps =
  & z.output<typeof DataAwsIdentitystoreGroupMembershipsOutputSchema>
  & z.output<typeof DataAwsIdentitystoreGroupMembershipsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/identitystore_group_memberships

export function DataAwsIdentitystoreGroupMemberships(
  props: Partial<DataAwsIdentitystoreGroupMembershipsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_group_memberships'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIdentitystoreGroupMembershipsInputSchema}
      _outputSchema={DataAwsIdentitystoreGroupMembershipsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIdentitystoreGroupMembershipss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIdentitystoreGroupMembershipsOutputProps>(
    DataAwsIdentitystoreGroupMemberships,
    idFilter,
    baseNode,
    optional,
  )
