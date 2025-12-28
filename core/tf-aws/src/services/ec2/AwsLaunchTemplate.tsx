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
  block_device_mappings: resolvableValue(
    z.object({
      device_name: z.string().optional(),
      no_device: z.string().optional(),
      virtual_name: z.string().optional(),
      ebs: z.object({
        delete_on_termination: z.string().optional(),
        encrypted: z.string().optional(),
        iops: z.number().optional(),
        kms_key_id: z.string().optional(),
        snapshot_id: z.string().optional(),
        throughput: z.number().optional(),
        volume_initialization_rate: z.number().optional(),
        volume_size: z.number().optional(),
        volume_type: z.string().optional(),
      }).optional(),
    }).array().optional(),
  ),
  capacity_reservation_specification: resolvableValue(
    z.object({
      capacity_reservation_preference: z.string().optional(),
      capacity_reservation_target: z.object({
        capacity_reservation_id: z.string().optional(),
        capacity_reservation_resource_group_arn: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  cpu_options: resolvableValue(
    z.object({
      amd_sev_snp: z.string().optional(),
      core_count: z.number().optional(),
      threads_per_core: z.number().optional(),
    }).optional(),
  ),
  credit_specification: resolvableValue(
    z.object({
      cpu_credits: z.string().optional(),
    }).optional(),
  ),
  default_version: resolvableValue(z.number().optional()),
  description: resolvableValue(z.string().optional()),
  disable_api_stop: resolvableValue(z.boolean().optional()),
  disable_api_termination: resolvableValue(z.boolean().optional()),
  ebs_optimized: resolvableValue(z.string().optional()),
  enclave_options: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  hibernation_options: resolvableValue(
    z.object({
      configured: z.boolean(),
    }).optional(),
  ),
  iam_instance_profile: resolvableValue(
    z.object({
      arn: z.string().optional(),
      name: z.string().optional(),
    }).optional(),
  ),
  image_id: resolvableValue(z.string().optional()),
  instance_initiated_shutdown_behavior: resolvableValue(z.string().optional()),
  instance_market_options: resolvableValue(
    z.object({
      market_type: z.string().optional(),
      spot_options: z.object({
        block_duration_minutes: z.number().optional(),
        instance_interruption_behavior: z.string().optional(),
        max_price: z.string().optional(),
        spot_instance_type: z.string().optional(),
        valid_until: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  instance_requirements: resolvableValue(
    z.object({
      accelerator_manufacturers: z.string().array().optional(),
      accelerator_names: z.string().array().optional(),
      accelerator_types: z.string().array().optional(),
      allowed_instance_types: z.string().array().optional(),
      bare_metal: z.string().optional(),
      burstable_performance: z.string().optional(),
      cpu_manufacturers: z.string().array().optional(),
      excluded_instance_types: z.string().array().optional(),
      instance_generations: z.string().array().optional(),
      local_storage: z.string().optional(),
      local_storage_types: z.string().array().optional(),
      max_spot_price_as_percentage_of_optimal_on_demand_price: z.number()
        .optional(),
      on_demand_max_price_percentage_over_lowest_price: z.number().optional(),
      require_hibernate_support: z.boolean().optional(),
      spot_max_price_percentage_over_lowest_price: z.number().optional(),
      accelerator_count: z.object({
        max: z.number().optional(),
        min: z.number().optional(),
      }).optional(),
      accelerator_total_memory_mib: z.object({
        max: z.number().optional(),
        min: z.number().optional(),
      }).optional(),
      baseline_ebs_bandwidth_mbps: z.object({
        max: z.number().optional(),
        min: z.number().optional(),
      }).optional(),
      memory_gib_per_vcpu: z.object({
        max: z.number().optional(),
        min: z.number().optional(),
      }).optional(),
      memory_mib: z.object({
        max: z.number().optional(),
        min: z.number(),
      }),
      network_bandwidth_gbps: z.object({
        max: z.number().optional(),
        min: z.number().optional(),
      }).optional(),
      network_interface_count: z.object({
        max: z.number().optional(),
        min: z.number().optional(),
      }).optional(),
      total_local_storage_gb: z.object({
        max: z.number().optional(),
        min: z.number().optional(),
      }).optional(),
      vcpu_count: z.object({
        max: z.number().optional(),
        min: z.number(),
      }),
    }).optional(),
  ),
  instance_type: resolvableValue(z.string().optional()),
  kernel_id: resolvableValue(z.string().optional()),
  key_name: resolvableValue(z.string().optional()),
  license_specification: resolvableValue(
    z.object({
      license_configuration_arn: z.string(),
    }).array().optional(),
  ),
  maintenance_options: resolvableValue(
    z.object({
      auto_recovery: z.string().optional(),
    }).optional(),
  ),
  metadata_options: resolvableValue(
    z.object({
      http_endpoint: z.string().optional(),
      http_protocol_ipv6: z.string().optional(),
      http_put_response_hop_limit: z.number().optional(),
      http_tokens: z.string().optional(),
      instance_metadata_tags: z.string().optional(),
    }).optional(),
  ),
  monitoring: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  network_interfaces: resolvableValue(
    z.object({
      associate_carrier_ip_address: z.string().optional(),
      associate_public_ip_address: z.string().optional(),
      delete_on_termination: z.string().optional(),
      description: z.string().optional(),
      device_index: z.number().optional(),
      interface_type: z.string().optional(),
      ipv4_address_count: z.number().optional(),
      ipv4_addresses: z.string().array().optional(),
      ipv4_prefix_count: z.number().optional(),
      ipv4_prefixes: z.string().array().optional(),
      ipv6_address_count: z.number().optional(),
      ipv6_addresses: z.string().array().optional(),
      ipv6_prefix_count: z.number().optional(),
      ipv6_prefixes: z.string().array().optional(),
      network_card_index: z.number().optional(),
      network_interface_id: z.string().optional(),
      primary_ipv6: z.string().optional(),
      private_ip_address: z.string().optional(),
      security_groups: z.string().array().optional(),
      subnet_id: z.string().optional(),
      connection_tracking_specification: z.object({
        tcp_established_timeout: z.number().optional(),
        udp_stream_timeout: z.number().optional(),
        udp_timeout: z.number().optional(),
      }).optional(),
      ena_srd_specification: z.object({
        ena_srd_enabled: z.boolean().optional(),
        ena_srd_udp_specification: z.object({
          ena_srd_udp_enabled: z.boolean().optional(),
        }).optional(),
      }).optional(),
    }).array().optional(),
  ),
  placement: resolvableValue(
    z.object({
      affinity: z.string().optional(),
      availability_zone: z.string().optional(),
      group_id: z.string().optional(),
      group_name: z.string().optional(),
      host_id: z.string().optional(),
      host_resource_group_arn: z.string().optional(),
      partition_number: z.number().optional(),
      spread_domain: z.string().optional(),
      tenancy: z.string().optional(),
    }).optional(),
  ),
  private_dns_name_options: resolvableValue(
    z.object({
      enable_resource_name_dns_a_record: z.boolean().optional(),
      enable_resource_name_dns_aaaa_record: z.boolean().optional(),
      hostname_type: z.string().optional(),
    }).optional(),
  ),
  ram_disk_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_names: resolvableValue(z.string().array().optional()),
  tag_specifications: resolvableValue(
    z.object({
      resource_type: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  update_default_version: resolvableValue(z.boolean().optional()),
  user_data: resolvableValue(z.string().optional()),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  latest_version: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/launch_template

export function AwsLaunchTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_launch_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLaunchTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsLaunchTemplate, idFilter, baseNode, optional)

export const useAwsLaunchTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsLaunchTemplate, idFilter, baseNode, optional)
