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

export const AwsNetworkmanagerConnectPeerInputSchema = TfMetaSchema.extend({
  connect_attachment_id: resolvableValue(z.string()),
  peer_address: resolvableValue(z.string()),
  bgp_options: resolvableValue(
    z.object({
      peer_asn: z.string().optional(),
    }).optional(),
  ),
  core_network_address: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  inside_cidr_blocks: resolvableValue(z.string().array().optional()),
  subnet_arn: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNetworkmanagerConnectPeerOutputSchema = z.object({
  arn: z.string().optional(),
  configuration: z.object({
    bgp_configurations: z.object({
      core_network_address: z.string(),
      core_network_asn: z.number(),
      peer_address: z.string(),
      peer_asn: z.string(),
    }).array(),
    core_network_address: z.string(),
    inside_cidr_blocks: z.set(z.string()),
    peer_address: z.string(),
    protocol: z.string(),
  }).array().optional(),
  connect_peer_id: z.string().optional(),
  core_network_id: z.string().optional(),
  created_at: z.string().optional(),
  edge_location: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmanagerConnectPeerInputProps =
  & z.input<typeof AwsNetworkmanagerConnectPeerInputSchema>
  & NodeProps

export type AwsNetworkmanagerConnectPeerOutputProps =
  & z.output<typeof AwsNetworkmanagerConnectPeerOutputSchema>
  & z.output<typeof AwsNetworkmanagerConnectPeerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_connect_peer

export function AwsNetworkmanagerConnectPeer(
  props: Partial<AwsNetworkmanagerConnectPeerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_connect_peer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerConnectPeerInputSchema}
      _outputSchema={AwsNetworkmanagerConnectPeerOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerConnectPeer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerConnectPeerOutputProps>(
    AwsNetworkmanagerConnectPeer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerConnectPeers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerConnectPeerOutputProps>(
    AwsNetworkmanagerConnectPeer,
    idFilter,
    baseNode,
    optional,
  )
