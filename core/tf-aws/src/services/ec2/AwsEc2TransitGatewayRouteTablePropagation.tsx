import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_route_table_propagation

export const InputSchema = z.object({
  transit_gateway_attachment_id: resolvableValue(z.string()),
  transit_gateway_route_table_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  resource_id: z.string().optional(),
  resource_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TransitGatewayRouteTablePropagation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route_table_propagation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayRouteTablePropagation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsEc2TransitGatewayRouteTablePropagation, node, id)

export const useAwsEc2TransitGatewayRouteTablePropagations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsEc2TransitGatewayRouteTablePropagation,
    node,
    id,
  )
