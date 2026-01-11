import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { APPLICATION_LOAD_BALANCER } from '@dinghy/diagrams/entitiesAwsNetworkContentDelivery'

export const InputSchema = z.object({
  vpc_id: resolvableValue(z.string()),
  access_logs: resolvableValue(
    z.object({
      bucket: z.string(),
      enabled: z.boolean().optional(),
      prefix: z.string().optional(),
    }).optional(),
  ),
  client_keep_alive: resolvableValue(z.number().optional()),
  connection_logs: resolvableValue(
    z.object({
      bucket: z.string(),
      enabled: z.boolean().optional(),
      prefix: z.string().optional(),
    }).optional(),
  ),
  customer_owned_ipv4_pool: resolvableValue(z.string().optional()),
  desync_mitigation_mode: resolvableValue(z.string().optional()),
  dns_record_client_routing_policy: resolvableValue(z.string().optional()),
  drop_invalid_header_fields: resolvableValue(z.boolean().optional()),
  enable_cross_zone_load_balancing: resolvableValue(z.boolean().optional()),
  enable_deletion_protection: resolvableValue(z.boolean().optional()),
  enable_http2: resolvableValue(z.boolean().optional()),
  enable_tls_version_and_cipher_suite_headers: resolvableValue(
    z.boolean().optional(),
  ),
  enable_waf_fail_open: resolvableValue(z.boolean().optional()),
  enable_xff_client_port: resolvableValue(z.boolean().optional()),
  enable_zonal_shift: resolvableValue(z.boolean().optional()),
  enforce_security_group_inbound_rules_on_private_link_traffic: resolvableValue(
    z.string().optional(),
  ),
  health_check_logs: resolvableValue(
    z.object({
      bucket: z.string(),
      enabled: z.boolean().optional(),
      prefix: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  idle_timeout: resolvableValue(z.number().optional()),
  internal: resolvableValue(z.boolean().optional()),
  ip_address_type: resolvableValue(z.string().optional()),
  ipam_pools: resolvableValue(
    z.object({
      ipv4_ipam_pool_id: z.string(),
    }).optional(),
  ),
  load_balancer_type: resolvableValue(z.string().optional()),
  minimum_load_balancer_capacity: resolvableValue(
    z.object({
      capacity_units: z.number(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  preserve_host_header: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  secondary_ips_auto_assigned_per_subnet: resolvableValue(
    z.number().optional(),
  ),
  security_groups: resolvableValue(z.string().array().optional()),
  subnet_mapping: resolvableValue(
    z.object({
      allocation_id: z.string().optional(),
      ipv6_address: z.string().optional(),
      outpost_id: z.string(),
      private_ipv4_address: z.string().optional(),
      subnet_id: z.string(),
    }).array().optional(),
  ),
  subnets: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  xff_header_processing_mode: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  arn_suffix: z.string().optional(),
  dns_name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  zone_id: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lb

export function AwsLb(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
      _style={extendStyle(props, APPLICATION_LOAD_BALANCER)}
    />
  )
}

export const useAwsLb = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsLb, idFilter, baseNode, optional)

export const useAwsLbs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsLb, idFilter, baseNode, optional)
