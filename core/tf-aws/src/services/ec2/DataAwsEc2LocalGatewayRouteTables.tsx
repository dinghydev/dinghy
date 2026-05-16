import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2LocalGatewayRouteTablesInputSchema = TfMetaSchema.extend(
  {
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
  },
)

export const DataAwsEc2LocalGatewayRouteTablesOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsEc2LocalGatewayRouteTablesInputProps =
  & z.input<typeof DataAwsEc2LocalGatewayRouteTablesInputSchema>
  & NodeProps

export type DataAwsEc2LocalGatewayRouteTablesOutputProps =
  & z.output<typeof DataAwsEc2LocalGatewayRouteTablesOutputSchema>
  & z.output<typeof DataAwsEc2LocalGatewayRouteTablesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_local_gateway_route_tables

export function DataAwsEc2LocalGatewayRouteTables(
  props: Partial<DataAwsEc2LocalGatewayRouteTablesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_route_tables'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2LocalGatewayRouteTablesInputSchema}
      _outputSchema={DataAwsEc2LocalGatewayRouteTablesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2LocalGatewayRouteTabless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2LocalGatewayRouteTablesOutputProps>(
    DataAwsEc2LocalGatewayRouteTables,
    idFilter,
    baseNode,
    optional,
  )
