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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  last_update_date: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_metric_stream

export function AwsCloudwatchMetricStream(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_metric_stream'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchMetricStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCloudwatchMetricStream,
    idFilter,
    baseNode,
    optional,
  )
