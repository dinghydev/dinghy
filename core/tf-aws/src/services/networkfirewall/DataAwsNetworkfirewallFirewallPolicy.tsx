import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkfirewallFirewallPolicy } from './AwsNetworkfirewallFirewallPolicy.tsx'

export const DataAwsNetworkfirewallFirewallPolicyInputSchema = TfMetaSchema
  .extend({
    arn: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsNetworkfirewallFirewallPolicyOutputSchema = z.object({
  description: z.string().optional(),
  firewall_policy: z.object({
    enable_tls_session_holding: z.boolean(),
    policy_variables: z.object({
      rule_variables: z.set(z.object({
        ip_set: z.object({
          definition: z.set(z.string()),
        }).array(),
        key: z.string(),
      })),
    }).array(),
    stateful_default_actions: z.set(z.string()),
    stateful_engine_options: z.object({
      flow_timeouts: z.object({
        tcp_idle_timeout_seconds: z.number(),
      }).array(),
      rule_order: z.string(),
      stream_exception_policy: z.string(),
    }).array(),
    stateful_rule_group_reference: z.set(z.object({
      deep_threat_inspection: z.string(),
      override: z.object({
        action: z.string(),
      }).array(),
      priority: z.number(),
      resource_arn: z.string(),
    })),
    stateless_custom_action: z.set(z.object({
      action_definition: z.object({
        publish_metric_action: z.object({
          dimension: z.set(z.object({
            value: z.string(),
          })),
        }).array(),
      }).array(),
      action_name: z.string(),
    })),
    stateless_default_actions: z.set(z.string()),
    stateless_fragment_default_actions: z.set(z.string()),
    stateless_rule_group_reference: z.set(z.object({
      priority: z.number(),
      resource_arn: z.string(),
    })),
    tls_inspection_configuration_arn: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_token: z.string().optional(),
})

export type DataAwsNetworkfirewallFirewallPolicyInputProps =
  & z.input<typeof DataAwsNetworkfirewallFirewallPolicyInputSchema>
  & NodeProps

export type DataAwsNetworkfirewallFirewallPolicyOutputProps =
  & z.output<typeof DataAwsNetworkfirewallFirewallPolicyOutputSchema>
  & z.output<typeof DataAwsNetworkfirewallFirewallPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkfirewall_firewall_policy

export function DataAwsNetworkfirewallFirewallPolicy(
  props: Partial<DataAwsNetworkfirewallFirewallPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNetworkfirewallFirewallPolicy
      _type='aws_networkfirewall_firewall_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkfirewallFirewallPolicyInputSchema}
      _outputSchema={DataAwsNetworkfirewallFirewallPolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkfirewallFirewallPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsNetworkfirewallFirewallPolicyOutputProps>(
    DataAwsNetworkfirewallFirewallPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkfirewallFirewallPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkfirewallFirewallPolicyOutputProps>(
    DataAwsNetworkfirewallFirewallPolicy,
    idFilter,
    baseNode,
    optional,
  )
