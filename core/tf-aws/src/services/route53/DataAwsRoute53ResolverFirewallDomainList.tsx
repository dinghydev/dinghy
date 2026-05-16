import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverFirewallDomainList } from './AwsRoute53ResolverFirewallDomainList.tsx'

export const DataAwsRoute53ResolverFirewallDomainListInputSchema = TfMetaSchema
  .extend({
    firewall_domain_list_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsRoute53ResolverFirewallDomainListOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  creator_request_id: z.string().optional(),
  domain_count: z.number().optional(),
  managed_owner_name: z.string().optional(),
  modification_time: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
})

export type DataAwsRoute53ResolverFirewallDomainListInputProps =
  & z.input<typeof DataAwsRoute53ResolverFirewallDomainListInputSchema>
  & NodeProps

export type DataAwsRoute53ResolverFirewallDomainListOutputProps =
  & z.output<typeof DataAwsRoute53ResolverFirewallDomainListOutputSchema>
  & z.output<typeof DataAwsRoute53ResolverFirewallDomainListInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_resolver_firewall_domain_list

export function DataAwsRoute53ResolverFirewallDomainList(
  props: Partial<DataAwsRoute53ResolverFirewallDomainListInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverFirewallDomainList
      _type='aws_route53_resolver_firewall_domain_list'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53ResolverFirewallDomainListInputSchema}
      _outputSchema={DataAwsRoute53ResolverFirewallDomainListOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverFirewallDomainList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRoute53ResolverFirewallDomainListOutputProps>(
    DataAwsRoute53ResolverFirewallDomainList,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53ResolverFirewallDomainLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53ResolverFirewallDomainListOutputProps>(
    DataAwsRoute53ResolverFirewallDomainList,
    idFilter,
    baseNode,
    optional,
  )
