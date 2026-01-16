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

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  runtime_environment: resolvableValue(z.string()),
  service_execution_role: resolvableValue(z.string()),
  application_configuration: resolvableValue(
    z.object({
      application_code_configuration: z.object({
        code_content_type: z.string(),
        code_content: z.object({
          text_content: z.string().optional(),
          s3_content_location: z.object({
            bucket_arn: z.string(),
            file_key: z.string(),
            object_version: z.string().optional(),
          }).optional(),
        }).optional(),
      }),
      application_encryption_configuration: z.object({
        key_id: z.string().optional(),
        key_type: z.string(),
      }).optional(),
      application_snapshot_configuration: z.object({
        snapshots_enabled: z.boolean(),
      }).optional(),
      environment_properties: z.object({
        property_group: z.object({
          property_group_id: z.string(),
          property_map: z.record(z.string(), z.string()),
        }).array(),
      }).optional(),
      flink_application_configuration: z.object({
        checkpoint_configuration: z.object({
          checkpoint_interval: z.number().optional(),
          checkpointing_enabled: z.boolean().optional(),
          configuration_type: z.string(),
          min_pause_between_checkpoints: z.number().optional(),
        }).optional(),
        monitoring_configuration: z.object({
          configuration_type: z.string(),
          log_level: z.string().optional(),
          metrics_level: z.string().optional(),
        }).optional(),
        parallelism_configuration: z.object({
          auto_scaling_enabled: z.boolean().optional(),
          configuration_type: z.string(),
          parallelism: z.number().optional(),
          parallelism_per_kpu: z.number().optional(),
        }).optional(),
      }).optional(),
      run_configuration: z.object({
        application_restore_configuration: z.object({
          application_restore_type: z.string().optional(),
          snapshot_name: z.string().optional(),
        }).optional(),
        flink_run_configuration: z.object({
          allow_non_restored_state: z.boolean().optional(),
        }).optional(),
      }).optional(),
      sql_application_configuration: z.object({
        input: z.object({
          in_app_stream_names: z.string().array().optional(),
          input_id: z.string().optional(),
          name_prefix: z.string(),
          input_parallelism: z.object({
            count: z.number().optional(),
          }).optional(),
          input_processing_configuration: z.object({
            input_lambda_processor: z.object({
              resource_arn: z.string(),
            }),
          }).optional(),
          input_schema: z.object({
            record_encoding: z.string().optional(),
            record_column: z.object({
              mapping: z.string().optional(),
              name: z.string(),
              sql_type: z.string(),
            }).array(),
            record_format: z.object({
              record_format_type: z.string(),
              mapping_parameters: z.object({
                csv_mapping_parameters: z.object({
                  record_column_delimiter: z.string(),
                  record_row_delimiter: z.string(),
                }).optional(),
                json_mapping_parameters: z.object({
                  record_row_path: z.string(),
                }).optional(),
              }),
            }),
          }),
          input_starting_position_configuration: z.object({
            input_starting_position: z.string().optional(),
          }).array().optional(),
          kinesis_firehose_input: z.object({
            resource_arn: z.string(),
          }).optional(),
          kinesis_streams_input: z.object({
            resource_arn: z.string(),
          }).optional(),
        }).optional(),
        output: z.object({
          name: z.string(),
          output_id: z.string().optional(),
          destination_schema: z.object({
            record_format_type: z.string(),
          }),
          kinesis_firehose_output: z.object({
            resource_arn: z.string(),
          }).optional(),
          kinesis_streams_output: z.object({
            resource_arn: z.string(),
          }).optional(),
          lambda_output: z.object({
            resource_arn: z.string(),
          }).optional(),
        }).array().optional(),
        reference_data_source: z.object({
          reference_id: z.string().optional(),
          table_name: z.string(),
          reference_schema: z.object({
            record_encoding: z.string().optional(),
            record_column: z.object({
              mapping: z.string().optional(),
              name: z.string(),
              sql_type: z.string(),
            }).array(),
            record_format: z.object({
              record_format_type: z.string(),
              mapping_parameters: z.object({
                csv_mapping_parameters: z.object({
                  record_column_delimiter: z.string(),
                  record_row_delimiter: z.string(),
                }).optional(),
                json_mapping_parameters: z.object({
                  record_row_path: z.string(),
                }).optional(),
              }),
            }),
          }),
          s3_reference_data_source: z.object({
            bucket_arn: z.string(),
            file_key: z.string(),
          }),
        }).optional(),
      }).optional(),
      vpc_configuration: z.object({
        security_group_ids: z.string().array(),
        subnet_ids: z.string().array(),
        vpc_configuration_id: z.string().optional(),
        vpc_id: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  application_mode: resolvableValue(z.string().optional()),
  cloudwatch_logging_options: resolvableValue(
    z.object({
      cloudwatch_logging_option_id: z.string().optional(),
      log_stream_arn: z.string(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  force_stop: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  start_application: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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
  create_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_update_timestamp: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version_id: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/kinesisanalyticsv2_application

export function AwsKinesisanalyticsv2Application(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesisanalyticsv2_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisanalyticsv2Application = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsKinesisanalyticsv2Application,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKinesisanalyticsv2Applications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsKinesisanalyticsv2Application,
    idFilter,
    baseNode,
    optional,
  )
