import {
  deepMerge,
  getRenderOptions,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema } from '../../services/s3/AwsS3Bucket.tsx'
export const S3BucketSchema = InputSchema.extend({
  bucket: ResolvableStringSchema,
  useData: ResolvableBooleanSchema.default(false),
  versioningEnabled: ResolvableBooleanSchema.default(false),
  loggingEnabled: ResolvableBooleanSchema.default(true),
  logBucket: ResolvableStringSchema.optional(),
  logPrefix: ResolvableStringSchema.optional(),
  bucketPolicy: ResolvableStringSchema.optional(),
  corsPolicy: z.record(z.string(), z.any()).array().optional(),
  contentTypes: z.record(z.string(), z.string()).default({}),
  cacheControls: z.record(z.string(), z.string()).default({}),
  cacheControlDefault: z.string().default(
    'max-age=3600, public, must-revalidate',
  ),
})

export type S3BucketType = z.output<typeof S3BucketSchema>
export function parseS3Bucket(
  props: any,
): S3BucketType {
  const renderOptions = getRenderOptions()
  const s3Bucket = props.s3Bucket ||
    (renderOptions.buckets as any)?.[props.bucket] || {}
  deepMerge(s3Bucket, props)

  return S3BucketSchema.loose().parse(s3Bucket)
}
