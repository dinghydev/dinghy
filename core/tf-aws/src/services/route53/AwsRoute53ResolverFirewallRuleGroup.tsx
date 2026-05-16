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

export const AwsRoute53ResolverFirewallRuleGroupInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsRoute53ResolverFirewallRuleGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  share_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53ResolverFirewallRuleGroupInputProps =
  & z.input<typeof AwsRoute53ResolverFirewallRuleGroupInputSchema>
  & NodeProps

export type AwsRoute53ResolverFirewallRuleGroupOutputProps =
  & z.output<typeof AwsRoute53ResolverFirewallRuleGroupOutputSchema>
  & z.output<typeof AwsRoute53ResolverFirewallRuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_firewall_rule_group

export function AwsRoute53ResolverFirewallRuleGroup(
  props: Partial<AwsRoute53ResolverFirewallRuleGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_firewall_rule_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverFirewallRuleGroupInputSchema}
      _outputSchema={AwsRoute53ResolverFirewallRuleGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverFirewallRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverFirewallRuleGroupOutputProps>(
    AwsRoute53ResolverFirewallRuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverFirewallRuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverFirewallRuleGroupOutputProps>(
    AwsRoute53ResolverFirewallRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
