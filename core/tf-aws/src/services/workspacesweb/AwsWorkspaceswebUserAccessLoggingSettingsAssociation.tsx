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

export const AwsWorkspaceswebUserAccessLoggingSettingsAssociationInputSchema =
  TfMetaSchema.extend({
    portal_arn: resolvableValue(z.string()),
    user_access_logging_settings_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWorkspaceswebUserAccessLoggingSettingsAssociationOutputSchema =
  z.object({})

export type AwsWorkspaceswebUserAccessLoggingSettingsAssociationInputProps =
  & z.input<
    typeof AwsWorkspaceswebUserAccessLoggingSettingsAssociationInputSchema
  >
  & NodeProps

export type AwsWorkspaceswebUserAccessLoggingSettingsAssociationOutputProps =
  & z.output<
    typeof AwsWorkspaceswebUserAccessLoggingSettingsAssociationOutputSchema
  >
  & z.output<
    typeof AwsWorkspaceswebUserAccessLoggingSettingsAssociationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_user_access_logging_settings_association

export function AwsWorkspaceswebUserAccessLoggingSettingsAssociation(
  props: Partial<
    AwsWorkspaceswebUserAccessLoggingSettingsAssociationInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_user_access_logging_settings_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebUserAccessLoggingSettingsAssociationInputSchema}
      _outputSchema={AwsWorkspaceswebUserAccessLoggingSettingsAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebUserAccessLoggingSettingsAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebUserAccessLoggingSettingsAssociationOutputProps>(
    AwsWorkspaceswebUserAccessLoggingSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebUserAccessLoggingSettingsAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    AwsWorkspaceswebUserAccessLoggingSettingsAssociationOutputProps
  >(
    AwsWorkspaceswebUserAccessLoggingSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )
