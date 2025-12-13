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
  hash_key: resolvableValue(z.string()),
  item: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  range_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dynamodb_table_item

export function AwsDynamodbTableItem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_table_item'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbTableItem = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsDynamodbTableItem, idFilter, baseNode)

export const useAwsDynamodbTableItems = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsDynamodbTableItem, idFilter, baseNode)
