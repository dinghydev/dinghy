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

export const AwsSchemasSchemaInputSchema = TfMetaSchema.extend({
  content: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  registry_name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSchemasSchemaOutputSchema = z.object({
  arn: z.string().optional(),
  last_modified: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
  version_created_date: z.string().optional(),
})

export type AwsSchemasSchemaInputProps =
  & z.input<typeof AwsSchemasSchemaInputSchema>
  & NodeProps

export type AwsSchemasSchemaOutputProps =
  & z.output<typeof AwsSchemasSchemaOutputSchema>
  & z.output<typeof AwsSchemasSchemaInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/schemas_schema

export function AwsSchemasSchema(props: Partial<AwsSchemasSchemaInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_schemas_schema'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSchemasSchemaInputSchema}
      _outputSchema={AwsSchemasSchemaOutputSchema}
      {...props}
    />
  )
}

export const useAwsSchemasSchema = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSchemasSchemaOutputProps>(
    AwsSchemasSchema,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSchemasSchemas = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSchemasSchemaOutputProps>(
    AwsSchemasSchema,
    idFilter,
    baseNode,
    optional,
  )
