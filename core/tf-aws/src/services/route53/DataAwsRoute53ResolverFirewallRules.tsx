import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  firewall_rule_group_id: resolvableValue(z.string()),
  action: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  priority: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  firewall_rules: z.object({
    action: z.string(),
    block_override_dns_type: z.string(),
    block_override_domain: z.string(),
    block_override_ttl: z.number(),
    block_response: z.string(),
    creation_time: z.string(),
    creator_request_id: z.string(),
    firewall_domain_list_id: z.string(),
    firewall_rule_group_id: z.string(),
    modification_time: z.string(),
    name: z.string(),
    priority: z.number(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route53_resolver_firewall_rules

export function DataAwsRoute53ResolverFirewallRules(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_firewall_rules'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53ResolverFirewallRuless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsRoute53ResolverFirewallRules,
    idFilter,
    baseNode,
    optional,
  )
