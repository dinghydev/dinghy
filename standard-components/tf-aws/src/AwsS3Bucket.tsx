import {
  ResolvableBooleanSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.ts'
import z from 'zod'
import { Bucket } from '@reactiac/standard-components-diagrams'
import { useTypedNode } from '@reactiac/base-components'

export const AwsS3BucketInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  bucket_prefix: ResolvableStringSchema.optional(),
  force_destroy: ResolvableBooleanSchema.default(false).optional(),
  object_lock_enabled: ResolvableBooleanSchema.optional(),
})

export const AwsS3BucketOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
  bucket_domain_name: ResolvableStringSchema.optional(),
  bucket_regional_domain_name: ResolvableStringSchema.optional(),
  hosted_zone_id: ResolvableStringSchema.optional(),
  region: ResolvableStringSchema.optional(),
})

export type AwsS3BucketInputProps =
  & z.infer<typeof AwsS3BucketInputSchema>
  & IacNodeProps

export type AwsS3BucketOutputProps =
  & z.infer<typeof AwsS3BucketOutputSchema>
  & AwsS3BucketInputProps

export function AwsS3Bucket(props: AwsS3BucketInputProps) {
  return (
    <Bucket {...aws(props, AwsS3BucketInputSchema, AwsS3BucketOutputSchema)} />
  )
}
export const useAwsS3Bucket = (id?: string) =>
  useTypedNode<AwsS3BucketOutputProps>(AwsS3Bucket, id)
