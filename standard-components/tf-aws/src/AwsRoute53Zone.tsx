import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { aws } from './index.ts'
import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'
import { Route53 } from '@reactiac/standard-components-diagrams'

export const AwsRoute53ZoneInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  comment: ResolvableStringSchema.optional(),
})

export const AwsRoute53ZoneOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  zone_id: ResolvableStringSchema.optional(),
})

export type AwsRoute53ZoneInputProps = z.infer<
  typeof AwsRoute53ZoneInputSchema
> &
  IacNodeProps

export type AwsRoute53ZoneOutputProps = z.infer<
  typeof AwsRoute53ZoneOutputSchema
> &
  AwsRoute53ZoneInputProps

export function AwsRoute53Zone(props: AwsRoute53ZoneInputProps) {
  return (
    <Route53
      {...aws(props, AwsRoute53ZoneInputSchema, AwsRoute53ZoneOutputSchema)}
    />
  )
}

export const useAwsRoute53Zone = () =>
  useTypedNode<AwsRoute53ZoneOutputProps>(AwsRoute53Zone)
