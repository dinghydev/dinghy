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

export const AwsCloudwatchMetricAlarmInputSchema = TfMetaSchema.extend({
  alarm_name: resolvableValue(z.string()),
  actions_enabled: resolvableValue(z.boolean().optional()),
  alarm_actions: resolvableValue(z.string().array().optional()),
  alarm_description: resolvableValue(z.string().optional()),
  comparison_operator: resolvableValue(z.string().optional()),
  datapoints_to_alarm: resolvableValue(z.number().optional()),
  dimensions: resolvableValue(z.record(z.string(), z.string()).optional()),
  evaluate_low_sample_count_percentiles: resolvableValue(z.string().optional()),
  evaluation_criteria: resolvableValue(
    z.object({
      promql_criteria: z.object({
        pending_period: z.number().optional(),
        query: z.string(),
        recovery_period: z.number().optional(),
      }),
    }).optional(),
  ),
  evaluation_interval: resolvableValue(z.number().optional()),
  evaluation_periods: resolvableValue(z.number().optional()),
  extended_statistic: resolvableValue(z.string().optional()),
  insufficient_data_actions: resolvableValue(z.string().array().optional()),
  metric_name: resolvableValue(z.string().optional()),
  metric_query: resolvableValue(
    z.object({
      account_id: z.string().optional(),
      expression: z.string().optional(),
      id: z.string(),
      label: z.string().optional(),
      period: z.number().optional(),
      return_data: z.boolean().optional(),
      metric: z.object({
        dimensions: z.record(z.string(), z.string()).optional(),
        metric_name: z.string(),
        namespace: z.string().optional(),
        period: z.number(),
        stat: z.string(),
        unit: z.string().optional(),
      }).optional(),
    }).array().optional(),
  ),
  namespace: resolvableValue(z.string().optional()),
  ok_actions: resolvableValue(z.string().array().optional()),
  period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  statistic: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  threshold: resolvableValue(z.number().optional()),
  threshold_metric_id: resolvableValue(z.string().optional()),
  treat_missing_data: resolvableValue(z.string().optional()),
  unit: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchMetricAlarmOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCloudwatchMetricAlarmImportSchema = z.object({
  alarm_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCloudwatchMetricAlarmInputProps =
  & z.input<typeof AwsCloudwatchMetricAlarmInputSchema>
  & z.input<typeof AwsCloudwatchMetricAlarmImportSchema>
  & NodeProps

export type AwsCloudwatchMetricAlarmOutputProps =
  & z.output<typeof AwsCloudwatchMetricAlarmOutputSchema>
  & z.output<typeof AwsCloudwatchMetricAlarmInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_metric_alarm

export function AwsCloudwatchMetricAlarm(
  props: Partial<AwsCloudwatchMetricAlarmInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_metric_alarm'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchMetricAlarmInputSchema}
      _outputSchema={AwsCloudwatchMetricAlarmOutputSchema}
      _importSchema={AwsCloudwatchMetricAlarmImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchMetricAlarm = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchMetricAlarmOutputProps>(
    AwsCloudwatchMetricAlarm,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchMetricAlarms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchMetricAlarmOutputProps>(
    AwsCloudwatchMetricAlarm,
    idFilter,
    baseNode,
    optional,
  )
