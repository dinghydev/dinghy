import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter

export const InputSchema = z.object({
  transit_gateway_attachment_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
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

export function AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepter(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_firewall_transit_gateway_attachment_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallFirewallTransitGatewayAttachmentAccepter = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepter,
    node,
    id,
  )

export const useAwsNetworkfirewallFirewallTransitGatewayAttachmentAccepters = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkfirewallFirewallTransitGatewayAttachmentAccepter,
    node,
    id,
  )
