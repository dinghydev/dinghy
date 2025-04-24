import {
  type NodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
  utils,
} from '@reactiac/base-components'
import z from 'zod'
import {
  AwsCloudfrontDistribution,
  AwsCloudfrontOriginAccessControl,
  AwsRoute53Record,
  AwsS3Bucket,
  AwsS3BucketLogging,
  AwsS3BucketPolicy,
  DataAwsIamPolicyDocument,
  useAwsS3Bucket,
  useDataAwsIamPolicyDocument,
} from '../index.ts'
import { useLogBucket } from './LogBucket.tsx'
import { useAwsAcmCertificate } from '../AwsAcmCertificate.tsx'
import { useAwsCloudfrontOriginAccessControl } from '../cloudfront/AwsCloudfrontOriginAccessControl.tsx'
import { useStack } from '@reactiac/base-components'
import {
  type AwsCloudfrontDistributionInputProps,
  useAwsCloudfrontDistribution,
} from '../AwsCloudfrontDistribution.tsx'
import { useAwsRoute53Zone } from '../route53/AwsRoute53Zone.tsx'

export const S3CloudfrontSiteInputSchema = z.object({
  subdomain: ResolvableStringSchema,
  bucketVersions: ResolvableStringArraySchema.optional(),
})

export type S3CloudfrontSiteInputProps =
  & z.input<
    typeof S3CloudfrontSiteInputSchema
  >
  & AwsCloudfrontDistributionInputProps

export function S3CloudfrontSite(props: S3CloudfrontSiteInputProps) {
  const { stack } = useStack()
  const { awsAcmCertificate } = useAwsAcmCertificate()
  const { awsCloudfrontDistribution } = useAwsCloudfrontDistribution()
  const { subdomain, bucketVersions } = S3CloudfrontSiteInputSchema.parse(props)
  const { logBucket } = useLogBucket()
  const domain = () => {
    return `${subdomain}.${(awsAcmCertificate as any).domain()}`.replace(
      /^(WWW\.)/,
      '',
    )
  }

  const Cloudfront = () => {
    const { awsS3Bucket } = useAwsS3Bucket()
    const { awsRoute53Zone } = useAwsRoute53Zone()
    const { awsCloudfrontOriginAccessControl } =
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
        enabled={true}
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
          domain_name: awsS3Bucket.bucket_regional_domain_name,
          origin_id: 'defaultOrigin',
          origin_access_control_id: awsCloudfrontOriginAccessControl.id,
        }}
        viewer_certificate={{
          acm_certificate_arn: awsAcmCertificate.arn,
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
        {...props}
      >
        <AwsRoute53Record
          name={domain as any}
          _name={subdomain}
          type='A'
          zone_id={awsRoute53Zone.zone_id}
          alias={{
            name: awsCloudfrontDistribution.domain_name,
            zone_id: awsCloudfrontDistribution.hosted_zone_id,
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
      const { dataAwsIamPolicyDocument } = useDataAwsIamPolicyDocument()
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
                values: [awsCloudfrontDistribution.arn],
              },
            }}
          />
        </AwsS3BucketPolicy>
      )
    }

    return (
      <AwsS3Bucket
        _display='entity'
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
