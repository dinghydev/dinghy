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
  client_token: resolvableValue(z.string()),
  iam_fleet_role: resolvableValue(z.string()),
  target_capacity: resolvableValue(z.number()),
  allocation_strategy: resolvableValue(z.string().optional()),
  context: resolvableValue(z.string().optional()),
  excess_capacity_termination_policy: resolvableValue(z.string().optional()),
  fleet_type: resolvableValue(z.string().optional()),
  instance_interruption_behaviour: resolvableValue(z.string().optional()),
  instance_pools_to_use_count: resolvableValue(z.number().optional()),
  launch_specification: resolvableValue(
    z.object({
      ami: z.string(),
      associate_public_ip_address: z.boolean().optional(),
      availability_zone: z.string().optional(),
      ebs_optimized: z.boolean().optional(),
      iam_instance_profile: z.string().optional(),
      iam_instance_profile_arn: z.string().optional(),
      instance_type: z.string(),
      key_name: z.string().optional(),
      monitoring: z.boolean().optional(),
      placement_group: z.string().optional(),
      placement_tenancy: z.string().optional(),
      spot_price: z.string().optional(),
      subnet_id: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
      user_data: z.string().optional(),
      vpc_security_group_ids: z.string().array().optional(),
      weighted_capacity: z.string().optional(),
      ebs_block_device: z.object({
        delete_on_termination: z.boolean().optional(),
        device_name: z.string(),
        encrypted: z.boolean().optional(),
        iops: z.number().optional(),
        kms_key_id: z.string().optional(),
        snapshot_id: z.string().optional(),
        throughput: z.number().optional(),
        volume_size: z.number().optional(),
        volume_type: z.string().optional(),
      }).array().optional(),
      ephemeral_block_device: z.object({
        device_name: z.string(),
        virtual_name: z.string(),
      }).array().optional(),
      root_block_device: z.object({
        delete_on_termination: z.boolean().optional(),
        encrypted: z.boolean().optional(),
        iops: z.number().optional(),
        kms_key_id: z.string().optional(),
        throughput: z.number().optional(),
        volume_size: z.number().optional(),
        volume_type: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  launch_template_config: resolvableValue(
    z.object({
      launch_template_specification: z.object({
        id: z.string().optional(),
        name: z.string().optional(),
        version: z.string().optional(),
      }),
      overrides: z.object({
        availability_zone: z.string().optional(),
        instance_type: z.string().optional(),
        priority: z.number().optional(),
        spot_price: z.string().optional(),
        subnet_id: z.string().optional(),
        weighted_capacity: z.number().optional(),
        instance_requirements: z.object({
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
          on_demand_max_price_percentage_over_lowest_price: z.number()
            .optional(),
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
            min: z.number().optional(),
          }).optional(),
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
            min: z.number().optional(),
          }).optional(),
        }).optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  load_balancers: resolvableValue(z.string().array().optional()),
  on_demand_allocation_strategy: resolvableValue(z.string().optional()),
  on_demand_max_total_price: resolvableValue(z.string().optional()),
  on_demand_target_capacity: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  replace_unhealthy_instances: resolvableValue(z.boolean().optional()),
  spot_maintenance_strategies: resolvableValue(
    z.object({
      capacity_rebalance: z.object({
        replacement_strategy: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  spot_price: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_capacity_unit_type: resolvableValue(z.string().optional()),
  target_group_arns: resolvableValue(z.string().array().optional()),
  terminate_instances_on_delete: resolvableValue(z.string().optional()),
  terminate_instances_with_expiration: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  valid_from: resolvableValue(z.string().optional()),
  valid_until: resolvableValue(z.string().optional()),
  wait_for_fulfillment: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  spot_request_state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/spot_fleet_request

export function AwsSpotFleetRequest(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_spot_fleet_request'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSpotFleetRequest = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsSpotFleetRequest, idFilter, baseNode, optional)

export const useAwsSpotFleetRequests = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsSpotFleetRequest, idFilter, baseNode, optional)
