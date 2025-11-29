import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/default_route_table

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDefaultRouteTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_default_route_table'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDefaultRouteTable = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDefaultRouteTable, node, id)

export const useAwsDefaultRouteTables = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDefaultRouteTable, node, id)
