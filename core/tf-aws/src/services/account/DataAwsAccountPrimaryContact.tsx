import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAccountPrimaryContact } from './AwsAccountPrimaryContact.tsx'

export const DataAwsAccountPrimaryContactInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string().optional()),
})

export const DataAwsAccountPrimaryContactOutputSchema = z.object({
  address_line_1: z.string().optional(),
  address_line_2: z.string().optional(),
  address_line_3: z.string().optional(),
  city: z.string().optional(),
  company_name: z.string().optional(),
  country_code: z.string().optional(),
  district_or_county: z.string().optional(),
  full_name: z.string().optional(),
  phone_number: z.string().optional(),
  postal_code: z.string().optional(),
  state_or_region: z.string().optional(),
  website_url: z.string().optional(),
})

export type DataAwsAccountPrimaryContactInputProps =
  & z.input<typeof DataAwsAccountPrimaryContactInputSchema>
  & NodeProps

export type DataAwsAccountPrimaryContactOutputProps =
  & z.output<typeof DataAwsAccountPrimaryContactOutputSchema>
  & z.output<typeof DataAwsAccountPrimaryContactInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/account_primary_contact

export function DataAwsAccountPrimaryContact(
  props: Partial<DataAwsAccountPrimaryContactInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAccountPrimaryContact
      _type='aws_account_primary_contact'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAccountPrimaryContactInputSchema}
      _outputSchema={DataAwsAccountPrimaryContactOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAccountPrimaryContact = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAccountPrimaryContactOutputProps>(
    DataAwsAccountPrimaryContact,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAccountPrimaryContacts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAccountPrimaryContactOutputProps>(
    DataAwsAccountPrimaryContact,
    idFilter,
    baseNode,
    optional,
  )
