import {
  deepResolve,
  getRenderOptions,
  type NodeProps,
  ResolvableStringSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

import {
  AwsS3Bucket,
  AwsS3BucketLogging,
  AwsS3BucketPolicy,
  useAwsS3Bucket,
} from '@dinghy/tf-aws/serviceS3'
import {
  DataAwsCallerIdentity,
  useDataAwsCallerIdentity,
} from '@dinghy/tf-aws/serviceSts'

import { useAwsCloud } from '@dinghy/tf-aws/foundation'

export const InputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  bucketSurfix: ResolvableStringSchema.default('logs'),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function AwsRegionalLogBucket(
  { _components, ...props }: Partial<InputProps>,
) {
  const { stack } = getRenderOptions()
  const { awsCloud } = useAwsCloud()
  const defaults = InputSchema.parse(props)
  const bucket = defaults.bucket ||
    (() =>
      `${stack.name}-${defaults.bucketSurfix}-${deepResolve(awsCloud.region)}`)

  const BucketLogging = () => {
    const { s3Bucket } = useAwsS3Bucket()
    const BucketLoggingComponent =
      _components?.bucketLogging as typeof AwsS3BucketLogging ||
      AwsS3BucketLogging
    return (
      <BucketLoggingComponent
        bucket={bucket}
        target_bucket={bucket}
        target_prefix={() => `s3-access-log/${deepResolve(bucket)}/`}
        _id={() => `${deepResolve(s3Bucket._id)}_logging`}
        depends_on={() => [s3Bucket._terraformId]}
      />
    )
  }

  const BucketPolicy = () => {
    const { s3Bucket } = useAwsS3Bucket()
    const BucketPolicyComponent =
      _components?.bucketPolicy as typeof AwsS3BucketPolicy ||
      AwsS3BucketPolicy
    const { callerIdentity } = useDataAwsCallerIdentity()
    return (
      <BucketPolicyComponent
        _id={() => `${deepResolve(s3Bucket._id)}_policy`}
        bucket={bucket}
        policy={() =>
          JSON.stringify(deepResolve({
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Principal: {
                  Service: 'logging.s3.amazonaws.com',
                },
                Action: 's3:PutObject',
                Resource: `arn:aws:s3:::${deepResolve(bucket)}/*`,
              },
              {
                Effect: 'Allow',
                Principal: {
                  Service: 'logging.s3.amazonaws.com',
                },
                Action: 's3:GetBucketAcl',
                Resource: `arn:aws:s3:::${deepResolve(bucket)}`,
              },
              { //for cloudfront logs v2, not working yet https://github.com/hashicorp/terraform-provider-aws/issues/44832
                Effect: 'Allow',
                Principal: {
                  Service: 'delivery.logs.amazonaws.com',
                },
                Action: 's3:PutObject',
                Resource: `arn:aws:s3:::${deepResolve(bucket)}/*`,
                Condition: {
                  StringEquals: {
                    'aws:SourceAccount': callerIdentity.account_id,
                  },
                },
              },
            ],
          }))}
      />
    )
  }

  const BucketComponent = _components?.bucket as typeof AwsS3Bucket ||
    AwsS3Bucket
  return (
    <BucketComponent
      bucket={bucket}
      _title='Regional LogBucket'
      _display='entity'
      {...props}
    >
      <BucketLogging />
      <BucketPolicy />
      <DataAwsCallerIdentity _consolidatedId='caller_identity' />
    </BucketComponent>
  )
}

export const useAwsRegionalLogBucket = (
  idFilter?: string,
  node?: any,
  optional?: boolean,
) => useTypedNode<InputProps>(AwsRegionalLogBucket, idFilter, node, optional)
