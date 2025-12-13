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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  confirmation_was_authenticated: z.boolean().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  pending_confirmation: z.boolean().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sns_topic_subscription

export function AwsSnsTopicSubscription(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_topic_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSnsTopicSubscription = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsSnsTopicSubscription, idFilter, baseNode)

export const useAwsSnsTopicSubscriptions = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsSnsTopicSubscription, idFilter, baseNode)
