import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsDynamodbTablesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDynamodbTablesOutputSchema = z.object({
  names: z.string().array().optional(),
})

export type DataAwsDynamodbTablesInputProps =
  & z.input<typeof DataAwsDynamodbTablesInputSchema>
  & NodeProps

export type DataAwsDynamodbTablesOutputProps =
  & z.output<typeof DataAwsDynamodbTablesOutputSchema>
  & z.output<typeof DataAwsDynamodbTablesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_tables

export function DataAwsDynamodbTables(
  props: Partial<DataAwsDynamodbTablesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_tables'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDynamodbTablesInputSchema}
      _outputSchema={DataAwsDynamodbTablesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDynamodbTabless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDynamodbTablesOutputProps>(
    DataAwsDynamodbTables,
    idFilter,
    baseNode,
    optional,
  )
