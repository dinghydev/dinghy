import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsTimestreamwriteTable } from './AwsTimestreamwriteTable.tsx'

export const DataAwsTimestreamwriteTableInputSchema = TfMetaSchema.extend({
  database_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsTimestreamwriteTableOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  database_name: z.string().optional(),
  last_updated_time: z.string().optional(),
  magnetic_store_write_properties: z.object({
    enable_magnetic_store_writes: z.boolean(),
    magnetic_store_rejected_data_location: z.object({
      s3_configuration: z.object({
        bucket_name: z.string(),
        encryption_option: z.string(),
        kms_key_id: z.string(),
        object_key_prefix: z.string(),
      }).array(),
    }).array(),
  }).array().optional(),
  name: z.string().optional(),
  retention_properties: z.object({
    magnetic_store_retention_period_in_days: z.number(),
    memory_store_retention_period_in_hours: z.number(),
  }).array().optional(),
  schema: z.object({
    composite_partition_key: z.object({
      enforcement_in_record: z.string(),
      name: z.string(),
      type: z.string(),
    }).array(),
  }).array().optional(),
  table_status: z.string().optional(),
})

export type DataAwsTimestreamwriteTableInputProps =
  & z.input<typeof DataAwsTimestreamwriteTableInputSchema>
  & NodeProps

export type DataAwsTimestreamwriteTableOutputProps =
  & z.output<typeof DataAwsTimestreamwriteTableOutputSchema>
  & z.output<typeof DataAwsTimestreamwriteTableInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/timestreamwrite_table

export function DataAwsTimestreamwriteTable(
  props: Partial<DataAwsTimestreamwriteTableInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsTimestreamwriteTable
      _type='aws_timestreamwrite_table'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsTimestreamwriteTableInputSchema}
      _outputSchema={DataAwsTimestreamwriteTableOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsTimestreamwriteTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsTimestreamwriteTableOutputProps>(
    DataAwsTimestreamwriteTable,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsTimestreamwriteTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsTimestreamwriteTableOutputProps>(
    DataAwsTimestreamwriteTable,
    idFilter,
    baseNode,
    optional,
  )
