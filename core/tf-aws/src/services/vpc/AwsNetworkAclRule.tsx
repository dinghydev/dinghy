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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/network_acl_rule

export function AwsNetworkAclRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsNetworkAclRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsNetworkAclRule, idFilter, baseNode, optional)

export const useAwsNetworkAclRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsNetworkAclRule, idFilter, baseNode, optional)
