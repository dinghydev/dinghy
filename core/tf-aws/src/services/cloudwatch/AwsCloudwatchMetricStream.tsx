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

export const AwsCloudwatchMetricStreamInputSchema = TfMetaSchema.extend({
  firehose_arn: resolvableValue(z.string()),
  output_format: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  exclude_filter: resolvableValue(
    z.object({
      metric_names: z.string().array().optional(),
      namespace: z.string(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  include_filter: resolvableValue(
    z.object({
      metric_names: z.string().array().optional(),
      namespace: z.string(),
    }).array().optional(),
  ),
  include_linked_accounts_metrics: resolvableValue(z.boolean().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  statistics_configuration: resolvableValue(
    z.object({
      additional_statistics: z.string().array(),
      include_metric: z.object({
        metric_name: z.string(),
        namespace: z.string(),
      }).array(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCloudwatchMetricStreamOutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  last_update_date: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchMetricStreamInputProps =
  & z.input<typeof AwsCloudwatchMetricStreamInputSchema>
  & NodeProps

export type AwsCloudwatchMetricStreamOutputProps =
  & z.output<typeof AwsCloudwatchMetricStreamOutputSchema>
  & z.output<typeof AwsCloudwatchMetricStreamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_metric_stream

export function AwsCloudwatchMetricStream(
  props: Partial<AwsCloudwatchMetricStreamInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_metric_stream'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchMetricStreamInputSchema}
      _outputSchema={AwsCloudwatchMetricStreamOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchMetricStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchMetricStreamOutputProps>(
    AwsCloudwatchMetricStream,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchMetricStreams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchMetricStreamOutputProps>(
    AwsCloudwatchMetricStream,
    idFilter,
    baseNode,
    optional,
  )
