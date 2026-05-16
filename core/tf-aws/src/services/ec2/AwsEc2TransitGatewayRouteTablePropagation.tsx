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

export const AwsEc2TransitGatewayRouteTablePropagationInputSchema = TfMetaSchema
  .extend({
    transit_gateway_attachment_id: resolvableValue(z.string()),
    transit_gateway_route_table_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsEc2TransitGatewayRouteTablePropagationOutputSchema = z.object({
  id: z.string().optional(),
  resource_id: z.string().optional(),
  resource_type: z.string().optional(),
})

export type AwsEc2TransitGatewayRouteTablePropagationInputProps =
  & z.input<typeof AwsEc2TransitGatewayRouteTablePropagationInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayRouteTablePropagationOutputProps =
  & z.output<typeof AwsEc2TransitGatewayRouteTablePropagationOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayRouteTablePropagationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_route_table_propagation

export function AwsEc2TransitGatewayRouteTablePropagation(
  props: Partial<AwsEc2TransitGatewayRouteTablePropagationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route_table_propagation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayRouteTablePropagationInputSchema}
      _outputSchema={AwsEc2TransitGatewayRouteTablePropagationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayRouteTablePropagation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayRouteTablePropagationOutputProps>(
    AwsEc2TransitGatewayRouteTablePropagation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayRouteTablePropagations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayRouteTablePropagationOutputProps>(
    AwsEc2TransitGatewayRouteTablePropagation,
    idFilter,
    baseNode,
    optional,
  )
