import { MoveToHere, Shape } from '@dinghy/base-components'
import {
  AwsProvider,
  GlobalLogBucket,
  RegionalLogBucket,
  S3Backend,
} from '@dinghy/tf-aws/foundation'
import { CloudfrontSites } from '@dinghy/tf-aws/cloudfrontSites'

export default function App() {
  return (
    <ExampleCom>
      <AwsCloud>
        <CloudfrontSites />
        <Infrastructure />
      </AwsCloud>
    </ExampleCom>
  )
}

const ExampleCom = (props: any) => (
  <Shape _title='example.com website' {...props} />
)

const AwsCloud = (props: any) => <AwsProvider region='eu-west-1' {...props} />

const Infrastructure = (props: any) => {
  return (
    <Shape _distributed {...props}>
      <S3Backend logEnabled />
      <RegionalLogBucket />
      <GlobalLogBucket />
      <MoveToHere includes='AwsRoute53Zone' />
    </Shape>
  )
}
