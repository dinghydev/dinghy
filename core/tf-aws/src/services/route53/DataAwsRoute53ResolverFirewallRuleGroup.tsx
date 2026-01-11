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

export const InputSchema = z.object({
  firewall_rule_group_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_firewall_rule_group

export function DataAwsRoute53ResolverFirewallRuleGroup(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverFirewallRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsRoute53ResolverFirewallRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
