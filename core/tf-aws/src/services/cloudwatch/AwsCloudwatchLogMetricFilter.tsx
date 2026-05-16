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

export const AwsCloudwatchLogMetricFilterInputSchema = TfMetaSchema.extend({
  log_group_name: resolvableValue(z.string()),
  metric_transformation: resolvableValue(z.object({
    default_value: z.string().optional(),
    dimensions: z.record(z.string(), z.string()).optional(),
    name: z.string(),
    namespace: z.string(),
    unit: z.string().optional(),
    value: z.string(),
  })),
  name: resolvableValue(z.string()),
  pattern: resolvableValue(z.string()),
  apply_on_transformed_logs: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchLogMetricFilterOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsCloudwatchLogMetricFilterImportSchema = z.object({
  log_group_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCloudwatchLogMetricFilterInputProps =
  & z.input<typeof AwsCloudwatchLogMetricFilterInputSchema>
  & z.input<typeof AwsCloudwatchLogMetricFilterImportSchema>
  & NodeProps

export type AwsCloudwatchLogMetricFilterOutputProps =
  & z.output<typeof AwsCloudwatchLogMetricFilterOutputSchema>
  & z.output<typeof AwsCloudwatchLogMetricFilterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_metric_filter

export function AwsCloudwatchLogMetricFilter(
  props: Partial<AwsCloudwatchLogMetricFilterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_metric_filter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogMetricFilterInputSchema}
      _outputSchema={AwsCloudwatchLogMetricFilterOutputSchema}
      _importSchema={AwsCloudwatchLogMetricFilterImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogMetricFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogMetricFilterOutputProps>(
    AwsCloudwatchLogMetricFilter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogMetricFilters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogMetricFilterOutputProps>(
    AwsCloudwatchLogMetricFilter,
    idFilter,
    baseNode,
    optional,
  )
