import {
  IacNodeProps,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.ts'
import z from 'zod'
import { Dynamodb } from '@reactiac/standard-components-diagrams'

export const BillingModeSchema = z.enum(['PAY_PER_REQUEST', 'PROVISIONED'])

export const AwsDynamodbTableInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  hash_key: ResolvableStringSchema.optional(),
  attribute: ResolvableRecordSchema.array().optional(),
  billing_mode: BillingModeSchema.optional(),
})

export const AwsDynamodbTableOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
  stream_arn: ResolvableStringSchema.optional(),
})

export type AwsDynamodbTableInputProps = z.infer<
  typeof AwsDynamodbTableInputSchema
> &
  IacNodeProps

export type AwsDynamodbTableOutputProps = z.infer<
  typeof AwsDynamodbTableOutputSchema
> &
  AwsDynamodbTableInputProps

export function AwsDynamodbTable(props: AwsDynamodbTableInputProps) {
  return (
    <Dynamodb
      {...aws(props, AwsDynamodbTableInputSchema, AwsDynamodbTableOutputSchema)}
    />
  )
}
