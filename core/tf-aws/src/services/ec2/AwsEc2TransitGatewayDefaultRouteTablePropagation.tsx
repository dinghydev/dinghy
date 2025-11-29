import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_default_route_table_propagation

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  original_default_route_table_id: resolvableValue(z.string()),
  transit_gateway_id: resolvableValue(z.string()),
  transit_gateway_route_table_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
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

export function AwsEc2TransitGatewayDefaultRouteTablePropagation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_default_route_table_propagation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayDefaultRouteTablePropagation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsEc2TransitGatewayDefaultRouteTablePropagation,
    node,
    id,
  )

export const useAwsEc2TransitGatewayDefaultRouteTablePropagations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsEc2TransitGatewayDefaultRouteTablePropagation,
    node,
    id,
  )
