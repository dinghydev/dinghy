import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kinesis_analytics_application

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  cloudwatch_logging_options: resolvableValue(
    z.object({
      id: z.string(),
      log_stream_arn: z.string(),
      role_arn: z.string(),
    }).optional(),
  ),
  code: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  inputs: resolvableValue(
    z.object({
      id: z.string(),
      name_prefix: z.string(),
      stream_names: z.string().array(),
    }).optional(),
  ),
  outputs: resolvableValue(
    z.object({
      id: z.string(),
      name: z.string(),
    }).array().optional(),
  ),
  reference_data_sources: resolvableValue(
    z.object({
      id: z.string(),
      table_name: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  start_application: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_update_timestamp: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKinesisAnalyticsApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesis_analytics_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisAnalyticsApplication = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKinesisAnalyticsApplication, node, id)

export const useAwsKinesisAnalyticsApplications = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKinesisAnalyticsApplication, node, id)
