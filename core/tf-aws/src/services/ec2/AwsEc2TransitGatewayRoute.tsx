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

export const AwsEc2TransitGatewayRouteInputSchema = TfMetaSchema.extend({
  destination_cidr_block: resolvableValue(z.string()),
  transit_gateway_route_table_id: resolvableValue(z.string()),
  blackhole: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  transit_gateway_attachment_id: resolvableValue(z.string().optional()),
})

export const AwsEc2TransitGatewayRouteOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2TransitGatewayRouteInputProps =
  & z.input<typeof AwsEc2TransitGatewayRouteInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayRouteOutputProps =
  & z.output<typeof AwsEc2TransitGatewayRouteOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayRouteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_route

export function AwsEc2TransitGatewayRoute(
  props: Partial<AwsEc2TransitGatewayRouteInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayRouteInputSchema}
      _outputSchema={AwsEc2TransitGatewayRouteOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayRoute = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayRouteOutputProps>(
    AwsEc2TransitGatewayRoute,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayRoutes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayRouteOutputProps>(
    AwsEc2TransitGatewayRoute,
    idFilter,
    baseNode,
    optional,
  )
