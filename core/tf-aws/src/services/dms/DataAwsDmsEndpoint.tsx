import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDmsEndpoint } from './AwsDmsEndpoint.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dms_endpoint

export const InputSchema = z.object({
  certificate_arn: resolvableValue(z.string()),
  database_name: resolvableValue(z.string()),
  elasticsearch_settings: resolvableValue(
    z.object({
      endpoint_uri: z.string(),
      error_retry_duration: z.number(),
      full_load_error_percentage: z.number(),
      service_access_role_arn: z.string(),
    }).array(),
  ),
  endpoint_arn: resolvableValue(z.string()),
  endpoint_id: resolvableValue(z.string()),
  endpoint_type: resolvableValue(z.string()),
  engine_name: resolvableValue(z.string()),
  extra_connection_attributes: resolvableValue(z.string()),
  kafka_settings: resolvableValue(
    z.object({
      broker: z.string(),
      include_control_details: z.boolean(),
      include_null_and_empty: z.boolean(),
      include_partition_value: z.boolean(),
      include_table_alter_operations: z.boolean(),
      include_transaction_details: z.boolean(),
      message_format: z.string(),
      message_max_bytes: z.number(),
      no_hex_prefix: z.boolean(),
      partition_include_schema_table: z.boolean(),
      sasl_mechanism: z.string(),
      sasl_password: z.string(),
      sasl_username: z.string(),
      security_protocol: z.string(),
      ssl_ca_certificate_arn: z.string(),
      ssl_client_certificate_arn: z.string(),
      ssl_client_key_arn: z.string(),
      ssl_client_key_password: z.string(),
      topic: z.string(),
    }).array(),
  ),
  kinesis_settings: resolvableValue(
    z.object({
      include_control_details: z.boolean(),
      include_null_and_empty: z.boolean(),
      include_partition_value: z.boolean(),
      include_table_alter_operations: z.boolean(),
      include_transaction_details: z.boolean(),
      message_format: z.string(),
      partition_include_schema_table: z.boolean(),
      service_access_role_arn: z.string(),
      stream_arn: z.string(),
      use_large_integer_value: z.boolean(),
    }).array(),
  ),
  kms_key_arn: resolvableValue(z.string()),
  mongodb_settings: resolvableValue(
    z.object({
      auth_mechanism: z.string(),
      auth_source: z.string(),
      auth_type: z.string(),
      docs_to_investigate: z.string(),
      extract_doc_id: z.string(),
      nesting_level: z.string(),
    }).array(),
  ),
  mysql_settings: resolvableValue(
    z.object({
      after_connect_script: z.string(),
      authentication_method: z.string(),
      clean_source_metadata_on_mismatch: z.boolean(),
      events_poll_interval: z.number(),
      execute_timeout: z.number(),
      max_file_size: z.number(),
      parallel_load_threads: z.number(),
      server_timezone: z.string(),
      service_access_role_arn: z.string(),
      target_db_type: z.string(),
    }).array(),
  ),
  password: resolvableValue(z.string()),
  port: resolvableValue(z.number()),
  postgres_settings: resolvableValue(
    z.object({
      after_connect_script: z.string(),
      authentication_method: z.string(),
      babelfish_database_name: z.string(),
      capture_ddls: z.boolean(),
      database_mode: z.string(),
      ddl_artifacts_schema: z.string(),
      execute_timeout: z.number(),
      fail_tasks_on_lob_truncation: z.boolean(),
      heartbeat_enable: z.boolean(),
      heartbeat_frequency: z.number(),
      heartbeat_schema: z.string(),
      map_boolean_as_boolean: z.boolean(),
      map_jsonb_as_clob: z.boolean(),
      map_long_varchar_as: z.string(),
      max_file_size: z.number(),
      plugin_name: z.string(),
      service_access_role_arn: z.string(),
      slot_name: z.string(),
    }).array(),
  ),
  redis_settings: resolvableValue(
    z.object({
      auth_password: z.string(),
      auth_type: z.string(),
      auth_user_name: z.string(),
      port: z.number(),
      server_name: z.string(),
      ssl_ca_certificate_arn: z.string(),
      ssl_security_protocol: z.string(),
    }).array(),
  ),
  redshift_settings: resolvableValue(
    z.object({
      bucket_folder: z.string(),
      bucket_name: z.string(),
      encryption_mode: z.string(),
      server_side_encryption_kms_key_id: z.string(),
      service_access_role_arn: z.string(),
    }).array(),
  ),
  s3_settings: resolvableValue(
    z.object({
      add_column_name: z.boolean(),
      bucket_folder: z.string(),
      bucket_name: z.string(),
      canned_acl_for_objects: z.string(),
      cdc_inserts_and_updates: z.boolean(),
      cdc_inserts_only: z.boolean(),
      cdc_max_batch_interval: z.number(),
      cdc_min_file_size: z.number(),
      cdc_path: z.string(),
      compression_type: z.string(),
      csv_delimiter: z.string(),
      csv_no_sup_value: z.string(),
      csv_null_value: z.string(),
      csv_row_delimiter: z.string(),
      data_format: z.string(),
      data_page_size: z.number(),
      date_partition_delimiter: z.string(),
      date_partition_enabled: z.boolean(),
      date_partition_sequence: z.string(),
      dict_page_size_limit: z.number(),
      enable_statistics: z.boolean(),
      encoding_type: z.string(),
      encryption_mode: z.string(),
      external_table_definition: z.string(),
      glue_catalog_generation: z.boolean(),
      ignore_header_rows: z.number(),
      ignore_headers_row: z.number(),
      include_op_for_full_load: z.boolean(),
      max_file_size: z.number(),
      parquet_timestamp_in_millisecond: z.boolean(),
      parquet_version: z.string(),
      preserve_transactions: z.boolean(),
      rfc_4180: z.boolean(),
      row_group_length: z.number(),
      server_side_encryption_kms_key_id: z.string(),
      service_access_role_arn: z.string(),
      timestamp_column_name: z.string(),
      use_csv_no_sup_value: z.boolean(),
      use_task_start_time_for_full_load_timestamp: z.boolean(),
    }).array(),
  ),
  secrets_manager_access_role_arn: resolvableValue(z.string()),
  secrets_manager_arn: resolvableValue(z.string()),
  server_name: resolvableValue(z.string()),
  service_access_role: resolvableValue(z.string()),
  ssl_mode: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDmsEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDmsEndpoint
      _type='aws_dms_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDmsEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsDmsEndpoint, node, id)

export const useDataAwsDmsEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsDmsEndpoint, node, id)
