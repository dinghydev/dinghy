import {
  getRenderOptions,
  type NodeProps,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'
import {
  InputSchema as S3BucketInputSchema,
  S3Bucket,
} from '../composites/s3-bucket/S3Bucket.tsx'
import { useAwsProvider } from './AwsProvider.tsx'
import { useRegionalLogBucket } from './RegionalLogBucket.tsx'

export const InputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  bucketSurfix: ResolvableStringSchema.default('backend'),
  stateFile: ResolvableStringSchema.optional(),
  stateFilePrefix: ResolvableStringSchema.default('tfstates/'),
  stateFileExt: ResolvableStringSchema.default('.tfstate'),
  createBackend: ResolvableBooleanSchema.default(true),
}).extend({ ...S3BucketInputSchema.shape })

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function S3Backend(
  { _components, children, ...props }: Partial<InputProps>,
) {
  const { stack } = getRenderOptions()
  const backendConfig = InputSchema.parse(props)
  const bucket = (backendConfig.bucket ||
    (() => `${stack.name}-${backendConfig.bucketSurfix}`)) as any

  const BackendBucket = () => {
    const { logBucket } = useRegionalLogBucket()
    const backendBucketConfig = S3BucketInputSchema.partial().parse({
      logBucket: logBucket.bucket,
      ...backendConfig,
      bucket,
    })
    const S3BucketComponent: any = _components?.s3Bucket as typeof S3Bucket ||
      S3Bucket
    return (
      <S3BucketComponent
        {...backendBucketConfig}
        versioningEnabled
        object_lock_enabled
        _id='awss3bucket_backend'
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
      _display='none'
      {...props}
    >
      {backendConfig.createBackend && <BackendBucket />}
      {children}
    </BackendComponent>
  )
}

export const useS3Backend = () => useTypedNode<InputProps>(S3Backend)
