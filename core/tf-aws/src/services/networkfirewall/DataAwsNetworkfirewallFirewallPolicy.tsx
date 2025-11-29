import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkfirewallFirewallPolicy } from './AwsNetworkfirewallFirewallPolicy.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/networkfirewall_firewall_policy

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  description: z.string().optional(),
  firewall_policy: z.object({
    policy_variables: z.object({
      rule_variables: z.object({
        ip_set: z.object({
          definition: z.string().array(),
        }).array(),
        key: z.string(),
      }).array(),
    }).array(),
    stateful_default_actions: z.string().array(),
    stateful_engine_options: z.object({
      flow_timeouts: z.object({
        tcp_idle_timeout_seconds: z.number(),
      }).array(),
      rule_order: z.string(),
      stream_exception_policy: z.string(),
    }).array(),
    stateful_rule_group_reference: z.object({
      deep_threat_inspection: z.string(),
      override: z.object({
        action: z.string(),
      }).array(),
      priority: z.number(),
      resource_arn: z.string(),
    }).array(),
    stateless_custom_action: z.object({
      action_definition: z.object({
        publish_metric_action: z.object({
          dimension: z.object({
            value: z.string(),
          }).array(),
        }).array(),
      }).array(),
      action_name: z.string(),
    }).array(),
    stateless_default_actions: z.string().array(),
    stateless_fragment_default_actions: z.string().array(),
    stateless_rule_group_reference: z.object({
      priority: z.number(),
      resource_arn: z.string(),
    }).array(),
    tls_inspection_configuration_arn: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_token: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsNetworkfirewallFirewallPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsNetworkfirewallFirewallPolicy
      _type='aws_networkfirewall_firewall_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkfirewallFirewallPolicy = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsNetworkfirewallFirewallPolicy, node, id)

export const useDataAwsNetworkfirewallFirewallPolicys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsNetworkfirewallFirewallPolicy, node, id)
