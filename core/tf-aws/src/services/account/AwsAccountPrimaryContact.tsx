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

export const AwsAccountPrimaryContactInputSchema = TfMetaSchema.extend({
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

export const AwsAccountPrimaryContactOutputSchema = z.object({})

export type AwsAccountPrimaryContactInputProps =
  & z.input<typeof AwsAccountPrimaryContactInputSchema>
  & NodeProps

export type AwsAccountPrimaryContactOutputProps =
  & z.output<typeof AwsAccountPrimaryContactOutputSchema>
  & z.output<typeof AwsAccountPrimaryContactInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/account_primary_contact

export function AwsAccountPrimaryContact(
  props: Partial<AwsAccountPrimaryContactInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_account_primary_contact'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAccountPrimaryContactInputSchema}
      _outputSchema={AwsAccountPrimaryContactOutputSchema}
      {...props}
    />
  )
}

export const useAwsAccountPrimaryContact = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAccountPrimaryContactOutputProps>(
    AwsAccountPrimaryContact,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAccountPrimaryContacts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAccountPrimaryContactOutputProps>(
    AwsAccountPrimaryContact,
    idFilter,
    baseNode,
    optional,
  )
