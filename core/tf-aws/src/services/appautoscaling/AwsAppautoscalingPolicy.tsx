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

export const AwsAppautoscalingPolicyInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  scalable_dimension: resolvableValue(z.string()),
  service_namespace: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  policy_type: resolvableValue(z.string().optional()),
  predictive_scaling_policy_configuration: resolvableValue(
    z.object({
      max_capacity_breach_behavior: z.string().optional(),
      max_capacity_buffer: z.number().optional(),
      mode: z.string().optional(),
      scheduling_buffer_time: z.number().optional(),
      metric_specification: z.object({
        target_value: z.string(),
        customized_capacity_metric_specification: z.object({
          metric_data_query: z.object({
            expression: z.string().optional(),
            id: z.string(),
            label: z.string().optional(),
            return_data: z.boolean().optional(),
            metric_stat: z.object({
              stat: z.string(),
              unit: z.string().optional(),
              metric: z.object({
                metric_name: z.string().optional(),
                namespace: z.string().optional(),
                dimension: z.object({
                  name: z.string(),
                  value: z.string(),
                }).array().optional(),
              }),
            }).optional(),
          }).array(),
        }).optional(),
        customized_load_metric_specification: z.object({
          metric_data_query: z.object({
            expression: z.string().optional(),
            id: z.string(),
            label: z.string().optional(),
            return_data: z.boolean().optional(),
            metric_stat: z.object({
              stat: z.string(),
              unit: z.string().optional(),
              metric: z.object({
                metric_name: z.string().optional(),
                namespace: z.string().optional(),
                dimension: z.object({
                  name: z.string(),
                  value: z.string(),
                }).array().optional(),
              }),
            }).optional(),
          }).array(),
        }).optional(),
        customized_scaling_metric_specification: z.object({
          metric_data_query: z.object({
            expression: z.string().optional(),
            id: z.string(),
            label: z.string().optional(),
            return_data: z.boolean().optional(),
            metric_stat: z.object({
              stat: z.string(),
              unit: z.string().optional(),
              metric: z.object({
                metric_name: z.string().optional(),
                namespace: z.string().optional(),
                dimension: z.object({
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
      }).array(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  step_scaling_policy_configuration: resolvableValue(
    z.object({
      adjustment_type: z.string().optional(),
      cooldown: z.number().optional(),
      metric_aggregation_type: z.string().optional(),
      min_adjustment_magnitude: z.number().optional(),
      step_adjustment: z.object({
        metric_interval_lower_bound: z.string().optional(),
        metric_interval_upper_bound: z.string().optional(),
        scaling_adjustment: z.number(),
      }).array().optional(),
    }).optional(),
  ),
  target_tracking_scaling_policy_configuration: resolvableValue(
    z.object({
      disable_scale_in: z.boolean().optional(),
      scale_in_cooldown: z.number().optional(),
      scale_out_cooldown: z.number().optional(),
      target_value: z.number(),
      customized_metric_specification: z.object({
        metric_name: z.string().optional(),
        namespace: z.string().optional(),
        statistic: z.string().optional(),
        unit: z.string().optional(),
        dimensions: z.object({
          name: z.string(),
          value: z.string(),
        }).array().optional(),
        metrics: z.object({
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
        }).array().optional(),
      }).optional(),
      predefined_metric_specification: z.object({
        predefined_metric_type: z.string(),
        resource_label: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
})

export const AwsAppautoscalingPolicyOutputSchema = z.object({
  alarm_arns: z.string().array().optional(),
  arn: z.string().optional(),
  name: z.string().optional(),
  policy_type: z.string().optional(),
})

export const AwsAppautoscalingPolicyImportSchema = z.object({
  name: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  scalable_dimension: resolvableValue(z.string()),
  service_namespace: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsAppautoscalingPolicyInputProps =
  & z.input<typeof AwsAppautoscalingPolicyInputSchema>
  & z.input<typeof AwsAppautoscalingPolicyImportSchema>
  & NodeProps

export type AwsAppautoscalingPolicyOutputProps =
  & z.output<typeof AwsAppautoscalingPolicyOutputSchema>
  & z.output<typeof AwsAppautoscalingPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appautoscaling_policy

export function AwsAppautoscalingPolicy(
  props: Partial<AwsAppautoscalingPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appautoscaling_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppautoscalingPolicyInputSchema}
      _outputSchema={AwsAppautoscalingPolicyOutputSchema}
      _importSchema={AwsAppautoscalingPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsAppautoscalingPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppautoscalingPolicyOutputProps>(
    AwsAppautoscalingPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppautoscalingPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppautoscalingPolicyOutputProps>(
    AwsAppautoscalingPolicy,
    idFilter,
    baseNode,
    optional,
  )
