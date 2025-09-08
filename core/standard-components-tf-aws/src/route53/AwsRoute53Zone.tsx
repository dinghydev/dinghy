import { IacNodeProps, ResolvableStringSchema } from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { useTypedNode } from '@dinghy/base-components'
import { Route53 } from '@dinghy/standard-components-diagrams/awsNetworkContentDelivery'

export const AwsRoute53ZoneInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  comment: ResolvableStringSchema.optional(),
})

export const AwsRoute53ZoneOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  zone_id: ResolvableStringSchema.optional(),
})

export type AwsRoute53ZoneInputProps =
  & z.output<
    typeof AwsRoute53ZoneInputSchema
  >
  & IacNodeProps

export type AwsRoute53ZoneOutputProps =
  & z.output<
    typeof AwsRoute53ZoneOutputSchema
  >
  & AwsRoute53ZoneInputProps

export function AwsRoute53Zone(props: AwsRoute53ZoneInputProps) {
  return (
    <Route53
      {...awsProps(
        props,
        AwsRoute53ZoneInputSchema,
        AwsRoute53ZoneOutputSchema,
      )}
    />
  )
}

export const useAwsRoute53Zone = () =>
  useTypedNode<AwsRoute53ZoneOutputProps>(AwsRoute53Zone)
