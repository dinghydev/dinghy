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

export const InputSchema = TfMetaSchema.extend({
  application_source: resolvableValue(z.object({
    cloudformation_stack_arn: z.string().optional(),
    tag_filter: z.object({
      key: z.string(),
      values: z.string().array().optional(),
    }).array().optional(),
  })),
  name: resolvableValue(z.string()),
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
      customized_load_metric_specification: z.object({
        dimensions: z.record(z.string(), z.string()).optional(),
        metric_name: z.string(),
        namespace: z.string(),
        statistic: z.string(),
        unit: z.string().optional(),
      }).optional(),
      predefined_load_metric_specification: z.object({
        predefined_load_metric_type: z.string(),
        resource_label: z.string().optional(),
      }).optional(),
      target_tracking_configuration: z.object({
        disable_scale_in: z.boolean().optional(),
        estimated_instance_warmup: z.number().optional(),
        scale_in_cooldown: z.number().optional(),
        scale_out_cooldown: z.number().optional(),
        target_value: z.number(),
        customized_scaling_metric_specification: z.object({
          dimensions: z.record(z.string(), z.string()).optional(),
          metric_name: z.string(),
          namespace: z.string(),
          statistic: z.string(),
          unit: z.string().optional(),
        }).optional(),
        predefined_scaling_metric_specification: z.object({
          predefined_scaling_metric_type: z.string(),
          resource_label: z.string().optional(),
        }).optional(),
      }).array(),
    }).array(),
  ),
  region: resolvableValue(z.string().optional()),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/autoscalingplans_scaling_plan

export function AwsAutoscalingplansScalingPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsAutoscalingplansScalingPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsAutoscalingplansScalingPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAutoscalingplansScalingPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsAutoscalingplansScalingPlan,
    idFilter,
    baseNode,
    optional,
  )
