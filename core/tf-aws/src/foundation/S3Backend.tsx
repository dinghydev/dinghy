import {
  deepMerge,
  deepResolve,
  extendStyle,
  getRenderOptions,
  type NodeProps,
  ResolvableStringSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'
import { S3Bucket } from '../composites/s3/S3Bucket.tsx'
import { useAwsProvider } from './AwsProvider.tsx'
import { Backend, BackendInputSchema } from '@dinghy/tf-common'
import { BUCKET } from '@dinghy/diagrams/entitiesAwsStorage'

export const InputSchema = BackendInputSchema.extend({
  type: ResolvableStringSchema.default('s3'),
  bucket: ResolvableStringSchema.optional(),
  bucketSurfix: ResolvableStringSchema.default('backend'),
  stateFile: ResolvableStringSchema.optional(),
  stateFilePrefix: ResolvableStringSchema.optional(),
  stateFileExt: ResolvableStringSchema.default('.tfstate.json'),
  s3Bucket: z.any().default({}),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function S3Backend(
  { _components, children, ...props }: Partial<InputProps>,
) {
  const renderOptions = getRenderOptions()
  const inputProps = deepMerge({}, renderOptions.s3Backend)
  deepMerge(inputProps, props)
  const backendConfig = InputSchema.loose().parse(inputProps)
  const bucket = (backendConfig.bucket ||
    (() => `${renderOptions.stack.name}-${backendConfig.bucketSurfix}`)) as any

  const BackendBucket = () => {
    const S3BucketComponent: any =
      _components?.backendBucket as typeof S3Bucket ||
      S3Bucket
    return (
      <S3BucketComponent
        _id='awss3bucket_backend'
        _title='Backend Bucket'
        _display='entity'
        bucket={bucket}
        useData={backendConfig.useData}
        versioningEnabled
        object_lock_enabled
        {...backendConfig.s3Bucket}
      />
    )
  }

  const BackendComponent: any = _components?.backend as typeof Backend ||
    Backend

  const stateRemoteFile = backendConfig.stateFile ||
    `${
      backendConfig.stateFilePrefix || `${renderOptions.stack.name}/`
    }${renderOptions.stack.name}${backendConfig.stateFileExt}`
  const { awsProvider } = useAwsProvider()
  const alias = deepResolve(backendConfig.alias || backendConfig.type)
  return (
    <BackendComponent
      _category='terraform'
      _terraform={{
        backend: {
          [alias]: {
            bucket,
            key: stateRemoteFile,
            region: awsProvider.region,
          },
        },
      }}
      _display='entity'
      bucket={bucket}
      _style={extendStyle(props, BUCKET)}
      {...(backendConfig as any)}
    >
      <BackendBucket />
      {children}
    </BackendComponent>
  )
}

export const useS3Backend = () => useTypedNode<InputProps>(S3Backend)
