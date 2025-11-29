import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_log_subscription_filter

export const InputSchema = z.object({
  destination_arn: resolvableValue(z.string()),
  filter_pattern: resolvableValue(z.string()),
  log_group_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  distribution: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchLogSubscriptionFilter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_subscription_filter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogSubscriptionFilter = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsCloudwatchLogSubscriptionFilter, node, id)

export const useAwsCloudwatchLogSubscriptionFilters = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsCloudwatchLogSubscriptionFilter, node, id)
