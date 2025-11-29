import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_peering_attachment_accepter

export const InputSchema = z.object({
  peer_region: resolvableValue(z.string()),
  transit_gateway_attachment_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  peer_account_id: z.string().optional(),
  peer_transit_gateway_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  transit_gateway_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TransitGatewayPeeringAttachmentAccepter(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_peering_attachment_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayPeeringAttachmentAccepter = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsEc2TransitGatewayPeeringAttachmentAccepter,
    node,
    id,
  )

export const useAwsEc2TransitGatewayPeeringAttachmentAccepters = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsEc2TransitGatewayPeeringAttachmentAccepter,
    node,
    id,
  )
