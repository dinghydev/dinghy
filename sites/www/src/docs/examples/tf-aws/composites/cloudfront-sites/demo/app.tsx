import { MoveToHere, Shape } from '@dinghy/base-components'
import {
  AwsProvider,
  GlobalLogBucket,
  RegionalLogBucket,
  S3Backend,
} from '@dinghy/tf-aws'
import { CloudfrontSites } from '@dinghy/tf-aws/cloudfrontSites'

export default function Stack() {
  return (
    <DinghyDevDemoSites>
      <AwsProvider region='eu-west-1'>
        <CloudfrontSites />
        <Infrastructure />
      </AwsProvider>
    </DinghyDevDemoSites>
  )
}

const DinghyDevDemoSites = (props: any) => <Shape {...props} />

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
