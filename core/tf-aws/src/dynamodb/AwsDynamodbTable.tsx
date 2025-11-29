import {
  type NodeProps,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'
import { Bucket } from '@dinghy/diagrams/entitiesAwsStorage'
import { useTypedNode } from '@dinghy/base-components'

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
  & NodeProps

export type AwsDynamodbTableOutputProps =
  & z.output<typeof AwsDynamodbTableOutputSchema>
  & AwsDynamodbTableInputProps

export function AwsDynamodbTable(props: AwsDynamodbTableInputProps) {
  const _importId = (node: any) => node._props.name
  return (
    <Bucket
      _importId={_importId}
      {...awsProps(
        props,
        AwsDynamodbTableInputSchema,
        AwsDynamodbTableOutputSchema,
      )}
    />
  )
}
export const useAwsDynamodbTable = (node?: any, id?: string) =>
  useTypedNode<AwsDynamodbTableOutputProps>(AwsDynamodbTable, node, id)
