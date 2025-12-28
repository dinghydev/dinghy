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
  arn: resolvableValue(z.string()),
  max_size: resolvableValue(z.number()),
  min_size: resolvableValue(z.number()),
  predicted_capacity: resolvableValue(z.number()),
  warm_pool_size: resolvableValue(z.number()),
  availability_zone_distribution: resolvableValue(
    z.object({
      capacity_distribution_strategy: z.string().optional(),
    }).optional(),
  ),
  availability_zones: resolvableValue(z.string().array().optional()),
  capacity_rebalance: resolvableValue(z.boolean().optional()),
  capacity_reservation_specification: resolvableValue(
    z.object({
      capacity_reservation_preference: z.string().optional(),
      capacity_reservation_target: z.object({
        capacity_reservation_ids: z.string().array().optional(),
        capacity_reservation_resource_group_arns: z.string().array().optional(),
      }).optional(),
    }).optional(),
  ),
  context: resolvableValue(z.string().optional()),
  default_cooldown: resolvableValue(z.number().optional()),
  default_instance_warmup: resolvableValue(z.number().optional()),
  desired_capacity: resolvableValue(z.number().optional()),
  desired_capacity_type: resolvableValue(z.string().optional()),
  enabled_metrics: resolvableValue(z.string().array().optional()),
  force_delete: resolvableValue(z.boolean().optional()),
  force_delete_warm_pool: resolvableValue(z.boolean().optional()),
  health_check_grace_period: resolvableValue(z.number().optional()),
  health_check_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  ignore_failed_scaling_activities: resolvableValue(z.boolean().optional()),
  initial_lifecycle_hook: resolvableValue(
    z.object({
      default_result: z.string().optional(),
      heartbeat_timeout: z.number().optional(),
      lifecycle_transition: z.string(),
      name: z.string(),
      notification_metadata: z.string().optional(),
      notification_target_arn: z.string().optional(),
      role_arn: z.string().optional(),
    }).array().optional(),
  ),
  instance_maintenance_policy: resolvableValue(
    z.object({
      max_healthy_percentage: z.number(),
      min_healthy_percentage: z.number(),
    }).optional(),
  ),
  instance_refresh: resolvableValue(
    z.object({
      strategy: z.string(),
      triggers: z.string().array().optional(),
      preferences: z.object({
        auto_rollback: z.boolean().optional(),
        checkpoint_delay: z.string().optional(),
        checkpoint_percentages: z.number().array().optional(),
        instance_warmup: z.string().optional(),
        max_healthy_percentage: z.number().optional(),
        min_healthy_percentage: z.number().optional(),
        scale_in_protected_instances: z.string().optional(),
        skip_matching: z.boolean().optional(),
        standby_instances: z.string().optional(),
        alarm_specification: z.object({
          alarms: z.string().array().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  launch_configuration: resolvableValue(z.string().optional()),
  launch_template: resolvableValue(
    z.object({
      id: z.string().optional(),
      name: z.string().optional(),
      version: z.string().optional(),
    }).optional(),
  ),
  load_balancers: resolvableValue(z.string().array().optional()),
  max_instance_lifetime: resolvableValue(z.number().optional()),
  metrics_granularity: resolvableValue(z.string().optional()),
  min_elb_capacity: resolvableValue(z.number().optional()),
  mixed_instances_policy: resolvableValue(
    z.object({
      instances_distribution: z.object({
        on_demand_allocation_strategy: z.string().optional(),
        on_demand_base_capacity: z.number().optional(),
        on_demand_percentage_above_base_capacity: z.number().optional(),
        spot_allocation_strategy: z.string().optional(),
        spot_instance_pools: z.number().optional(),
        spot_max_price: z.string().optional(),
      }).optional(),
      launch_template: z.object({
        launch_template_specification: z.object({
          launch_template_id: z.string().optional(),
          launch_template_name: z.string().optional(),
          version: z.string().optional(),
        }),
        override: z.object({
          instance_type: z.string().optional(),
          weighted_capacity: z.string().optional(),
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
          launch_template_specification: z.object({
            launch_template_id: z.string().optional(),
            launch_template_name: z.string().optional(),
            version: z.string().optional(),
          }).optional(),
        }).array().optional(),
      }),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  placement_group: resolvableValue(z.string().optional()),
  protect_from_scale_in: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  service_linked_role_arn: resolvableValue(z.string().optional()),
  suspended_processes: resolvableValue(z.string().array().optional()),
  tag: resolvableValue(
    z.object({
      key: z.string(),
      propagate_at_launch: z.boolean(),
      value: z.string(),
    }).array().optional(),
  ),
  target_group_arns: resolvableValue(z.string().array().optional()),
  termination_policies: resolvableValue(z.string().array().optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  traffic_source: resolvableValue(
    z.object({
      identifier: z.string(),
      type: z.string().optional(),
    }).array().optional(),
  ),
  vpc_zone_identifier: resolvableValue(z.string().array().optional()),
  wait_for_capacity_timeout: resolvableValue(z.string().optional()),
  wait_for_elb_capacity: resolvableValue(z.number().optional()),
  warm_pool: resolvableValue(
    z.object({
      max_group_prepared_capacity: z.number().optional(),
      min_size: z.number().optional(),
      pool_state: z.string().optional(),
      instance_reuse_policy: z.object({
        reuse_on_scale_in: z.boolean().optional(),
      }).optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscaling_group

export function AwsAutoscalingGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsAutoscalingGroup, idFilter, baseNode, optional)

export const useAwsAutoscalingGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsAutoscalingGroup, idFilter, baseNode, optional)
