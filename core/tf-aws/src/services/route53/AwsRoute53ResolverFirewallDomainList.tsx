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

export const AwsRoute53ResolverFirewallDomainListInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    domains: resolvableValue(z.string().array().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsRoute53ResolverFirewallDomainListOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53ResolverFirewallDomainListInputProps =
  & z.input<typeof AwsRoute53ResolverFirewallDomainListInputSchema>
  & NodeProps

export type AwsRoute53ResolverFirewallDomainListOutputProps =
  & z.output<typeof AwsRoute53ResolverFirewallDomainListOutputSchema>
  & z.output<typeof AwsRoute53ResolverFirewallDomainListInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_firewall_domain_list

export function AwsRoute53ResolverFirewallDomainList(
  props: Partial<AwsRoute53ResolverFirewallDomainListInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_firewall_domain_list'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverFirewallDomainListInputSchema}
      _outputSchema={AwsRoute53ResolverFirewallDomainListOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverFirewallDomainList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverFirewallDomainListOutputProps>(
    AwsRoute53ResolverFirewallDomainList,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverFirewallDomainLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverFirewallDomainListOutputProps>(
    AwsRoute53ResolverFirewallDomainList,
    idFilter,
    baseNode,
    optional,
  )
