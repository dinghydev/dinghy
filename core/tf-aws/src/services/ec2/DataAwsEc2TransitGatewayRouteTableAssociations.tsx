import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2TransitGatewayRouteTableAssociationsInputSchema =
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

export const DataAwsEc2TransitGatewayRouteTableAssociationsOutputSchema = z
  .object({
    id: z.string().optional(),
    ids: z.string().array().optional(),
  })

export type DataAwsEc2TransitGatewayRouteTableAssociationsInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayRouteTableAssociationsInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayRouteTableAssociationsOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayRouteTableAssociationsOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayRouteTableAssociationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_route_table_associations

export function DataAwsEc2TransitGatewayRouteTableAssociations(
  props: Partial<DataAwsEc2TransitGatewayRouteTableAssociationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route_table_associations'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayRouteTableAssociationsInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayRouteTableAssociationsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayRouteTableAssociationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayRouteTableAssociationsOutputProps>(
    DataAwsEc2TransitGatewayRouteTableAssociations,
    idFilter,
    baseNode,
    optional,
  )
