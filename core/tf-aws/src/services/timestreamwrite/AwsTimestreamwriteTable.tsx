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
  database_name: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  magnetic_store_write_properties: resolvableValue(
    z.object({
      enable_magnetic_store_writes: z.boolean().optional(),
      magnetic_store_rejected_data_location: z.object({
        s3_configuration: z.object({
          bucket_name: z.string().optional(),
          encryption_option: z.string().optional(),
          kms_key_id: z.string().optional(),
          object_key_prefix: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  retention_properties: resolvableValue(
    z.object({
      magnetic_store_retention_period_in_days: z.number(),
      memory_store_retention_period_in_hours: z.number(),
    }).optional(),
  ),
  schema: resolvableValue(
    z.object({
      composite_partition_key: z.object({
        enforcement_in_record: z.string().optional(),
        name: z.string().optional(),
        type: z.string(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/timestreamwrite_table

export function AwsTimestreamwriteTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_timestreamwrite_table'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTimestreamwriteTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsTimestreamwriteTable,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTimestreamwriteTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsTimestreamwriteTable,
    idFilter,
    baseNode,
    optional,
  )
