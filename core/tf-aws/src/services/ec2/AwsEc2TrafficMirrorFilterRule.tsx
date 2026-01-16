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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ec2_traffic_mirror_filter_rule

export function AwsEc2TrafficMirrorFilterRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsEc2TrafficMirrorFilterRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEc2TrafficMirrorFilterRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TrafficMirrorFilterRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEc2TrafficMirrorFilterRule,
    idFilter,
    baseNode,
    optional,
  )
