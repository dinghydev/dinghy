import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute } from './AwsRoute.tsx'

export const InputSchema = z.object({
  route_table_id: resolvableValue(z.string()),
  carrier_gateway_id: resolvableValue(z.string().optional()),
  core_network_arn: resolvableValue(z.string().optional()),
  destination_cidr_block: resolvableValue(z.string().optional()),
  destination_ipv6_cidr_block: resolvableValue(z.string().optional()),
  destination_prefix_list_id: resolvableValue(z.string().optional()),
  egress_only_gateway_id: resolvableValue(z.string().optional()),
  gateway_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  instance_id: resolvableValue(z.string().optional()),
  local_gateway_id: resolvableValue(z.string().optional()),
  nat_gateway_id: resolvableValue(z.string().optional()),
  network_interface_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_id: resolvableValue(z.string().optional()),
  vpc_peering_connection_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route

export function DataAwsRoute(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRoute
      _type='aws_route'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsRoute, idFilter, baseNode)

export const useDataAwsRoutes = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsRoute, idFilter, baseNode)
