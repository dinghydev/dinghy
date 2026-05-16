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

export const AwsDocdbEventSubscriptionInputSchema = TfMetaSchema.extend({
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

export const AwsDocdbEventSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
  customer_aws_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDocdbEventSubscriptionInputProps =
  & z.input<typeof AwsDocdbEventSubscriptionInputSchema>
  & NodeProps

export type AwsDocdbEventSubscriptionOutputProps =
  & z.output<typeof AwsDocdbEventSubscriptionOutputSchema>
  & z.output<typeof AwsDocdbEventSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/docdb_event_subscription

export function AwsDocdbEventSubscription(
  props: Partial<AwsDocdbEventSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_event_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDocdbEventSubscriptionInputSchema}
      _outputSchema={AwsDocdbEventSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDocdbEventSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDocdbEventSubscriptionOutputProps>(
    AwsDocdbEventSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDocdbEventSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDocdbEventSubscriptionOutputProps>(
    AwsDocdbEventSubscription,
    idFilter,
    baseNode,
    optional,
  )
