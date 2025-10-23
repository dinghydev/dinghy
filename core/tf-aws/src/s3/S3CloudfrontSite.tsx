import {
  type NodeProps,
  ResolvableRecordSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import z from 'zod'
import { useLogBucket } from './LogBucket.tsx'
import { useAwsAcmCertificate } from '../AwsAcmCertificate.tsx'
import {
  AwsCloudfrontOriginAccessControl,
  useAwsCloudfrontOriginAccessControl,
} from '../cloudfront/AwsCloudfrontOriginAccessControl.tsx'
import { useStack } from '@dinghy/base-components'
import {
  AwsCloudfrontDistribution,
  type AwsCloudfrontDistributionInputProps,
  useAwsCloudfrontDistribution,
} from '../cloudfront/AwsCloudfrontDistribution.tsx'
import { useAwsRoute53Zone } from '../route53/AwsRoute53Zone.tsx'
import { S3TextFile } from './S3TextFile.tsx'
import { AwsS3Bucket, useAwsS3Bucket } from './AwsS3Bucket.tsx'
import { AwsRoute53Record } from '../route53/AwsRoute53Record.tsx'
import {
  DataAwsIamPolicyDocument,
  useDataAwsIamPolicyDocument,
} from '../iam/DataAwsIamPolicyDocument.tsx'
import { AwsS3BucketPolicy } from './AwsS3BucketPolicy.tsx'
import { AwsS3BucketLogging } from './AwsS3BucketLogging.tsx'

export const S3CloudfrontSiteInputSchema = z.object({
  subdomain: ResolvableStringSchema,
  files: ResolvableRecordSchema.array().optional(),
  bucketVersions: ResolvableStringArraySchema.optional(),
})

export type S3CloudfrontSiteInputProps =
  & z.input<
    typeof S3CloudfrontSiteInputSchema
  >
  & AwsCloudfrontDistributionInputProps

export function S3CloudfrontSite(props: S3CloudfrontSiteInputProps) {
  const { stack } = useStack()
  const { acmCertificate } = useAwsAcmCertificate()
  const { cloudfrontDistribution } = useAwsCloudfrontDistribution()
  const { subdomain, bucketVersions, files } = S3CloudfrontSiteInputSchema
    .parse(props)
  const { logBucket } = useLogBucket()
  const domain = () => {
    return `${subdomain}.${(acmCertificate as any).domain()}`.replace(
      /^(WWW\.)/,
      '',
    )
  }

  const Cloudfront = () => {
    const { s3Bucket: originBucket } = useAwsS3Bucket()
    const { route53Zone: zone } = useAwsRoute53Zone()
    const { accessControl: awsCloudfrontOriginAccessControl } =
      useAwsCloudfrontOriginAccessControl()
    const logging_config = {
      bucket: logBucket.bucket_regional_domain_name,
      prefix: () => `log-sink/cloudfront/${domain()}/`,
    }

    return (
      <AwsCloudfrontDistribution
        title={subdomain}
        _display='entity'
        _dependsOn='Bucket'
        logging_config={logging_config as any}
        aliases={[domain as any]}
        enabled
        restrictions={{
          geo_restriction: { restriction_type: 'none', locations: [] },
        }}
        default_cache_behavior={{
          allowed_methods: ['GET', 'HEAD', 'OPTIONS'],
          cached_methods: ['GET', 'HEAD'],
          target_origin_id: 'defaultOrigin',
          compress: true,
          viewer_protocol_policy: 'redirect-to-https',
          response_headers_policy_id: '60669652-455b-4ae9-85a4-c4c02393f86c', //SimpleCORS https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-response-headers-policies.html#managed-response-headers-policies-cors
          cache_policy_id: '658327ea-f89d-4fab-a63d-7e88639e58f6', //CachingOptimized https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html} :
        }}
        origin={{
          domain_name: originBucket.bucket_regional_domain_name,
          origin_id: 'defaultOrigin',
          origin_access_control_id: awsCloudfrontOriginAccessControl.id,
        }}
        viewer_certificate={{
          acm_certificate_arn: acmCertificate.arn,
          ssl_support_method: 'sni-only',
          minimum_protocol_version: 'TLSv1.2_2021',
        }}
        default_root_object='index.html'
        custom_error_response={[
          {
            error_caching_min_ttl: 3600,
            error_code: 403,
            response_code: 404,
            response_page_path: '/errors/404.html',
          },
        ]}
        {...(props as any)}
      >
        <AwsRoute53Record
          name={domain as any}
          _name={subdomain}
          type='A'
          zone_id={zone.zone_id}
          alias={{
            name: cloudfrontDistribution.domain_name,
            zone_id: cloudfrontDistribution.hosted_zone_id,
            evaluate_target_health: false,
          }}
        />
        <AwsCloudfrontOriginAccessControl
          name={domain as any}
          _name={subdomain}
        />
      </AwsCloudfrontDistribution>
    )
  }

  const Bucket = (props: NodeProps) => {
    const bucketName = () => {
      return `${subdomain}${props._version ? `-${props._version}` : ''}`
        .toLowerCase()
    }
    const bucket = () => {
      return `${(stack as any)._name()}-${bucketName()}`
    }
    const target_prefix = () => `log-sink/s3/${bucket()}/`

    const S3BucketPolicy = () => {
      const { policyDocument: dataAwsIamPolicyDocument } =
        useDataAwsIamPolicyDocument()
      return (
        <AwsS3BucketPolicy
          _name={bucketName}
          bucket={bucket}
          policy={dataAwsIamPolicyDocument.json}
        >
          <DataAwsIamPolicyDocument
            _name={bucketName}
            statement={{
              sid: 'cloudfront-readonly-access',
              principals: {
                type: 'Service',
                identifiers: ['cloudfront.amazonaws.com'],
              },
              actions: ['s3:GetObject'],
              resources: [() => `arn:aws:s3:::${bucket()}/*`],
              condition: {
                test: 'StringEquals',
                variable: 'AWS:SourceArn',
                values: [cloudfrontDistribution.arn],
              },
            }}
          />
        </AwsS3BucketPolicy>
      )
    }

    const Files = () => {
      if (!files) {
        return null
      }
      return (files.map((file: any) => (
        <S3TextFile
          _title={() => file.filePath}
          bucket={bucket}
          _name={() => bucket() + file.filePath}
          key={file.filePath}
          {...file}
        />
      )))
    }

    return (
      <AwsS3Bucket
        _display='entity'
        _direction='vertical'
        _title={bucketName}
        bucket={bucket}
        {...props}
      >
        <AwsS3BucketLogging
          _name={bucketName}
          bucket={bucket}
          target_bucket={logBucket.bucket}
          target_prefix={target_prefix}
        />
        <S3BucketPolicy />
        <Files />
      </AwsS3Bucket>
    )
  }

  return (
    <>
      {props.children}
      <Cloudfront />
      {(bucketVersions as any[])?.map((version) => (
        <Bucket key={version} _version={version} />
      )) || <Bucket />}
    </>
  )
}
