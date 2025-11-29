import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_fleet

export const InputSchema = z.object({
  context: resolvableValue(z.string().optional()),
  excess_capacity_termination_policy: resolvableValue(z.string().optional()),
  launch_template_config: resolvableValue(z.object({
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
    }).optional(),
  })),
  on_demand_options: resolvableValue(
    z.object({
      allocation_strategy: z.string().optional(),
      max_total_price: z.string().optional(),
      min_target_capacity: z.number().optional(),
      single_availability_zone: z.boolean().optional(),
      single_instance_type: z.boolean().optional(),
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
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_capacity_specification: resolvableValue(z.object({
    default_target_capacity_type: z.string(),
    on_demand_target_capacity: z.number().optional(),
    spot_target_capacity: z.number().optional(),
    target_capacity_unit_type: z.string().optional(),
    total_target_capacity: z.number(),
  })),
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
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  fleet_instance_set: z.object({
    instance_ids: z.string().array().optional(),
    instance_type: z.string().optional(),
    lifecycle: z.string().optional(),
    platform: z.string().optional(),
  }).optional().optional(),
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

export const useAwsEc2Fleet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2Fleet, node, id)

export const useAwsEc2Fleets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2Fleet, node, id)
