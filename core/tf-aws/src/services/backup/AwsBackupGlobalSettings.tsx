import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsBackupGlobalSettingsInputSchema = TfMetaSchema.extend({
  global_settings: resolvableValue(z.record(z.string(), z.string())),
})

export const AwsBackupGlobalSettingsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsBackupGlobalSettingsInputProps =
  & z.input<typeof AwsBackupGlobalSettingsInputSchema>
  & NodeProps

export type AwsBackupGlobalSettingsOutputProps =
  & z.output<typeof AwsBackupGlobalSettingsOutputSchema>
  & z.output<typeof AwsBackupGlobalSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_global_settings

export function AwsBackupGlobalSettings(
  props: Partial<AwsBackupGlobalSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_global_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupGlobalSettingsInputSchema}
      _outputSchema={AwsBackupGlobalSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupGlobalSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupGlobalSettingsOutputProps>(
    AwsBackupGlobalSettings,
    idFilter,
    baseNode,
    optional,
  )
