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

export const AwsSecuritylakeSubscriberNotificationInputSchema = TfMetaSchema
  .extend({
    subscriber_id: resolvableValue(z.string()),
    configuration: resolvableValue(
      z.object({
        https_notification_configuration: z.object({
          authorization_api_key_name: z.string().optional(),
          authorization_api_key_value: z.string().optional(),
          endpoint: z.string(),
          http_method: z.string().optional(),
          target_role_arn: z.string(),
        }).array().optional(),
        sqs_notification_configuration: z.object({}).array().optional(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSecuritylakeSubscriberNotificationOutputSchema = z.object({
  endpoint_id: z.string().optional(),
  id: z.string().optional(),
  subscriber_endpoint: z.string().optional(),
})

export type AwsSecuritylakeSubscriberNotificationInputProps =
  & z.input<typeof AwsSecuritylakeSubscriberNotificationInputSchema>
  & NodeProps

export type AwsSecuritylakeSubscriberNotificationOutputProps =
  & z.output<typeof AwsSecuritylakeSubscriberNotificationOutputSchema>
  & z.output<typeof AwsSecuritylakeSubscriberNotificationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securitylake_subscriber_notification

export function AwsSecuritylakeSubscriberNotification(
  props: Partial<AwsSecuritylakeSubscriberNotificationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securitylake_subscriber_notification'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecuritylakeSubscriberNotificationInputSchema}
      _outputSchema={AwsSecuritylakeSubscriberNotificationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeSubscriberNotification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecuritylakeSubscriberNotificationOutputProps>(
    AwsSecuritylakeSubscriberNotification,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecuritylakeSubscriberNotifications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecuritylakeSubscriberNotificationOutputProps>(
    AwsSecuritylakeSubscriberNotification,
    idFilter,
    baseNode,
    optional,
  )
