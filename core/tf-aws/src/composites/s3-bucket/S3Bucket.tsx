import {
  containerAppHome,
  deepMerge,
  deepResolve,
  getRenderOptions,
  type NodeProps,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
  Shape,
  toId,
} from '@dinghy/base-components'
import z from 'zod'
import {
  AwsS3Bucket,
  InputSchema as AwsS3BucketInputSchema,
  useAwsS3Bucket,
} from '../../services/s3/AwsS3Bucket.tsx'
import { AwsS3BucketVersioning } from '../../services/s3/AwsS3BucketVersioning.tsx'
import { AwsS3BucketLogging } from '../../services/s3/AwsS3BucketLogging.tsx'
import { existsSync } from '@std/fs/exists'
import { walkSync } from '@std/fs/walk'
import { AwsS3BucketPolicy, AwsS3Object } from '@dinghy/tf-aws/serviceS3'
import { contentType } from '@std/media-types'
import { useRegionalLogBucket } from '@dinghy/tf-aws'

function getContentType(filePath: string): string {
  const extension = filePath.split('.').pop()?.toLowerCase() || ''
  return contentType(`.${extension}`) || 'application/octet-stream'
}

export const InputSchema = z.object({
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
}).extend({ ...AwsS3BucketInputSchema.shape })

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function S3Bucket(
  { _components, children, ...props }: Partial<InputProps>,
) {
  const inputProps = deepMerge({}, getRenderOptions().s3Bucket || {})
  deepMerge(inputProps, props.s3Bucket || {})
  deepMerge(inputProps, props)
  const bucketConfig = InputSchema.loose().parse(inputProps)
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
    const { logBucket } = useRegionalLogBucket()
    return (
      <BucketLoggingComponent
        bucket={s3Bucket.bucket}
        target_bucket={bucketConfig.logBucket || logBucket.bucket}
        target_prefix={() => `s3-access-log/${deepResolve(s3Bucket.bucket)}/`}
        _id={() => `${deepResolve(s3Bucket._id)}_logging`}
        depends_on={() => [s3Bucket._terraformId]}
      />
    )
  }

  const BucketPolicy = () => {
    const { s3Bucket } = useAwsS3Bucket()
    const S3BucketPolicyComponent =
      _components?.s3BucketPolicy as typeof AwsS3BucketPolicy ||
      AwsS3BucketPolicy
    return (
      <S3BucketPolicyComponent
        depends_on={() => [s3Bucket._terraformId]}
        _id={() => `${deepResolve(s3Bucket._id)}_policy`}
        bucket={s3Bucket.bucket}
        policy={bucketConfig.bucketPolicy}
      />
    )
  }

  const s3Files = `${containerAppHome}/s3-files/${bucketConfig.bucket}`
  const s3FilesExists = typeof bucketConfig.bucket === 'string' &&
    existsSync(s3Files)
  const Files = () => {
    const files = []
    for (
      const entry of walkSync(s3Files, { includeDirs: false })
    ) {
      const target = entry.path.replace(s3Files, '')
      files.push({
        source: entry.path,
        target,
        contentType: bucketConfig.contentTypes[target] ||
          getContentType(target),
      })
    }

    const { s3Bucket } = useAwsS3Bucket()
    const S3FilesComponent = _components?.s3Files as typeof Shape ||
      Shape
    const S3ObjectComponent = _components?.s3Object as typeof AwsS3Object ||
      AwsS3Object
    return (
      <S3FilesComponent _direction='vertical'>
        {files
          .sort((a, b) => a.target.localeCompare(b.target))
          .map((file) => (
            <S3ObjectComponent
              _id={toId(`${bucketConfig.bucket}_${file.target}`)}
              _title={file.target}
              bucket={bucketConfig.bucket}
              key={file.target}
              __key={file.target}
              cache_control={bucketConfig.cacheControls[file.target] ||
                bucketConfig.cacheControlDefault}
              content_type={file.contentType}
              source={file.source}
              depends_on={() => [s3Bucket._terraformId]}
            />
          ))}
      </S3FilesComponent>
    )
  }

  const BucketComponent: any = _components?.bucket as typeof AwsS3Bucket ||
    AwsS3Bucket
  return (
    <BucketComponent
      _title={bucketConfig.bucket}
      _direction='vertical'
      {...bucketConfig}
      {...props}
    >
      {bucketConfig.versioningEnabled && <BucketVersioning />}
      {bucketConfig.loggingEnabled && <BucketLogging />}
      {bucketConfig.bucketPolicy && <BucketPolicy />}
      {s3FilesExists && <Files />}
      {children}
    </BucketComponent>
  )
}
