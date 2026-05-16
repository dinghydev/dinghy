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

export const AwsEc2TransitGatewayMulticastGroupMemberInputSchema = TfMetaSchema
  .extend({
    group_ip_address: resolvableValue(z.string()),
    network_interface_id: resolvableValue(z.string()),
    transit_gateway_multicast_domain_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsEc2TransitGatewayMulticastGroupMemberOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2TransitGatewayMulticastGroupMemberInputProps =
  & z.input<typeof AwsEc2TransitGatewayMulticastGroupMemberInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayMulticastGroupMemberOutputProps =
  & z.output<typeof AwsEc2TransitGatewayMulticastGroupMemberOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayMulticastGroupMemberInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_group_member

export function AwsEc2TransitGatewayMulticastGroupMember(
  props: Partial<AwsEc2TransitGatewayMulticastGroupMemberInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_multicast_group_member'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayMulticastGroupMemberInputSchema}
      _outputSchema={AwsEc2TransitGatewayMulticastGroupMemberOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMulticastGroupMember = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayMulticastGroupMemberOutputProps>(
    AwsEc2TransitGatewayMulticastGroupMember,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayMulticastGroupMembers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayMulticastGroupMemberOutputProps>(
    AwsEc2TransitGatewayMulticastGroupMember,
    idFilter,
    baseNode,
    optional,
  )
