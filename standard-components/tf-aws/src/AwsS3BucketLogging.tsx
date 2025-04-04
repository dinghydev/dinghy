import {
  IacNodeProps,
  ResolvableBooleanSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.ts'
import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const AwsS3BucketLoggingInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  target_bucket: ResolvableStringSchema.optional(),
  target_prefix: ResolvableStringSchema.optional(),
})

export const AwsS3BucketLoggingOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export type AwsS3BucketLoggingInputProps = z.infer<
  typeof AwsS3BucketLoggingInputSchema
> &
  IacNodeProps

export type AwsS3BucketLoggingOutputProps = z.infer<
  typeof AwsS3BucketLoggingOutputSchema
> &
  AwsS3BucketLoggingInputProps

export function AwsS3BucketLogging(props: AwsS3BucketLoggingInputProps) {
  return (
    <Shape
      {...aws(
        props,
        AwsS3BucketLoggingInputSchema,
        AwsS3BucketLoggingOutputSchema,
      )}
    />
  )
}
