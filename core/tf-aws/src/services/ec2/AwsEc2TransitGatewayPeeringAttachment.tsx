import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_peering_attachment

export const InputSchema = z.object({
  peer_region: resolvableValue(z.string()),
  peer_transit_gateway_id: resolvableValue(z.string()),
  state: resolvableValue(z.string()),
  transit_gateway_id: resolvableValue(z.string()),
  options: resolvableValue(
    z.object({
      dynamic_routing: z.string().optional(),
    }).optional(),
  ),
  peer_account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TransitGatewayPeeringAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_peering_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayPeeringAttachment = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsEc2TransitGatewayPeeringAttachment, node, id)

export const useAwsEc2TransitGatewayPeeringAttachments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsEc2TransitGatewayPeeringAttachment, node, id)
