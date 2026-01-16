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

export const InputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  account_number: resolvableValue(z.string().optional()),
  additional_information: resolvableValue(z.string().optional()),
  address: resolvableValue(
    z.object({
      address_1: z.string().optional(),
      address_2: z.string().optional(),
      address_3: z.string().optional(),
      address_4: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      county: z.string().optional(),
      postal_code: z.string().optional(),
      province: z.string().optional(),
      state: z.string().optional(),
    }).optional(),
  ),
  attributes: resolvableValue(z.record(z.string(), z.string()).optional()),
  billing_address: resolvableValue(
    z.object({
      address_1: z.string().optional(),
      address_2: z.string().optional(),
      address_3: z.string().optional(),
      address_4: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      county: z.string().optional(),
      postal_code: z.string().optional(),
      province: z.string().optional(),
      state: z.string().optional(),
    }).optional(),
  ),
  birth_date: resolvableValue(z.string().optional()),
  business_email_address: resolvableValue(z.string().optional()),
  business_name: resolvableValue(z.string().optional()),
  business_phone_number: resolvableValue(z.string().optional()),
  email_address: resolvableValue(z.string().optional()),
  first_name: resolvableValue(z.string().optional()),
  gender_string: resolvableValue(z.string().optional()),
  home_phone_number: resolvableValue(z.string().optional()),
  last_name: resolvableValue(z.string().optional()),
  mailing_address: resolvableValue(
    z.object({
      address_1: z.string().optional(),
      address_2: z.string().optional(),
      address_3: z.string().optional(),
      address_4: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      county: z.string().optional(),
      postal_code: z.string().optional(),
      province: z.string().optional(),
      state: z.string().optional(),
    }).optional(),
  ),
  middle_name: resolvableValue(z.string().optional()),
  mobile_phone_number: resolvableValue(z.string().optional()),
  party_type_string: resolvableValue(z.string().optional()),
  personal_email_address: resolvableValue(z.string().optional()),
  phone_number: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  shipping_address: resolvableValue(
    z.object({
      address_1: z.string().optional(),
      address_2: z.string().optional(),
      address_3: z.string().optional(),
      address_4: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      county: z.string().optional(),
      postal_code: z.string().optional(),
      province: z.string().optional(),
      state: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/customerprofiles_profile

export function AwsCustomerprofilesProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_customerprofiles_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCustomerprofilesProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCustomerprofilesProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCustomerprofilesProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCustomerprofilesProfile,
    idFilter,
    baseNode,
    optional,
  )
