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
      }).array().optional(),
      sqs_notification_configuration: z.object({}).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securitylake_subscriber_notification

export function AwsSecuritylakeSubscriberNotification(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeSubscriberNotification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSecuritylakeSubscriberNotification,
    idFilter,
    baseNode,
    optional,
  )
