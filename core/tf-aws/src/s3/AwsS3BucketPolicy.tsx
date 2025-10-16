import { IacNodeProps, ResolvableStringSchema } from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'

export const AwsS3BucketPolicyInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  policy: ResolvableStringSchema.optional(),
})

export const AwsS3BucketPolicyOutputSchema = z.object({})

export type AwsS3BucketPolicyInputProps =
  & z.output<
    typeof AwsS3BucketPolicyInputSchema
  >
  & IacNodeProps

export type AwsS3BucketPolicyOutputProps =
  & z.output<
    typeof AwsS3BucketPolicyOutputSchema
  >
  & AwsS3BucketPolicyInputProps

export function AwsS3BucketPolicy(props: AwsS3BucketPolicyInputProps) {
  return (
    <Shape
      {...awsProps(
        props,
        AwsS3BucketPolicyInputSchema,
        AwsS3BucketPolicyOutputSchema,
      )}
    />
  )
}
