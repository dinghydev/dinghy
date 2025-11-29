import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_data_cells_filter

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
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLakeformationDataCellsFilter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsLakeformationDataCellsFilter = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLakeformationDataCellsFilter, node, id)

export const useAwsLakeformationDataCellsFilters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLakeformationDataCellsFilter, node, id)
