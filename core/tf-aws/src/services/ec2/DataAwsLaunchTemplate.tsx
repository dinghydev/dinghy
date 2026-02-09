import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLaunchTemplate } from './AwsLaunchTemplate.tsx'

export const InputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
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
  arn: z.string().optional(),
  block_device_mappings: z.object({
    device_name: z.string(),
    ebs: z.object({
      delete_on_termination: z.string(),
      encrypted: z.string(),
      iops: z.number(),
      kms_key_id: z.string(),
      snapshot_id: z.string(),
      throughput: z.number(),
      volume_initialization_rate: z.number(),
      volume_size: z.number(),
      volume_type: z.string(),
    }).array(),
    no_device: z.string(),
    virtual_name: z.string(),
  }).array().optional(),
  capacity_reservation_specification: z.object({
    capacity_reservation_preference: z.string(),
    capacity_reservation_target: z.object({
      capacity_reservation_id: z.string(),
      capacity_reservation_resource_group_arn: z.string(),
    }).array(),
  }).array().optional(),
  cpu_options: z.object({
    amd_sev_snp: z.string(),
    core_count: z.number(),
    threads_per_core: z.number(),
  }).array().optional(),
  credit_specification: z.object({
    cpu_credits: z.string(),
  }).array().optional(),
  default_version: z.number().optional(),
  description: z.string().optional(),
  disable_api_stop: z.boolean().optional(),
  disable_api_termination: z.boolean().optional(),
  ebs_optimized: z.string().optional(),
  enclave_options: z.object({
    enabled: z.boolean(),
  }).array().optional(),
  hibernation_options: z.object({
    configured: z.boolean(),
  }).array().optional(),
  iam_instance_profile: z.object({
    arn: z.string(),
    name: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  image_id: z.string().optional(),
  instance_initiated_shutdown_behavior: z.string().optional(),
  instance_market_options: z.object({
    market_type: z.string(),
    spot_options: z.object({
      block_duration_minutes: z.number(),
      instance_interruption_behavior: z.string(),
      max_price: z.string(),
      spot_instance_type: z.string(),
      valid_until: z.string(),
    }).array(),
  }).array().optional(),
  instance_requirements: z.object({
    accelerator_count: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
    accelerator_manufacturers: z.set(z.string()),
    accelerator_names: z.set(z.string()),
    accelerator_total_memory_mib: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
    accelerator_types: z.set(z.string()),
    allowed_instance_types: z.set(z.string()),
    bare_metal: z.string(),
    baseline_ebs_bandwidth_mbps: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
    burstable_performance: z.string(),
    cpu_manufacturers: z.set(z.string()),
    excluded_instance_types: z.set(z.string()),
    instance_generations: z.set(z.string()),
    local_storage: z.string(),
    local_storage_types: z.set(z.string()),
    max_spot_price_as_percentage_of_optimal_on_demand_price: z.number(),
    memory_gib_per_vcpu: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
    memory_mib: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
    network_bandwidth_gbps: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
    network_interface_count: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
    on_demand_max_price_percentage_over_lowest_price: z.number(),
    require_hibernate_support: z.boolean(),
    spot_max_price_percentage_over_lowest_price: z.number(),
    total_local_storage_gb: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
    vcpu_count: z.object({
      max: z.number(),
      min: z.number(),
    }).array(),
  }).array().optional(),
  instance_type: z.string().optional(),
  kernel_id: z.string().optional(),
  key_name: z.string().optional(),
  latest_version: z.number().optional(),
  license_specification: z.object({
    license_configuration_arn: z.string(),
  }).array().optional(),
  maintenance_options: z.object({
    auto_recovery: z.string(),
  }).array().optional(),
  metadata_options: z.object({
    http_endpoint: z.string(),
    http_protocol_ipv6: z.string(),
    http_put_response_hop_limit: z.number(),
    http_tokens: z.string(),
    instance_metadata_tags: z.string(),
  }).array().optional(),
  monitoring: z.object({
    enabled: z.boolean(),
  }).array().optional(),
  network_interfaces: z.object({
    associate_carrier_ip_address: z.string(),
    associate_public_ip_address: z.string(),
    connection_tracking_specification: z.object({
      tcp_established_timeout: z.number(),
      udp_stream_timeout: z.number(),
      udp_timeout: z.number(),
    }).array(),
    delete_on_termination: z.string(),
    description: z.string(),
    device_index: z.number(),
    interface_type: z.string(),
    ipv4_address_count: z.number(),
    ipv4_addresses: z.set(z.string()),
    ipv4_prefix_count: z.number(),
    ipv4_prefixes: z.set(z.string()),
    ipv6_address_count: z.number(),
    ipv6_addresses: z.set(z.string()),
    ipv6_prefix_count: z.number(),
    ipv6_prefixes: z.set(z.string()),
    network_card_index: z.number(),
    network_interface_id: z.string(),
    primary_ipv6: z.string(),
    private_ip_address: z.string(),
    security_groups: z.set(z.string()),
    subnet_id: z.string(),
  }).array().optional(),
  placement: z.object({
    affinity: z.string(),
    availability_zone: z.string(),
    group_id: z.string(),
    group_name: z.string(),
    host_id: z.string(),
    host_resource_group_arn: z.string(),
    partition_number: z.number(),
    spread_domain: z.string(),
    tenancy: z.string(),
  }).array().optional(),
  private_dns_name_options: z.object({
    enable_resource_name_dns_a_record: z.boolean(),
    enable_resource_name_dns_aaaa_record: z.boolean(),
    hostname_type: z.string(),
  }).array().optional(),
  ram_disk_id: z.string().optional(),
  security_group_names: z.set(z.string()).optional(),
  tag_specifications: z.object({
    resource_type: z.string(),
    tags: z.record(z.string(), z.string()),
  }).array().optional(),
  user_data: z.string().optional(),
  vpc_security_group_ids: z.set(z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/launch_template

export function DataAwsLaunchTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLaunchTemplate
      _type='aws_launch_template'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLaunchTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsLaunchTemplate, idFilter, baseNode, optional)

export const useDataAwsLaunchTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsLaunchTemplate,
    idFilter,
    baseNode,
    optional,
  )
