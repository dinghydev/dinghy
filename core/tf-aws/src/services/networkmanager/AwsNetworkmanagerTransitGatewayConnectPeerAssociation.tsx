import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_transit_gateway_connect_peer_association

export const InputSchema = z.object({
  device_id: resolvableValue(z.string()),
  global_network_id: resolvableValue(z.string()),
  transit_gateway_connect_peer_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  link_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmanagerTransitGatewayConnectPeerAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_transit_gateway_connect_peer_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerTransitGatewayConnectPeerAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkmanagerTransitGatewayConnectPeerAssociation,
    node,
    id,
  )

export const useAwsNetworkmanagerTransitGatewayConnectPeerAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkmanagerTransitGatewayConnectPeerAssociation,
    node,
    id,
  )
