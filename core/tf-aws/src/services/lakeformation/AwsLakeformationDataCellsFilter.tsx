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

export const AwsLakeformationDataCellsFilterInputSchema = TfMetaSchema.extend({
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
})

export const AwsLakeformationDataCellsFilterOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLakeformationDataCellsFilterInputProps =
  & z.input<typeof AwsLakeformationDataCellsFilterInputSchema>
  & NodeProps

export type AwsLakeformationDataCellsFilterOutputProps =
  & z.output<typeof AwsLakeformationDataCellsFilterOutputSchema>
  & z.output<typeof AwsLakeformationDataCellsFilterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lakeformation_data_cells_filter

export function AwsLakeformationDataCellsFilter(
  props: Partial<AwsLakeformationDataCellsFilterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_data_cells_filter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLakeformationDataCellsFilterInputSchema}
      _outputSchema={AwsLakeformationDataCellsFilterOutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationDataCellsFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLakeformationDataCellsFilterOutputProps>(
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
  useTypedNodes<AwsLakeformationDataCellsFilterOutputProps>(
    AwsLakeformationDataCellsFilter,
    idFilter,
    baseNode,
    optional,
  )
