import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlueCatalog } from './AwsGlueCatalog.tsx'

export const DataAwsGlueCatalogInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsGlueCatalogOutputSchema = z.object({
  allow_full_table_external_data_access: z.string().optional(),
  arn: z.string().optional(),
  catalog_id: z.string().optional(),
  catalog_properties: z.object({
    custom_properties: z.record(z.string(), z.string()),
    data_lake_access_properties: z.object({
      catalog_type: z.string(),
      data_lake_access: z.boolean(),
      data_transfer_role: z.string(),
      kms_key: z.string(),
      managed_workgroup_name: z.string(),
      managed_workgroup_status: z.string(),
      redshift_database_name: z.string(),
      status_message: z.string(),
    }).array(),
    iceberg_optimization_properties: z.object({
      compaction: z.record(z.string(), z.string()),
      orphan_file_deletion: z.record(z.string(), z.string()),
      retention: z.record(z.string(), z.string()),
      role_arn: z.string(),
    }).array(),
  }).array().optional(),
  create_database_default_permissions: z.object({
    permissions: z.string().array(),
    principal: z.object({
      data_lake_principal_identifier: z.string(),
    }).array(),
  }).array().optional(),
  create_table_default_permissions: z.object({
    permissions: z.string().array(),
    principal: z.object({
      data_lake_principal_identifier: z.string(),
    }).array(),
  }).array().optional(),
  create_time: z.string().optional(),
  description: z.string().optional(),
  federated_catalog: z.object({
    connection_name: z.string(),
    connection_type: z.string(),
    identifier: z.string(),
  }).array().optional(),
  parameters: z.record(z.string(), z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  target_redshift_catalog: z.object({
    catalog_arn: z.string(),
  }).array().optional(),
  update_time: z.string().optional(),
})

export type DataAwsGlueCatalogInputProps =
  & z.input<typeof DataAwsGlueCatalogInputSchema>
  & NodeProps

export type DataAwsGlueCatalogOutputProps =
  & z.output<typeof DataAwsGlueCatalogOutputSchema>
  & z.output<typeof DataAwsGlueCatalogInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/glue_catalog

export function DataAwsGlueCatalog(
  props: Partial<DataAwsGlueCatalogInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGlueCatalog
      _type='aws_glue_catalog'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsGlueCatalogInputSchema}
      _outputSchema={DataAwsGlueCatalogOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlueCatalog = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsGlueCatalogOutputProps>(
    DataAwsGlueCatalog,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsGlueCatalogs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsGlueCatalogOutputProps>(
    DataAwsGlueCatalog,
    idFilter,
    baseNode,
    optional,
  )
