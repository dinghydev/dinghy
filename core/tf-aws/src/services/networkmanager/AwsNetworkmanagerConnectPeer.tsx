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

export const InputSchema = z.object({
  connect_attachment_id: resolvableValue(z.string()),
  peer_address: resolvableValue(z.string()),
  bgp_options: resolvableValue(
    z.object({
      peer_asn: z.number().optional(),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  configuration: z.object({
    bgp_configurations: z.object({
      core_network_address: z.string(),
      core_network_asn: z.number(),
      peer_address: z.string(),
      peer_asn: z.number(),
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_connect_peer

export function AwsNetworkmanagerConnectPeer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_connect_peer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerConnectPeer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsNetworkmanagerConnectPeer,
    idFilter,
    baseNode,
    optional,
  )
