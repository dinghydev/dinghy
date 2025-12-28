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

export const InputSchema = z.object({
  access_logs: resolvableValue(
    z.object({
      bucket: z.string(),
      enabled: z.boolean(),
      prefix: z.string(),
    }).array(),
  ),
  arn_suffix: resolvableValue(z.string()),
  client_keep_alive: resolvableValue(z.number()),
  connection_logs: resolvableValue(
    z.object({
      bucket: z.string(),
      enabled: z.boolean(),
      prefix: z.string(),
    }).array(),
  ),
  customer_owned_ipv4_pool: resolvableValue(z.string()),
  desync_mitigation_mode: resolvableValue(z.string()),
  dns_name: resolvableValue(z.string()),
  dns_record_client_routing_policy: resolvableValue(z.string()),
  drop_invalid_header_fields: resolvableValue(z.boolean()),
  enable_cross_zone_load_balancing: resolvableValue(z.boolean()),
  enable_deletion_protection: resolvableValue(z.boolean()),
  enable_http2: resolvableValue(z.boolean()),
  enable_tls_version_and_cipher_suite_headers: resolvableValue(z.boolean()),
  enable_waf_fail_open: resolvableValue(z.boolean()),
  enable_xff_client_port: resolvableValue(z.boolean()),
  enable_zonal_shift: resolvableValue(z.boolean()),
  enforce_security_group_inbound_rules_on_private_link_traffic: resolvableValue(
    z.string(),
  ),
  idle_timeout: resolvableValue(z.number()),
  internal: resolvableValue(z.boolean()),
  ip_address_type: resolvableValue(z.string()),
  ipam_pools: resolvableValue(
    z.object({
      ipv4_ipam_pool_id: z.string(),
    }).array(),
  ),
  load_balancer_type: resolvableValue(z.string()),
  preserve_host_header: resolvableValue(z.boolean()),
  secondary_ips_auto_assigned_per_subnet: resolvableValue(z.number()),
  security_groups: resolvableValue(z.string().array()),
  subnet_mapping: resolvableValue(
    z.object({
      allocation_id: z.string(),
      ipv6_address: z.string(),
      outpost_id: z.string(),
      private_ipv4_address: z.string(),
      subnet_id: z.string(),
    }).array(),
  ),
  subnets: resolvableValue(z.string().array()),
  vpc_id: resolvableValue(z.string()),
  xff_header_processing_mode: resolvableValue(z.string()),
  zone_id: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lb

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
