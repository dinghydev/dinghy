import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2TransitGatewayRouteTableRoutesInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array(),
    ),
    transit_gateway_route_table_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsEc2TransitGatewayRouteTableRoutesOutputSchema = z.object({
  id: z.string().optional(),
  routes: z.object({
    destination_cidr_block: z.string(),
    prefix_list_id: z.string(),
    state: z.string(),
    transit_gateway_route_table_announcement_id: z.string(),
    type: z.string(),
  }).array().optional(),
})

export type DataAwsEc2TransitGatewayRouteTableRoutesInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayRouteTableRoutesInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayRouteTableRoutesOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayRouteTableRoutesOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayRouteTableRoutesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_route_table_routes

export function DataAwsEc2TransitGatewayRouteTableRoutes(
  props: Partial<DataAwsEc2TransitGatewayRouteTableRoutesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route_table_routes'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayRouteTableRoutesInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayRouteTableRoutesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayRouteTableRoutess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayRouteTableRoutesOutputProps>(
    DataAwsEc2TransitGatewayRouteTableRoutes,
    idFilter,
    baseNode,
    optional,
  )
