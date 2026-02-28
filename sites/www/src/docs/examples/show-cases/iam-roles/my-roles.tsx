import { AwsStack } from '@dinghy/tf-aws'
import { IamRoles } from '@dinghy/tf-aws/iam'

export default () => (
  <AwsStack>
    <IamRoles />
  </AwsStack>
)
