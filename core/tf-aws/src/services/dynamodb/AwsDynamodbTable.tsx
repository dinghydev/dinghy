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
  name: resolvableValue(z.string()),
  attribute: resolvableValue(
    z.object({
      name: z.string(),
      type: z.string(),
    }).array().optional(),
  ),
  billing_mode: resolvableValue(z.string().optional()),
  deletion_protection_enabled: resolvableValue(z.boolean().optional()),
  global_secondary_index: resolvableValue(
    z.object({
      hash_key: z.string(),
      name: z.string(),
      non_key_attributes: z.string().array().optional(),
      projection_type: z.string(),
      range_key: z.string().optional(),
      read_capacity: z.number().optional(),
      write_capacity: z.number().optional(),
      on_demand_throughput: z.object({
        max_read_request_units: z.number().optional(),
        max_write_request_units: z.number().optional(),
      }).optional(),
      warm_throughput: z.object({
        read_units_per_second: z.number().optional(),
        write_units_per_second: z.number().optional(),
      }).optional(),
    }).array().optional(),
  ),
  global_table_witness: resolvableValue(
    z.object({
      region_name: z.string().optional(),
    }).optional(),
  ),
  hash_key: resolvableValue(z.string().optional()),
  import_table: resolvableValue(
    z.object({
      input_compression_type: z.string().optional(),
      input_format: z.string(),
      input_format_options: z.object({
        csv: z.object({
          delimiter: z.string().optional(),
          header_list: z.string().array().optional(),
        }).optional(),
      }).optional(),
      s3_bucket_source: z.object({
        bucket: z.string(),
        bucket_owner: z.string().optional(),
        key_prefix: z.string().optional(),
      }),
    }).optional(),
  ),
  local_secondary_index: resolvableValue(
    z.object({
      name: z.string(),
      non_key_attributes: z.string().array().optional(),
      projection_type: z.string(),
      range_key: z.string(),
    }).array().optional(),
  ),
  on_demand_throughput: resolvableValue(
    z.object({
      max_read_request_units: z.number().optional(),
      max_write_request_units: z.number().optional(),
    }).optional(),
  ),
  point_in_time_recovery: resolvableValue(
    z.object({
      enabled: z.boolean(),
      recovery_period_in_days: z.number().optional(),
    }).optional(),
  ),
  range_key: resolvableValue(z.string().optional()),
  read_capacity: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  replica: resolvableValue(
    z.object({
      arn: z.string(),
      consistency_mode: z.string().optional(),
      deletion_protection_enabled: z.boolean().optional(),
      kms_key_arn: z.string().optional(),
      point_in_time_recovery: z.boolean().optional(),
      propagate_tags: z.boolean().optional(),
      region_name: z.string(),
      stream_arn: z.string(),
      stream_label: z.string(),
    }).array().optional(),
  ),
  restore_date_time: resolvableValue(z.string().optional()),
  restore_source_name: resolvableValue(z.string().optional()),
  restore_source_table_arn: resolvableValue(z.string().optional()),
  restore_to_latest_time: resolvableValue(z.boolean().optional()),
  server_side_encryption: resolvableValue(
    z.object({
      enabled: z.boolean(),
      kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  stream_enabled: resolvableValue(z.boolean().optional()),
  stream_view_type: resolvableValue(z.string().optional()),
  table_class: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  ttl: resolvableValue(
    z.object({
      attribute_name: z.string().optional(),
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  warm_throughput: resolvableValue(
    z.object({
      read_units_per_second: z.number().optional(),
      write_units_per_second: z.number().optional(),
    }).optional(),
  ),
  write_capacity: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  stream_arn: z.string().optional(),
  stream_label: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dynamodb_table

export function AwsDynamodbTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_table'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbTable = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsDynamodbTable, idFilter, baseNode)

export const useAwsDynamodbTables = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsDynamodbTable, idFilter, baseNode)
