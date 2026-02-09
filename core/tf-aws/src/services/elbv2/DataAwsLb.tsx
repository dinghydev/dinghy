import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLb } from './AwsLb.tsx'

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  access_logs: z.object({
    bucket: z.string(),
    enabled: z.boolean(),
    prefix: z.string(),
  }).array().optional(),
  arn_suffix: z.string().optional(),
  client_keep_alive: z.number().optional(),
  connection_logs: z.object({
    bucket: z.string(),
    enabled: z.boolean(),
    prefix: z.string(),
  }).array().optional(),
  customer_owned_ipv4_pool: z.string().optional(),
  desync_mitigation_mode: z.string().optional(),
  dns_name: z.string().optional(),
  dns_record_client_routing_policy: z.string().optional(),
  drop_invalid_header_fields: z.boolean().optional(),
  enable_cross_zone_load_balancing: z.boolean().optional(),
  enable_deletion_protection: z.boolean().optional(),
  enable_http2: z.boolean().optional(),
  enable_tls_version_and_cipher_suite_headers: z.boolean().optional(),
  enable_waf_fail_open: z.boolean().optional(),
  enable_xff_client_port: z.boolean().optional(),
  enable_zonal_shift: z.boolean().optional(),
  enforce_security_group_inbound_rules_on_private_link_traffic: z.string()
    .optional(),
  health_check_logs: z.object({
    bucket: z.string(),
    enabled: z.boolean(),
    prefix: z.string(),
  }).array().optional(),
  idle_timeout: z.number().optional(),
  internal: z.boolean().optional(),
  ip_address_type: z.string().optional(),
  ipam_pools: z.object({
    ipv4_ipam_pool_id: z.string(),
  }).array().optional(),
  load_balancer_type: z.string().optional(),
  preserve_host_header: z.boolean().optional(),
  secondary_ips_auto_assigned_per_subnet: z.number().optional(),
  security_groups: z.set(z.string()).optional(),
  subnet_mapping: z.set(z.object({
    allocation_id: z.string(),
    ipv6_address: z.string(),
    outpost_id: z.string(),
    private_ipv4_address: z.string(),
    subnet_id: z.string(),
  })).optional(),
  subnets: z.set(z.string()).optional(),
  vpc_id: z.string().optional(),
  xff_header_processing_mode: z.string().optional(),
  zone_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/lb

export function DataAwsLb(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLb
      _type='aws_lb'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLb = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsLb, idFilter, baseNode, optional)

export const useDataAwsLbs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsLb, idFilter, baseNode, optional)
