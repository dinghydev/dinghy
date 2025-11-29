import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securitylake_subscriber_notification

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  subscriber_id: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      https_notification_configuration: z.object({
        authorization_api_key_name: z.string().optional(),
        authorization_api_key_value: z.string().optional(),
        endpoint: z.string(),
        http_method: z.string().optional(),
        target_role_arn: z.string(),
      }).optional(),
      sqs_notification_configuration: z.object({}),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  endpoint_id: z.string().optional(),
  subscriber_endpoint: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSecuritylakeSubscriberNotification(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securitylake_subscriber_notification'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeSubscriberNotification = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsSecuritylakeSubscriberNotification, node, id)

export const useAwsSecuritylakeSubscriberNotifications = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsSecuritylakeSubscriberNotification, node, id)
