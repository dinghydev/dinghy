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

export const AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterInputSchema =
  TfMetaSchema.extend({
    transit_gateway_attachment_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterOutputSchema =
  z.object({})

export type AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterInputProps =
  & z.input<
    typeof AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterInputSchema
  >
  & NodeProps

export type AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterOutputProps =
  & z.output<
    typeof AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterOutputSchema
  >
  & z.output<
    typeof AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter

export function AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepter(
  props: Partial<
    AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_firewall_transit_gateway_attachment_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterInputSchema}
      _outputSchema={AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallFirewallTransitGatewayAttachmentAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<
    AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterOutputProps
  >(
    AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkfirewallFirewallTransitGatewayAttachmentAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepterOutputProps
  >(
    AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )
