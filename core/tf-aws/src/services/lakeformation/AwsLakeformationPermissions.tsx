import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  permissions: resolvableValue(z.string().array()),
  principal: resolvableValue(z.string()),
  catalog_id: resolvableValue(z.string().optional()),
  catalog_resource: resolvableValue(z.boolean().optional()),
  data_cells_filter: resolvableValue(
    z.object({
      database_name: z.string(),
      name: z.string(),
      table_catalog_id: z.string(),
      table_name: z.string(),
    }).optional(),
  ),
  data_location: resolvableValue(
    z.object({
      arn: z.string(),
      catalog_id: z.string().optional(),
    }).optional(),
  ),
  database: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      name: z.string(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  lf_tag: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      key: z.string(),
      values: z.string().array(),
    }).optional(),
  ),
  lf_tag_policy: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      resource_type: z.string(),
      expression: z.object({
        key: z.string(),
        values: z.string().array(),
      }).array(),
    }).optional(),
  ),
  permissions_with_grant_option: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  table: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      database_name: z.string(),
      name: z.string().optional(),
      wildcard: z.boolean().optional(),
    }).optional(),
  ),
  table_with_columns: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      column_names: z.string().array().optional(),
      database_name: z.string(),
      excluded_column_names: z.string().array().optional(),
      name: z.string(),
      wildcard: z.boolean().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lakeformation_permissions

export function AwsLakeformationPermissions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lakeformation_permissions'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLakeformationPermissionss = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsLakeformationPermissions, idFilter, baseNode)
