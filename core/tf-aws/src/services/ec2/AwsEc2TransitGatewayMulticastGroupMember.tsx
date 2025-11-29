import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_multicast_group_member

export const InputSchema = z.object({
  group_ip_address: resolvableValue(z.string()),
  network_interface_id: resolvableValue(z.string()),
  transit_gateway_multicast_domain_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
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

export function AwsEc2TransitGatewayMulticastGroupMember(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_multicast_group_member'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMulticastGroupMember = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsEc2TransitGatewayMulticastGroupMember, node, id)

export const useAwsEc2TransitGatewayMulticastGroupMembers = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsEc2TransitGatewayMulticastGroupMember, node, id)
