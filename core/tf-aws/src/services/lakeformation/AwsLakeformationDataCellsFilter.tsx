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
  region: resolvableValue(z.string().optional()),
  table_data: resolvableValue(
    z.object({
      column_names: z.string().array().optional(),
      database_name: z.string(),
      name: z.string(),
      table_catalog_id: z.string(),
      table_name: z.string(),
      version_id: z.string().optional(),
      column_wildcard: z.object({
        excluded_column_names: z.string().array().optional(),
      }).array().optional(),
      row_filter: z.object({
        filter_expression: z.string().optional(),
        all_rows_wildcard: z.object({}).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_data_cells_filter

export function AwsLakeformationDataCellsFilter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_data_cells_filter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationDataCellsFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLakeformationDataCellsFilter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLakeformationDataCellsFilters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLakeformationDataCellsFilter,
    idFilter,
    baseNode,
    optional,
  )
