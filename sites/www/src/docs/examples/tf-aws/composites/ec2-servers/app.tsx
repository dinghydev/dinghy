import { Shape } from '@dinghy/base-components'
import { AwsProvider, S3Backend } from '@dinghy/tf-aws'
import { Ec2Servers } from '@dinghy/tf-aws/ec2Servers'

export default function Stack() {
  return (
    <MyEc2Server>
      <AwsProvider>
        <Ec2Servers />
        <Infrastructure />
      </AwsProvider>
    </MyEc2Server>
  )
}

const MyEc2Server = (props: any) => <Shape {...props} />

const Infrastructure = (props: any) => {
  return (
    <Shape _distributed {...props}>
      <S3Backend />
    </Shape>
  )
}
