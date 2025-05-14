import {
  IacNodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { awsProps } from './index.ts'
import z from 'zod'
import { aws4 } from '@reactiac/standard-components-diagrams'

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
    <aws4.ApplicationLoadBalancer
      {...awsProps(props, AwsLbInputSchema, AwsLbOutputSchema)}
    />
  )
}
