import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlueCatalogTable } from './AwsGlueCatalogTable.tsx'

export const InputSchema = z.object({
  database_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  query_as_of_time: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  transaction_id: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  parameters: z.record(z.string(), z.string()).optional(),
  partition_index: z.object({
    index_name: z.string(),
    index_status: z.string(),
    keys: z.string().array(),
  }).array().optional(),
  partition_keys: z.object({
    comment: z.string(),
    name: z.string(),
    parameters: z.record(z.string(), z.string()),
    type: z.string(),
  }).array().optional(),
  retention: z.number().optional(),
  storage_descriptor: z.object({
    additional_locations: z.string().array(),
    bucket_columns: z.string().array(),
    columns: z.object({
      comment: z.string(),
      name: z.string(),
      parameters: z.record(z.string(), z.string()),
      type: z.string(),
    }).array(),
    compressed: z.boolean(),
    input_format: z.string(),
    location: z.string(),
    number_of_buckets: z.number(),
    output_format: z.string(),
    parameters: z.record(z.string(), z.string()),
    schema_reference: z.object({
      schema_id: z.object({
        registry_name: z.string(),
        schema_arn: z.string(),
        schema_name: z.string(),
      }).array(),
      schema_version_id: z.string(),
      schema_version_number: z.number(),
    }).array(),
    ser_de_info: z.object({
      name: z.string(),
      parameters: z.record(z.string(), z.string()),
      serialization_library: z.string(),
    }).array(),
    skewed_info: z.object({
      skewed_column_names: z.string().array(),
      skewed_column_value_location_maps: z.record(z.string(), z.string()),
      skewed_column_values: z.string().array(),
    }).array(),
    sort_columns: z.object({
      column: z.string(),
      sort_order: z.number(),
    }).array(),
    stored_as_sub_directories: z.boolean(),
  }).array().optional(),
  table_type: z.string().optional(),
  target_table: z.object({
    catalog_id: z.string(),
    database_name: z.string(),
    name: z.string(),
    region: z.string(),
  }).array().optional(),
  view_expanded_text: z.string().optional(),
  view_original_text: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/glue_catalog_table

export function DataAwsGlueCatalogTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGlueCatalogTable
      _type='aws_glue_catalog_table'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlueCatalogTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsGlueCatalogTable,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsGlueCatalogTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsGlueCatalogTable,
    idFilter,
    baseNode,
    optional,
  )
