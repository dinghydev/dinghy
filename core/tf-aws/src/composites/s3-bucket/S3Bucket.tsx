import {
  deepResolve,
  type NodeProps,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import z from 'zod'
import {
  AwsS3Bucket,
  InputSchema as AwsS3BucketInputSchema,
  useAwsS3Bucket,
} from '../../services/s3/AwsS3Bucket.tsx'
import { AwsS3BucketVersioning } from '../../services/s3/AwsS3BucketVersioning.tsx'
import { AwsS3BucketLogging } from '../../services/s3/AwsS3BucketLogging.tsx'

export const InputSchema = z.object({
  versioningEnabled: ResolvableBooleanSchema.default(false),
  loggingEnabled: ResolvableBooleanSchema.default(false),
  logBucket: ResolvableStringSchema.optional(),
  logPrefix: ResolvableStringSchema.optional(),
}).extend({ ...AwsS3BucketInputSchema.shape })

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function S3Bucket(
  { _components, bucket, children, ...props }: Partial<InputProps>,
) {
  const bucketConfig = InputSchema.parse(props)

  const BucketVersioning = () => {
    const { s3Bucket } = useAwsS3Bucket()
    const BucketVersioningComponent: any =
      _components?.versioning as typeof AwsS3BucketVersioning ||
      AwsS3BucketVersioning
    return (
      <BucketVersioningComponent
        bucket={s3Bucket.bucket}
        _id={() => `${deepResolve(s3Bucket._id)}_versioning`}
        versioning_configuration={{ status: 'Enabled' }}
        depends_on={() => [s3Bucket._terraformId]}
      />
    )
  }
  const BucketLogging = () => {
    const { s3Bucket } = useAwsS3Bucket()
    const BucketLoggingComponent: any =
      _components?.logging as typeof AwsS3BucketLogging ||
      AwsS3BucketLogging
    return (
      <BucketLoggingComponent
        bucket={s3Bucket.bucket}
        target_bucket={bucketConfig.logBucket || bucketConfig.bucket}
        target_prefix={() => `s3-access-log/${deepResolve(s3Bucket.bucket)}/`}
        _id={() => `${deepResolve(s3Bucket._id)}_logging`}
        depends_on={() => [s3Bucket._terraformId]}
      />
    )
  }

  const BucketComponent: any = _components?.bucket as typeof AwsS3Bucket ||
    AwsS3Bucket
  return (
    <BucketComponent
      bucket={bucket}
      _title={bucket}
      {...props}
    >
      {bucketConfig.versioningEnabled && <BucketVersioning />}
      {bucketConfig.loggingEnabled && <BucketLogging />}
      {children}
    </BucketComponent>
  )
}
