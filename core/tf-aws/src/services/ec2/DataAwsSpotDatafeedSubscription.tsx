import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSpotDatafeedSubscription } from './AwsSpotDatafeedSubscription.tsx'

export const DataAwsSpotDatafeedSubscriptionInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSpotDatafeedSubscriptionOutputSchema = z.object({
  bucket: z.string().optional(),
  prefix: z.string().optional(),
})

export type DataAwsSpotDatafeedSubscriptionInputProps =
  & z.input<typeof DataAwsSpotDatafeedSubscriptionInputSchema>
  & NodeProps

export type DataAwsSpotDatafeedSubscriptionOutputProps =
  & z.output<typeof DataAwsSpotDatafeedSubscriptionOutputSchema>
  & z.output<typeof DataAwsSpotDatafeedSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/spot_datafeed_subscription

export function DataAwsSpotDatafeedSubscription(
  props: Partial<DataAwsSpotDatafeedSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSpotDatafeedSubscription
      _type='aws_spot_datafeed_subscription'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSpotDatafeedSubscriptionInputSchema}
      _outputSchema={DataAwsSpotDatafeedSubscriptionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSpotDatafeedSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSpotDatafeedSubscriptionOutputProps>(
    DataAwsSpotDatafeedSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSpotDatafeedSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSpotDatafeedSubscriptionOutputProps>(
    DataAwsSpotDatafeedSubscription,
    idFilter,
    baseNode,
    optional,
  )
