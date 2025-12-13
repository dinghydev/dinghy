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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_log_metric_filter

export function AwsCloudwatchLogMetricFilter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_metric_filter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogMetricFilter = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsCloudwatchLogMetricFilter, idFilter, baseNode)

export const useAwsCloudwatchLogMetricFilters = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsCloudwatchLogMetricFilter, idFilter, baseNode)
