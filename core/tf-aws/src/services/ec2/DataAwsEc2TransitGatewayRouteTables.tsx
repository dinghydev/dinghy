import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2TransitGatewayRouteTablesInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const DataAwsEc2TransitGatewayRouteTablesOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsEc2TransitGatewayRouteTablesInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayRouteTablesInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayRouteTablesOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayRouteTablesOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayRouteTablesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_route_tables

export function DataAwsEc2TransitGatewayRouteTables(
  props: Partial<DataAwsEc2TransitGatewayRouteTablesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route_tables'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayRouteTablesInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayRouteTablesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayRouteTabless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayRouteTablesOutputProps>(
    DataAwsEc2TransitGatewayRouteTables,
    idFilter,
    baseNode,
    optional,
  )
