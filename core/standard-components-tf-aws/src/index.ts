import { ZodObject, ZodRawShape } from 'zod'
import {
  camelCaseToWords,
  DiagramNodeProps,
  IacNodeProps,
  NodeTree,
} from '@diac/base-components'

export * as ssoadmin from './ssoadmin/index.ts'
export * as cloudwatch from './cloudwatch/index.ts'
export * as cloudfront from './cloudfront/index.ts'
export * as s3 from './s3/index.ts'
export * as vpc from './vpc/index.ts'
export * as iam from './iam/index.ts'
export * as dynamodb from './dynamodb/index.ts'
export * as ec2 from './ec2/index.ts'
export * as route53 from './route53/index.ts'
export * as secretsmanager from './secretsmanager/index.ts'
export * as wafv2 from './wafv2/index.ts'
export * as quicksight from './quicksight/index.ts'
export * as appautoscaling from './appautoscaling/index.ts'
export * as lb from './lb/index.ts'
export * as ecs from './ecs/index.ts'
export { namespaceMapping } from './namespaceMapping.ts'

export { default as AwsCloud } from './AwsCloud.tsx'
export { type AwsLbInputProps, default as AwsLb } from './AwsLb.tsx'
export { useAwsSubnet, useAwsSubnets } from './vpc/AwsSubnet.tsx'
export { AwsRegion, useAwsRegion } from './AwsRegion.tsx'
export { DataAwsVpc } from './vpc/DataAwsVpc.tsx'
export { default as AwsInstance } from './AwsInstance.tsx'
export { default as AwsPostgres } from './AwsPostgres.tsx'

export { default as AwsECSCluster } from './AwsECSCluster.tsx'
export { default as AwsECSService } from './AwsECSService.tsx'
export { default as AwsECSContainer } from './AwsECSContainer.tsx'
export { AwsS3Bucket, useAwsS3Bucket } from './s3/AwsS3Bucket.tsx'
export { AwsS3BucketVersioning } from './s3/AwsS3BucketVersioning.tsx'
export { AwsS3BucketPolicy } from './s3/AwsS3BucketPolicy.tsx'
export { S3Backend } from './s3/S3Backend.tsx'
export { S3CloudfrontSite } from './s3/S3CloudfrontSite.tsx'
export { LogBucket } from './s3/LogBucket.tsx'
export { AwsS3BucketLogging } from './s3/AwsS3BucketLogging.tsx'
export { AwsS3BucketAcl } from './s3/AwsS3BucketAcl.tsx'
export {
  DataAwsIamPolicyDocument,
  useDataAwsIamPolicyDocument,
} from './iam/DataAwsIamPolicyDocument.tsx'
export { AwsS3BucketOwnershipControls } from './s3/AwsS3BucketOwnershipControls.tsx'
export { AwsDynamodbTable } from './dynamodb/AwsDynamodbTable.tsx'
export { AwsBackendS3 } from './AwsBackendS3.tsx'
export { AwsAcmCertificate } from './AwsAcmCertificate.tsx'
export { DataAwsAcmCertificate } from './DataAwsAcmCertificate.tsx'
export {
  type AwsElasticacheClusterProps,
  default as AwsElasticacheCluster,
} from './AwsElasticacheCluster.tsx'

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

export function awsProps(
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
