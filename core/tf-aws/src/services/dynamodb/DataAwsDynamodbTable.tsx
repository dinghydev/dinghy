import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDynamodbTable } from './AwsDynamodbTable.tsx'

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  server_side_encryption: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  attribute: z.set(z.object({
    name: z.string(),
    type: z.string(),
  })).optional(),
  billing_mode: z.string().optional(),
  deletion_protection_enabled: z.boolean().optional(),
  global_secondary_index: z.set(z.object({
    hash_key: z.string(),
    name: z.string(),
    non_key_attributes: z.string().array(),
    on_demand_throughput: z.object({
      max_read_request_units: z.number(),
      max_write_request_units: z.number(),
    }).array(),
    projection_type: z.string(),
    range_key: z.string(),
    read_capacity: z.number(),
    warm_throughput: z.object({
      read_units_per_second: z.number(),
      write_units_per_second: z.number(),
    }).array(),
    write_capacity: z.number(),
  })).optional(),
  hash_key: z.string().optional(),
  local_secondary_index: z.set(z.object({
    name: z.string(),
    non_key_attributes: z.string().array(),
    projection_type: z.string(),
    range_key: z.string(),
  })).optional(),
  on_demand_throughput: z.object({
    max_read_request_units: z.number(),
    max_write_request_units: z.number(),
  }).array().optional(),
  point_in_time_recovery: z.object({
    enabled: z.boolean(),
    recovery_period_in_days: z.number(),
  }).array().optional(),
  range_key: z.string().optional(),
  read_capacity: z.number().optional(),
  replica: z.set(z.object({
    kms_key_arn: z.string(),
    region_name: z.string(),
  })).optional(),
  stream_arn: z.string().optional(),
  stream_enabled: z.boolean().optional(),
  stream_label: z.string().optional(),
  stream_view_type: z.string().optional(),
  table_class: z.string().optional(),
  ttl: z.set(z.object({
    attribute_name: z.string(),
    enabled: z.boolean(),
  })).optional(),
  warm_throughput: z.object({
    read_units_per_second: z.number(),
    write_units_per_second: z.number(),
  }).array().optional(),
  write_capacity: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/dynamodb_table

export function DataAwsDynamodbTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDynamodbTable
      _type='aws_dynamodb_table'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDynamodbTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsDynamodbTable, idFilter, baseNode, optional)

export const useDataAwsDynamodbTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsDynamodbTable, idFilter, baseNode, optional)
