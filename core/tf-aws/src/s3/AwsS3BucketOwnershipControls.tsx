import { NodeProps, ResolvableStringSchema } from '@dinghy/base-components'

import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'

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
  & NodeProps

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
      {...awsProps(
        props,
        AwsS3BucketOwnershipControlsInputSchema,
        AwsS3BucketOwnershipControlsOutputSchema,
      )}
    />
  )
}
