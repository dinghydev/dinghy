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

export const AwsEc2TransitGatewayRouteTableInputSchema = TfMetaSchema.extend({
  transit_gateway_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEc2TransitGatewayRouteTableOutputSchema = z.object({
  arn: z.string().optional(),
  default_association_route_table: z.boolean().optional(),
  default_propagation_route_table: z.boolean().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TransitGatewayRouteTableInputProps =
  & z.input<typeof AwsEc2TransitGatewayRouteTableInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayRouteTableOutputProps =
  & z.output<typeof AwsEc2TransitGatewayRouteTableOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayRouteTableInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_route_table

export function AwsEc2TransitGatewayRouteTable(
  props: Partial<AwsEc2TransitGatewayRouteTableInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route_table'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayRouteTableInputSchema}
      _outputSchema={AwsEc2TransitGatewayRouteTableOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayRouteTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayRouteTableOutputProps>(
    AwsEc2TransitGatewayRouteTable,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayRouteTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayRouteTableOutputProps>(
    AwsEc2TransitGatewayRouteTable,
    idFilter,
    baseNode,
    optional,
  )
