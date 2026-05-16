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

export const AwsWorkspaceswebIpAccessSettingsAssociationInputSchema =
  TfMetaSchema.extend({
    ip_access_settings_arn: resolvableValue(z.string()),
    portal_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWorkspaceswebIpAccessSettingsAssociationOutputSchema = z.object(
  {},
)

export type AwsWorkspaceswebIpAccessSettingsAssociationInputProps =
  & z.input<typeof AwsWorkspaceswebIpAccessSettingsAssociationInputSchema>
  & NodeProps

export type AwsWorkspaceswebIpAccessSettingsAssociationOutputProps =
  & z.output<typeof AwsWorkspaceswebIpAccessSettingsAssociationOutputSchema>
  & z.output<typeof AwsWorkspaceswebIpAccessSettingsAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_ip_access_settings_association

export function AwsWorkspaceswebIpAccessSettingsAssociation(
  props: Partial<AwsWorkspaceswebIpAccessSettingsAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_ip_access_settings_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebIpAccessSettingsAssociationInputSchema}
      _outputSchema={AwsWorkspaceswebIpAccessSettingsAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebIpAccessSettingsAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebIpAccessSettingsAssociationOutputProps>(
    AwsWorkspaceswebIpAccessSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebIpAccessSettingsAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebIpAccessSettingsAssociationOutputProps>(
    AwsWorkspaceswebIpAccessSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )
