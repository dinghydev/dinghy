import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_traffic_mirror_filter_rule

export const InputSchema = z.object({
  destination_cidr_block: resolvableValue(z.string()),
  rule_action: resolvableValue(z.string()),
  rule_number: resolvableValue(z.number()),
  source_cidr_block: resolvableValue(z.string()),
  traffic_direction: resolvableValue(z.string()),
  traffic_mirror_filter_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  destination_port_range: resolvableValue(
    z.object({
      from_port: z.number().optional(),
      to_port: z.number().optional(),
    }).optional(),
  ),
  protocol: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  source_port_range: resolvableValue(
    z.object({
      from_port: z.number().optional(),
      to_port: z.number().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TrafficMirrorFilterRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_traffic_mirror_filter_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TrafficMirrorFilterRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2TrafficMirrorFilterRule, node, id)

export const useAwsEc2TrafficMirrorFilterRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2TrafficMirrorFilterRule, node, id)
