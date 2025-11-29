import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/network_acl_rule

export const InputSchema = z.object({
  network_acl_id: resolvableValue(z.string()),
  protocol: resolvableValue(z.string()),
  rule_action: resolvableValue(z.string()),
  rule_number: resolvableValue(z.number()),
  cidr_block: resolvableValue(z.string().optional()),
  egress: resolvableValue(z.boolean().optional()),
  from_port: resolvableValue(z.number().optional()),
  icmp_code: resolvableValue(z.number().optional()),
  icmp_type: resolvableValue(z.number().optional()),
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  to_port: resolvableValue(z.number().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkAclRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_acl_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkAclRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNetworkAclRule, node, id)

export const useAwsNetworkAclRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNetworkAclRule, node, id)
