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
  last_updated_by: resolvableValue(z.string()),
  principal: resolvableValue(
    z.object({
      data_lake_principal_identifier: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  resource_data: resolvableValue(
    z.object({
      catalog: z.object({
        id: z.string().optional(),
      }).array().optional(),
      data_cells_filter: z.object({
        database_name: z.string().optional(),
        name: z.string().optional(),
        table_catalog_id: z.string().optional(),
        table_name: z.string().optional(),
      }).array().optional(),
      data_location: z.object({
        catalog_id: z.string().optional(),
        resource_arn: z.string(),
      }).array().optional(),
      database: z.object({
        catalog_id: z.string().optional(),
        name: z.string(),
      }).array().optional(),
      lf_tag: z.object({
        catalog_id: z.string().optional(),
        key: z.string(),
        value: z.string(),
      }).array().optional(),
      lf_tag_expression: z.object({
        catalog_id: z.string().optional(),
        name: z.string(),
      }).array().optional(),
      lf_tag_policy: z.object({
        catalog_id: z.string().optional(),
        expression: z.string().array().optional(),
        expression_name: z.string().optional(),
        resource_type: z.string(),
      }).array().optional(),
      table: z.object({
        catalog_id: z.string().optional(),
        database_name: z.string(),
        name: z.string().optional(),
        wildcard: z.boolean().optional(),
      }).array().optional(),
      table_with_columns: z.object({
        catalog_id: z.string().optional(),
        column_names: z.string().array().optional(),
        database_name: z.string(),
        name: z.string(),
        column_wildcard: z.object({
          excluded_column_names: z.string().array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  condition: z.object({
    expression: z.string(),
  }).array().optional().optional(),
  last_modified: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_opt_in

export function AwsLakeformationOptIn(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_opt_in'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationOptIn = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsLakeformationOptIn, idFilter, baseNode)

export const useAwsLakeformationOptIns = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsLakeformationOptIn, idFilter, baseNode)
