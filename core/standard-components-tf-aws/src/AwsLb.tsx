import {
  IacNodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from './index.ts'
import z from 'zod'
import { ApplicationLoadBalancer } from '@dinghy/standard-components-diagrams/awsNetworkContentDelivery'

export const AwsLbInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  subnets: ResolvableStringArraySchema.optional(),
})

export const AwsLbOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
})

export type AwsLbInputProps = z.output<typeof AwsLbInputSchema> & IacNodeProps

export type AwsLbOutputProps =
  & z.output<typeof AwsLbOutputSchema>
  & AwsLbInputProps

export default function AwsLb(props: AwsLbInputProps) {
  return (
    <ApplicationLoadBalancer
      {...awsProps(props, AwsLbInputSchema, AwsLbOutputSchema)}
    />
  )
}
