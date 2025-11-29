import { NodeProps, ResolvableStringSchema } from '@dinghy/base-components'

import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'

export const AwsS3BucketLoggingInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  target_bucket: ResolvableStringSchema.optional(),
  target_prefix: ResolvableStringSchema.optional(),
})

export const AwsS3BucketLoggingOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export type AwsS3BucketLoggingInputProps =
  & z.output<
    typeof AwsS3BucketLoggingInputSchema
  >
  & NodeProps

export type AwsS3BucketLoggingOutputProps =
  & z.output<
    typeof AwsS3BucketLoggingOutputSchema
  >
  & AwsS3BucketLoggingInputProps

export function AwsS3BucketLogging(props: AwsS3BucketLoggingInputProps) {
  return (
    <Shape
      {...awsProps(
        props,
        AwsS3BucketLoggingInputSchema,
        AwsS3BucketLoggingOutputSchema,
      )}
    />
  )
}
