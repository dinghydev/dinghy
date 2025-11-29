import {
  NodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from './utils/awsProps.ts'
import z from 'zod'
import { ApplicationLoadBalancer } from '@dinghy/diagrams/entitiesAwsNetworkContentDelivery'

export const AwsLbInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  subnets: ResolvableStringArraySchema.optional(),
})

export const AwsLbOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
})

export type AwsLbInputProps = z.output<typeof AwsLbInputSchema> & NodeProps

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
