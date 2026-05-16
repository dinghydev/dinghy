import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2TransitGatewayConnectPeer } from './AwsEc2TransitGatewayConnectPeer.tsx'

export const DataAwsEc2TransitGatewayConnectPeerInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
    transit_gateway_connect_peer_id: resolvableValue(z.string().optional()),
  })

export const DataAwsEc2TransitGatewayConnectPeerOutputSchema = z.object({
  arn: z.string().optional(),
  bgp_asn: z.string().optional(),
  bgp_peer_address: z.string().optional(),
  bgp_transit_gateway_addresses: z.set(z.string()).optional(),
  inside_cidr_blocks: z.string().array().optional(),
  peer_address: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transit_gateway_address: z.string().optional(),
  transit_gateway_attachment_id: z.string().optional(),
})

export type DataAwsEc2TransitGatewayConnectPeerInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayConnectPeerInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayConnectPeerOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayConnectPeerOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayConnectPeerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_connect_peer

export function DataAwsEc2TransitGatewayConnectPeer(
  props: Partial<DataAwsEc2TransitGatewayConnectPeerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEc2TransitGatewayConnectPeer
      _type='aws_ec2_transit_gateway_connect_peer'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayConnectPeerInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayConnectPeerOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGatewayConnectPeer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2TransitGatewayConnectPeerOutputProps>(
    DataAwsEc2TransitGatewayConnectPeer,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGatewayConnectPeers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayConnectPeerOutputProps>(
    DataAwsEc2TransitGatewayConnectPeer,
    idFilter,
    baseNode,
    optional,
  )
