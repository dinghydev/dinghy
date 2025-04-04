import { ZodObject, ZodRawShape } from 'zod'
import {
  DiagramNodeProps,
  IacNodeProps,
  NodeTree,
} from '@reactiac/base-components'
import { utils } from '@reactiac/base-components'
const { camelCaseToWords } = utils

export { default as AwsCloud } from './AwsCloud.ts'
export { default as AwsPublicSubnet } from './AwsPublicSubnet.ts'
export { default as AwsPrivateSubnet } from './AwsPrivateSubnet.ts'
export { type AwsLbInputProps, default as AwsLb } from './AwsLb.ts'
export { useAwsSubnet, useAwsSubnets } from './AwsSubnet.ts'
export { AwsRegion, useAwsRegion } from './AwsRegion.ts'
export { default as DataAwsVpc } from './DataAwsVpc.ts'
export { default as AwsInstance } from './AwsInstance.ts'
export { default as AwsPostgres } from './AwsPostgres.ts'

export { default as AwsWAF } from './AwsWAF.ts'
export { default as AwsECSCluster } from './AwsECSCluster.ts'
export { default as AwsECSService } from './AwsECSService.ts'
export { default as AwsECSContainer } from './AwsECSContainer.ts'
export { AwsS3Bucket, useAwsS3Bucket } from './AwsS3Bucket.ts'
export { AwsS3BucketVersioning } from './AwsS3BucketVersioning.ts'
export { AwsS3BucketPolicy } from './s3/AwsS3BucketPolicy.ts'
export { S3Backend } from './s3/S3Backend.ts'
export { S3CloudfrontSite } from './s3/S3CloudfrontSite.ts'
export { LogBucket } from './s3/LogBucket.ts'
export { AwsS3BucketLogging } from './AwsS3BucketLogging.ts'
export { AwsS3BucketAcl } from './AwsS3BucketAcl.ts'
export {
  DataAwsIamPolicyDocument,
  useDataAwsIamPolicyDocument,
} from './iam/DataAwsIamPolicyDocument.ts'
export { AwsS3BucketOwnershipControls } from './AwsS3BucketOwnershipControls.ts'
export { AwsDynamodbTable } from './AwsDynamodbTable.ts'
export { AwsBackendS3 } from './AwsBackendS3.ts'
export {
  AwsCloudfrontDistribution,
  useAwsCloudfrontDistributions,
} from './AwsCloudfrontDistribution.ts'
export { AwsCloudfrontOriginAccessIdentity } from './cloudfront/AwsCloudfrontOriginAccessIdentity.ts'
export { AwsCloudfrontOriginAccessControl } from './cloudfront/AwsCloudfrontOriginAccessControl.ts'
export { CloudfrontSite } from './cloudfront/CloudfrontSite.ts'
export { DataAwsRoute53Zone } from './DataAwsRoute53Zone.ts'
export { AwsRoute53Record } from './AwsRoute53Record.ts'
export { AwsAcmCertificate } from './AwsAcmCertificate.ts'
export { DataAwsAcmCertificate } from './DataAwsAcmCertificate.ts'
export {
  type AwsElasticacheClusterProps,
  default as AwsElasticacheCluster,
} from './AwsElasticacheCluster.ts'

function _title({ _props: { _tags } }: NodeTree) {
  const namedTag = camelCaseToWords((_tags as any)[0])
  return namedTag.replace(/^(Data )?Aws /, '')
}

function reverseFindTag(tags: string[], prefix: string) {
  for (let i = tags.length; i > 0; i--) {
    const tag = tags[i - 1]
    if (tag.startsWith(prefix)) {
      return tag
    }
  }
}

function _type({ _props: { _tags } }: NodeTree) {
  let awsTypeTag = reverseFindTag(_tags as any, 'Aws')
  if (!awsTypeTag) {
    awsTypeTag = reverseFindTag(_tags as any, 'DataAws')
    if (!awsTypeTag) {
      throw new Error(
        `None aws resource with tags [${(_tags as any).join(', ')}]`,
      )
    }
    awsTypeTag = awsTypeTag.replace('DataAws', 'Aws')
  }

  return camelCaseToWords(awsTypeTag).toLowerCase().replaceAll(' ', '_')
}

function _category({ _props: { _tags } }: NodeTree) {
  if (reverseFindTag(_tags as any, 'DataAws')) {
    return 'data'
  }
}

export function aws(
  props: IacNodeProps,
  _inputSchema: ZodObject<ZodRawShape>,
  _outputSchema?: ZodObject<ZodRawShape>,
) {
  return {
    _title,
    _type,
    _category,
    _inputSchema,
    _outputSchema,
    ...props,
  } as DiagramNodeProps
}
