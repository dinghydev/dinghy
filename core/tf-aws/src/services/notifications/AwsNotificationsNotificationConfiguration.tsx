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

export const AwsNotificationsNotificationConfigurationInputSchema = TfMetaSchema
  .extend({
    description: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    aggregation_duration: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsNotificationsNotificationConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNotificationsNotificationConfigurationInputProps =
  & z.input<typeof AwsNotificationsNotificationConfigurationInputSchema>
  & NodeProps

export type AwsNotificationsNotificationConfigurationOutputProps =
  & z.output<typeof AwsNotificationsNotificationConfigurationOutputSchema>
  & z.output<typeof AwsNotificationsNotificationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_notification_configuration

export function AwsNotificationsNotificationConfiguration(
  props: Partial<AwsNotificationsNotificationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_notification_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationsNotificationConfigurationInputSchema}
      _outputSchema={AwsNotificationsNotificationConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsNotificationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNotificationsNotificationConfigurationOutputProps>(
    AwsNotificationsNotificationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNotificationsNotificationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNotificationsNotificationConfigurationOutputProps>(
    AwsNotificationsNotificationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
