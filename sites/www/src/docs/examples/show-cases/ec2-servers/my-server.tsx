import { AwsStack } from '@dinghy/tf-aws'
import { Ec2Servers } from '@dinghy/tf-aws/ec2Servers'

export default () => (
  <AwsStack>
    <Ec2Servers />
  </AwsStack>
)
