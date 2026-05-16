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

export const AwsWorkspaceswebUserSettingsAssociationInputSchema = TfMetaSchema
  .extend({
    portal_arn: resolvableValue(z.string()),
    user_settings_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWorkspaceswebUserSettingsAssociationOutputSchema = z.object({})

export type AwsWorkspaceswebUserSettingsAssociationInputProps =
  & z.input<typeof AwsWorkspaceswebUserSettingsAssociationInputSchema>
  & NodeProps

export type AwsWorkspaceswebUserSettingsAssociationOutputProps =
  & z.output<typeof AwsWorkspaceswebUserSettingsAssociationOutputSchema>
  & z.output<typeof AwsWorkspaceswebUserSettingsAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_user_settings_association

export function AwsWorkspaceswebUserSettingsAssociation(
  props: Partial<AwsWorkspaceswebUserSettingsAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_user_settings_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebUserSettingsAssociationInputSchema}
      _outputSchema={AwsWorkspaceswebUserSettingsAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebUserSettingsAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebUserSettingsAssociationOutputProps>(
    AwsWorkspaceswebUserSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebUserSettingsAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebUserSettingsAssociationOutputProps>(
    AwsWorkspaceswebUserSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )
