import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/workspacesweb_browser_settings_association

export const InputSchema = z.object({
  browser_settings_arn: resolvableValue(z.string()),
  portal_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWorkspaceswebBrowserSettingsAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_browser_settings_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebBrowserSettingsAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsWorkspaceswebBrowserSettingsAssociation,
    node,
    id,
  )

export const useAwsWorkspaceswebBrowserSettingsAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsWorkspaceswebBrowserSettingsAssociation,
    node,
    id,
  )
