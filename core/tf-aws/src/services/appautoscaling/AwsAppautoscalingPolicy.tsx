import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appautoscaling_policy

export const InputSchema = z.object({
  resource_id: resolvableValue(z.string()),
  scalable_dimension: resolvableValue(z.string()),
  service_namespace: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  predictive_scaling_policy_configuration: resolvableValue(
    z.object({
      max_capacity_breach_behavior: z.string().optional(),
      max_capacity_buffer: z.number().optional(),
      mode: z.string().optional(),
      scheduling_buffer_time: z.number().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  step_scaling_policy_configuration: resolvableValue(
    z.object({
      adjustment_type: z.string().optional(),
      cooldown: z.number().optional(),
      metric_aggregation_type: z.string().optional(),
      min_adjustment_magnitude: z.number().optional(),
    }).optional(),
  ),
  target_tracking_scaling_policy_configuration: resolvableValue(
    z.object({
      disable_scale_in: z.boolean().optional(),
      scale_in_cooldown: z.number().optional(),
      scale_out_cooldown: z.number().optional(),
      target_value: z.number(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  alarm_arns: z.string().array().optional(),
  arn: z.string().optional(),
  name: z.string().optional(),
  policy_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppautoscalingPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appautoscaling_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppautoscalingPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppautoscalingPolicy, node, id)

export const useAwsAppautoscalingPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppautoscalingPolicy, node, id)
