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

export const AwsSpotDatafeedSubscriptionInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSpotDatafeedSubscriptionOutputSchema = z.object({})

export type AwsSpotDatafeedSubscriptionInputProps =
  & z.input<typeof AwsSpotDatafeedSubscriptionInputSchema>
  & NodeProps

export type AwsSpotDatafeedSubscriptionOutputProps =
  & z.output<typeof AwsSpotDatafeedSubscriptionOutputSchema>
  & z.output<typeof AwsSpotDatafeedSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/spot_datafeed_subscription

export function AwsSpotDatafeedSubscription(
  props: Partial<AwsSpotDatafeedSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_spot_datafeed_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSpotDatafeedSubscriptionInputSchema}
      _outputSchema={AwsSpotDatafeedSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsSpotDatafeedSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSpotDatafeedSubscriptionOutputProps>(
    AwsSpotDatafeedSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSpotDatafeedSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSpotDatafeedSubscriptionOutputProps>(
    AwsSpotDatafeedSubscription,
    idFilter,
    baseNode,
    optional,
  )
