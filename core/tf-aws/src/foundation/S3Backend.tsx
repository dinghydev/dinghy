import {
  getRenderOptions,
  type NodeProps,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'
import { S3Bucket } from '../composites/s3-bucket/S3Bucket.tsx'
import { S3BucketSchema } from '../composites/s3-bucket/types.ts'
import { useAwsProvider } from './AwsProvider.tsx'
import { useRegionalLogBucket } from './RegionalLogBucket.tsx'

export const InputSchema = S3BucketSchema.extend({
  bucket: ResolvableStringSchema.optional(),
  bucketSurfix: ResolvableStringSchema.default('backend'),
  stateFile: ResolvableStringSchema.optional(),
  stateFilePrefix: ResolvableStringSchema.default('tfstates/'),
  stateFileExt: ResolvableStringSchema.default('.tfstate'),
  createBackend: ResolvableBooleanSchema.default(true),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function S3Backend(
  { _components, children, ...props }: Partial<InputProps>,
) {
  const { stack, s3Backend } = getRenderOptions()
  const backendConfig = InputSchema.parse(props)
  const bucket = (backendConfig.bucket || (s3Backend as any)?.bucket ||
    (() => `${stack.name}-${backendConfig.bucketSurfix}`)) as any

  const BackendBucket = () => {
    const { logBucket } = useRegionalLogBucket()
    const backendBucketConfig = S3BucketSchema.partial().loose().parse({
      logBucket: logBucket.bucket,
      ...backendConfig,
      bucket,
    })
    const S3BucketComponent: any = _components?.s3Bucket as typeof S3Bucket ||
      S3Bucket
    return (
      <S3BucketComponent
        _id='awss3bucket_backend'
        _title='Backend Bucket'
        _display='entity'
        {...backendBucketConfig}
        versioningEnabled
        object_lock_enabled
        _components={_components}
      />
    )
  }

  const BackendComponent: any = _components?.backend as typeof Shape ||
    Shape

  const stateRemoteFile = backendConfig.stateFile ||
    (() =>
      `${backendConfig.stateFilePrefix}${
        stack!.id
      }${backendConfig.stateFileExt}`)
  const { awsProvider } = useAwsProvider()
  return (
    <BackendComponent
      _category='terraform'
      _terraform={{
        backend: {
          s3: {
            bucket,
            key: stateRemoteFile,
            region: awsProvider.region,
          },
        },
      }}
      _display='invisible'
      {...(s3Backend || {})}
      {...props}
    >
      {backendConfig.createBackend && <BackendBucket />}
      {children}
    </BackendComponent>
  )
}

export const useS3Backend = () => useTypedNode<InputProps>(S3Backend)
