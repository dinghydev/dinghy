import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kinesis_firehose_delivery_stream

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
})

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

export const useAwsKinesisFirehoseDeliveryStream = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKinesisFirehoseDeliveryStream, node, id)

export const useAwsKinesisFirehoseDeliveryStreams = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKinesisFirehoseDeliveryStream, node, id)
