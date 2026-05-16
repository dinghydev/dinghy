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

export const AwsNetworkmanagerTransitGatewayConnectPeerAssociationInputSchema =
  TfMetaSchema.extend({
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

export const AwsNetworkmanagerTransitGatewayConnectPeerAssociationOutputSchema =
  z.object({})

export type AwsNetworkmanagerTransitGatewayConnectPeerAssociationInputProps =
  & z.input<
    typeof AwsNetworkmanagerTransitGatewayConnectPeerAssociationInputSchema
  >
  & NodeProps

export type AwsNetworkmanagerTransitGatewayConnectPeerAssociationOutputProps =
  & z.output<
    typeof AwsNetworkmanagerTransitGatewayConnectPeerAssociationOutputSchema
  >
  & z.output<
    typeof AwsNetworkmanagerTransitGatewayConnectPeerAssociationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_transit_gateway_connect_peer_association

export function AwsNetworkmanagerTransitGatewayConnectPeerAssociation(
  props: Partial<
    AwsNetworkmanagerTransitGatewayConnectPeerAssociationInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_transit_gateway_connect_peer_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerTransitGatewayConnectPeerAssociationInputSchema}
      _outputSchema={AwsNetworkmanagerTransitGatewayConnectPeerAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerTransitGatewayConnectPeerAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<
    AwsNetworkmanagerTransitGatewayConnectPeerAssociationOutputProps
  >(
    AwsNetworkmanagerTransitGatewayConnectPeerAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerTransitGatewayConnectPeerAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    AwsNetworkmanagerTransitGatewayConnectPeerAssociationOutputProps
  >(
    AwsNetworkmanagerTransitGatewayConnectPeerAssociation,
    idFilter,
    baseNode,
    optional,
  )
