import { AwsStack } from '@dinghy/tf-aws'
import { LambdaFunctions } from '@dinghy/tf-aws/lambda'

export default () => (
  <AwsStack>
    <LambdaFunctions />
  </AwsStack>
)
