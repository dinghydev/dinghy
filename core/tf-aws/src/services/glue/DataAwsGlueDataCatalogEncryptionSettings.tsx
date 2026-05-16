import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlueDataCatalogEncryptionSettings } from './AwsGlueDataCatalogEncryptionSettings.tsx'

export const DataAwsGlueDataCatalogEncryptionSettingsInputSchema = TfMetaSchema
  .extend({
    catalog_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsGlueDataCatalogEncryptionSettingsOutputSchema = z.object({
  data_catalog_encryption_settings: z.object({
    connection_password_encryption: z.object({
      aws_kms_key_id: z.string(),
      return_connection_password_encrypted: z.boolean(),
    }).array(),
    encryption_at_rest: z.object({
      catalog_encryption_mode: z.string(),
      catalog_encryption_service_role: z.string(),
      sse_aws_kms_key_id: z.string(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsGlueDataCatalogEncryptionSettingsInputProps =
  & z.input<typeof DataAwsGlueDataCatalogEncryptionSettingsInputSchema>
  & NodeProps

export type DataAwsGlueDataCatalogEncryptionSettingsOutputProps =
  & z.output<typeof DataAwsGlueDataCatalogEncryptionSettingsOutputSchema>
  & z.output<typeof DataAwsGlueDataCatalogEncryptionSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/glue_data_catalog_encryption_settings

export function DataAwsGlueDataCatalogEncryptionSettings(
  props: Partial<DataAwsGlueDataCatalogEncryptionSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGlueDataCatalogEncryptionSettings
      _type='aws_glue_data_catalog_encryption_settings'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsGlueDataCatalogEncryptionSettingsInputSchema}
      _outputSchema={DataAwsGlueDataCatalogEncryptionSettingsOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlueDataCatalogEncryptionSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsGlueDataCatalogEncryptionSettingsOutputProps>(
    DataAwsGlueDataCatalogEncryptionSettings,
    idFilter,
    baseNode,
    optional,
  )
