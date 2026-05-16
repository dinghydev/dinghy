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

export const AwsEc2TrafficMirrorFilterRuleInputSchema = TfMetaSchema.extend({
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

export const AwsEc2TrafficMirrorFilterRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsEc2TrafficMirrorFilterRuleInputProps =
  & z.input<typeof AwsEc2TrafficMirrorFilterRuleInputSchema>
  & NodeProps

export type AwsEc2TrafficMirrorFilterRuleOutputProps =
  & z.output<typeof AwsEc2TrafficMirrorFilterRuleOutputSchema>
  & z.output<typeof AwsEc2TrafficMirrorFilterRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_traffic_mirror_filter_rule

export function AwsEc2TrafficMirrorFilterRule(
  props: Partial<AwsEc2TrafficMirrorFilterRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_traffic_mirror_filter_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TrafficMirrorFilterRuleInputSchema}
      _outputSchema={AwsEc2TrafficMirrorFilterRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TrafficMirrorFilterRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TrafficMirrorFilterRuleOutputProps>(
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
  useTypedNodes<AwsEc2TrafficMirrorFilterRuleOutputProps>(
    AwsEc2TrafficMirrorFilterRule,
    idFilter,
    baseNode,
    optional,
  )
