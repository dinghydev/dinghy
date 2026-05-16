import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOrganizationsAccount } from './AwsOrganizationsAccount.tsx'

export const DataAwsOrganizationsAccountInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsOrganizationsAccountOutputSchema = z.object({
  arn: z.string().optional(),
  email: z.string().optional(),
  joined_method: z.string().optional(),
  joined_timestamp: z.string().optional(),
  name: z.string().optional(),
  parent_id: z.string().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsOrganizationsAccountInputProps =
  & z.input<typeof DataAwsOrganizationsAccountInputSchema>
  & NodeProps

export type DataAwsOrganizationsAccountOutputProps =
  & z.output<typeof DataAwsOrganizationsAccountOutputSchema>
  & z.output<typeof DataAwsOrganizationsAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_account

export function DataAwsOrganizationsAccount(
  props: Partial<DataAwsOrganizationsAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOrganizationsAccount
      _type='aws_organizations_account'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsAccountInputSchema}
      _outputSchema={DataAwsOrganizationsAccountOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOrganizationsAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOrganizationsAccountOutputProps>(
    DataAwsOrganizationsAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOrganizationsAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsAccountOutputProps>(
    DataAwsOrganizationsAccount,
    idFilter,
    baseNode,
    optional,
  )
