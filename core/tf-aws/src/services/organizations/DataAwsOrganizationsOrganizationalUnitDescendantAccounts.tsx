import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOrganizationsOrganizationalUnitDescendantAccountsInputSchema =
  TfMetaSchema.extend({
    parent_id: resolvableValue(z.string()),
  })

export const DataAwsOrganizationsOrganizationalUnitDescendantAccountsOutputSchema =
  z.object({
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

export type DataAwsOrganizationsOrganizationalUnitDescendantAccountsInputProps =
  & z.input<
    typeof DataAwsOrganizationsOrganizationalUnitDescendantAccountsInputSchema
  >
  & NodeProps

export type DataAwsOrganizationsOrganizationalUnitDescendantAccountsOutputProps =
  & z.output<
    typeof DataAwsOrganizationsOrganizationalUnitDescendantAccountsOutputSchema
  >
  & z.output<
    typeof DataAwsOrganizationsOrganizationalUnitDescendantAccountsInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_organizational_unit_descendant_accounts

export function DataAwsOrganizationsOrganizationalUnitDescendantAccounts(
  props: Partial<
    DataAwsOrganizationsOrganizationalUnitDescendantAccountsInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organizational_unit_descendant_accounts'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsOrganizationalUnitDescendantAccountsInputSchema}
      _outputSchema={DataAwsOrganizationsOrganizationalUnitDescendantAccountsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnitDescendantAccountss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    DataAwsOrganizationsOrganizationalUnitDescendantAccountsOutputProps
  >(
    DataAwsOrganizationsOrganizationalUnitDescendantAccounts,
    idFilter,
    baseNode,
    optional,
  )
