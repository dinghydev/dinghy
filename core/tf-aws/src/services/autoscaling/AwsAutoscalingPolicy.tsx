import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscaling_policy

export const InputSchema = z.object({
  cooldown: resolvableValue(z.number().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  estimated_instance_warmup: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  metric_aggregation_type: resolvableValue(z.string().optional()),
  min_adjustment_magnitude: resolvableValue(z.number().optional()),
  predictive_scaling_configuration: resolvableValue(
    z.object({
      max_capacity_breach_behavior: z.string().optional(),
      max_capacity_buffer: z.string().optional(),
      mode: z.string().optional(),
      scheduling_buffer_time: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  scaling_adjustment: resolvableValue(z.number().optional()),
  step_adjustment: resolvableValue(
    z.object({
      metric_interval_lower_bound: z.string().optional(),
      metric_interval_upper_bound: z.string().optional(),
      scaling_adjustment: z.number(),
    }).array().optional(),
  ),
  target_tracking_configuration: resolvableValue(
    z.object({
      disable_scale_in: z.boolean().optional(),
      target_value: z.number(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  adjustment_type: z.string().optional(),
  arn: z.string().optional(),
  autoscaling_group_name: z.string().optional(),
  name: z.string().optional(),
  policy_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAutoscalingPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAutoscalingPolicy, node, id)

export const useAwsAutoscalingPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAutoscalingPolicy, node, id)
