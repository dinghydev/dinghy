import {
  deepResolve,
  type NodeProps,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
  Shape,
  useRenderOptions,
  useStack,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3Bucket, useAwsS3Bucket } from '../services/s3/AwsS3Bucket.tsx'
import { AwsS3BucketVersioning } from '../services/s3/AwsS3BucketVersioning.tsx'
import { AwsS3BucketLogging } from '../services/s3/AwsS3BucketLogging.tsx'

import { useAwsCloud } from './AwsCloud.tsx'
import { useAwsRegionalLogBucket } from './AwsRegionalLogBucket.tsx'

const AwsBackend = (props: NodeProps) => {
  return (
    <Shape
      _category='terraform'
      _terraform={{
        backend: {
          s3: {
            bucket: props.bucket,
            key: props.stateFile,
            region: props.region,
          },
        },
      }}
      {...props}
    />
  )
}

export const InputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  bucketSurfix: ResolvableStringSchema.default('tf-state'),
  stateFile: ResolvableStringSchema.optional(),
  stateFilePrefix: ResolvableStringSchema.default('tfstates/'),
  stateFileExt: ResolvableStringSchema.default('.tfstate'),
  createBackend: ResolvableBooleanSchema.default(true),
  createBackendInStage: ResolvableStringSchema.default('main'),
  logEnabled: ResolvableBooleanSchema.default(false),
  logBucket: ResolvableStringSchema.optional(),
  logPrefix: ResolvableStringSchema.optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function AwsS3Backend(
  { _components, _configs, ...props }: Partial<InputProps>,
) {
  const { stack } = useStack()
  const { awsCloud } = useAwsCloud()
  const defaults = InputSchema.parse(props)
  const bucket = (defaults.bucket ||
    (() => `${(stack as any)._name()}-${defaults.bucketSurfix}`)) as any
  const { renderOptions: { stage } } = useRenderOptions()
  const stateRemoteFile = defaults.stateFile ||
    (() => `${defaults.stateFilePrefix}${stage!.id}${defaults.stateFileExt}`)
  const { logBucket } = useAwsRegionalLogBucket()

  const BucketVersioning = () => {
    const { s3Bucket } = useAwsS3Bucket()
    return (
      <AwsS3BucketVersioning
        bucket={bucket}
        _id={() => `${deepResolve(s3Bucket._id)}_versioning`}
        versioning_configuration={{ status: 'Enabled' }}
        depends_on={() => [s3Bucket._terraformId]}
      />
    )
  }
  const BucketLogging = () => {
    const { s3Bucket } = useAwsS3Bucket()
    return (
      <AwsS3BucketLogging
        bucket={bucket}
        target_bucket={defaults.logBucket || logBucket.bucket}
        target_prefix={() => `s3-access-log/${deepResolve(bucket)}/`}
        _id={() => `${deepResolve(s3Bucket._id)}_logging`}
        depends_on={() => [s3Bucket._terraformId]}
      />
    )
  }

  return (
    <AwsBackend
      region={awsCloud.region}
      _display='none'
      _stackResource
      {...props}
      bucket={bucket}
      stateFile={stateRemoteFile}
    >
      {defaults.createBackend && (
        <>
          <AwsS3Bucket
            bucket={bucket}
            _title={bucket}
            _display='entity'
            _stage={defaults.createBackendInStage}
            object_lock_enabled
            {...props['AwsS3Bucket'] || {}}
          >
            <BucketVersioning />
            {defaults.logEnabled && <BucketLogging />}
          </AwsS3Bucket>
        </>
      )}
    </AwsBackend>
  )
}

export const useAwsS3Backend = () => useTypedNode<InputProps>(AwsS3Backend)
