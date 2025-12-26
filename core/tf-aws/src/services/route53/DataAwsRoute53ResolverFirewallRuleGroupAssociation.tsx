import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverFirewallRuleGroupAssociation } from './AwsRoute53ResolverFirewallRuleGroupAssociation.tsx'

export const InputSchema = z.object({
  firewall_rule_group_association_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  creator_request_id: z.string().optional(),
  firewall_rule_group_id: z.string().optional(),
  managed_owner_name: z.string().optional(),
  modification_time: z.string().optional(),
  mutation_protection: z.string().optional(),
  name: z.string().optional(),
  priority: z.number().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route53_resolver_firewall_rule_group_association

export function DataAwsRoute53ResolverFirewallRuleGroupAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverFirewallRuleGroupAssociation
      _type='aws_route53_resolver_firewall_rule_group_association'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverFirewallRuleGroupAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsRoute53ResolverFirewallRuleGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53ResolverFirewallRuleGroupAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsRoute53ResolverFirewallRuleGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )
