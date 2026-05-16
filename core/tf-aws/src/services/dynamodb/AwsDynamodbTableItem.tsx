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

export const AwsDynamodbTableItemInputSchema = TfMetaSchema.extend({
  hash_key: resolvableValue(z.string()),
  item: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  range_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDynamodbTableItemOutputSchema = z.object({})

export type AwsDynamodbTableItemInputProps =
  & z.input<typeof AwsDynamodbTableItemInputSchema>
  & NodeProps

export type AwsDynamodbTableItemOutputProps =
  & z.output<typeof AwsDynamodbTableItemOutputSchema>
  & z.output<typeof AwsDynamodbTableItemInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dynamodb_table_item

export function AwsDynamodbTableItem(
  props: Partial<AwsDynamodbTableItemInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_table_item'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDynamodbTableItemInputSchema}
      _outputSchema={AwsDynamodbTableItemOutputSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbTableItem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDynamodbTableItemOutputProps>(
    AwsDynamodbTableItem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDynamodbTableItems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDynamodbTableItemOutputProps>(
    AwsDynamodbTableItem,
    idFilter,
    baseNode,
    optional,
  )
