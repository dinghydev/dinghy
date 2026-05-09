import { getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsDynamodbTableInputSchema } from '../../services/dynamodb/AwsDynamodbTable.tsx'

const AttributeTypeSchema = z.enum(['S', 'N', 'B'])

const TableSchema = AwsDynamodbTableInputSchema.extend({
  // Composite-only ergonomic shortcut: a {name -> type} map that the
  // composite expands into the underlying `attribute[]` shape.
  attributes: z.record(z.string(), AttributeTypeSchema).optional(),
})

const TablesSchema = z.record(z.string(), TableSchema.loose().partial())

export type DynamodbTableType =
  & Omit<z.output<typeof TableSchema>, 'attributes'>
  & {
    name: string
    attribute: { name: string; type: string }[]
  }

export function parseDynamodbTables(
  tables?: any,
): Record<string, DynamodbTableType> {
  const renderOptions = getRenderOptions()
  const cfg = tables || (renderOptions as any).dynamodbTables
  if (!cfg) {
    throw new Error('dynamodbTables not configured')
  }
  const parsed = TablesSchema.parse(cfg) as Record<string, any>
  for (const [name, table] of Object.entries(parsed)) {
    table.name ??= name
    table.billing_mode ??= 'PAY_PER_REQUEST'
    const attrMap: Record<string, string> = { ...(table.attributes ?? {}) }
    if (table.hash_key && !attrMap[table.hash_key]) {
      attrMap[table.hash_key] = 'S'
    }
    if (table.range_key && !attrMap[table.range_key]) {
      attrMap[table.range_key] = 'S'
    }
    table.attribute = Object.entries(attrMap).map(([n, type]) => ({
      name: n,
      type,
    }))
    delete table.attributes
    if (
      table.ttl && table.ttl.attribute_name && table.ttl.enabled === undefined
    ) {
      table.ttl.enabled = true
    }
  }
  return parsed as Record<string, DynamodbTableType>
}
