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

export const AwsNotificationsManagedNotificationAccountContactAssociationInputSchema =
  TfMetaSchema.extend({
    contact_identifier: resolvableValue(z.string()),
    managed_notification_configuration_arn: resolvableValue(z.string()),
  })

export const AwsNotificationsManagedNotificationAccountContactAssociationOutputSchema =
  z.object({})

export type AwsNotificationsManagedNotificationAccountContactAssociationInputProps =
  & z.input<
    typeof AwsNotificationsManagedNotificationAccountContactAssociationInputSchema
  >
  & NodeProps

export type AwsNotificationsManagedNotificationAccountContactAssociationOutputProps =
  & z.output<
    typeof AwsNotificationsManagedNotificationAccountContactAssociationOutputSchema
  >
  & z.output<
    typeof AwsNotificationsManagedNotificationAccountContactAssociationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_managed_notification_account_contact_association

export function AwsNotificationsManagedNotificationAccountContactAssociation(
  props: Partial<
    AwsNotificationsManagedNotificationAccountContactAssociationInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_managed_notification_account_contact_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationsManagedNotificationAccountContactAssociationInputSchema}
      _outputSchema={AwsNotificationsManagedNotificationAccountContactAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsManagedNotificationAccountContactAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<
    AwsNotificationsManagedNotificationAccountContactAssociationOutputProps
  >(
    AwsNotificationsManagedNotificationAccountContactAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNotificationsManagedNotificationAccountContactAssociations =
  (idFilter?: string, baseNode?: any, optional?: boolean) =>
    useTypedNodes<
      AwsNotificationsManagedNotificationAccountContactAssociationOutputProps
    >(
      AwsNotificationsManagedNotificationAccountContactAssociation,
      idFilter,
      baseNode,
      optional,
    )
