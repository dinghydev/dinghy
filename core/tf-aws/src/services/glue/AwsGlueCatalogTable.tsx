import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_catalog_table

export const InputSchema = z.object({
  database_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  open_table_format_input: resolvableValue(
    z.object({
      iceberg_input: z.object({
        metadata_operation: z.string(),
        version: z.string().optional(),
      }),
    }).optional(),
  ),
  owner: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  partition_index: resolvableValue(
    z.object({
      index_name: z.string(),
      index_status: z.string(),
      keys: z.string().array(),
    }).optional(),
  ),
  partition_keys: resolvableValue(
    z.object({
      comment: z.string().optional(),
      name: z.string(),
      parameters: z.record(z.string(), z.string()).optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  retention: resolvableValue(z.number().optional()),
  storage_descriptor: resolvableValue(
    z.object({
      additional_locations: z.string().array().optional(),
      bucket_columns: z.string().array().optional(),
      compressed: z.boolean().optional(),
      input_format: z.string().optional(),
      location: z.string().optional(),
      number_of_buckets: z.number().optional(),
      output_format: z.string().optional(),
      parameters: z.record(z.string(), z.string()).optional(),
      stored_as_sub_directories: z.boolean().optional(),
    }).optional(),
  ),
  table_type: resolvableValue(z.string().optional()),
  target_table: resolvableValue(
    z.object({
      catalog_id: z.string(),
      database_name: z.string(),
      name: z.string(),
      region: z.string().optional(),
    }).optional(),
  ),
  view_expanded_text: resolvableValue(z.string().optional()),
  view_original_text: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueCatalogTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_catalog_table'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueCatalogTable = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueCatalogTable, node, id)

export const useAwsGlueCatalogTables = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueCatalogTable, node, id)
