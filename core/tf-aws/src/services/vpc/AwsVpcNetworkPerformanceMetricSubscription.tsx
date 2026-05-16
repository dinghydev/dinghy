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

export const AwsVpcNetworkPerformanceMetricSubscriptionInputSchema =
  TfMetaSchema.extend({
    destination: resolvableValue(z.string()),
    source: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    metric: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    statistic: resolvableValue(z.string().optional()),
  })

export const AwsVpcNetworkPerformanceMetricSubscriptionOutputSchema = z.object({
  period: z.string().optional(),
})

export type AwsVpcNetworkPerformanceMetricSubscriptionInputProps =
  & z.input<typeof AwsVpcNetworkPerformanceMetricSubscriptionInputSchema>
  & NodeProps

export type AwsVpcNetworkPerformanceMetricSubscriptionOutputProps =
  & z.output<typeof AwsVpcNetworkPerformanceMetricSubscriptionOutputSchema>
  & z.output<typeof AwsVpcNetworkPerformanceMetricSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_network_performance_metric_subscription

export function AwsVpcNetworkPerformanceMetricSubscription(
  props: Partial<AwsVpcNetworkPerformanceMetricSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_network_performance_metric_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcNetworkPerformanceMetricSubscriptionInputSchema}
      _outputSchema={AwsVpcNetworkPerformanceMetricSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcNetworkPerformanceMetricSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcNetworkPerformanceMetricSubscriptionOutputProps>(
    AwsVpcNetworkPerformanceMetricSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcNetworkPerformanceMetricSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcNetworkPerformanceMetricSubscriptionOutputProps>(
    AwsVpcNetworkPerformanceMetricSubscription,
    idFilter,
    baseNode,
    optional,
  )
