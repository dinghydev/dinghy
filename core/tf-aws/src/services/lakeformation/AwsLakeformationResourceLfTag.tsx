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

export const AwsLakeformationResourceLfTagInputSchema = TfMetaSchema.extend({
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

export const AwsLakeformationResourceLfTagOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLakeformationResourceLfTagInputProps =
  & z.input<typeof AwsLakeformationResourceLfTagInputSchema>
  & NodeProps

export type AwsLakeformationResourceLfTagOutputProps =
  & z.output<typeof AwsLakeformationResourceLfTagOutputSchema>
  & z.output<typeof AwsLakeformationResourceLfTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lakeformation_resource_lf_tag

export function AwsLakeformationResourceLfTag(
  props: Partial<AwsLakeformationResourceLfTagInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_resource_lf_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLakeformationResourceLfTagInputSchema}
      _outputSchema={AwsLakeformationResourceLfTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationResourceLfTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLakeformationResourceLfTagOutputProps>(
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
  useTypedNodes<AwsLakeformationResourceLfTagOutputProps>(
    AwsLakeformationResourceLfTag,
    idFilter,
    baseNode,
    optional,
  )
