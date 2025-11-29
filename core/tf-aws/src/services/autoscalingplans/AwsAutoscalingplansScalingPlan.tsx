import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscalingplans_scaling_plan

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  application_source: resolvableValue(z.object({
    cloudformation_stack_arn: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  scaling_instruction: resolvableValue(
    z.object({
      disable_dynamic_scaling: z.boolean().optional(),
      max_capacity: z.number(),
      min_capacity: z.number(),
      predictive_scaling_max_capacity_behavior: z.string().optional(),
      predictive_scaling_max_capacity_buffer: z.number().optional(),
      predictive_scaling_mode: z.string().optional(),
      resource_id: z.string(),
      scalable_dimension: z.string(),
      scaling_policy_update_behavior: z.string().optional(),
      scheduled_action_buffer_time: z.number().optional(),
      service_namespace: z.string(),
    }).array(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  scaling_plan_version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAutoscalingplansScalingPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscalingplans_scaling_plan'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingplansScalingPlan = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAutoscalingplansScalingPlan, node, id)

export const useAwsAutoscalingplansScalingPlans = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAutoscalingplansScalingPlan, node, id)
