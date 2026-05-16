import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsWorkspaceswebUserAccessLoggingSettingsInputSchema = TfMetaSchema
  .extend({
    kinesis_stream_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsWorkspaceswebUserAccessLoggingSettingsOutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  user_access_logging_settings_arn: z.string().optional(),
})

export type AwsWorkspaceswebUserAccessLoggingSettingsInputProps =
  & z.input<typeof AwsWorkspaceswebUserAccessLoggingSettingsInputSchema>
  & NodeProps

export type AwsWorkspaceswebUserAccessLoggingSettingsOutputProps =
  & z.output<typeof AwsWorkspaceswebUserAccessLoggingSettingsOutputSchema>
  & z.output<typeof AwsWorkspaceswebUserAccessLoggingSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_user_access_logging_settings

export function AwsWorkspaceswebUserAccessLoggingSettings(
  props: Partial<AwsWorkspaceswebUserAccessLoggingSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_user_access_logging_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebUserAccessLoggingSettingsInputSchema}
      _outputSchema={AwsWorkspaceswebUserAccessLoggingSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebUserAccessLoggingSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebUserAccessLoggingSettingsOutputProps>(
    AwsWorkspaceswebUserAccessLoggingSettings,
    idFilter,
    baseNode,
    optional,
  )
