import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDynamodbTableItem } from './AwsDynamodbTableItem.tsx'

export const DataAwsDynamodbTableItemInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  expression_attribute_names: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  projection_expression: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDynamodbTableItemOutputSchema = z.object({
  item: z.string().optional(),
})

export type DataAwsDynamodbTableItemInputProps =
  & z.input<typeof DataAwsDynamodbTableItemInputSchema>
  & NodeProps

export type DataAwsDynamodbTableItemOutputProps =
  & z.output<typeof DataAwsDynamodbTableItemOutputSchema>
  & z.output<typeof DataAwsDynamodbTableItemInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_table_item

export function DataAwsDynamodbTableItem(
  props: Partial<DataAwsDynamodbTableItemInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDynamodbTableItem
      _type='aws_dynamodb_table_item'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDynamodbTableItemInputSchema}
      _outputSchema={DataAwsDynamodbTableItemOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDynamodbTableItem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDynamodbTableItemOutputProps>(
    DataAwsDynamodbTableItem,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDynamodbTableItems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDynamodbTableItemOutputProps>(
    DataAwsDynamodbTableItem,
    idFilter,
    baseNode,
    optional,
  )
