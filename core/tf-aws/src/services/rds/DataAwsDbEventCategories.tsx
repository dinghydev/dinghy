import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsDbEventCategoriesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  source_type: resolvableValue(z.string().optional()),
})

export const DataAwsDbEventCategoriesOutputSchema = z.object({
  event_categories: z.string().array().optional(),
  id: z.string().optional(),
})

export type DataAwsDbEventCategoriesInputProps =
  & z.input<typeof DataAwsDbEventCategoriesInputSchema>
  & NodeProps

export type DataAwsDbEventCategoriesOutputProps =
  & z.output<typeof DataAwsDbEventCategoriesOutputSchema>
  & z.output<typeof DataAwsDbEventCategoriesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/db_event_categories

export function DataAwsDbEventCategories(
  props: Partial<DataAwsDbEventCategoriesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_event_categories'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDbEventCategoriesInputSchema}
      _outputSchema={DataAwsDbEventCategoriesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDbEventCategoriess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDbEventCategoriesOutputProps>(
    DataAwsDbEventCategories,
    idFilter,
    baseNode,
    optional,
  )
