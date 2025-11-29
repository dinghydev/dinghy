import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkfirewall_rule_group

export const InputSchema = z.object({
  capacity: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      key_id: z.string().optional(),
      type: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  rule_group: resolvableValue(
    z.object({
      reference_sets: z.object({
        ip_set_references: z.object({
          key: z.string(),
        }).array().optional(),
      }).optional(),
      rule_variables: z.object({
        ip_sets: z.object({
          key: z.string(),
        }).array().optional(),
        port_sets: z.object({
          key: z.string(),
        }).array().optional(),
      }).optional(),
      rules_source: z.object({
        rules_string: z.string().optional(),
      }),
      stateful_rule_options: z.object({
        rule_order: z.string(),
      }).optional(),
    }).optional(),
  ),
  rules: resolvableValue(z.string().optional()),
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

export function AwsNetworkfirewallRuleGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_rule_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallRuleGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNetworkfirewallRuleGroup, node, id)

export const useAwsNetworkfirewallRuleGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNetworkfirewallRuleGroup, node, id)
