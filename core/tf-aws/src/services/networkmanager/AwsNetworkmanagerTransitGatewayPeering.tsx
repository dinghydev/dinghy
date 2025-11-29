import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_transit_gateway_peering

export const InputSchema = z.object({
  core_network_id: resolvableValue(z.string()),
  transit_gateway_arn: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  core_network_arn: z.string().optional(),
  edge_location: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  peering_type: z.string().optional(),
  resource_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  transit_gateway_peering_attachment_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmanagerTransitGatewayPeering(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_transit_gateway_peering'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerTransitGatewayPeering = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsNetworkmanagerTransitGatewayPeering, node, id)

export const useAwsNetworkmanagerTransitGatewayPeerings = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsNetworkmanagerTransitGatewayPeering, node, id)
