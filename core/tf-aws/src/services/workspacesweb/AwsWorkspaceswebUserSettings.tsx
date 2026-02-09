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
  associated_portal_arns: resolvableValue(z.string().array()),
  copy_allowed: resolvableValue(z.string()),
  download_allowed: resolvableValue(z.string()),
  paste_allowed: resolvableValue(z.string()),
  print_allowed: resolvableValue(z.string()),
  upload_allowed: resolvableValue(z.string()),
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  cookie_synchronization_configuration: resolvableValue(
    z.object({
      allowlist: z.object({
        domain: z.string(),
        name: z.string().optional(),
        path: z.string().optional(),
      }).array().optional(),
      blocklist: z.object({
        domain: z.string(),
        name: z.string().optional(),
        path: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  customer_managed_key: resolvableValue(z.string().optional()),
  deep_link_allowed: resolvableValue(z.string().optional()),
  disconnect_timeout_in_minutes: resolvableValue(z.number().optional()),
  idle_disconnect_timeout_in_minutes: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  toolbar_configuration: resolvableValue(
    z.object({
      hidden_toolbar_items: z.string().array().optional(),
      max_display_resolution: z.string().optional(),
      toolbar_type: z.string().optional(),
      visual_mode: z.string().optional(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  user_settings_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/workspacesweb_user_settings

export function AwsWorkspaceswebUserSettings(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_user_settings'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebUserSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsWorkspaceswebUserSettings,
    idFilter,
    baseNode,
    optional,
  )
