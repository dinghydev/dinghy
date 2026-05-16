import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsWorkspaceswebIpAccessSettingsInputSchema = TfMetaSchema.extend({
  display_name: resolvableValue(z.string()),
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  customer_managed_key: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  ip_rule: resolvableValue(
    z.object({
      description: z.string().optional(),
      ip_range: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWorkspaceswebIpAccessSettingsOutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  ip_access_settings_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWorkspaceswebIpAccessSettingsInputProps =
  & z.input<typeof AwsWorkspaceswebIpAccessSettingsInputSchema>
  & NodeProps

export type AwsWorkspaceswebIpAccessSettingsOutputProps =
  & z.output<typeof AwsWorkspaceswebIpAccessSettingsOutputSchema>
  & z.output<typeof AwsWorkspaceswebIpAccessSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_ip_access_settings

export function AwsWorkspaceswebIpAccessSettings(
  props: Partial<AwsWorkspaceswebIpAccessSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_ip_access_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebIpAccessSettingsInputSchema}
      _outputSchema={AwsWorkspaceswebIpAccessSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebIpAccessSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebIpAccessSettingsOutputProps>(
    AwsWorkspaceswebIpAccessSettings,
    idFilter,
    baseNode,
    optional,
  )
