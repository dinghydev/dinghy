import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAutoscalingGroup } from './AwsAutoscalingGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/autoscaling_group

export const InputSchema = z.object({
  default_cooldown: resolvableValue(z.number()),
  new_instances_protected_from_scale_in: resolvableValue(z.boolean()),
  traffic_source: resolvableValue(
    z.object({
      identifier: z.string(),
      type: z.string(),
    }).array(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zones: z.string().array().optional(),
  desired_capacity: z.number().optional(),
  desired_capacity_type: z.string().optional(),
  enabled_metrics: z.string().array().optional(),
  health_check_grace_period: z.number().optional(),
  health_check_type: z.string().optional(),
  id: z.string().optional(),
  instance_maintenance_policy: z.object({
    max_healthy_percentage: z.number(),
    min_healthy_percentage: z.number(),
  }).array().optional(),
  launch_configuration: z.string().optional(),
  launch_template: z.object({
    id: z.string(),
    name: z.string(),
    version: z.string(),
  }).array().optional(),
  load_balancers: z.string().array().optional(),
  max_instance_lifetime: z.number().optional(),
  max_size: z.number().optional(),
  min_size: z.number().optional(),
  mixed_instances_policy: z.object({
    instances_distribution: z.object({
      on_demand_allocation_strategy: z.string(),
      on_demand_base_capacity: z.number(),
      on_demand_percentage_above_base_capacity: z.number(),
      spot_allocation_strategy: z.string(),
      spot_instance_pools: z.number(),
      spot_max_price: z.string(),
    }).array(),
    launch_template: z.object({
      launch_template_specification: z.object({
        launch_template_id: z.string(),
        launch_template_name: z.string(),
        version: z.string(),
      }).array(),
      override: z.object({
        instance_requirements: z.object({
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
        instance_type: z.string(),
        launch_template_specification: z.object({
          launch_template_id: z.string(),
          launch_template_name: z.string(),
          version: z.string(),
        }).array(),
        weighted_capacity: z.string(),
      }).array(),
    }).array(),
  }).array().optional(),
  name: z.string().optional(),
  placement_group: z.string().optional(),
  predicted_capacity: z.number().optional(),
  service_linked_role_arn: z.string().optional(),
  status: z.string().optional(),
  suspended_processes: z.string().array().optional(),
  tag: z.object({
    key: z.string(),
    propagate_at_launch: z.boolean(),
    value: z.string(),
  }).array().optional(),
  target_group_arns: z.string().array().optional(),
  termination_policies: z.string().array().optional(),
  vpc_zone_identifier: z.string().optional(),
  warm_pool: z.object({
    instance_reuse_policy: z.object({
      reuse_on_scale_in: z.boolean(),
    }).array(),
    max_group_prepared_capacity: z.number(),
    min_size: z.number(),
    pool_state: z.string(),
  }).array().optional(),
  warm_pool_size: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsAutoscalingGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsAutoscalingGroup
      _type='aws_autoscaling_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAutoscalingGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAutoscalingGroup, node, id)

export const useDataAwsAutoscalingGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAutoscalingGroup, node, id)
