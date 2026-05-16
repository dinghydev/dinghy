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

export const AwsCloudfrontMonitoringSubscriptionInputSchema = TfMetaSchema
  .extend({
    distribution_id: resolvableValue(z.string()),
    monitoring_subscription: resolvableValue(z.object({
      realtime_metrics_subscription_config: z.object({
        realtime_metrics_subscription_status: z.string(),
      }),
    })),
  })

export const AwsCloudfrontMonitoringSubscriptionOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsCloudfrontMonitoringSubscriptionInputProps =
  & z.input<typeof AwsCloudfrontMonitoringSubscriptionInputSchema>
  & NodeProps

export type AwsCloudfrontMonitoringSubscriptionOutputProps =
  & z.output<typeof AwsCloudfrontMonitoringSubscriptionOutputSchema>
  & z.output<typeof AwsCloudfrontMonitoringSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_monitoring_subscription

export function AwsCloudfrontMonitoringSubscription(
  props: Partial<AwsCloudfrontMonitoringSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_monitoring_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontMonitoringSubscriptionInputSchema}
      _outputSchema={AwsCloudfrontMonitoringSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontMonitoringSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontMonitoringSubscriptionOutputProps>(
    AwsCloudfrontMonitoringSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontMonitoringSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontMonitoringSubscriptionOutputProps>(
    AwsCloudfrontMonitoringSubscription,
    idFilter,
    baseNode,
    optional,
  )
