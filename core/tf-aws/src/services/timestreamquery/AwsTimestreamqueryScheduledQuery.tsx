import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/timestreamquery_scheduled_query

export const InputSchema = z.object({
  execution_role_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  query_string: resolvableValue(z.string()),
  error_report_configuration: resolvableValue(
    z.object({
      s3_configuration: z.object({
        bucket_name: z.string(),
        encryption_option: z.string().optional(),
        object_key_prefix: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  notification_configuration: resolvableValue(
    z.object({
      sns_configuration: z.object({
        topic_arn: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schedule_configuration: resolvableValue(
    z.object({
      schedule_expression: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_configuration: resolvableValue(
    z.object({
      timestream_configuration: z.object({
        database_name: z.string(),
        measure_name_column: z.string().optional(),
        table_name: z.string(),
        time_column: z.string(),
      }).optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  last_run_summary: z.object({
    failure_reason: z.string(),
    invocation_time: z.string(),
    run_status: z.string(),
    trigger_time: z.string(),
  }).optional().optional(),
  next_invocation_time: z.string().optional(),
  previous_invocation_time: z.string().optional(),
  recently_failed_runs: z.object({
    failure_reason: z.string(),
    invocation_time: z.string(),
    run_status: z.string(),
    trigger_time: z.string(),
  }).optional().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsTimestreamqueryScheduledQuery(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_timestreamquery_scheduled_query'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTimestreamqueryScheduledQuery = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsTimestreamqueryScheduledQuery, node, id)

export const useAwsTimestreamqueryScheduledQuerys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsTimestreamqueryScheduledQuery, node, id)
