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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  attribute: resolvableValue(
    z.object({
      name: z.string(),
      type: z.string(),
    }).array(),
  ),
  billing_mode: resolvableValue(z.string()),
  deletion_protection_enabled: resolvableValue(z.boolean()),
  global_secondary_index: resolvableValue(
    z.object({
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
    }).array(),
  ),
  hash_key: resolvableValue(z.string()),
  local_secondary_index: resolvableValue(
    z.object({
      name: z.string(),
      non_key_attributes: z.string().array(),
      projection_type: z.string(),
      range_key: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  on_demand_throughput: resolvableValue(
    z.object({
      max_read_request_units: z.number(),
      max_write_request_units: z.number(),
    }).array(),
  ),
  point_in_time_recovery: resolvableValue(
    z.object({
      enabled: z.boolean(),
      recovery_period_in_days: z.number(),
    }).array(),
  ),
  range_key: resolvableValue(z.string()),
  read_capacity: resolvableValue(z.number()),
  replica: resolvableValue(
    z.object({
      kms_key_arn: z.string(),
      region_name: z.string(),
    }).array(),
  ),
  stream_arn: resolvableValue(z.string()),
  stream_enabled: resolvableValue(z.boolean()),
  stream_label: resolvableValue(z.string()),
  stream_view_type: resolvableValue(z.string()),
  table_class: resolvableValue(z.string()),
  ttl: resolvableValue(
    z.object({
      attribute_name: z.string(),
      enabled: z.boolean(),
    }).array(),
  ),
  warm_throughput: resolvableValue(
    z.object({
      read_units_per_second: z.number(),
      write_units_per_second: z.number(),
    }).array(),
  ),
  write_capacity: resolvableValue(z.number()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  server_side_encryption: resolvableValue(
    z.object({
      enabled: z.boolean(),
      kms_key_arn: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dynamodb_table

export function DataAwsDynamodbTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useDataAwsDynamodbTable = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsDynamodbTable, idFilter, baseNode)

export const useDataAwsDynamodbTables = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsDynamodbTable, idFilter, baseNode)
