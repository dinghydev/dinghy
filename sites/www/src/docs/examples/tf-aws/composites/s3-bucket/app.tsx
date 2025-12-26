import { Shape } from '@dinghy/base-components'
import { AwsProvider, S3Backend } from '@dinghy/tf-aws/foundation'
import { S3Bucket } from '@dinghy/tf-aws/s3Bucket'

export default function App() {
  return (
    <Shape _title='S3 Bucket Composite Component Example'>
      <AwsProvider region='eu-west-1'>
        <S3Backend />
        <S3Bucket
          bucket='my-demo-bucket-with-versioning'
          versioningEnabled
        />
      </AwsProvider>
    </Shape>
  )
}
