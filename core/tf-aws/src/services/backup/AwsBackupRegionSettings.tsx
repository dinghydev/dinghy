import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsBackupRegionSettingsInputSchema = TfMetaSchema.extend({
  resource_type_opt_in_preference: resolvableValue(
    z.record(z.string(), z.boolean()),
  ),
  region: resolvableValue(z.string().optional()),
  resource_type_management_preference: resolvableValue(
    z.record(z.string(), z.boolean()).optional(),
  ),
})

export const AwsBackupRegionSettingsOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsBackupRegionSettingsInputProps =
  & z.input<typeof AwsBackupRegionSettingsInputSchema>
  & NodeProps

export type AwsBackupRegionSettingsOutputProps =
  & z.output<typeof AwsBackupRegionSettingsOutputSchema>
  & z.output<typeof AwsBackupRegionSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_region_settings

export function AwsBackupRegionSettings(
  props: Partial<AwsBackupRegionSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_region_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupRegionSettingsInputSchema}
      _outputSchema={AwsBackupRegionSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupRegionSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupRegionSettingsOutputProps>(
    AwsBackupRegionSettings,
    idFilter,
    baseNode,
    optional,
  )
