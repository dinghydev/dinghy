import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOrganizationsOrganizationalUnitChildAccountsInputSchema =
  TfMetaSchema.extend({
    parent_id: resolvableValue(z.string()),
  })

export const DataAwsOrganizationsOrganizationalUnitChildAccountsOutputSchema = z
  .object({
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

export type DataAwsOrganizationsOrganizationalUnitChildAccountsInputProps =
  & z.input<
    typeof DataAwsOrganizationsOrganizationalUnitChildAccountsInputSchema
  >
  & NodeProps

export type DataAwsOrganizationsOrganizationalUnitChildAccountsOutputProps =
  & z.output<
    typeof DataAwsOrganizationsOrganizationalUnitChildAccountsOutputSchema
  >
  & z.output<
    typeof DataAwsOrganizationsOrganizationalUnitChildAccountsInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_organizational_unit_child_accounts

export function DataAwsOrganizationsOrganizationalUnitChildAccounts(
  props: Partial<DataAwsOrganizationsOrganizationalUnitChildAccountsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organizational_unit_child_accounts'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsOrganizationalUnitChildAccountsInputSchema}
      _outputSchema={DataAwsOrganizationsOrganizationalUnitChildAccountsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnitChildAccountss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsOrganizationalUnitChildAccountsOutputProps>(
    DataAwsOrganizationsOrganizationalUnitChildAccounts,
    idFilter,
    baseNode,
    optional,
  )
