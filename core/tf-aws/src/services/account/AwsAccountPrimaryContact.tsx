import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/account_primary_contact

export const InputSchema = z.object({
  address_line_1: resolvableValue(z.string()),
  city: resolvableValue(z.string()),
  country_code: resolvableValue(z.string()),
  full_name: resolvableValue(z.string()),
  phone_number: resolvableValue(z.string()),
  postal_code: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  address_line_2: resolvableValue(z.string().optional()),
  address_line_3: resolvableValue(z.string().optional()),
  company_name: resolvableValue(z.string().optional()),
  district_or_county: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  state_or_region: resolvableValue(z.string().optional()),
  website_url: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAccountPrimaryContact(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_account_primary_contact'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAccountPrimaryContact = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAccountPrimaryContact, node, id)

export const useAwsAccountPrimaryContacts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAccountPrimaryContact, node, id)
