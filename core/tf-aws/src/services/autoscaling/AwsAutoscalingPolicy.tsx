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

export const AwsAutoscalingPolicyInputSchema = TfMetaSchema.extend({
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
})

export const AwsAutoscalingPolicyOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsAutoscalingPolicyImportSchema = z.object({
  autoscaling_group_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsAutoscalingPolicyInputProps =
  & z.input<typeof AwsAutoscalingPolicyInputSchema>
  & z.input<typeof AwsAutoscalingPolicyImportSchema>
  & NodeProps

export type AwsAutoscalingPolicyOutputProps =
  & z.output<typeof AwsAutoscalingPolicyOutputSchema>
  & z.output<typeof AwsAutoscalingPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/autoscaling_policy

export function AwsAutoscalingPolicy(
  props: Partial<AwsAutoscalingPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAutoscalingPolicyInputSchema}
      _outputSchema={AwsAutoscalingPolicyOutputSchema}
      _importSchema={AwsAutoscalingPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAutoscalingPolicyOutputProps>(
    AwsAutoscalingPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAutoscalingPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAutoscalingPolicyOutputProps>(
    AwsAutoscalingPolicy,
    idFilter,
    baseNode,
    optional,
  )
