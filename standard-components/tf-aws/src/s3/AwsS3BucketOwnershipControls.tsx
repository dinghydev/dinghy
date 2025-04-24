import {
  IacNodeProps,
  ResolvableBooleanSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const AwsS3BucketOwnershipControlsInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  rule: z.any(),
})

export const AwsS3BucketOwnershipControlsOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export type AwsS3BucketOwnershipControlsInputProps =
  & z.output<
    typeof AwsS3BucketOwnershipControlsInputSchema
  >
  & IacNodeProps

export type AwsS3BucketOwnershipControlsOutputProps =
  & z.output<
    typeof AwsS3BucketOwnershipControlsOutputSchema
  >
  & AwsS3BucketOwnershipControlsInputProps

export function AwsS3BucketOwnershipControls(
  props: AwsS3BucketOwnershipControlsInputProps,
) {
  return (
    <Shape
      {...aws(
        props,
        AwsS3BucketOwnershipControlsInputSchema,
        AwsS3BucketOwnershipControlsOutputSchema,
      )}
    />
  )
}
