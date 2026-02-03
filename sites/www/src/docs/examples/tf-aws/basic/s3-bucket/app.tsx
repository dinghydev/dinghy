import { deepResolve, Shape } from '@dinghy/base-components'
import { AwsProvider } from '@dinghy/tf-aws'
import { LocalBackend } from '@dinghy/tf-common'
import {
  AwsS3Bucket,
  AwsS3BucketVersioning,
  useAwsS3Bucket,
} from '@dinghy/tf-aws/serviceS3'

export default () => (
  <Shape _title='Bucket With Basic Building Blocks'>
    <AwsProvider>
      <Bucket>
        <BucketVersioning />
      </Bucket>
      <LocalBackend />
    </AwsProvider>
  </Shape>
)

const Bucket = (props: any) => {
  const bucket = props.bucket || 'my-demo-bucket-with-versioning'
  return (
    <AwsS3Bucket
      bucket={bucket}
      _title={bucket}
      {...props}
    />
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
