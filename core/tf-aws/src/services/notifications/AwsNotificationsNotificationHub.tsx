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

export const AwsNotificationsNotificationHubInputSchema = TfMetaSchema.extend({
  notification_hub_region: resolvableValue(z.string()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNotificationsNotificationHubOutputSchema = z.object({})

export type AwsNotificationsNotificationHubInputProps =
  & z.input<typeof AwsNotificationsNotificationHubInputSchema>
  & NodeProps

export type AwsNotificationsNotificationHubOutputProps =
  & z.output<typeof AwsNotificationsNotificationHubOutputSchema>
  & z.output<typeof AwsNotificationsNotificationHubInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_notification_hub

export function AwsNotificationsNotificationHub(
  props: Partial<AwsNotificationsNotificationHubInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_notification_hub'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationsNotificationHubInputSchema}
      _outputSchema={AwsNotificationsNotificationHubOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsNotificationHub = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNotificationsNotificationHubOutputProps>(
    AwsNotificationsNotificationHub,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNotificationsNotificationHubs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNotificationsNotificationHubOutputProps>(
    AwsNotificationsNotificationHub,
    idFilter,
    baseNode,
    optional,
  )
