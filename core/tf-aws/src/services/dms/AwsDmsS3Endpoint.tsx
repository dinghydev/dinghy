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
  bucket_name: resolvableValue(z.string()),
  endpoint_id: resolvableValue(z.string()),
  endpoint_type: resolvableValue(z.string()),
  service_access_role_arn: resolvableValue(z.string()),
  add_column_name: resolvableValue(z.boolean().optional()),
  add_trailing_padding_character: resolvableValue(z.boolean().optional()),
  bucket_folder: resolvableValue(z.string().optional()),
  canned_acl_for_objects: resolvableValue(z.string().optional()),
  cdc_inserts_and_updates: resolvableValue(z.boolean().optional()),
  cdc_inserts_only: resolvableValue(z.boolean().optional()),
  cdc_max_batch_interval: resolvableValue(z.number().optional()),
  cdc_min_file_size: resolvableValue(z.number().optional()),
  cdc_path: resolvableValue(z.string().optional()),
  certificate_arn: resolvableValue(z.string().optional()),
  compression_type: resolvableValue(z.string().optional()),
  csv_delimiter: resolvableValue(z.string().optional()),
  csv_no_sup_value: resolvableValue(z.string().optional()),
  csv_null_value: resolvableValue(z.string().optional()),
  csv_row_delimiter: resolvableValue(z.string().optional()),
  data_format: resolvableValue(z.string().optional()),
  data_page_size: resolvableValue(z.number().optional()),
  date_partition_delimiter: resolvableValue(z.string().optional()),
  date_partition_enabled: resolvableValue(z.boolean().optional()),
  date_partition_sequence: resolvableValue(z.string().optional()),
  date_partition_timezone: resolvableValue(z.string().optional()),
  detach_target_on_lob_lookup_failure_parquet: resolvableValue(
    z.boolean().optional(),
  ),
  dict_page_size_limit: resolvableValue(z.number().optional()),
  enable_statistics: resolvableValue(z.boolean().optional()),
  encoding_type: resolvableValue(z.string().optional()),
  encryption_mode: resolvableValue(z.string().optional()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  external_table_definition: resolvableValue(z.string().optional()),
  glue_catalog_generation: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  ignore_header_rows: resolvableValue(z.number().optional()),
  include_op_for_full_load: resolvableValue(z.boolean().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  max_file_size: resolvableValue(z.number().optional()),
  parquet_timestamp_in_millisecond: resolvableValue(z.boolean().optional()),
  parquet_version: resolvableValue(z.string().optional()),
  preserve_transactions: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  rfc_4180: resolvableValue(z.boolean().optional()),
  row_group_length: resolvableValue(z.number().optional()),
  server_side_encryption_kms_key_id: resolvableValue(z.string().optional()),
  ssl_mode: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  timestamp_column_name: resolvableValue(z.string().optional()),
  use_csv_no_sup_value: resolvableValue(z.boolean().optional()),
  use_task_start_time_for_full_load_timestamp: resolvableValue(
    z.boolean().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  endpoint_arn: z.string().optional(),
  engine_display_name: z.string().optional(),
  external_id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dms_s3_endpoint

export function AwsDmsS3Endpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_s3_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsS3Endpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsDmsS3Endpoint, idFilter, baseNode, optional)

export const useAwsDmsS3Endpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsDmsS3Endpoint, idFilter, baseNode, optional)
