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
  execution_role_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  query_string: resolvableValue(z.string()),
  error_report_configuration: resolvableValue(
    z.object({
      s3_configuration: z.object({
        bucket_name: z.string(),
        encryption_option: z.string().optional(),
        object_key_prefix: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  notification_configuration: resolvableValue(
    z.object({
      sns_configuration: z.object({
        topic_arn: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schedule_configuration: resolvableValue(
    z.object({
      schedule_expression: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_configuration: resolvableValue(
    z.object({
      timestream_configuration: z.object({
        database_name: z.string(),
        measure_name_column: z.string().optional(),
        table_name: z.string(),
        time_column: z.string(),
        dimension_mapping: z.object({
          dimension_value_type: z.string(),
          name: z.string(),
        }).array().optional(),
        mixed_measure_mapping: z.object({
          measure_name: z.string().optional(),
          measure_value_type: z.string(),
          source_column: z.string().optional(),
          target_measure_name: z.string().optional(),
          multi_measure_attribute_mapping: z.object({
            measure_value_type: z.string(),
            source_column: z.string(),
            target_multi_measure_attribute_name: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
        multi_measure_mappings: z.object({
          target_multi_measure_name: z.string().optional(),
          multi_measure_attribute_mapping: z.object({
            measure_value_type: z.string(),
            source_column: z.string(),
            target_multi_measure_attribute_name: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
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
  creation_time: z.string().optional(),
  last_run_summary: z.object({
    failure_reason: z.string(),
    invocation_time: z.string(),
    run_status: z.string(),
    trigger_time: z.string(),
    error_report_location: z.object({
      s3_report_location: z.object({
        bucket_name: z.string(),
        object_key: z.string(),
      }).array().optional(),
    }).array().optional(),
    execution_stats: z.object({
      bytes_metered: z.number(),
      cumulative_bytes_scanned: z.number(),
      data_writes: z.number(),
      execution_time_in_millis: z.number(),
      query_result_rows: z.number(),
      records_ingested: z.number(),
    }).array().optional(),
    query_insights_response: z.object({
      output_bytes: z.number(),
      output_rows: z.number(),
      query_table_count: z.number(),
      query_spatial_coverage: z.object({
        max: z.object({
          partition_key: z.string().array(),
          table_arn: z.string(),
          value: z.number(),
        }).array().optional(),
      }).array().optional(),
      query_temporal_range: z.object({
        max: z.object({
          table_arn: z.string(),
          value: z.number(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  }).array().optional().optional(),
  next_invocation_time: z.string().optional(),
  previous_invocation_time: z.string().optional(),
  recently_failed_runs: z.object({
    failure_reason: z.string(),
    invocation_time: z.string(),
    run_status: z.string(),
    trigger_time: z.string(),
    error_report_location: z.object({
      s3_report_location: z.object({
        bucket_name: z.string(),
        object_key: z.string(),
      }).array().optional(),
    }).array().optional(),
    execution_stats: z.object({
      bytes_metered: z.number(),
      cumulative_bytes_scanned: z.number(),
      data_writes: z.number(),
      execution_time_in_millis: z.number(),
      query_result_rows: z.number(),
      records_ingested: z.number(),
    }).array().optional(),
    query_insights_response: z.object({
      output_bytes: z.number(),
      output_rows: z.number(),
      query_table_count: z.number(),
      query_spatial_coverage: z.object({
        max: z.object({
          partition_key: z.string().array(),
          table_arn: z.string(),
          value: z.number(),
        }).array().optional(),
      }).array().optional(),
      query_temporal_range: z.object({
        max: z.object({
          table_arn: z.string(),
          value: z.number(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  }).array().optional().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/timestreamquery_scheduled_query

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

export const useAwsTimestreamqueryScheduledQuery = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsTimestreamqueryScheduledQuery,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTimestreamqueryScheduledQuerys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsTimestreamqueryScheduledQuery,
    idFilter,
    baseNode,
    optional,
  )
