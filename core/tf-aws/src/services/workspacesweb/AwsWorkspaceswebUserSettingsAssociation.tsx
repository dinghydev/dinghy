import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/workspacesweb_user_settings_association

export const InputSchema = z.object({
  portal_arn: resolvableValue(z.string()),
  user_settings_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWorkspaceswebUserSettingsAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_user_settings_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebUserSettingsAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsWorkspaceswebUserSettingsAssociation, node, id)

export const useAwsWorkspaceswebUserSettingsAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsWorkspaceswebUserSettingsAssociation, node, id)
