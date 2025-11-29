import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_log_delivery_destination_policy

export const InputSchema = z.object({
  delivery_destination_name: resolvableValue(z.string()),
  delivery_destination_policy: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchLogDeliveryDestinationPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_delivery_destination_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDeliveryDestinationPolicy = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsCloudwatchLogDeliveryDestinationPolicy, node, id)

export const useAwsCloudwatchLogDeliveryDestinationPolicys = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudwatchLogDeliveryDestinationPolicy,
    node,
    id,
  )
