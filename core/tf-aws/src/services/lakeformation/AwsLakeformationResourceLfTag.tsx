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

export const InputSchema = TfMetaSchema.extend({
  catalog_id: resolvableValue(z.string().optional()),
  database: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      name: z.string(),
    }).array().optional(),
  ),
  lf_tag: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      key: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  table: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      database_name: z.string(),
      name: z.string().optional(),
      wildcard: z.boolean().optional(),
    }).array().optional(),
  ),
  table_with_columns: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      column_names: z.string().array().optional(),
      database_name: z.string(),
      name: z.string(),
      column_wildcard: z.object({
        excluded_column_names: z.string().array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lakeformation_resource_lf_tag

export function AwsLakeformationResourceLfTag(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_resource_lf_tag'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationResourceLfTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLakeformationResourceLfTag,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLakeformationResourceLfTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLakeformationResourceLfTag,
    idFilter,
    baseNode,
    optional,
  )
