import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpnConnection } from './AwsVpnConnection.tsx'

export const InputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  vpn_connection_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  category: z.string().optional(),
  core_network_arn: z.string().optional(),
  core_network_attachment_arn: z.string().optional(),
  customer_gateway_configuration: z.string().optional(),
  customer_gateway_id: z.string().optional(),
  gateway_association_state: z.string().optional(),
  pre_shared_key_arn: z.string().optional(),
  routes: z.object({
    destination_cidr_block: z.string(),
    source: z.string(),
    state: z.string(),
  }).array().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transit_gateway_id: z.string().optional(),
  type: z.string().optional(),
  vgw_telemetries: z.object({
    accepted_route_count: z.number(),
    last_status_change: z.string(),
    outside_ip_address: z.string(),
    status: z.string(),
    status_message: z.string(),
  }).array().optional(),
  vpn_concentrator_id: z.string().optional(),
  vpn_gateway_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/vpn_connection

export function DataAwsVpnConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpnConnection
      _type='aws_vpn_connection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpnConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsVpnConnection, idFilter, baseNode, optional)

export const useDataAwsVpnConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsVpnConnection, idFilter, baseNode, optional)
