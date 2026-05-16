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

export const AwsGlueSchemaInputSchema = TfMetaSchema.extend({
  compatibility: resolvableValue(z.string()),
  data_format: resolvableValue(z.string()),
  schema_definition: resolvableValue(z.string()),
  schema_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  registry_arn: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGlueSchemaOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  latest_schema_version: z.number().optional(),
  next_schema_version: z.number().optional(),
  registry_name: z.string().optional(),
  schema_checkpoint: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsGlueSchemaImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsGlueSchemaInputProps =
  & z.input<typeof AwsGlueSchemaInputSchema>
  & z.input<typeof AwsGlueSchemaImportSchema>
  & NodeProps

export type AwsGlueSchemaOutputProps =
  & z.output<typeof AwsGlueSchemaOutputSchema>
  & z.output<typeof AwsGlueSchemaInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_schema

export function AwsGlueSchema(props: Partial<AwsGlueSchemaInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_schema'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueSchemaInputSchema}
      _outputSchema={AwsGlueSchemaOutputSchema}
      _importSchema={AwsGlueSchemaImportSchema}
      {...props}
    />
  )
}

export const useAwsGlueSchema = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueSchemaOutputProps>(
    AwsGlueSchema,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueSchemas = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueSchemaOutputProps>(
    AwsGlueSchema,
    idFilter,
    baseNode,
    optional,
  )
