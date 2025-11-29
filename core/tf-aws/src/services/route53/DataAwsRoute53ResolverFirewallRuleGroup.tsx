import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverFirewallRuleGroup } from './AwsRoute53ResolverFirewallRuleGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route53_resolver_firewall_rule_group

export const InputSchema = z.object({
  firewall_rule_group_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  creator_request_id: z.string().optional(),
  modification_time: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  rule_count: z.number().optional(),
  share_status: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRoute53ResolverFirewallRuleGroup(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverFirewallRuleGroup
      _type='aws_route53_resolver_firewall_rule_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverFirewallRuleGroup = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(DataAwsRoute53ResolverFirewallRuleGroup, node, id)

export const useDataAwsRoute53ResolverFirewallRuleGroups = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsRoute53ResolverFirewallRuleGroup, node, id)
