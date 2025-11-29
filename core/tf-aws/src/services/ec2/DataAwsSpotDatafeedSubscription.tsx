import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSpotDatafeedSubscription } from './AwsSpotDatafeedSubscription.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/spot_datafeed_subscription

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  bucket: z.string().optional(),
  prefix: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSpotDatafeedSubscription(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSpotDatafeedSubscription
      _type='aws_spot_datafeed_subscription'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSpotDatafeedSubscription = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSpotDatafeedSubscription, node, id)

export const useDataAwsSpotDatafeedSubscriptions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSpotDatafeedSubscription, node, id)
