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

export const AwsDmsEventSubscriptionInputSchema = TfMetaSchema.extend({
  event_categories: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  sns_topic_arn: resolvableValue(z.string()),
  source_type: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDmsEventSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDmsEventSubscriptionInputProps =
  & z.input<typeof AwsDmsEventSubscriptionInputSchema>
  & NodeProps

export type AwsDmsEventSubscriptionOutputProps =
  & z.output<typeof AwsDmsEventSubscriptionOutputSchema>
  & z.output<typeof AwsDmsEventSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dms_event_subscription

export function AwsDmsEventSubscription(
  props: Partial<AwsDmsEventSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_event_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDmsEventSubscriptionInputSchema}
      _outputSchema={AwsDmsEventSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsEventSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDmsEventSubscriptionOutputProps>(
    AwsDmsEventSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDmsEventSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDmsEventSubscriptionOutputProps>(
    AwsDmsEventSubscription,
    idFilter,
    baseNode,
    optional,
  )
