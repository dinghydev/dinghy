import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsWorkspaceswebNetworkSettingsInputSchema = TfMetaSchema.extend({
  security_group_ids: resolvableValue(z.string().array()),
  subnet_ids: resolvableValue(z.string().array()),
  vpc_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWorkspaceswebNetworkSettingsOutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  network_settings_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWorkspaceswebNetworkSettingsInputProps =
  & z.input<typeof AwsWorkspaceswebNetworkSettingsInputSchema>
  & NodeProps

export type AwsWorkspaceswebNetworkSettingsOutputProps =
  & z.output<typeof AwsWorkspaceswebNetworkSettingsOutputSchema>
  & z.output<typeof AwsWorkspaceswebNetworkSettingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_network_settings

export function AwsWorkspaceswebNetworkSettings(
  props: Partial<AwsWorkspaceswebNetworkSettingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_network_settings'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebNetworkSettingsInputSchema}
      _outputSchema={AwsWorkspaceswebNetworkSettingsOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebNetworkSettingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebNetworkSettingsOutputProps>(
    AwsWorkspaceswebNetworkSettings,
    idFilter,
    baseNode,
    optional,
  )
