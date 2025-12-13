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
  destination: resolvableValue(z.string()),
  source: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  metric: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  statistic: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  period: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_network_performance_metric_subscription

export function AwsVpcNetworkPerformanceMetricSubscription(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_network_performance_metric_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcNetworkPerformanceMetricSubscription = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsVpcNetworkPerformanceMetricSubscription,
    idFilter,
    baseNode,
  )

export const useAwsVpcNetworkPerformanceMetricSubscriptions = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsVpcNetworkPerformanceMetricSubscription,
    idFilter,
    baseNode,
  )
