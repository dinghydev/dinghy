import {
  deepResolve,
  getRenderOptions,
  type NodeProps,
  ResolvableStringSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

import {
  AwsS3BucketOwnershipControls,
  useAwsS3Bucket,
} from '@dinghy/tf-aws/serviceS3'
import { S3Bucket } from '../s3/S3Bucket.tsx'

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
  const { stack, globalLogBucket } = getRenderOptions()
  const defaults = InputSchema.parse(props)
  const bucket = (defaults.bucket || (globalLogBucket as any)?.bucket ||
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

  const BucketComponent = _components?.globalLogBucket as typeof S3Bucket ||
    S3Bucket
  return (
    <BucketComponent
      bucket={bucket}
      _title='Global LogBucket'
      _display='none'
      region='us-east-1'
      loggingEnabled={false}
      {...(globalLogBucket || {})}
      {...props}
    >
      <OwnershipControls />
    </BucketComponent>
  )
}

export const useGlobalLogBucket = (
  idFilter?: string,
  node?: any,
  optional?: boolean,
) => useTypedNode<InputProps>(GlobalLogBucket, idFilter, node, optional)
