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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_transit_gateway_connect_peer

export function DataAwsEc2TransitGatewayConnectPeer(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEc2TransitGatewayConnectPeer
      _type='aws_ec2_transit_gateway_connect_peer'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGatewayConnectPeer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsEc2TransitGatewayConnectPeer,
    idFilter,
    baseNode,
    optional,
  )
