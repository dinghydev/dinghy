import { deepResolve } from '@dinghy/base-components'
import { useAwsProvider } from './AwsProvider.tsx'
import { BackendOutputs } from '@dinghy/tf-common'

import { AwsS3Object } from '../services/s3/AwsS3Object.tsx'
import { useS3Backend } from './S3Backend.tsx'

export function S3BackendOutputs(props: any) {
  const { awsProvider } = useAwsProvider()
  const { s3Backend } = useS3Backend()
  const outputProtocolPrefix = () =>
    `https://s3.${deepResolve(awsProvider.region)}.amazonaws.com/${
      deepResolve(s3Backend.bucket)
    }/`
  return (
    <BackendOutputs
      component={AwsS3Object}
      bucket={s3Backend.bucket}
      outputProtocolPrefix={outputProtocolPrefix}
      outputFilePrefix='outputs/'
      {...props}
    />
  )
}
