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

export const AwsEc2TransitGatewayConnectPeerInputSchema = TfMetaSchema.extend({
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

export const AwsEc2TransitGatewayConnectPeerOutputSchema = z.object({
  arn: z.string().optional(),
  bgp_peer_address: z.string().optional(),
  bgp_transit_gateway_addresses: z.set(z.string()).optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TransitGatewayConnectPeerInputProps =
  & z.input<typeof AwsEc2TransitGatewayConnectPeerInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayConnectPeerOutputProps =
  & z.output<typeof AwsEc2TransitGatewayConnectPeerOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayConnectPeerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_connect_peer

export function AwsEc2TransitGatewayConnectPeer(
  props: Partial<AwsEc2TransitGatewayConnectPeerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_connect_peer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayConnectPeerInputSchema}
      _outputSchema={AwsEc2TransitGatewayConnectPeerOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayConnectPeer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayConnectPeerOutputProps>(
    AwsEc2TransitGatewayConnectPeer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayConnectPeers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayConnectPeerOutputProps>(
    AwsEc2TransitGatewayConnectPeer,
    idFilter,
    baseNode,
    optional,
  )
