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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  block_device_mappings: resolvableValue(
    z.object({
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
    }).array(),
  ),
  capacity_reservation_specification: resolvableValue(
    z.object({
      capacity_reservation_preference: z.string(),
      capacity_reservation_target: z.object({
        capacity_reservation_id: z.string(),
        capacity_reservation_resource_group_arn: z.string(),
      }).array(),
    }).array(),
  ),
  cpu_options: resolvableValue(
    z.object({
      amd_sev_snp: z.string(),
      core_count: z.number(),
      threads_per_core: z.number(),
    }).array(),
  ),
  credit_specification: resolvableValue(
    z.object({
      cpu_credits: z.string(),
    }).array(),
  ),
  default_version: resolvableValue(z.number()),
  description: resolvableValue(z.string()),
  disable_api_stop: resolvableValue(z.boolean()),
  disable_api_termination: resolvableValue(z.boolean()),
  ebs_optimized: resolvableValue(z.string()),
  enclave_options: resolvableValue(
    z.object({
      enabled: z.boolean(),
    }).array(),
  ),
  hibernation_options: resolvableValue(
    z.object({
      configured: z.boolean(),
    }).array(),
  ),
  iam_instance_profile: resolvableValue(
    z.object({
      arn: z.string(),
      name: z.string(),
    }).array(),
  ),
  image_id: resolvableValue(z.string()),
  instance_initiated_shutdown_behavior: resolvableValue(z.string()),
  instance_market_options: resolvableValue(
    z.object({
      market_type: z.string(),
      spot_options: z.object({
        block_duration_minutes: z.number(),
        instance_interruption_behavior: z.string(),
        max_price: z.string(),
        spot_instance_type: z.string(),
        valid_until: z.string(),
      }).array(),
    }).array(),
  ),
  instance_requirements: resolvableValue(
    z.object({
      accelerator_count: z.object({
        max: z.number(),
        min: z.number(),
      }).array(),
      accelerator_manufacturers: z.string().array(),
      accelerator_names: z.string().array(),
      accelerator_total_memory_mib: z.object({
        max: z.number(),
        min: z.number(),
      }).array(),
      accelerator_types: z.string().array(),
      allowed_instance_types: z.string().array(),
      bare_metal: z.string(),
      baseline_ebs_bandwidth_mbps: z.object({
        max: z.number(),
        min: z.number(),
      }).array(),
      burstable_performance: z.string(),
      cpu_manufacturers: z.string().array(),
      excluded_instance_types: z.string().array(),
      instance_generations: z.string().array(),
      local_storage: z.string(),
      local_storage_types: z.string().array(),
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
    }).array(),
  ),
  instance_type: resolvableValue(z.string()),
  kernel_id: resolvableValue(z.string()),
  key_name: resolvableValue(z.string()),
  latest_version: resolvableValue(z.number()),
  license_specification: resolvableValue(
    z.object({
      license_configuration_arn: z.string(),
    }).array(),
  ),
  maintenance_options: resolvableValue(
    z.object({
      auto_recovery: z.string(),
    }).array(),
  ),
  metadata_options: resolvableValue(
    z.object({
      http_endpoint: z.string(),
      http_protocol_ipv6: z.string(),
      http_put_response_hop_limit: z.number(),
      http_tokens: z.string(),
      instance_metadata_tags: z.string(),
    }).array(),
  ),
  monitoring: resolvableValue(
    z.object({
      enabled: z.boolean(),
    }).array(),
  ),
  network_interfaces: resolvableValue(
    z.object({
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
      ipv4_addresses: z.string().array(),
      ipv4_prefix_count: z.number(),
      ipv4_prefixes: z.string().array(),
      ipv6_address_count: z.number(),
      ipv6_addresses: z.string().array(),
      ipv6_prefix_count: z.number(),
      ipv6_prefixes: z.string().array(),
      network_card_index: z.number(),
      network_interface_id: z.string(),
      primary_ipv6: z.string(),
      private_ip_address: z.string(),
      security_groups: z.string().array(),
      subnet_id: z.string(),
    }).array(),
  ),
  placement: resolvableValue(
    z.object({
      affinity: z.string(),
      availability_zone: z.string(),
      group_id: z.string(),
      group_name: z.string(),
      host_id: z.string(),
      host_resource_group_arn: z.string(),
      partition_number: z.number(),
      spread_domain: z.string(),
      tenancy: z.string(),
    }).array(),
  ),
  private_dns_name_options: resolvableValue(
    z.object({
      enable_resource_name_dns_a_record: z.boolean(),
      enable_resource_name_dns_aaaa_record: z.boolean(),
      hostname_type: z.string(),
    }).array(),
  ),
  ram_disk_id: resolvableValue(z.string()),
  security_group_names: resolvableValue(z.string().array()),
  tag_specifications: resolvableValue(
    z.object({
      resource_type: z.string(),
      tags: z.record(z.string(), z.string()),
    }).array(),
  ),
  user_data: resolvableValue(z.string()),
  vpc_security_group_ids: resolvableValue(z.string().array()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
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
