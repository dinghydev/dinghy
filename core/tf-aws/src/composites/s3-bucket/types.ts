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
  versioningEnabled: ResolvableBooleanSchema.default(false),
  loggingEnabled: ResolvableBooleanSchema.default(false),
  logBucket: ResolvableStringSchema.optional(),
  logPrefix: ResolvableStringSchema.optional(),
  bucketPolicy: ResolvableStringSchema.optional(),
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
  const inputProps = deepMerge({}, renderOptions.s3Bucket)
  deepMerge(inputProps, props.s3Bucket)
  deepMerge(inputProps, props)
  const bucketConfig = S3BucketSchema.loose().parse(inputProps)
  return bucketConfig
}
