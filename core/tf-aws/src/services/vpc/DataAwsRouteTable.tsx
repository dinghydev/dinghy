import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRouteTable } from './AwsRouteTable.tsx'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  gateway_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  route_table_id: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  associations: z.object({
    gateway_id: z.string(),
    main: z.boolean(),
    route_table_association_id: z.string(),
    route_table_id: z.string(),
    subnet_id: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  routes: z.object({
    carrier_gateway_id: z.string(),
    cidr_block: z.string(),
    core_network_arn: z.string(),
    destination_prefix_list_id: z.string(),
    egress_only_gateway_id: z.string(),
    gateway_id: z.string(),
    instance_id: z.string(),
    ipv6_cidr_block: z.string(),
    local_gateway_id: z.string(),
    nat_gateway_id: z.string(),
    network_interface_id: z.string(),
    transit_gateway_id: z.string(),
    vpc_endpoint_id: z.string(),
    vpc_peering_connection_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route_table

export function DataAwsRouteTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRouteTable
      _type='aws_route_table'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRouteTable = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsRouteTable, idFilter, baseNode)

export const useDataAwsRouteTables = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsRouteTable, idFilter, baseNode)
