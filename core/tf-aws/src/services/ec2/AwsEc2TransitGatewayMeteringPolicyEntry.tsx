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
  metered_account: resolvableValue(z.string()),
  policy_rule_number: resolvableValue(z.number()),
  transit_gateway_metering_policy_id: resolvableValue(z.string()),
  destination_cidr_block: resolvableValue(z.string().optional()),
  destination_port_range: resolvableValue(z.string().optional()),
  destination_transit_gateway_attachment_id: resolvableValue(
    z.string().optional(),
  ),
  destination_transit_gateway_attachment_type: resolvableValue(
    z.string().optional(),
  ),
  protocol: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_cidr_block: resolvableValue(z.string().optional()),
  source_port_range: resolvableValue(z.string().optional()),
  source_transit_gateway_attachment_id: resolvableValue(z.string().optional()),
  source_transit_gateway_attachment_type: resolvableValue(
    z.string().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_metering_policy_entry

export function AwsEc2TransitGatewayMeteringPolicyEntry(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_metering_policy_entry'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMeteringPolicyEntry = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEc2TransitGatewayMeteringPolicyEntry,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayMeteringPolicyEntrys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEc2TransitGatewayMeteringPolicyEntry,
    idFilter,
    baseNode,
    optional,
  )
