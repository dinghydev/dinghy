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

export const AwsRoute53ResolverFirewallRuleGroupAssociationInputSchema =
  TfMetaSchema.extend({
    firewall_rule_group_id: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    priority: resolvableValue(z.number()),
    vpc_id: resolvableValue(z.string()),
    mutation_protection: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsRoute53ResolverFirewallRuleGroupAssociationOutputSchema = z
  .object({
    arn: z.string().optional(),
    id: z.string().optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
  })

export type AwsRoute53ResolverFirewallRuleGroupAssociationInputProps =
  & z.input<typeof AwsRoute53ResolverFirewallRuleGroupAssociationInputSchema>
  & NodeProps

export type AwsRoute53ResolverFirewallRuleGroupAssociationOutputProps =
  & z.output<typeof AwsRoute53ResolverFirewallRuleGroupAssociationOutputSchema>
  & z.output<typeof AwsRoute53ResolverFirewallRuleGroupAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_firewall_rule_group_association

export function AwsRoute53ResolverFirewallRuleGroupAssociation(
  props: Partial<AwsRoute53ResolverFirewallRuleGroupAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_firewall_rule_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverFirewallRuleGroupAssociationInputSchema}
      _outputSchema={AwsRoute53ResolverFirewallRuleGroupAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverFirewallRuleGroupAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverFirewallRuleGroupAssociationOutputProps>(
    AwsRoute53ResolverFirewallRuleGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverFirewallRuleGroupAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverFirewallRuleGroupAssociationOutputProps>(
    AwsRoute53ResolverFirewallRuleGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )
