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

export const AwsDxBgpPeerInputSchema = TfMetaSchema.extend({
  address_family: resolvableValue(z.string()),
  bgp_asn: resolvableValue(z.number()),
  virtual_interface_id: resolvableValue(z.string()),
  amazon_address: resolvableValue(z.string().optional()),
  bgp_auth_key: resolvableValue(z.string().optional()),
  customer_address: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDxBgpPeerOutputSchema = z.object({
  aws_device: z.string().optional(),
  bgp_peer_id: z.string().optional(),
  bgp_status: z.string().optional(),
  id: z.string().optional(),
})

export type AwsDxBgpPeerInputProps =
  & z.input<typeof AwsDxBgpPeerInputSchema>
  & NodeProps

export type AwsDxBgpPeerOutputProps =
  & z.output<typeof AwsDxBgpPeerOutputSchema>
  & z.output<typeof AwsDxBgpPeerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_bgp_peer

export function AwsDxBgpPeer(props: Partial<AwsDxBgpPeerInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_bgp_peer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxBgpPeerInputSchema}
      _outputSchema={AwsDxBgpPeerOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxBgpPeer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxBgpPeerOutputProps>(
    AwsDxBgpPeer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxBgpPeers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxBgpPeerOutputProps>(
    AwsDxBgpPeer,
    idFilter,
    baseNode,
    optional,
  )
