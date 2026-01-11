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

export const InputSchema = z.object({
  customer_gateway_id: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  enable_acceleration: resolvableValue(z.boolean().optional()),
  local_ipv4_network_cidr: resolvableValue(z.string().optional()),
  local_ipv6_network_cidr: resolvableValue(z.string().optional()),
  outside_ip_address_type: resolvableValue(z.string().optional()),
  preshared_key_storage: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  remote_ipv4_network_cidr: resolvableValue(z.string().optional()),
  remote_ipv6_network_cidr: resolvableValue(z.string().optional()),
  static_routes_only: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  transit_gateway_id: resolvableValue(z.string().optional()),
  transport_transit_gateway_attachment_id: resolvableValue(
    z.string().optional(),
  ),
  tunnel_bandwidth: resolvableValue(z.string().optional()),
  tunnel_inside_ip_version: resolvableValue(z.string().optional()),
  tunnel1_dpd_timeout_action: resolvableValue(z.string().optional()),
  tunnel1_dpd_timeout_seconds: resolvableValue(z.number().optional()),
  tunnel1_enable_tunnel_lifecycle_control: resolvableValue(
    z.boolean().optional(),
  ),
  tunnel1_ike_versions: resolvableValue(z.string().array().optional()),
  tunnel1_inside_cidr: resolvableValue(z.string().optional()),
  tunnel1_inside_ipv6_cidr: resolvableValue(z.string().optional()),
  tunnel1_log_options: resolvableValue(
    z.object({
      cloudwatch_log_options: z.object({
        bgp_log_enabled: z.boolean().optional(),
        bgp_log_group_arn: z.string().optional(),
        bgp_log_output_format: z.string().optional(),
        log_enabled: z.boolean().optional(),
        log_group_arn: z.string().optional(),
        log_output_format: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  tunnel1_phase1_dh_group_numbers: resolvableValue(
    z.number().array().optional(),
  ),
  tunnel1_phase1_encryption_algorithms: resolvableValue(
    z.string().array().optional(),
  ),
  tunnel1_phase1_integrity_algorithms: resolvableValue(
    z.string().array().optional(),
  ),
  tunnel1_phase1_lifetime_seconds: resolvableValue(z.number().optional()),
  tunnel1_phase2_dh_group_numbers: resolvableValue(
    z.number().array().optional(),
  ),
  tunnel1_phase2_encryption_algorithms: resolvableValue(
    z.string().array().optional(),
  ),
  tunnel1_phase2_integrity_algorithms: resolvableValue(
    z.string().array().optional(),
  ),
  tunnel1_phase2_lifetime_seconds: resolvableValue(z.number().optional()),
  tunnel1_preshared_key: resolvableValue(z.string().optional()),
  tunnel1_rekey_fuzz_percentage: resolvableValue(z.number().optional()),
  tunnel1_rekey_margin_time_seconds: resolvableValue(z.number().optional()),
  tunnel1_replay_window_size: resolvableValue(z.number().optional()),
  tunnel1_startup_action: resolvableValue(z.string().optional()),
  tunnel2_dpd_timeout_action: resolvableValue(z.string().optional()),
  tunnel2_dpd_timeout_seconds: resolvableValue(z.number().optional()),
  tunnel2_enable_tunnel_lifecycle_control: resolvableValue(
    z.boolean().optional(),
  ),
  tunnel2_ike_versions: resolvableValue(z.string().array().optional()),
  tunnel2_inside_cidr: resolvableValue(z.string().optional()),
  tunnel2_inside_ipv6_cidr: resolvableValue(z.string().optional()),
  tunnel2_log_options: resolvableValue(
    z.object({
      cloudwatch_log_options: z.object({
        bgp_log_enabled: z.boolean().optional(),
        bgp_log_group_arn: z.string().optional(),
        bgp_log_output_format: z.string().optional(),
        log_enabled: z.boolean().optional(),
        log_group_arn: z.string().optional(),
        log_output_format: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  tunnel2_phase1_dh_group_numbers: resolvableValue(
    z.number().array().optional(),
  ),
  tunnel2_phase1_encryption_algorithms: resolvableValue(
    z.string().array().optional(),
  ),
  tunnel2_phase1_integrity_algorithms: resolvableValue(
    z.string().array().optional(),
  ),
  tunnel2_phase1_lifetime_seconds: resolvableValue(z.number().optional()),
  tunnel2_phase2_dh_group_numbers: resolvableValue(
    z.number().array().optional(),
  ),
  tunnel2_phase2_encryption_algorithms: resolvableValue(
    z.string().array().optional(),
  ),
  tunnel2_phase2_integrity_algorithms: resolvableValue(
    z.string().array().optional(),
  ),
  tunnel2_phase2_lifetime_seconds: resolvableValue(z.number().optional()),
  tunnel2_preshared_key: resolvableValue(z.string().optional()),
  tunnel2_rekey_fuzz_percentage: resolvableValue(z.number().optional()),
  tunnel2_rekey_margin_time_seconds: resolvableValue(z.number().optional()),
  tunnel2_replay_window_size: resolvableValue(z.number().optional()),
  tunnel2_startup_action: resolvableValue(z.string().optional()),
  vpn_concentrator_id: resolvableValue(z.string().optional()),
  vpn_gateway_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  core_network_arn: z.string().optional(),
  core_network_attachment_arn: z.string().optional(),
  customer_gateway_configuration: z.string().optional(),
  customer_gateway_id: z.string().optional(),
  id: z.string().optional(),
  preshared_key_arn: z.string().optional(),
  routes: z.set(z.object({
    destination_cidr_block: z.string(),
    source: z.string(),
    state: z.string(),
  })).optional(),
  static_routes_only: z.boolean().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  transit_gateway_attachment_id: z.string().optional(),
  tunnel1_address: z.string().optional(),
  tunnel1_bgp_asn: z.string().optional(),
  tunnel1_bgp_holdtime: z.number().optional(),
  tunnel1_cgw_inside_address: z.string().optional(),
  tunnel1_preshared_key: z.string().optional(),
  tunnel1_vgw_inside_address: z.string().optional(),
  tunnel2_address: z.string().optional(),
  tunnel2_bgp_asn: z.string().optional(),
  tunnel2_bgp_holdtime: z.number().optional(),
  tunnel2_cgw_inside_address: z.string().optional(),
  tunnel2_preshared_key: z.string().optional(),
  tunnel2_vgw_inside_address: z.string().optional(),
  vgw_telemetry: z.set(z.object({
    accepted_route_count: z.number(),
    certificate_arn: z.string(),
    last_status_change: z.string(),
    outside_ip_address: z.string(),
    status: z.string(),
    status_message: z.string(),
  })).optional(),
  vpn_gateway_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpn_connection

export function AwsVpnConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpn_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpnConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsVpnConnection, idFilter, baseNode, optional)

export const useAwsVpnConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsVpnConnection, idFilter, baseNode, optional)
