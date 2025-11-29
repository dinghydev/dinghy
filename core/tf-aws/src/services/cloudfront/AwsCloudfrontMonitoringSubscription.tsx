import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_monitoring_subscription

export const InputSchema = z.object({
  distribution_id: resolvableValue(z.string()),
  monitoring_subscription: resolvableValue(z.object({
    realtime_metrics_subscription_config: z.object({
      realtime_metrics_subscription_status: z.string(),
    }),
  })),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontMonitoringSubscription(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_monitoring_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontMonitoringSubscription = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsCloudfrontMonitoringSubscription, node, id)

export const useAwsCloudfrontMonitoringSubscriptions = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsCloudfrontMonitoringSubscription, node, id)
