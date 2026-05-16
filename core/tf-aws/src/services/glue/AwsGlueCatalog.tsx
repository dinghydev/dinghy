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

export const AwsGlueCatalogInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  allow_full_table_external_data_access: resolvableValue(z.string().optional()),
  catalog_properties: resolvableValue(
    z.object({
      custom_properties: z.record(z.string(), z.string()).optional(),
      data_lake_access_properties: z.object({
        catalog_type: z.string().optional(),
        data_lake_access: z.boolean().optional(),
        data_transfer_role: z.string().optional(),
        kms_key: z.string().optional(),
        managed_workgroup_name: z.string().optional(),
        managed_workgroup_status: z.string().optional(),
        redshift_database_name: z.string().optional(),
        status_message: z.string().optional(),
      }).array().optional(),
      iceberg_optimization_properties: z.object({
        compaction: z.record(z.string(), z.string()).optional(),
        orphan_file_deletion: z.record(z.string(), z.string()).optional(),
        retention: z.record(z.string(), z.string()).optional(),
        role_arn: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  create_database_default_permissions: resolvableValue(
    z.object({
      permissions: z.string().array().optional(),
      principal: z.object({
        data_lake_principal_identifier: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  create_table_default_permissions: resolvableValue(
    z.object({
      permissions: z.string().array().optional(),
      principal: z.object({
        data_lake_principal_identifier: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  federated_catalog: resolvableValue(
    z.object({
      connection_name: z.string().optional(),
      connection_type: z.string().optional(),
      identifier: z.string().optional(),
    }).array().optional(),
  ),
  overwrite_child_resource_permissions_with_default: resolvableValue(
    z.string().optional(),
  ),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_redshift_catalog: resolvableValue(
    z.object({
      catalog_arn: z.string(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsGlueCatalogOutputSchema = z.object({
  arn: z.string().optional(),
  catalog_id: z.string().optional(),
  create_time: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export const AwsGlueCatalogImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsGlueCatalogInputProps =
  & z.input<typeof AwsGlueCatalogInputSchema>
  & z.input<typeof AwsGlueCatalogImportSchema>
  & NodeProps

export type AwsGlueCatalogOutputProps =
  & z.output<typeof AwsGlueCatalogOutputSchema>
  & z.output<typeof AwsGlueCatalogInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_catalog

export function AwsGlueCatalog(props: Partial<AwsGlueCatalogInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_catalog'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueCatalogInputSchema}
      _outputSchema={AwsGlueCatalogOutputSchema}
      _importSchema={AwsGlueCatalogImportSchema}
      {...props}
    />
  )
}

export const useAwsGlueCatalog = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueCatalogOutputProps>(
    AwsGlueCatalog,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueCatalogs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueCatalogOutputProps>(
    AwsGlueCatalog,
    idFilter,
    baseNode,
    optional,
  )
