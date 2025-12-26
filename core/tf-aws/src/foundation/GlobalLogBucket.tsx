import {
  deepResolve,
  getRenderOptions,
  type NodeProps,
  ResolvableStringSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

import {
  AwsS3Bucket,
  AwsS3BucketLogging,
  AwsS3BucketOwnershipControls,
  useAwsS3Bucket,
} from '@dinghy/tf-aws/serviceS3'

export const InputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  bucketSurfix: ResolvableStringSchema.default('logs'),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function GlobalLogBucket(
  { _components, ...props }: Partial<InputProps>,
) {
  const { stack } = getRenderOptions()
  const defaults = InputSchema.parse(props)
  const bucket = (defaults.bucket ||
    (() => `${stack.name}-${defaults.bucketSurfix}-global`)) as any

  const OwnershipControls = () => {
    const { s3Bucket } = useAwsS3Bucket()
    const BucketOwnershipControlsComponent = _components
      ?.bucketOwnershipControls as typeof AwsS3BucketOwnershipControls ||
      AwsS3BucketOwnershipControls
    return (
      <BucketOwnershipControlsComponent
        bucket={bucket}
        _id={() => `${deepResolve(s3Bucket._id)}_ownership_controls`}
        region='us-east-1'
        rule={{ object_ownership: 'BucketOwnerPreferred' }}
        depends_on={() => [s3Bucket._terraformId]}
      />
    )
  }

  const BucketLogging = () => {
    const { s3Bucket } = useAwsS3Bucket()
    const BucketLoggingComponent =
      _components?.bucketLogging as typeof AwsS3BucketLogging ||
      AwsS3BucketLogging
    return (
      <BucketLoggingComponent
        bucket={bucket}
        target_bucket={bucket}
        target_prefix={() => `s3-access-log/${deepResolve(bucket)}/`}
        _id={() => `${deepResolve(s3Bucket._id)}_logging`}
        region='us-east-1'
        depends_on={() => [s3Bucket._terraformId]}
      />
    )
  }

  const BucketComponent = _components?.bucket as typeof AwsS3Bucket ||
    AwsS3Bucket
  return (
    <BucketComponent
      bucket={bucket}
      _title='Global LogBucket'
      _display='entity'
      region='us-east-1'
      {...props}
    >
      <OwnershipControls />
      <BucketLogging />
    </BucketComponent>
  )
}

export const useGlobalLogBucket = (
  idFilter?: string,
  node?: any,
  optional?: boolean,
) => useTypedNode<InputProps>(GlobalLogBucket, idFilter, node, optional)
