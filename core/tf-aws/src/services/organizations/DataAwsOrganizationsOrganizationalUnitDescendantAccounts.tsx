import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/organizations_organizational_unit_descendant_accounts

export const InputSchema = z.object({
  parent_id: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  accounts: z.object({
    arn: z.string(),
    email: z.string(),
    id: z.string(),
    joined_method: z.string(),
    joined_timestamp: z.string(),
    name: z.string(),
    state: z.string(),
    status: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOrganizationsOrganizationalUnitDescendantAccounts(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organizational_unit_descendant_accounts'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnitDescendantAccountss = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsOrganizationsOrganizationalUnitDescendantAccounts,
    node,
    id,
  )
