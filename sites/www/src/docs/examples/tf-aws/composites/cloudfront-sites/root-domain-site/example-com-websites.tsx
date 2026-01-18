import { MoveToHere } from '@dinghy/base-components'
import { AwsStack } from '@dinghy/tf-aws'
import { CloudfrontSites } from '@dinghy/tf-aws/cloudfrontSites'

export default () => (
  <AwsStack
    _title='example.com website'
    infrastructure={<MoveToHere includes='AwsRoute53Zone' />}
    regionalLogBucket
    globalLogBucket
  >
    <CloudfrontSites />
  </AwsStack>
)
