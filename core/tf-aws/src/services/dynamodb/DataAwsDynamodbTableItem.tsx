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

export const InputSchema = z.object({
  __key: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  expression_attribute_names: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  projection_expression: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  item: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dynamodb_table_item

export function DataAwsDynamodbTableItem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDynamodbTableItem
      _type='aws_dynamodb_table_item'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDynamodbTableItem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsDynamodbTableItem,
    idFilter,
    baseNode,
    optional,
  )
