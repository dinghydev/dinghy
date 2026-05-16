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

export const AwsNotificationsChannelAssociationInputSchema = TfMetaSchema
  .extend({
    arn: resolvableValue(z.string()),
    notification_configuration_arn: resolvableValue(z.string()),
  })

export const AwsNotificationsChannelAssociationOutputSchema = z.object({})

export type AwsNotificationsChannelAssociationInputProps =
  & z.input<typeof AwsNotificationsChannelAssociationInputSchema>
  & NodeProps

export type AwsNotificationsChannelAssociationOutputProps =
  & z.output<typeof AwsNotificationsChannelAssociationOutputSchema>
  & z.output<typeof AwsNotificationsChannelAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_channel_association

export function AwsNotificationsChannelAssociation(
  props: Partial<AwsNotificationsChannelAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_channel_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationsChannelAssociationInputSchema}
      _outputSchema={AwsNotificationsChannelAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsChannelAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNotificationsChannelAssociationOutputProps>(
    AwsNotificationsChannelAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNotificationsChannelAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNotificationsChannelAssociationOutputProps>(
    AwsNotificationsChannelAssociation,
    idFilter,
    baseNode,
    optional,
  )
