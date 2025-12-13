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
  launch_template_config: resolvableValue(
    z.object({
      launch_template_specification: z.object({
        launch_template_id: z.string().optional(),
        launch_template_name: z.string().optional(),
        version: z.string(),
      }).optional(),
      override: z.object({
        availability_zone: z.string().optional(),
        instance_type: z.string().optional(),
        max_price: z.string().optional(),
        priority: z.number().optional(),
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
          max_spot_price_as_percentage_of_optimal_on_demand_price: z.number()
            .optional(),
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
      }).array().optional(),
    }).array(),
  ),
  target_capacity_specification: resolvableValue(z.object({
    default_target_capacity_type: z.string(),
    on_demand_target_capacity: z.number().optional(),
    spot_target_capacity: z.number().optional(),
    target_capacity_unit_type: z.string().optional(),
    total_target_capacity: z.number(),
  })),
  context: resolvableValue(z.string().optional()),
  excess_capacity_termination_policy: resolvableValue(z.string().optional()),
  on_demand_options: resolvableValue(
    z.object({
      allocation_strategy: z.string().optional(),
      max_total_price: z.string().optional(),
      min_target_capacity: z.number().optional(),
      single_availability_zone: z.boolean().optional(),
      single_instance_type: z.boolean().optional(),
      capacity_reservation_options: z.object({
        usage_strategy: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  replace_unhealthy_instances: resolvableValue(z.boolean().optional()),
  spot_options: resolvableValue(
    z.object({
      allocation_strategy: z.string().optional(),
      instance_interruption_behavior: z.string().optional(),
      instance_pools_to_use_count: z.number().optional(),
      max_total_price: z.string().optional(),
      min_target_capacity: z.number().optional(),
      single_availability_zone: z.boolean().optional(),
      single_instance_type: z.boolean().optional(),
      maintenance_strategies: z.object({
        capacity_rebalance: z.object({
          replacement_strategy: z.string().optional(),
          termination_delay: z.number().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  terminate_instances: resolvableValue(z.boolean().optional()),
  terminate_instances_with_expiration: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
  valid_from: resolvableValue(z.string().optional()),
  valid_until: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  fleet_instance_set: z.object({
    instance_ids: z.string().array().optional(),
    instance_type: z.string().optional(),
    lifecycle: z.string().optional(),
    platform: z.string().optional(),
  }).array().optional().optional(),
  fleet_state: z.string().optional(),
  fulfilled_capacity: z.number().optional(),
  fulfilled_on_demand_capacity: z.number().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_fleet

export function AwsEc2Fleet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_fleet'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2Fleet = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsEc2Fleet, idFilter, baseNode)

export const useAwsEc2Fleets = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsEc2Fleet, idFilter, baseNode)
