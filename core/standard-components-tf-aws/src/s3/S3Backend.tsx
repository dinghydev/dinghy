import {
  type IacNodeProps,
  type Props,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
  useTypedNode,
} from '@reactiac/base-components'
import { useStack } from '@reactiac/base-components'
import z from 'zod'
import {
  AwsBackendS3,
  AwsDynamodbTable,
  AwsS3Bucket,
  AwsS3BucketVersioning,
  useAwsRegion,
  useAwsS3Bucket,
} from '../index.ts'
import { useRenderOptions } from '@reactiac/base-components'

export const S3BackendDefaults = z.object({
  bucketName: ResolvableStringSchema.default('tf-state'),
  lockName: ResolvableStringSchema.default('tf-lock'),
  stateFilePrefix: ResolvableStringSchema.default('tfstates/'),
  stateFileExt: ResolvableStringSchema.default('.tfstate'),
  createBackend: ResolvableBooleanSchema.default(true),
  createBackendInStage: ResolvableStringSchema.optional(),
  useLockTable: ResolvableBooleanSchema.default(false),
  _stage: z.string().default('!init'), //.optional(), //,
})

export const S3BackendInputSchema = S3BackendDefaults.extend({
  bucket: ResolvableStringSchema.optional(),
  lockTable: ResolvableStringSchema.optional(),
  stateFile: ResolvableStringSchema.optional(),
})

export const S3BackendOutputSchema = z.object({
  // id: ResolvableStringSchema.optional(),
  // arn: ResolvableStringSchema.optional(),
  // bucket_domain_name: ResolvableStringSchema.optional(),
  // bucket_regional_domain_name: ResolvableStringSchema.optional(),
  // hosted_zone_id: ResolvableStringSchema.optional(),
  // region: ResolvableStringSchema.optional(),
})

export type S3BackendInputProps =
  & z.input<typeof S3BackendInputSchema>
  & IacNodeProps

export type AwsS3BucketOutputProps =
  & z.input<typeof S3BackendOutputSchema>
  & S3BackendInputProps

const EnableVersioning = (props: Props) => {
  const { s3Bucket } = useAwsS3Bucket()
  return (
    <AwsS3BucketVersioning
      bucket={s3Bucket.bucket}
      versioning_configuration={{ status: 'Enabled' }}
      {...props}
    />
  )
}

export function S3Backend(props: S3BackendInputProps) {
  const { stack } = useStack()
  const { awsRegion } = useAwsRegion()
  const {
    createBackend,
    createBackendInStage,
    bucketName,
    useLockTable,
    lockName,
    stateFileExt,
    stateFilePrefix,
  } = S3BackendDefaults.parse(props)
  const bucket = (props.bucket ||
    (() => `${(stack as any)._name()}-${bucketName}`)) as any
  const lockTable = (props.lockTable ||
    (() => `${(stack as any)._name()}-${lockName}`)) as any
  const { renderOptions: { stage } } = useRenderOptions()
  const stateRemoteFile = props.stateFile ||
    (() => `${stateFilePrefix}${stage!.id}${stateFileExt}`)

  return (
    <AwsBackendS3
      bucket={bucket as any}
      useLockTable={useLockTable}
      lockTable={lockTable as any}
      stateFile={stateRemoteFile as any}
      region={awsRegion.region}
      _display='none'
      _stackResource
    >
      {createBackend && (
        <>
          <AwsS3Bucket
            bucket={bucket as any}
            _title={bucketName}
            _display='entity'
            _stage={createBackendInStage}
            object_lock_enabled
          >
            <EnableVersioning _stage={createBackendInStage} />
            {/* TODO: EnableLogging */}
          </AwsS3Bucket>
          {useLockTable && (
            <AwsDynamodbTable
              name={lockTable as any}
              hash_key='LockID'
              attribute={[{ name: 'LockID', type: 'S' }]}
              billing_mode='PAY_PER_REQUEST'
              _title={lockName}
              _stage={createBackendInStage as any}
            />
          )}
        </>
      )}
    </AwsBackendS3>
  )
}

export const useS3Backend = () =>
  useTypedNode<AwsS3BucketOutputProps>(S3Backend)
