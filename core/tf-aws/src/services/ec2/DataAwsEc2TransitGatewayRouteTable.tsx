import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2TransitGatewayRouteTable } from './AwsEc2TransitGatewayRouteTable.tsx'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  default_association_route_table: z.boolean().optional(),
  default_propagation_route_table: z.boolean().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transit_gateway_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_transit_gateway_route_table

export function DataAwsEc2TransitGatewayRouteTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEc2TransitGatewayRouteTable
      _type='aws_ec2_transit_gateway_route_table'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGatewayRouteTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEc2TransitGatewayRouteTable,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGatewayRouteTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEc2TransitGatewayRouteTable,
    idFilter,
    baseNode,
    optional,
  )
