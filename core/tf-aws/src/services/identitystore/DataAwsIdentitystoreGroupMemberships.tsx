import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/identitystore_group_memberships

export const InputSchema = z.object({
  group_id: resolvableValue(z.string()),
  identity_store_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  group_memberships: z.object({
    group_id: z.string(),
    identity_store_id: z.string(),
    member_id: z.object({
      user_id: z.string(),
    }),
    membership_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIdentitystoreGroupMemberships(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_group_memberships'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIdentitystoreGroupMembershipss = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsIdentitystoreGroupMemberships, node, id)
