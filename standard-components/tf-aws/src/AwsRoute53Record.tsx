import {
  IacNodeProps,
  ResolvableNumberSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.ts'
import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const AwsRoute53RecordInputSchema = z.object({
  zone_id: ResolvableStringSchema.optional(),
  name: ResolvableStringSchema.optional(),
  type: ResolvableStringSchema.optional(),
  ttl: ResolvableNumberSchema.optional(),
  records: ResolvableStringArraySchema.optional(),
  alias: z
    .object({
      name: ResolvableStringSchema.optional(),
      zone_id: ResolvableStringSchema.optional(),
      evaluate_target_health: z.boolean().optional(),
    })
    .optional(),
})

export const AwsRoute53RecordOutputSchema = z.object({
  fqdn: ResolvableStringSchema.optional(),
})

export type AwsRoute53RecordInputProps = z.infer<
  typeof AwsRoute53RecordInputSchema
> &
  IacNodeProps

export type AwsRoute53RecordOutputProps = z.infer<
  typeof AwsRoute53RecordOutputSchema
> &
  AwsRoute53RecordInputProps

export function AwsRoute53Record(props: AwsRoute53RecordInputProps) {
  return (
    <Shape
      {...aws(props, AwsRoute53RecordInputSchema, AwsRoute53RecordOutputSchema)}
    />
  )
}
