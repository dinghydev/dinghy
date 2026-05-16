import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsWorkspaceswebBrowserSettingsInputSchema = TfMetaSchema.extend({
  browser_policy: resolvableValue(z.string()),
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  customer_managed_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWorkspaceswebBrowserSettingsOutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  browser_settings_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWorkspaceswebBrowserSettingsInputProps =
  & z.input<typeof AwsWorkspaceswebBrowserSettingsInputSchema>
  & NodeProps

export type AwsWorkspaceswebBrowserSettingsOutputProps =
  & z.output<typeof AwsWorkspaceswebBrowserSettingsOutputSchema>
  & z.output<typeof AwsWorkspaceswebBrowserSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_browser_settings

export function AwsWorkspaceswebBrowserSettings(
  props: Partial<AwsWorkspaceswebBrowserSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_browser_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebBrowserSettingsInputSchema}
      _outputSchema={AwsWorkspaceswebBrowserSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebBrowserSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebBrowserSettingsOutputProps>(
    AwsWorkspaceswebBrowserSettings,
    idFilter,
    baseNode,
    optional,
  )
