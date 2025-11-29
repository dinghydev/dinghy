import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53domains_registered_domain

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string()),
  admin_contact: resolvableValue(
    z.object({
      address_line_1: z.string().optional(),
      address_line_2: z.string().optional(),
      city: z.string().optional(),
      contact_type: z.string().optional(),
      country_code: z.string().optional(),
      email: z.string().optional(),
      extra_params: z.record(z.string(), z.string()).optional(),
      fax: z.string().optional(),
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      organization_name: z.string().optional(),
      phone_number: z.string().optional(),
      state: z.string().optional(),
      zip_code: z.string().optional(),
    }).optional(),
  ),
  admin_privacy: resolvableValue(z.boolean().optional()),
  auto_renew: resolvableValue(z.boolean().optional()),
  billing_contact: resolvableValue(
    z.object({
      address_line_1: z.string().optional(),
      address_line_2: z.string().optional(),
      city: z.string().optional(),
      contact_type: z.string().optional(),
      country_code: z.string().optional(),
      email: z.string().optional(),
      extra_params: z.record(z.string(), z.string()).optional(),
      fax: z.string().optional(),
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      organization_name: z.string().optional(),
      phone_number: z.string().optional(),
      state: z.string().optional(),
      zip_code: z.string().optional(),
    }).optional(),
  ),
  billing_privacy: resolvableValue(z.boolean().optional()),
  name_server: resolvableValue(
    z.object({
      glue_ips: z.string().array().optional(),
      name: z.string(),
    }).optional(),
  ),
  registrant_contact: resolvableValue(
    z.object({
      address_line_1: z.string().optional(),
      address_line_2: z.string().optional(),
      city: z.string().optional(),
      contact_type: z.string().optional(),
      country_code: z.string().optional(),
      email: z.string().optional(),
      extra_params: z.record(z.string(), z.string()).optional(),
      fax: z.string().optional(),
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      organization_name: z.string().optional(),
      phone_number: z.string().optional(),
      state: z.string().optional(),
      zip_code: z.string().optional(),
    }).optional(),
  ),
  registrant_privacy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tech_contact: resolvableValue(
    z.object({
      address_line_1: z.string().optional(),
      address_line_2: z.string().optional(),
      city: z.string().optional(),
      contact_type: z.string().optional(),
      country_code: z.string().optional(),
      email: z.string().optional(),
      extra_params: z.record(z.string(), z.string()).optional(),
      fax: z.string().optional(),
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      organization_name: z.string().optional(),
      phone_number: z.string().optional(),
      state: z.string().optional(),
      zip_code: z.string().optional(),
    }).optional(),
  ),
  tech_privacy: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  transfer_lock: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  abuse_contact_email: z.string().optional(),
  abuse_contact_phone: z.string().optional(),
  creation_date: z.string().optional(),
  expiration_date: z.string().optional(),
  id: z.string().optional(),
  registrar_name: z.string().optional(),
  registrar_url: z.string().optional(),
  reseller: z.string().optional(),
  status_list: z.string().array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_date: z.string().optional(),
  whois_server: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53domainsRegisteredDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53domains_registered_domain'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53domainsRegisteredDomain = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRoute53domainsRegisteredDomain, node, id)

export const useAwsRoute53domainsRegisteredDomains = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsRoute53domainsRegisteredDomain, node, id)
