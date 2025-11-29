import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_catalog_database

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  create_table_default_permission: resolvableValue(
    z.object({
      permissions: z.string().array().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  federated_database: resolvableValue(
    z.object({
      connection_name: z.string().optional(),
      identifier: z.string().optional(),
    }).optional(),
  ),
  location_uri: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_database: resolvableValue(
    z.object({
      catalog_id: z.string(),
      database_name: z.string(),
      region: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueCatalogDatabase(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_catalog_database'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueCatalogDatabase = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueCatalogDatabase, node, id)

export const useAwsGlueCatalogDatabases = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueCatalogDatabase, node, id)
