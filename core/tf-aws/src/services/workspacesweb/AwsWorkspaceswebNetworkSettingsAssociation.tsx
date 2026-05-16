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

export const AwsWorkspaceswebNetworkSettingsAssociationInputSchema =
  TfMetaSchema.extend({
    network_settings_arn: resolvableValue(z.string()),
    portal_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWorkspaceswebNetworkSettingsAssociationOutputSchema = z.object(
  {},
)

export type AwsWorkspaceswebNetworkSettingsAssociationInputProps =
  & z.input<typeof AwsWorkspaceswebNetworkSettingsAssociationInputSchema>
  & NodeProps

export type AwsWorkspaceswebNetworkSettingsAssociationOutputProps =
  & z.output<typeof AwsWorkspaceswebNetworkSettingsAssociationOutputSchema>
  & z.output<typeof AwsWorkspaceswebNetworkSettingsAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_network_settings_association

export function AwsWorkspaceswebNetworkSettingsAssociation(
  props: Partial<AwsWorkspaceswebNetworkSettingsAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_network_settings_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebNetworkSettingsAssociationInputSchema}
      _outputSchema={AwsWorkspaceswebNetworkSettingsAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebNetworkSettingsAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebNetworkSettingsAssociationOutputProps>(
    AwsWorkspaceswebNetworkSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebNetworkSettingsAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebNetworkSettingsAssociationOutputProps>(
    AwsWorkspaceswebNetworkSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )
