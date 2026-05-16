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

export const AwsNotificationsOrganizationalUnitAssociationInputSchema =
  TfMetaSchema.extend({
    notification_configuration_arn: resolvableValue(z.string()),
    organizational_unit_id: resolvableValue(z.string()),
  })

export const AwsNotificationsOrganizationalUnitAssociationOutputSchema = z
  .object({})

export type AwsNotificationsOrganizationalUnitAssociationInputProps =
  & z.input<typeof AwsNotificationsOrganizationalUnitAssociationInputSchema>
  & NodeProps

export type AwsNotificationsOrganizationalUnitAssociationOutputProps =
  & z.output<typeof AwsNotificationsOrganizationalUnitAssociationOutputSchema>
  & z.output<typeof AwsNotificationsOrganizationalUnitAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_organizational_unit_association

export function AwsNotificationsOrganizationalUnitAssociation(
  props: Partial<AwsNotificationsOrganizationalUnitAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_organizational_unit_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationsOrganizationalUnitAssociationInputSchema}
      _outputSchema={AwsNotificationsOrganizationalUnitAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsOrganizationalUnitAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNotificationsOrganizationalUnitAssociationOutputProps>(
    AwsNotificationsOrganizationalUnitAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNotificationsOrganizationalUnitAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNotificationsOrganizationalUnitAssociationOutputProps>(
    AwsNotificationsOrganizationalUnitAssociation,
    idFilter,
    baseNode,
    optional,
  )
