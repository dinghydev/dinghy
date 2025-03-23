import {
  IacNodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.js'
import z from 'zod'
import { ApplicationLoadBalancer } from '@reactiac/standard-components-diagrams'

export const AwsLbInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  subnets: ResolvableStringArraySchema.optional(),
})

export const AwsLbOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
})

export type AwsLbInputProps =
  & z.infer<typeof AwsLbInputSchema>
  & IacNodeProps

export type AwsLbOutputProps =
  & z.infer<typeof AwsLbOutputSchema>
  & AwsLbInputProps

export default function AwsLb(
  props: AwsLbInputProps,
) {
  return (
    <ApplicationLoadBalancer
      {...aws(props, AwsLbInputSchema, AwsLbOutputSchema)}
    />
  )
}
