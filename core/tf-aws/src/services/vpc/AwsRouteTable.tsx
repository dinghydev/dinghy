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

export const AwsRouteTableInputSchema = TfMetaSchema.extend({
  vpc_id: resolvableValue(z.string()),
  propagating_vgws: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  route: resolvableValue(
    z.object({
      carrier_gateway_id: z.string(),
      cidr_block: z.string(),
      core_network_arn: z.string(),
      destination_prefix_list_id: z.string(),
      egress_only_gateway_id: z.string(),
      gateway_id: z.string(),
      ipv6_cidr_block: z.string(),
      local_gateway_id: z.string(),
      nat_gateway_id: z.string(),
      network_interface_id: z.string(),
      transit_gateway_id: z.string(),
      vpc_endpoint_id: z.string(),
      vpc_peering_connection_id: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRouteTableOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsRouteTableImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsRouteTableInputProps =
  & z.input<typeof AwsRouteTableInputSchema>
  & z.input<typeof AwsRouteTableImportSchema>
  & NodeProps

export type AwsRouteTableOutputProps =
  & z.output<typeof AwsRouteTableOutputSchema>
  & z.output<typeof AwsRouteTableInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route_table

export function AwsRouteTable(props: Partial<AwsRouteTableInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route_table'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRouteTableInputSchema}
      _outputSchema={AwsRouteTableOutputSchema}
      _importSchema={AwsRouteTableImportSchema}
      {...props}
    />
  )
}

export const useAwsRouteTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRouteTableOutputProps>(
    AwsRouteTable,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRouteTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRouteTableOutputProps>(
    AwsRouteTable,
    idFilter,
    baseNode,
    optional,
  )
