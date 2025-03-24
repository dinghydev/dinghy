import { ZodObject, ZodRawShape } from 'zod'
import {
  DiagramNodeProps,
  IacNodeProps,
  NodeTree,
} from '@reactiac/base-components'
import { utils } from '@reactiac/base-components'
const { camelCaseToWords } = utils

export { default as AwsCloud } from './AwsCloud.js'
export { default as AwsPublicSubnet } from './AwsPublicSubnet.js'
export { default as AwsPrivateSubnet } from './AwsPrivateSubnet.js'
export { type AwsLbInputProps, default as AwsLb } from './AwsLb.js'
export { useAwsSubnet, useAwsSubnets } from './AwsSubnet.js'
export { AwsRegion, useAwsRegion } from './AwsRegion.js'
export { default as DataAwsVpc } from './DataAwsVpc.js'
export { default as AwsInstance } from './AwsInstance.js'
export { default as AwsPostgres } from './AwsPostgres.js'

export { default as AwsWAF } from './AwsWAF.js'
export { default as AwsECSCluster } from './AwsECSCluster.js'
export { default as AwsECSService } from './AwsECSService.js'
export { default as AwsECSContainer } from './AwsECSContainer.js'
export { AwsS3Bucket, useAwsS3Bucket } from './AwsS3Bucket.js'
export { AwsS3BucketVersioning } from './AwsS3BucketVersioning.js'
export { AwsS3BucketPolicy } from './s3/AwsS3BucketPolicy.js'
export { S3Backend } from './s3/S3Backend.js'
export { S3CloudfrontSite } from './s3/S3CloudfrontSite.js'
export { LogBucket } from './s3/LogBucket.js'
export { AwsS3BucketLogging } from './AwsS3BucketLogging.js'
export { AwsS3BucketAcl } from './AwsS3BucketAcl.js'
export {
  DataAwsIamPolicyDocument,
  useDataAwsIamPolicyDocument,
} from './iam/DataAwsIamPolicyDocument.js'
export { AwsS3BucketOwnershipControls } from './AwsS3BucketOwnershipControls.js'
export { AwsDynamodbTable } from './AwsDynamodbTable.js'
export { AwsBackendS3 } from './AwsBackendS3.js'
export {
  AwsCloudfrontDistribution,
  useAwsCloudfrontDistributions,
} from './AwsCloudfrontDistribution.js'
export { AwsCloudfrontOriginAccessIdentity } from './cloudfront/AwsCloudfrontOriginAccessIdentity.js'
export { AwsCloudfrontOriginAccessControl } from './cloudfront/AwsCloudfrontOriginAccessControl.js'
export { CloudfrontSite } from './cloudfront/CloudfrontSite.js'
export { DataAwsRoute53Zone } from './DataAwsRoute53Zone.js'
export { AwsRoute53Record } from './AwsRoute53Record.js'
export { AwsAcmCertificate } from './AwsAcmCertificate.js'
export { DataAwsAcmCertificate } from './DataAwsAcmCertificate.js'
export {
  type AwsElasticacheClusterProps,
  default as AwsElasticacheCluster,
} from './AwsElasticacheCluster.js'

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
