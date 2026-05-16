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

export const AwsSnsTopicSubscriptionInputSchema = TfMetaSchema.extend({
  endpoint: resolvableValue(z.string()),
  protocol: resolvableValue(z.string()),
  topic_arn: resolvableValue(z.string()),
  confirmation_timeout_in_minutes: resolvableValue(z.number().optional()),
  delivery_policy: resolvableValue(z.string().optional()),
  endpoint_auto_confirms: resolvableValue(z.boolean().optional()),
  filter_policy: resolvableValue(z.string().optional()),
  filter_policy_scope: resolvableValue(z.string().optional()),
  raw_message_delivery: resolvableValue(z.boolean().optional()),
  redrive_policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replay_policy: resolvableValue(z.string().optional()),
  subscription_role_arn: resolvableValue(z.string().optional()),
})

export const AwsSnsTopicSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
  confirmation_was_authenticated: z.boolean().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  pending_confirmation: z.boolean().optional(),
})

export const AwsSnsTopicSubscriptionImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSnsTopicSubscriptionInputProps =
  & z.input<typeof AwsSnsTopicSubscriptionInputSchema>
  & z.input<typeof AwsSnsTopicSubscriptionImportSchema>
  & NodeProps

export type AwsSnsTopicSubscriptionOutputProps =
  & z.output<typeof AwsSnsTopicSubscriptionOutputSchema>
  & z.output<typeof AwsSnsTopicSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sns_topic_subscription

export function AwsSnsTopicSubscription(
  props: Partial<AwsSnsTopicSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_topic_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSnsTopicSubscriptionInputSchema}
      _outputSchema={AwsSnsTopicSubscriptionOutputSchema}
      _importSchema={AwsSnsTopicSubscriptionImportSchema}
      {...props}
    />
  )
}

export const useAwsSnsTopicSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSnsTopicSubscriptionOutputProps>(
    AwsSnsTopicSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSnsTopicSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSnsTopicSubscriptionOutputProps>(
    AwsSnsTopicSubscription,
    idFilter,
    baseNode,
    optional,
  )
