import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_connect_peer

export const InputSchema = z.object({
  inside_cidr_blocks: resolvableValue(z.string().array()),
  peer_address: resolvableValue(z.string()),
  transit_gateway_attachment_id: resolvableValue(z.string()),
  bgp_asn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_address: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  bgp_peer_address: z.string().optional(),
  bgp_transit_gateway_addresses: z.string().array().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TransitGatewayConnectPeer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_connect_peer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayConnectPeer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2TransitGatewayConnectPeer, node, id)

export const useAwsEc2TransitGatewayConnectPeers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2TransitGatewayConnectPeer, node, id)
