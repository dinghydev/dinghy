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
  autoscaling_group_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  adjustment_type: resolvableValue(z.string().optional()),
  cooldown: resolvableValue(z.number().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  estimated_instance_warmup: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  metric_aggregation_type: resolvableValue(z.string().optional()),
  min_adjustment_magnitude: resolvableValue(z.number().optional()),
  policy_type: resolvableValue(z.string().optional()),
  predictive_scaling_configuration: resolvableValue(
    z.object({
      max_capacity_breach_behavior: z.string().optional(),
      max_capacity_buffer: z.string().optional(),
      mode: z.string().optional(),
      scheduling_buffer_time: z.string().optional(),
      metric_specification: z.object({
        target_value: z.number(),
        customized_capacity_metric_specification: z.object({
          metric_data_queries: z.object({
            expression: z.string().optional(),
            id: z.string(),
            label: z.string().optional(),
            return_data: z.boolean().optional(),
            metric_stat: z.object({
              stat: z.string(),
              unit: z.string().optional(),
              metric: z.object({
                metric_name: z.string(),
                namespace: z.string(),
                dimensions: z.object({
                  name: z.string(),
                  value: z.string(),
                }).array().optional(),
              }),
            }).optional(),
          }).array(),
        }).optional(),
        customized_load_metric_specification: z.object({
          metric_data_queries: z.object({
            expression: z.string().optional(),
            id: z.string(),
            label: z.string().optional(),
            return_data: z.boolean().optional(),
            metric_stat: z.object({
              stat: z.string(),
              unit: z.string().optional(),
              metric: z.object({
                metric_name: z.string(),
                namespace: z.string(),
                dimensions: z.object({
                  name: z.string(),
                  value: z.string(),
                }).array().optional(),
              }),
            }).optional(),
          }).array(),
        }).optional(),
        customized_scaling_metric_specification: z.object({
          metric_data_queries: z.object({
            expression: z.string().optional(),
            id: z.string(),
            label: z.string().optional(),
            return_data: z.boolean().optional(),
            metric_stat: z.object({
              stat: z.string(),
              unit: z.string().optional(),
              metric: z.object({
                metric_name: z.string(),
                namespace: z.string(),
                dimensions: z.object({
                  name: z.string(),
                  value: z.string(),
                }).array().optional(),
              }),
            }).optional(),
          }).array(),
        }).optional(),
        predefined_load_metric_specification: z.object({
          predefined_metric_type: z.string(),
          resource_label: z.string().optional(),
        }).optional(),
        predefined_metric_pair_specification: z.object({
          predefined_metric_type: z.string(),
          resource_label: z.string().optional(),
        }).optional(),
        predefined_scaling_metric_specification: z.object({
          predefined_metric_type: z.string(),
          resource_label: z.string().optional(),
        }).optional(),
      }),
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
      customized_metric_specification: z.object({
        metric_name: z.string().optional(),
        namespace: z.string().optional(),
        period: z.number().optional(),
        statistic: z.string().optional(),
        unit: z.string().optional(),
        metric_dimension: z.object({
          name: z.string(),
          value: z.string(),
        }).array().optional(),
        metrics: z.object({
          expression: z.string().optional(),
          id: z.string(),
          label: z.string().optional(),
          return_data: z.boolean().optional(),
          metric_stat: z.object({
            period: z.number().optional(),
            stat: z.string(),
            unit: z.string().optional(),
            metric: z.object({
              metric_name: z.string(),
              namespace: z.string(),
              dimensions: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }),
          }).optional(),
        }).array().optional(),
      }).optional(),
      predefined_metric_specification: z.object({
        predefined_metric_type: z.string(),
        resource_label: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/autoscaling_policy

export function AwsAutoscalingPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsAutoscalingPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsAutoscalingPolicy, idFilter, baseNode, optional)

export const useAwsAutoscalingPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsAutoscalingPolicy, idFilter, baseNode, optional)
