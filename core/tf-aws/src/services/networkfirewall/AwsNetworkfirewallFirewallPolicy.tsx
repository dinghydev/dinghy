import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkfirewall_firewall_policy

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      key_id: z.string().optional(),
      type: z.string(),
    }).optional(),
  ),
  firewall_policy: resolvableValue(z.object({
    stateful_default_actions: z.string().array().optional(),
    stateless_default_actions: z.string().array(),
    stateless_fragment_default_actions: z.string().array(),
    tls_inspection_configuration_arn: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

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

export const useAwsNetworkfirewallFirewallPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNetworkfirewallFirewallPolicy, node, id)

export const useAwsNetworkfirewallFirewallPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNetworkfirewallFirewallPolicy, node, id)
