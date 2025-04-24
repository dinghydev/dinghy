import {
  type IacNodeProps,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Bucket } from '@reactiac/standard-components-diagrams'
import { useTypedNode } from '@reactiac/base-components'

export const AwsDynamodbTableInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  billing_mode: ResolvableStringSchema.optional(),
  read_capacity: ResolvableNumberSchema.optional(),
  write_capacity: ResolvableNumberSchema.optional(),
  hash_key: ResolvableStringSchema.optional(),
  range_key: ResolvableStringSchema.optional(),
  attribute: ResolvableRecordSchema.array().optional(),
})

export const AwsDynamodbTableOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsDynamodbTableInputProps =
  & z.input<typeof AwsDynamodbTableInputSchema>
  & IacNodeProps

export type AwsDynamodbTableOutputProps =
  & z.output<typeof AwsDynamodbTableOutputSchema>
  & AwsDynamodbTableInputProps

export function AwsDynamodbTable(props: AwsDynamodbTableInputProps) {
  const _importId = (node: any) => node._props.name
  return (
    <Bucket
      _importId={_importId}
      {...aws(props, AwsDynamodbTableInputSchema, AwsDynamodbTableOutputSchema)}
    />
  )
}
export const useAwsDynamodbTable = (id?: string) =>
  useTypedNode<AwsDynamodbTableOutputProps>(AwsDynamodbTable, id)
