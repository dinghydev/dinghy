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
  endpoint_id: resolvableValue(z.string()),
  endpoint_type: resolvableValue(z.string()),
  engine_name: resolvableValue(z.string()),
  certificate_arn: resolvableValue(z.string().optional()),
  database_name: resolvableValue(z.string().optional()),
  elasticsearch_settings: resolvableValue(
    z.object({
      endpoint_uri: z.string(),
      error_retry_duration: z.number().optional(),
      full_load_error_percentage: z.number().optional(),
      service_access_role_arn: z.string(),
      use_new_mapping_type: z.boolean().optional(),
    }).optional(),
  ),
  extra_connection_attributes: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kafka_settings: resolvableValue(
    z.object({
      broker: z.string(),
      include_control_details: z.boolean().optional(),
      include_null_and_empty: z.boolean().optional(),
      include_partition_value: z.boolean().optional(),
      include_table_alter_operations: z.boolean().optional(),
      include_transaction_details: z.boolean().optional(),
      message_format: z.string().optional(),
      message_max_bytes: z.number().optional(),
      no_hex_prefix: z.boolean().optional(),
      partition_include_schema_table: z.boolean().optional(),
      sasl_mechanism: z.string().optional(),
      sasl_password: z.string().optional(),
      sasl_username: z.string().optional(),
      security_protocol: z.string().optional(),
      ssl_ca_certificate_arn: z.string().optional(),
      ssl_client_certificate_arn: z.string().optional(),
      ssl_client_key_arn: z.string().optional(),
      ssl_client_key_password: z.string().optional(),
      topic: z.string().optional(),
    }).optional(),
  ),
  kinesis_settings: resolvableValue(
    z.object({
      include_control_details: z.boolean().optional(),
      include_null_and_empty: z.boolean().optional(),
      include_partition_value: z.boolean().optional(),
      include_table_alter_operations: z.boolean().optional(),
      include_transaction_details: z.boolean().optional(),
      message_format: z.string().optional(),
      partition_include_schema_table: z.boolean().optional(),
      service_access_role_arn: z.string().optional(),
      stream_arn: z.string().optional(),
      use_large_integer_value: z.boolean().optional(),
    }).optional(),
  ),
  kms_key_arn: resolvableValue(z.string().optional()),
  mongodb_settings: resolvableValue(
    z.object({
      auth_mechanism: z.string().optional(),
      auth_source: z.string().optional(),
      auth_type: z.string().optional(),
      docs_to_investigate: z.string().optional(),
      extract_doc_id: z.string().optional(),
      nesting_level: z.string().optional(),
      use_update_lookup: z.boolean().optional(),
    }).optional(),
  ),
  mysql_settings: resolvableValue(
    z.object({
      after_connect_script: z.string().optional(),
      authentication_method: z.string().optional(),
      clean_source_metadata_on_mismatch: z.boolean().optional(),
      events_poll_interval: z.number().optional(),
      execute_timeout: z.number().optional(),
      max_file_size: z.number().optional(),
      parallel_load_threads: z.number().optional(),
      server_timezone: z.string().optional(),
      service_access_role_arn: z.string().optional(),
      target_db_type: z.string().optional(),
    }).optional(),
  ),
  oracle_settings: resolvableValue(
    z.object({
      access_alternate_directly: z.boolean().optional(),
      add_supplemental_logging: z.boolean().optional(),
      additional_archived_log_dest_id: z.number().optional(),
      allow_selected_nested_tables: z.boolean().optional(),
      archived_log_dest_id: z.number().optional(),
      archived_logs_only: z.boolean().optional(),
      asm_password: z.string().optional(),
      asm_server: z.string().optional(),
      asm_user: z.string().optional(),
      authentication_method: z.string().optional(),
      char_length_semantics: z.string().optional(),
      convert_timestamp_with_zone_to_utc: z.boolean().optional(),
      direct_path_no_log: z.boolean().optional(),
      direct_path_parallel_load: z.boolean().optional(),
      enable_homogenous_tablespace: z.boolean().optional(),
      extra_archived_log_dest_ids: z.number().array().optional(),
      fail_task_on_lob_truncation: z.boolean().optional(),
      number_datatype_scale: z.number().optional(),
      open_transaction_window: z.number().optional(),
      oracle_path_prefix: z.string().optional(),
      parallel_asm_read_threads: z.number().optional(),
      read_ahead_blocks: z.number().optional(),
      read_table_space_name: z.boolean().optional(),
      replace_path_prefix: z.boolean().optional(),
      retry_interval: z.number().optional(),
      secrets_manager_oracle_asm_access_role_arn: z.string().optional(),
      secrets_manager_oracle_asm_secret_id: z.string().optional(),
      security_db_encryption: z.string().optional(),
      security_db_encryption_name: z.string().optional(),
      spatial_data_option_to_geo_json_function_name: z.string().optional(),
      standby_delay_time: z.number().optional(),
      trim_space_in_char: z.boolean().optional(),
      use_alternate_folder_for_online: z.boolean().optional(),
      use_bfile: z.boolean().optional(),
      use_direct_path_full_load: z.boolean().optional(),
      use_logminer_reader: z.boolean().optional(),
      use_path_prefix: z.string().optional(),
    }).optional(),
  ),
  password: resolvableValue(z.string().optional()),
  pause_replication_tasks: resolvableValue(z.boolean().optional()),
  port: resolvableValue(z.number().optional()),
  postgres_settings: resolvableValue(
    z.object({
      after_connect_script: z.string().optional(),
      authentication_method: z.string().optional(),
      babelfish_database_name: z.string().optional(),
      capture_ddls: z.boolean().optional(),
      database_mode: z.string().optional(),
      ddl_artifacts_schema: z.string().optional(),
      execute_timeout: z.number().optional(),
      fail_tasks_on_lob_truncation: z.boolean().optional(),
      heartbeat_enable: z.boolean().optional(),
      heartbeat_frequency: z.number().optional(),
      heartbeat_schema: z.string().optional(),
      map_boolean_as_boolean: z.boolean().optional(),
      map_jsonb_as_clob: z.boolean().optional(),
      map_long_varchar_as: z.string().optional(),
      max_file_size: z.number().optional(),
      plugin_name: z.string().optional(),
      service_access_role_arn: z.string().optional(),
      slot_name: z.string().optional(),
    }).optional(),
  ),
  redis_settings: resolvableValue(
    z.object({
      auth_password: z.string().optional(),
      auth_type: z.string(),
      auth_user_name: z.string().optional(),
      port: z.number(),
      server_name: z.string(),
      ssl_ca_certificate_arn: z.string().optional(),
      ssl_security_protocol: z.string().optional(),
    }).optional(),
  ),
  redshift_settings: resolvableValue(
    z.object({
      bucket_folder: z.string().optional(),
      bucket_name: z.string().optional(),
      encryption_mode: z.string().optional(),
      server_side_encryption_kms_key_id: z.string().optional(),
      service_access_role_arn: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  secrets_manager_access_role_arn: resolvableValue(z.string().optional()),
  secrets_manager_arn: resolvableValue(z.string().optional()),
  server_name: resolvableValue(z.string().optional()),
  service_access_role: resolvableValue(z.string().optional()),
  ssl_mode: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  username: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  endpoint_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dms_endpoint

export function AwsDmsEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsDmsEndpoint, idFilter, baseNode, optional)

export const useAwsDmsEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsDmsEndpoint, idFilter, baseNode, optional)
