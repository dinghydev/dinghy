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

export const AwsDefaultRouteTableInputSchema = TfMetaSchema.extend({
  default_route_table_id: resolvableValue(z.string()),
  propagating_vgws: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  route: resolvableValue(
    z.object({
      cidr_block: z.string(),
      core_network_arn: z.string(),
      destination_prefix_list_id: z.string(),
      egress_only_gateway_id: z.string(),
      gateway_id: z.string(),
      instance_id: z.string(),
      ipv6_cidr_block: z.string(),
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
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDefaultRouteTableOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type AwsDefaultRouteTableInputProps =
  & z.input<typeof AwsDefaultRouteTableInputSchema>
  & NodeProps

export type AwsDefaultRouteTableOutputProps =
  & z.output<typeof AwsDefaultRouteTableOutputSchema>
  & z.output<typeof AwsDefaultRouteTableInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/default_route_table

export function AwsDefaultRouteTable(
  props: Partial<AwsDefaultRouteTableInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_default_route_table'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDefaultRouteTableInputSchema}
      _outputSchema={AwsDefaultRouteTableOutputSchema}
      {...props}
    />
  )
}

export const useAwsDefaultRouteTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDefaultRouteTableOutputProps>(
    AwsDefaultRouteTable,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDefaultRouteTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDefaultRouteTableOutputProps>(
    AwsDefaultRouteTable,
    idFilter,
    baseNode,
    optional,
  )
