import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/glue_data_catalog_encryption_settings

export function AwsGlueDataCatalogEncryptionSettings(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueDataCatalogEncryptionSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsGlueDataCatalogEncryptionSettings,
    idFilter,
    baseNode,
    optional,
  )
