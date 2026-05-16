import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2TransitGatewayRouteTablePropagationsInputSchema =
  TfMetaSchema.extend({
    transit_gateway_route_table_id: resolvableValue(z.string()),
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const DataAwsEc2TransitGatewayRouteTablePropagationsOutputSchema = z
  .object({
    id: z.string().optional(),
    ids: z.string().array().optional(),
  })

export type DataAwsEc2TransitGatewayRouteTablePropagationsInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayRouteTablePropagationsInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayRouteTablePropagationsOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayRouteTablePropagationsOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayRouteTablePropagationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_route_table_propagations

export function DataAwsEc2TransitGatewayRouteTablePropagations(
  props: Partial<DataAwsEc2TransitGatewayRouteTablePropagationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route_table_propagations'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayRouteTablePropagationsInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayRouteTablePropagationsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayRouteTablePropagationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayRouteTablePropagationsOutputProps>(
    DataAwsEc2TransitGatewayRouteTablePropagations,
    idFilter,
    baseNode,
    optional,
  )
