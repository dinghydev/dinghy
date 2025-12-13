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

export const InputSchema = z.object({
  firewall_policy: resolvableValue(z.object({
    stateful_default_actions: z.string().array().optional(),
    stateless_default_actions: z.string().array(),
    stateless_fragment_default_actions: z.string().array(),
    tls_inspection_configuration_arn: z.string().optional(),
    policy_variables: z.object({
      rule_variables: z.object({
        key: z.string(),
        ip_set: z.object({
          definition: z.string().array(),
        }),
      }).array().optional(),
    }).optional(),
    stateful_engine_options: z.object({
      rule_order: z.string().optional(),
      stream_exception_policy: z.string().optional(),
      flow_timeouts: z.object({
        tcp_idle_timeout_seconds: z.number().optional(),
      }).optional(),
    }).optional(),
    stateful_rule_group_reference: z.object({
      deep_threat_inspection: z.string().optional(),
      priority: z.number().optional(),
      resource_arn: z.string(),
      override: z.object({
        action: z.string().optional(),
      }).optional(),
    }).array().optional(),
    stateless_custom_action: z.object({
      action_name: z.string(),
      action_definition: z.object({
        publish_metric_action: z.object({
          dimension: z.object({
            value: z.string(),
          }).array(),
        }),
      }),
    }).array().optional(),
    stateless_rule_group_reference: z.object({
      priority: z.number(),
      resource_arn: z.string(),
    }).array().optional(),
  })),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      key_id: z.string().optional(),
      type: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  update_token: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkfirewall_firewall_policy

export function AwsNetworkfirewallFirewallPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_firewall_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallFirewallPolicy = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkfirewallFirewallPolicy,
    idFilter,
    baseNode,
  )

export const useAwsNetworkfirewallFirewallPolicys = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkfirewallFirewallPolicy,
    idFilter,
    baseNode,
  )
