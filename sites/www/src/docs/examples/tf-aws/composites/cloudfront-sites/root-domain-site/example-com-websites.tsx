import { MoveToHere } from '@dinghy/base-components'
import { AwsStack } from '@dinghy/tf-aws'
import { CloudfrontSites } from '@dinghy/tf-aws/cloudfrontSites'

export default () => (
  <AwsStack infrastructure={<MoveToHere includes='AwsRoute53Zone' />}>
    <CloudfrontSites />
  </AwsStack>
)
