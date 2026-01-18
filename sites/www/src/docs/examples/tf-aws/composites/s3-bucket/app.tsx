import { AwsStack } from '@dinghy/tf-aws'
import { S3Bucket } from '@dinghy/tf-aws/s3Bucket'

export default () => (
  <AwsStack>
    <S3Bucket
      bucket='my-demo-bucket-with-versioning'
      versioningEnabled
    />
  </AwsStack>
)
