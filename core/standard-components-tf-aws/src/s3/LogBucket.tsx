import { useRef } from 'react'
import {
  AwsS3Bucket,
  AwsS3BucketAcl,
  AwsS3BucketLogging,
  AwsS3BucketOwnershipControls,
} from '../index.ts'
import { useTypedNode } from '@dinghy/base-components'
import type {
  AwsS3BucketInputProps,
  AwsS3BucketOutputProps,
} from './AwsS3Bucket.tsx'
import { useStack } from '@dinghy/base-components'
import { ResolvableStringSchema } from '@dinghy/base-components'
import z from 'zod'

export const LogBucketInputSchema = z.object({
  surfix: ResolvableStringSchema.optional(),
})

export type LogBucketInputProps =
  & z.input<typeof LogBucketInputSchema>
  & AwsS3BucketInputProps

export function LogBucket(props: LogBucketInputProps) {
  const { stack } = useStack()
  const ref = useRef(null)
  const bucket = () => {
    let bucket = props.bucket ||
      (ref.current as any).bucket_prefix ||
      (stack as any)._name()
    if ((ref.current as any).surfix) {
      bucket = `${bucket}-${(ref.current as any).surfix}`
    }
    if ((ref.current as any)._version) {
      bucket = `${bucket}-${(ref.current as any)._version}`
    }
    return bucket
  }

  return (
    <AwsS3Bucket
      _title={((node: any) => node._props.surfix) as any}
      ref={ref}
      bucket={bucket as any}
      _display='entity'
      {...props}
    >
      {props.children}
      <AwsS3BucketLogging
        bucket={bucket as any}
        target_bucket={bucket as any}
        target_prefix={(() => `log-sink/s3/${bucket()}/`) as any}
      />
      <AwsS3BucketOwnershipControls
        bucket={bucket as any}
        rule={{
          object_ownership: 'BucketOwnerPreferred',
        }}
      />
      <AwsS3BucketAcl bucket={bucket as any} acl='log-delivery-write' />
    </AwsS3Bucket>
  )
}

export const useLogBucket = () =>
  useTypedNode<AwsS3BucketOutputProps>(LogBucket)
