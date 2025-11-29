import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAccountPrimaryContact } from './AwsAccountPrimaryContact.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/account_primary_contact

export const InputSchema = z.object({
  account_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsAccountPrimaryContact(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsAccountPrimaryContact
      _type='aws_account_primary_contact'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAccountPrimaryContact = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAccountPrimaryContact, node, id)

export const useDataAwsAccountPrimaryContacts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAccountPrimaryContact, node, id)
