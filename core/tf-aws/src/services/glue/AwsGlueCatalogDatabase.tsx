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
  name: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  create_table_default_permission: resolvableValue(
    z.object({
      permissions: z.string().array().optional(),
      principal: z.object({
        data_lake_principal_identifier: z.string().optional(),
      }).optional(),
    }).array().optional(),
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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_catalog_database

export function AwsGlueCatalogDatabase(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsGlueCatalogDatabase = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsGlueCatalogDatabase,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueCatalogDatabases = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsGlueCatalogDatabase,
    idFilter,
    baseNode,
    optional,
  )
