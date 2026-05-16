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

export const DataAwsEc2LocalGatewayRouteTableInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  local_gateway_id: resolvableValue(z.string().optional()),
  local_gateway_route_table_id: resolvableValue(z.string().optional()),
  outpost_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEc2LocalGatewayRouteTableOutputSchema = z.object({})

export type DataAwsEc2LocalGatewayRouteTableInputProps =
  & z.input<typeof DataAwsEc2LocalGatewayRouteTableInputSchema>
  & NodeProps

export type DataAwsEc2LocalGatewayRouteTableOutputProps =
  & z.output<typeof DataAwsEc2LocalGatewayRouteTableOutputSchema>
  & z.output<typeof DataAwsEc2LocalGatewayRouteTableInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_local_gateway_route_table

export function DataAwsEc2LocalGatewayRouteTable(
  props: Partial<DataAwsEc2LocalGatewayRouteTableInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_route_table'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2LocalGatewayRouteTableInputSchema}
      _outputSchema={DataAwsEc2LocalGatewayRouteTableOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2LocalGatewayRouteTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2LocalGatewayRouteTableOutputProps>(
    DataAwsEc2LocalGatewayRouteTable,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2LocalGatewayRouteTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2LocalGatewayRouteTableOutputProps>(
    DataAwsEc2LocalGatewayRouteTable,
    idFilter,
    baseNode,
    optional,
  )
