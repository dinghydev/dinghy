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

export const InputSchema = TfMetaSchema.extend({
  action: resolvableValue(z.string()),
  firewall_rule_group_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  priority: resolvableValue(z.number()),
  block_override_dns_type: resolvableValue(z.string().optional()),
  block_override_domain: resolvableValue(z.string().optional()),
  block_override_ttl: resolvableValue(z.number().optional()),
  block_response: resolvableValue(z.string().optional()),
  confidence_threshold: resolvableValue(z.string().optional()),
  dns_threat_protection: resolvableValue(z.string().optional()),
  firewall_domain_list_id: resolvableValue(z.string().optional()),
  firewall_domain_redirection_action: resolvableValue(z.string().optional()),
  q_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  firewall_threat_protection_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_firewall_rule

export function AwsRoute53ResolverFirewallRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_firewall_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverFirewallRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRoute53ResolverFirewallRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverFirewallRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRoute53ResolverFirewallRule,
    idFilter,
    baseNode,
    optional,
  )
