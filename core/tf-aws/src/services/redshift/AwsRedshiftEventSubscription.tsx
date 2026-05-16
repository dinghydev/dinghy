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

export const AwsRedshiftEventSubscriptionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  sns_topic_arn: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  event_categories: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  severity: resolvableValue(z.string().optional()),
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

export const AwsRedshiftEventSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
  customer_aws_id: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftEventSubscriptionInputProps =
  & z.input<typeof AwsRedshiftEventSubscriptionInputSchema>
  & NodeProps

export type AwsRedshiftEventSubscriptionOutputProps =
  & z.output<typeof AwsRedshiftEventSubscriptionOutputSchema>
  & z.output<typeof AwsRedshiftEventSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_event_subscription

export function AwsRedshiftEventSubscription(
  props: Partial<AwsRedshiftEventSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_event_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftEventSubscriptionInputSchema}
      _outputSchema={AwsRedshiftEventSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftEventSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftEventSubscriptionOutputProps>(
    AwsRedshiftEventSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftEventSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftEventSubscriptionOutputProps>(
    AwsRedshiftEventSubscription,
    idFilter,
    baseNode,
    optional,
  )
