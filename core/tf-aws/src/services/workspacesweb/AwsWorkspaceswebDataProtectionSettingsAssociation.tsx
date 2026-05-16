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

export const AwsWorkspaceswebDataProtectionSettingsAssociationInputSchema =
  TfMetaSchema.extend({
    data_protection_settings_arn: resolvableValue(z.string()),
    portal_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWorkspaceswebDataProtectionSettingsAssociationOutputSchema = z
  .object({})

export type AwsWorkspaceswebDataProtectionSettingsAssociationInputProps =
  & z.input<typeof AwsWorkspaceswebDataProtectionSettingsAssociationInputSchema>
  & NodeProps

export type AwsWorkspaceswebDataProtectionSettingsAssociationOutputProps =
  & z.output<
    typeof AwsWorkspaceswebDataProtectionSettingsAssociationOutputSchema
  >
  & z.output<
    typeof AwsWorkspaceswebDataProtectionSettingsAssociationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_data_protection_settings_association

export function AwsWorkspaceswebDataProtectionSettingsAssociation(
  props: Partial<AwsWorkspaceswebDataProtectionSettingsAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_data_protection_settings_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebDataProtectionSettingsAssociationInputSchema}
      _outputSchema={AwsWorkspaceswebDataProtectionSettingsAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebDataProtectionSettingsAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebDataProtectionSettingsAssociationOutputProps>(
    AwsWorkspaceswebDataProtectionSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebDataProtectionSettingsAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebDataProtectionSettingsAssociationOutputProps>(
    AwsWorkspaceswebDataProtectionSettingsAssociation,
    idFilter,
    baseNode,
    optional,
  )
