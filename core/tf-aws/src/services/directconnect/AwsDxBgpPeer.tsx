import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dx_bgp_peer

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  aws_device: z.string().optional(),
  bgp_peer_id: z.string().optional(),
  bgp_status: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDxBgpPeer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_bgp_peer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxBgpPeer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDxBgpPeer, node, id)

export const useAwsDxBgpPeers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDxBgpPeer, node, id)
