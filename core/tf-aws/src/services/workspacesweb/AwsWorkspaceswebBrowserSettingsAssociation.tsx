import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsWorkspaceswebBrowserSettingsAssociationInputSchema =
  TfMetaSchema.extend({
    browser_settings_arn: resolvableValue(z.string()),
    portal_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWorkspaceswebBrowserSettingsAssociationOutputSchema = z.object(
  {},
)

export type AwsWorkspaceswebBrowserSettingsAssociationInputProps =
  & z.input<typeof AwsWorkspaceswebBrowserSettingsAssociationInputSchema>
  & NodeProps

export type AwsWorkspaceswebBrowserSettingsAssociationOutputProps =
  & z.output<typeof AwsWorkspaceswebBrowserSettingsAssociationOutputSchema>
  & z.output<typeof AwsWorkspaceswebBrowserSettingsAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_browser_settings_association

export function AwsWorkspaceswebBrowserSettingsAssociation(
  props: Partial<AwsWorkspaceswebBrowserSettingsAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_browser_settings_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebBrowserSettingsAssociationInputSchema}
      _outputSchema={AwsWorkspaceswebBrowserSettingsAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebBrowserSettingsAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebBrowserSettingsAssociationOutputProps>(
    AwsWorkspaceswebBrowserSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebBrowserSettingsAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebBrowserSettingsAssociationOutputProps>(
    AwsWorkspaceswebBrowserSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )
