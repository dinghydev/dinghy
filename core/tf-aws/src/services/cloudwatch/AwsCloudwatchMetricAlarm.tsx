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
  alarm_name: resolvableValue(z.string()),
  comparison_operator: resolvableValue(z.string()),
  evaluation_periods: resolvableValue(z.number()),
  actions_enabled: resolvableValue(z.boolean().optional()),
  alarm_actions: resolvableValue(z.string().array().optional()),
  alarm_description: resolvableValue(z.string().optional()),
  datapoints_to_alarm: resolvableValue(z.number().optional()),
  dimensions: resolvableValue(z.record(z.string(), z.string()).optional()),
  evaluate_low_sample_count_percentiles: resolvableValue(z.string().optional()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  alarm_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudwatch_metric_alarm

export function AwsCloudwatchMetricAlarm(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_metric_alarm'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchMetricAlarm = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCloudwatchMetricAlarm,
    idFilter,
    baseNode,
    optional,
  )
