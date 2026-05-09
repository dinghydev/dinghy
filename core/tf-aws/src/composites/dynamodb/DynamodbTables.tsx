import { type NodeProps, Shape, toId } from '@dinghy/base-components'
import { AwsDynamodbTable } from '../../services/dynamodb/AwsDynamodbTable.tsx'
import { type DynamodbTableType, parseDynamodbTables } from './types.ts'

export function DynamodbTables(props: NodeProps) {
  const tables = parseDynamodbTables(props.dynamodbTables as any)
  const TablesComponent = props._components?.dynamodbTables as typeof Shape ||
    Shape
  const TableComponent =
    props._components?.dynamodbTable as typeof AwsDynamodbTable ||
    AwsDynamodbTable
  return (
    <TablesComponent _direction='vertical' {...props}>
      {Object.values(tables).map((table: DynamodbTableType) => (
        <TableComponent
          key={table.name}
          _id={toId(`awsdynamodbtable_${table.name}`)}
          _title={table.name}
          {...table}
        />
      ))}
      {props.children}
    </TablesComponent>
  )
}
