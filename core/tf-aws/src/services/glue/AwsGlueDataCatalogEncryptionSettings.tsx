import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsGlueDataCatalogEncryptionSettingsInputSchema = TfMetaSchema
  .extend({
    data_catalog_encryption_settings: resolvableValue(z.object({
      connection_password_encryption: z.object({
        aws_kms_key_id: z.string().optional(),
        return_connection_password_encrypted: z.boolean(),
      }),
      encryption_at_rest: z.object({
        catalog_encryption_mode: z.string(),
        catalog_encryption_service_role: z.string().optional(),
        sse_aws_kms_key_id: z.string().optional(),
      }),
    })),
    catalog_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsGlueDataCatalogEncryptionSettingsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsGlueDataCatalogEncryptionSettingsInputProps =
  & z.input<typeof AwsGlueDataCatalogEncryptionSettingsInputSchema>
  & NodeProps

export type AwsGlueDataCatalogEncryptionSettingsOutputProps =
  & z.output<typeof AwsGlueDataCatalogEncryptionSettingsOutputSchema>
  & z.output<typeof AwsGlueDataCatalogEncryptionSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_data_catalog_encryption_settings

export function AwsGlueDataCatalogEncryptionSettings(
  props: Partial<AwsGlueDataCatalogEncryptionSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_data_catalog_encryption_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueDataCatalogEncryptionSettingsInputSchema}
      _outputSchema={AwsGlueDataCatalogEncryptionSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueDataCatalogEncryptionSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueDataCatalogEncryptionSettingsOutputProps>(
    AwsGlueDataCatalogEncryptionSettings,
    idFilter,
    baseNode,
    optional,
  )
