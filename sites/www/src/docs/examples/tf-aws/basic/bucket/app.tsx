import { deepResolve, Shape } from '@dinghy/base-components'
import { AwsProvider, S3Backend } from '@dinghy/tf-aws'
import {
  AwsS3Bucket,
  AwsS3BucketVersioning,
  useAwsS3Bucket,
} from '@dinghy/tf-aws/serviceS3'

export default function App() {
  return (
    <Shape _title='S3 Bucket Service Components Example'>
      <AwsProvider region='eu-west-1'>
        <S3Backend />
        <VersionedBucket
          bucket='my-demo-bucket-with-versioning'
          versioningEnabled
        />
      </AwsProvider>
    </Shape>
  )
}

const VersionedBucket = (
  { bucket, versioningEnabled, children, ...props }: any,
) => {
  return (
    <AwsS3Bucket
      bucket={bucket}
      _title={bucket}
      {...props}
    >
      {versioningEnabled && <BucketVersioning />}
      {children}
    </AwsS3Bucket>
  )
}

const BucketVersioning = (props: any) => {
  const { s3Bucket } = useAwsS3Bucket()
  return (
    <AwsS3BucketVersioning
      bucket={s3Bucket.bucket}
      _id={() => `${deepResolve(s3Bucket._id)}_versioning`}
      versioning_configuration={{ status: 'Enabled' }}
      depends_on={() => [s3Bucket._terraformId]}
      {...props}
    />
  )
}
