import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverFirewallRuleGroup } from './AwsRoute53ResolverFirewallRuleGroup.tsx'

export const DataAwsRoute53ResolverFirewallRuleGroupInputSchema = TfMetaSchema
  .extend({
    firewall_rule_group_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsRoute53ResolverFirewallRuleGroupOutputSchema = z.object({
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

export type DataAwsRoute53ResolverFirewallRuleGroupInputProps =
  & z.input<typeof DataAwsRoute53ResolverFirewallRuleGroupInputSchema>
  & NodeProps

export type DataAwsRoute53ResolverFirewallRuleGroupOutputProps =
  & z.output<typeof DataAwsRoute53ResolverFirewallRuleGroupOutputSchema>
  & z.output<typeof DataAwsRoute53ResolverFirewallRuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_resolver_firewall_rule_group

export function DataAwsRoute53ResolverFirewallRuleGroup(
  props: Partial<DataAwsRoute53ResolverFirewallRuleGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverFirewallRuleGroup
      _type='aws_route53_resolver_firewall_rule_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53ResolverFirewallRuleGroupInputSchema}
      _outputSchema={DataAwsRoute53ResolverFirewallRuleGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverFirewallRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRoute53ResolverFirewallRuleGroupOutputProps>(
    DataAwsRoute53ResolverFirewallRuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53ResolverFirewallRuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53ResolverFirewallRuleGroupOutputProps>(
    DataAwsRoute53ResolverFirewallRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
