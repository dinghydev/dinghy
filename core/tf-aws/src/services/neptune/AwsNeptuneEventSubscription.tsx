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

export const AwsNeptuneEventSubscriptionInputSchema = TfMetaSchema.extend({
  sns_topic_arn: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  event_categories: resolvableValue(z.string().array().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_ids: resolvableValue(z.string().array().optional()),
  source_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNeptuneEventSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
  customer_aws_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNeptuneEventSubscriptionInputProps =
  & z.input<typeof AwsNeptuneEventSubscriptionInputSchema>
  & NodeProps

export type AwsNeptuneEventSubscriptionOutputProps =
  & z.output<typeof AwsNeptuneEventSubscriptionOutputSchema>
  & z.output<typeof AwsNeptuneEventSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_event_subscription

export function AwsNeptuneEventSubscription(
  props: Partial<AwsNeptuneEventSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_event_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNeptuneEventSubscriptionInputSchema}
      _outputSchema={AwsNeptuneEventSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptuneEventSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNeptuneEventSubscriptionOutputProps>(
    AwsNeptuneEventSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNeptuneEventSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNeptuneEventSubscriptionOutputProps>(
    AwsNeptuneEventSubscription,
    idFilter,
    baseNode,
    optional,
  )
