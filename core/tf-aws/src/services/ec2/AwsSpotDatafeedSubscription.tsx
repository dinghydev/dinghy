import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/spot_datafeed_subscription

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSpotDatafeedSubscription(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_spot_datafeed_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSpotDatafeedSubscription = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSpotDatafeedSubscription, node, id)

export const useAwsSpotDatafeedSubscriptions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSpotDatafeedSubscription, node, id)
