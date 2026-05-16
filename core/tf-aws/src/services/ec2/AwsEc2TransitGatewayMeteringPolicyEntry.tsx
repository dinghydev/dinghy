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

export const AwsEc2TransitGatewayMeteringPolicyEntryInputSchema = TfMetaSchema
  .extend({
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
    source_transit_gateway_attachment_id: resolvableValue(
      z.string().optional(),
    ),
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

export const AwsEc2TransitGatewayMeteringPolicyEntryOutputSchema = z.object({})

export type AwsEc2TransitGatewayMeteringPolicyEntryInputProps =
  & z.input<typeof AwsEc2TransitGatewayMeteringPolicyEntryInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayMeteringPolicyEntryOutputProps =
  & z.output<typeof AwsEc2TransitGatewayMeteringPolicyEntryOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayMeteringPolicyEntryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_metering_policy_entry

export function AwsEc2TransitGatewayMeteringPolicyEntry(
  props: Partial<AwsEc2TransitGatewayMeteringPolicyEntryInputProps>,
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
      _inputSchema={AwsEc2TransitGatewayMeteringPolicyEntryInputSchema}
      _outputSchema={AwsEc2TransitGatewayMeteringPolicyEntryOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMeteringPolicyEntry = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayMeteringPolicyEntryOutputProps>(
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
  useTypedNodes<AwsEc2TransitGatewayMeteringPolicyEntryOutputProps>(
    AwsEc2TransitGatewayMeteringPolicyEntry,
    idFilter,
    baseNode,
    optional,
  )
