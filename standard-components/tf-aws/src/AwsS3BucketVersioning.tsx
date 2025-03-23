import {
  IacNodeProps,
  ResolvableBooleanSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.js'
import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const AwsS3BucketVersioningInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  versioning_configuration: ResolvableRecordSchema.optional(),
})

export const AwsS3BucketVersioningOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export type AwsS3BucketVersioningInputProps =
  & z.infer<typeof AwsS3BucketVersioningInputSchema>
  & IacNodeProps

export type AwsS3BucketVersioningOutputProps =
  & z.infer<typeof AwsS3BucketVersioningOutputSchema>
  & AwsS3BucketVersioningInputProps

export function AwsS3BucketVersioning(
  props: AwsS3BucketVersioningInputProps,
) {
  return (
    <Shape
      {...aws(
        props,
        AwsS3BucketVersioningInputSchema,
        AwsS3BucketVersioningOutputSchema,
      )}
    />
  )
}
