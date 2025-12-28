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
  instance_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  auto_recovery_supported: z.boolean().optional(),
  bandwidth_weightings: z.set(z.string()).optional(),
  bare_metal: z.boolean().optional(),
  boot_modes: z.set(z.string()).optional(),
  burstable_performance_supported: z.boolean().optional(),
  current_generation: z.boolean().optional(),
  dedicated_hosts_supported: z.boolean().optional(),
  default_cores: z.number().optional(),
  default_network_card_index: z.number().optional(),
  default_threads_per_core: z.number().optional(),
  default_vcpus: z.number().optional(),
  ebs_encryption_support: z.string().optional(),
  ebs_nvme_support: z.string().optional(),
  ebs_optimized_support: z.string().optional(),
  ebs_performance_baseline_bandwidth: z.number().optional(),
  ebs_performance_baseline_iops: z.number().optional(),
  ebs_performance_baseline_throughput: z.number().optional(),
  ebs_performance_maximum_bandwidth: z.number().optional(),
  ebs_performance_maximum_iops: z.number().optional(),
  ebs_performance_maximum_throughput: z.number().optional(),
  efa_maximum_interfaces: z.number().optional(),
  efa_supported: z.boolean().optional(),
  ena_srd_supported: z.boolean().optional(),
  ena_support: z.string().optional(),
  encryption_in_transit_supported: z.boolean().optional(),
  fpgas: z.set(z.object({
    count: z.number(),
    manufacturer: z.string(),
    memory_size: z.number(),
    name: z.string(),
  })).optional(),
  free_tier_eligible: z.boolean().optional(),
  gpus: z.set(z.object({
    count: z.number(),
    manufacturer: z.string(),
    memory_size: z.number(),
    name: z.string(),
  })).optional(),
  hibernation_supported: z.boolean().optional(),
  hypervisor: z.string().optional(),
  inference_accelerators: z.set(z.object({
    count: z.number(),
    manufacturer: z.string(),
    memory_size: z.number(),
    name: z.string(),
  })).optional(),
  instance_disks: z.set(z.object({
    count: z.number(),
    size: z.number(),
    type: z.string(),
  })).optional(),
  instance_storage_supported: z.boolean().optional(),
  ipv6_supported: z.boolean().optional(),
  maximum_ipv4_addresses_per_interface: z.number().optional(),
  maximum_ipv6_addresses_per_interface: z.number().optional(),
  maximum_network_cards: z.number().optional(),
  maximum_network_interfaces: z.number().optional(),
  media_accelerators: z.set(z.object({
    count: z.number(),
    manufacturer: z.string(),
    memory_size: z.number(),
    name: z.string(),
  })).optional(),
  memory_size: z.number().optional(),
  network_cards: z.set(z.object({
    baseline_bandwidth: z.number(),
    index: z.number(),
    maximum_interfaces: z.number(),
    peak_bandwidth: z.number(),
    performance: z.string(),
  })).optional(),
  network_performance: z.string().optional(),
  neuron_devices: z.set(z.object({
    core_count: z.number(),
    core_version: z.number(),
    count: z.number(),
    memory_size: z.number(),
    name: z.string(),
  })).optional(),
  nitro_enclaves_support: z.string().optional(),
  nitro_tpm_support: z.string().optional(),
  nitro_tpm_supported_versions: z.set(z.string()).optional(),
  phc_support: z.string().optional(),
  supported_architectures: z.string().array().optional(),
  supported_cpu_features: z.set(z.string()).optional(),
  supported_placement_strategies: z.string().array().optional(),
  supported_root_device_types: z.string().array().optional(),
  supported_usages_classes: z.string().array().optional(),
  supported_virtualization_types: z.string().array().optional(),
  sustained_clock_speed: z.number().optional(),
  total_fpga_memory: z.number().optional(),
  total_gpu_memory: z.number().optional(),
  total_inference_memory: z.number().optional(),
  total_instance_storage: z.number().optional(),
  total_media_memory: z.number().optional(),
  total_neuron_device_memory: z.number().optional(),
  valid_cores: z.number().array().optional(),
  valid_threads_per_core: z.number().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_instance_type

export function DataAwsEc2InstanceType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_instance_type'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2InstanceType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEc2InstanceType,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2InstanceTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEc2InstanceType,
    idFilter,
    baseNode,
    optional,
  )
