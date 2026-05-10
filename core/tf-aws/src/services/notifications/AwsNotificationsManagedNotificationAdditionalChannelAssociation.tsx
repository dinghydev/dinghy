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

export const InputSchema = TfMetaSchema.extend({
  channel_arn: resolvableValue(z.string()),
  managed_notification_arn: resolvableValue(z.string()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_managed_notification_additional_channel_association

export function AwsNotificationsManagedNotificationAdditionalChannelAssociation(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsManagedNotificationAdditionalChannelAssociation =
  (idFilter?: string, baseNode?: any, optional?: boolean) =>
    useTypedNode<OutputProps>(
      AwsNotificationsManagedNotificationAdditionalChannelAssociation,
      idFilter,
      baseNode,
      optional,
    )

export const useAwsNotificationsManagedNotificationAdditionalChannelAssociations =
  (idFilter?: string, baseNode?: any, optional?: boolean) =>
    useTypedNodes<OutputProps>(
      AwsNotificationsManagedNotificationAdditionalChannelAssociation,
      idFilter,
      baseNode,
      optional,
    )
