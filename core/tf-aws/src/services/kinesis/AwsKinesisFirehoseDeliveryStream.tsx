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
  destination: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  destination_id: resolvableValue(z.string().optional()),
  elasticsearch_configuration: resolvableValue(
    z.object({
      buffering_interval: z.number().optional(),
      buffering_size: z.number().optional(),
      cluster_endpoint: z.string().optional(),
      domain_arn: z.string().optional(),
      index_name: z.string(),
      index_rotation_period: z.string().optional(),
      retry_duration: z.number().optional(),
      role_arn: z.string(),
      s3_backup_mode: z.string().optional(),
      type_name: z.string().optional(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }),
      vpc_config: z.object({
        role_arn: z.string(),
        security_group_ids: z.string().array(),
        subnet_ids: z.string().array(),
        vpc_id: z.string(),
      }).optional(),
    }).optional(),
  ),
  extended_s3_configuration: resolvableValue(
    z.object({
      bucket_arn: z.string(),
      buffering_interval: z.number().optional(),
      buffering_size: z.number().optional(),
      compression_format: z.string().optional(),
      custom_time_zone: z.string().optional(),
      error_output_prefix: z.string().optional(),
      file_extension: z.string().optional(),
      kms_key_arn: z.string().optional(),
      prefix: z.string().optional(),
      role_arn: z.string(),
      s3_backup_mode: z.string().optional(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      data_format_conversion_configuration: z.object({
        enabled: z.boolean().optional(),
        input_format_configuration: z.object({
          deserializer: z.object({
            hive_json_ser_de: z.object({
              timestamp_formats: z.string().array().optional(),
            }).optional(),
            open_x_json_ser_de: z.object({
              case_insensitive: z.boolean().optional(),
              column_to_json_key_mappings: z.record(z.string(), z.string())
                .optional(),
              convert_dots_in_json_keys_to_underscores: z.boolean().optional(),
            }).optional(),
          }),
        }),
        output_format_configuration: z.object({
          serializer: z.object({
            orc_ser_de: z.object({
              block_size_bytes: z.number().optional(),
              bloom_filter_columns: z.string().array().optional(),
              bloom_filter_false_positive_probability: z.number().optional(),
              compression: z.string().optional(),
              dictionary_key_threshold: z.number().optional(),
              enable_padding: z.boolean().optional(),
              format_version: z.string().optional(),
              padding_tolerance: z.number().optional(),
              row_index_stride: z.number().optional(),
              stripe_size_bytes: z.number().optional(),
            }).optional(),
            parquet_ser_de: z.object({
              block_size_bytes: z.number().optional(),
              compression: z.string().optional(),
              enable_dictionary_compression: z.boolean().optional(),
              max_padding_bytes: z.number().optional(),
              page_size_bytes: z.number().optional(),
              writer_version: z.string().optional(),
            }).optional(),
          }),
        }),
        schema_configuration: z.object({
          catalog_id: z.string().optional(),
          database_name: z.string(),
          region: z.string().optional(),
          role_arn: z.string(),
          table_name: z.string(),
          version_id: z.string().optional(),
        }),
      }).optional(),
      dynamic_partitioning_configuration: z.object({
        enabled: z.boolean().optional(),
        retry_duration: z.number().optional(),
      }).optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      s3_backup_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  http_endpoint_configuration: resolvableValue(
    z.object({
      access_key: z.string().optional(),
      buffering_interval: z.number().optional(),
      buffering_size: z.number().optional(),
      name: z.string().optional(),
      retry_duration: z.number().optional(),
      role_arn: z.string().optional(),
      s3_backup_mode: z.string().optional(),
      url: z.string(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      request_configuration: z.object({
        content_encoding: z.string().optional(),
        common_attributes: z.object({
          name: z.string(),
          value: z.string(),
        }).array().optional(),
      }).optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }),
      secrets_manager_configuration: z.object({
        enabled: z.boolean().optional(),
        role_arn: z.string().optional(),
        secret_arn: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  iceberg_configuration: resolvableValue(
    z.object({
      append_only: z.boolean().optional(),
      buffering_interval: z.number().optional(),
      buffering_size: z.number().optional(),
      catalog_arn: z.string(),
      retry_duration: z.number().optional(),
      role_arn: z.string(),
      s3_backup_mode: z.string().optional(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      destination_table_configuration: z.object({
        database_name: z.string(),
        s3_error_output_prefix: z.string().optional(),
        table_name: z.string(),
        unique_keys: z.string().array().optional(),
      }).array().optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  kinesis_source_configuration: resolvableValue(
    z.object({
      kinesis_stream_arn: z.string(),
      role_arn: z.string(),
    }).optional(),
  ),
  msk_source_configuration: resolvableValue(
    z.object({
      msk_cluster_arn: z.string(),
      read_from_timestamp: z.string().optional(),
      topic_name: z.string(),
      authentication_configuration: z.object({
        connectivity: z.string(),
        role_arn: z.string(),
      }),
    }).optional(),
  ),
  opensearch_configuration: resolvableValue(
    z.object({
      buffering_interval: z.number().optional(),
      buffering_size: z.number().optional(),
      cluster_endpoint: z.string().optional(),
      domain_arn: z.string().optional(),
      index_name: z.string(),
      index_rotation_period: z.string().optional(),
      retry_duration: z.number().optional(),
      role_arn: z.string(),
      s3_backup_mode: z.string().optional(),
      type_name: z.string().optional(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      document_id_options: z.object({
        default_document_id_format: z.string(),
      }).optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }),
      vpc_config: z.object({
        role_arn: z.string(),
        security_group_ids: z.string().array(),
        subnet_ids: z.string().array(),
        vpc_id: z.string(),
      }).optional(),
    }).optional(),
  ),
  opensearchserverless_configuration: resolvableValue(
    z.object({
      buffering_interval: z.number().optional(),
      buffering_size: z.number().optional(),
      collection_endpoint: z.string(),
      index_name: z.string(),
      retry_duration: z.number().optional(),
      role_arn: z.string(),
      s3_backup_mode: z.string().optional(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }),
      vpc_config: z.object({
        role_arn: z.string(),
        security_group_ids: z.string().array(),
        subnet_ids: z.string().array(),
        vpc_id: z.string(),
      }).optional(),
    }).optional(),
  ),
  redshift_configuration: resolvableValue(
    z.object({
      cluster_jdbcurl: z.string(),
      copy_options: z.string().optional(),
      data_table_columns: z.string().optional(),
      data_table_name: z.string(),
      password: z.string().optional(),
      retry_duration: z.number().optional(),
      role_arn: z.string(),
      s3_backup_mode: z.string().optional(),
      username: z.string().optional(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      s3_backup_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }).optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }),
      secrets_manager_configuration: z.object({
        enabled: z.boolean().optional(),
        role_arn: z.string().optional(),
        secret_arn: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  server_side_encryption: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      key_arn: z.string().optional(),
      key_type: z.string().optional(),
    }).optional(),
  ),
  snowflake_configuration: resolvableValue(
    z.object({
      account_url: z.string(),
      buffering_interval: z.number().optional(),
      buffering_size: z.number().optional(),
      content_column_name: z.string().optional(),
      data_loading_option: z.string().optional(),
      database: z.string(),
      key_passphrase: z.string().optional(),
      metadata_column_name: z.string().optional(),
      private_key: z.string().optional(),
      retry_duration: z.number().optional(),
      role_arn: z.string(),
      s3_backup_mode: z.string().optional(),
      schema: z.string(),
      table: z.string(),
      user: z.string().optional(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }),
      secrets_manager_configuration: z.object({
        enabled: z.boolean().optional(),
        role_arn: z.string().optional(),
        secret_arn: z.string().optional(),
      }).optional(),
      snowflake_role_configuration: z.object({
        enabled: z.boolean().optional(),
        snowflake_role: z.string().optional(),
      }).optional(),
      snowflake_vpc_configuration: z.object({
        private_link_vpce_id: z.string(),
      }).optional(),
    }).optional(),
  ),
  splunk_configuration: resolvableValue(
    z.object({
      buffering_interval: z.number().optional(),
      buffering_size: z.number().optional(),
      hec_acknowledgment_timeout: z.number().optional(),
      hec_endpoint: z.string(),
      hec_endpoint_type: z.string().optional(),
      hec_token: z.string().optional(),
      retry_duration: z.number().optional(),
      s3_backup_mode: z.string().optional(),
      cloudwatch_logging_options: z.object({
        enabled: z.boolean().optional(),
        log_group_name: z.string().optional(),
        log_stream_name: z.string().optional(),
      }).optional(),
      processing_configuration: z.object({
        enabled: z.boolean().optional(),
        processors: z.object({
          type: z.string(),
          parameters: z.object({
            parameter_name: z.string(),
            parameter_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        buffering_interval: z.number().optional(),
        buffering_size: z.number().optional(),
        compression_format: z.string().optional(),
        error_output_prefix: z.string().optional(),
        kms_key_arn: z.string().optional(),
        prefix: z.string().optional(),
        role_arn: z.string(),
        cloudwatch_logging_options: z.object({
          enabled: z.boolean().optional(),
          log_group_name: z.string().optional(),
          log_stream_name: z.string().optional(),
        }).optional(),
      }),
      secrets_manager_configuration: z.object({
        enabled: z.boolean().optional(),
        role_arn: z.string().optional(),
        secret_arn: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  version_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kinesis_firehose_delivery_stream

export function AwsKinesisFirehoseDeliveryStream(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesis_firehose_delivery_stream'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisFirehoseDeliveryStream = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsKinesisFirehoseDeliveryStream,
    idFilter,
    baseNode,
  )

export const useAwsKinesisFirehoseDeliveryStreams = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsKinesisFirehoseDeliveryStream,
    idFilter,
    baseNode,
  )
