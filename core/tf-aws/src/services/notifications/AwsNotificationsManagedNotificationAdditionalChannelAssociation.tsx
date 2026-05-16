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

export const AwsNotificationsManagedNotificationAdditionalChannelAssociationInputSchema =
  TfMetaSchema.extend({
    channel_arn: resolvableValue(z.string()),
    managed_notification_arn: resolvableValue(z.string()),
  })

export const AwsNotificationsManagedNotificationAdditionalChannelAssociationOutputSchema =
  z.object({})

export type AwsNotificationsManagedNotificationAdditionalChannelAssociationInputProps =
  & z.input<
    typeof AwsNotificationsManagedNotificationAdditionalChannelAssociationInputSchema
  >
  & NodeProps

export type AwsNotificationsManagedNotificationAdditionalChannelAssociationOutputProps =
  & z.output<
    typeof AwsNotificationsManagedNotificationAdditionalChannelAssociationOutputSchema
  >
  & z.output<
    typeof AwsNotificationsManagedNotificationAdditionalChannelAssociationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_managed_notification_additional_channel_association

export function AwsNotificationsManagedNotificationAdditionalChannelAssociation(
  props: Partial<
    AwsNotificationsManagedNotificationAdditionalChannelAssociationInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_managed_notification_additional_channel_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationsManagedNotificationAdditionalChannelAssociationInputSchema}
      _outputSchema={AwsNotificationsManagedNotificationAdditionalChannelAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsManagedNotificationAdditionalChannelAssociation =
  (idFilter?: string, baseNode?: any, optional?: boolean) =>
    useTypedNode<
      AwsNotificationsManagedNotificationAdditionalChannelAssociationOutputProps
    >(
      AwsNotificationsManagedNotificationAdditionalChannelAssociation,
      idFilter,
      baseNode,
      optional,
    )

export const useAwsNotificationsManagedNotificationAdditionalChannelAssociations =
  (idFilter?: string, baseNode?: any, optional?: boolean) =>
    useTypedNodes<
      AwsNotificationsManagedNotificationAdditionalChannelAssociationOutputProps
    >(
      AwsNotificationsManagedNotificationAdditionalChannelAssociation,
      idFilter,
      baseNode,
      optional,
    )
