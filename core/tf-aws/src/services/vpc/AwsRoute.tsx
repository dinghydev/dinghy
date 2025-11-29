import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route

export const InputSchema = z.object({
  route_table_id: resolvableValue(z.string()),
  carrier_gateway_id: resolvableValue(z.string().optional()),
  core_network_arn: resolvableValue(z.string().optional()),
  destination_cidr_block: resolvableValue(z.string().optional()),
  destination_ipv6_cidr_block: resolvableValue(z.string().optional()),
  destination_prefix_list_id: resolvableValue(z.string().optional()),
  egress_only_gateway_id: resolvableValue(z.string().optional()),
  gateway_id: resolvableValue(z.string().optional()),
  local_gateway_id: resolvableValue(z.string().optional()),
  nat_gateway_id: resolvableValue(z.string().optional()),
  network_interface_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_id: resolvableValue(z.string().optional()),
  vpc_endpoint_id: resolvableValue(z.string().optional()),
  vpc_peering_connection_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  instance_id: z.string().optional(),
  instance_owner_id: z.string().optional(),
  origin: z.string().optional(),
  state: z.string().optional(),
})

export const ImportSchema = z.object({
  route_table_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  destination_cidr_block: resolvableValue(z.string().optional()),
  destination_ipv6_cidr_block: resolvableValue(z.string().optional()),
  destination_prefix_list_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsRoute = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRoute, node, id)

export const useAwsRoutes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRoute, node, id)
