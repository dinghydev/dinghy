import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLakeformationPermissions } from './AwsLakeformationPermissions.tsx'

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  permissions: z.string().array().optional(),
  permissions_with_grant_option: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lakeformation_permissions

export function DataAwsLakeformationPermissions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLakeformationPermissions
      _type='aws_lakeformation_permissions'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLakeformationPermissionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsLakeformationPermissions,
    idFilter,
    baseNode,
    optional,
  )
