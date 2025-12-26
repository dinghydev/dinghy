import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlueDataCatalogEncryptionSettings } from './AwsGlueDataCatalogEncryptionSettings.tsx'

export const InputSchema = z.object({
  catalog_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/glue_data_catalog_encryption_settings

export function DataAwsGlueDataCatalogEncryptionSettings(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsGlueDataCatalogEncryptionSettings
      _type='aws_glue_data_catalog_encryption_settings'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlueDataCatalogEncryptionSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsGlueDataCatalogEncryptionSettings,
    idFilter,
    baseNode,
    optional,
  )
