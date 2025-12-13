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

export const InputSchema = z.object({
  database_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/timestreamwrite_table

export function DataAwsTimestreamwriteTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsTimestreamwriteTable
      _type='aws_timestreamwrite_table'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsTimestreamwriteTable = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsTimestreamwriteTable, idFilter, baseNode)

export const useDataAwsTimestreamwriteTables = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsTimestreamwriteTable, idFilter, baseNode)
