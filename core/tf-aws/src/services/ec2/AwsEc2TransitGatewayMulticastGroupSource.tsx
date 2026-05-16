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

export const AwsEc2TransitGatewayMulticastGroupSourceInputSchema = TfMetaSchema
  .extend({
    group_ip_address: resolvableValue(z.string()),
    network_interface_id: resolvableValue(z.string()),
    transit_gateway_multicast_domain_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsEc2TransitGatewayMulticastGroupSourceOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2TransitGatewayMulticastGroupSourceInputProps =
  & z.input<typeof AwsEc2TransitGatewayMulticastGroupSourceInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayMulticastGroupSourceOutputProps =
  & z.output<typeof AwsEc2TransitGatewayMulticastGroupSourceOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayMulticastGroupSourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_group_source

export function AwsEc2TransitGatewayMulticastGroupSource(
  props: Partial<AwsEc2TransitGatewayMulticastGroupSourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_multicast_group_source'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayMulticastGroupSourceInputSchema}
      _outputSchema={AwsEc2TransitGatewayMulticastGroupSourceOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMulticastGroupSource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayMulticastGroupSourceOutputProps>(
    AwsEc2TransitGatewayMulticastGroupSource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayMulticastGroupSources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayMulticastGroupSourceOutputProps>(
    AwsEc2TransitGatewayMulticastGroupSource,
    idFilter,
    baseNode,
    optional,
  )
