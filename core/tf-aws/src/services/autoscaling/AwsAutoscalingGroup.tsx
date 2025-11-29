import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscaling_group

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
        }).optional(),
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
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAutoscalingGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsAutoscalingGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAutoscalingGroup, node, id)

export const useAwsAutoscalingGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAutoscalingGroup, node, id)
