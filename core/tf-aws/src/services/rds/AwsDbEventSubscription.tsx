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

export const AwsDbEventSubscriptionInputSchema = TfMetaSchema.extend({
  sns_topic: resolvableValue(z.string()),
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

export const AwsDbEventSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
  customer_aws_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDbEventSubscriptionInputProps =
  & z.input<typeof AwsDbEventSubscriptionInputSchema>
  & NodeProps

export type AwsDbEventSubscriptionOutputProps =
  & z.output<typeof AwsDbEventSubscriptionOutputSchema>
  & z.output<typeof AwsDbEventSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_event_subscription

export function AwsDbEventSubscription(
  props: Partial<AwsDbEventSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_event_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbEventSubscriptionInputSchema}
      _outputSchema={AwsDbEventSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDbEventSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbEventSubscriptionOutputProps>(
    AwsDbEventSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbEventSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbEventSubscriptionOutputProps>(
    AwsDbEventSubscription,
    idFilter,
    baseNode,
    optional,
  )
