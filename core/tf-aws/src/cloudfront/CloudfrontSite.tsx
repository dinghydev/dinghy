import {
  type NodeProps,
  type Props,
  ResolvableBooleanSchema,
  ResolvableNumberSchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import z from 'zod'
import {
  AwsCloudfrontDistribution,
  useAwsCloudfrontDistribution,
} from './AwsCloudfrontDistribution.tsx'
import { useAwsAcmCertificate } from '../AwsAcmCertificate.tsx'
import {
  AwsCloudfrontOriginAccessControl,
  useAwsCloudfrontOriginAccessControl,
} from './AwsCloudfrontOriginAccessControl.tsx'
import { useLogBucket } from '../s3/LogBucket.tsx'
import { useAwsRoute53Zone } from '../route53/AwsRoute53Zone.tsx'
import { AwsRoute53Record } from '../route53/index.ts'
import { useAwsS3Bucket } from '../s3/index.ts'

export const AwsCloudfrontDefaults = z.object({
  default_ttl: ResolvableNumberSchema.default(86400),
  stateFilePrefix: ResolvableStringSchema.default('tfstates/'),
  stateFileExt: ResolvableStringSchema.default('.tfstate'),
  createBackend: ResolvableBooleanSchema.default(true),
  useLockTable: ResolvableBooleanSchema.default(false),
  stage: z.string().default('state'), //.optional(), //,
})

export const CloudfrontSiteInputSchema = AwsCloudfrontDefaults.extend({
  logBucket: ResolvableStringSchema.optional(),
  lockTable: ResolvableStringSchema.optional(),
  stateFile: ResolvableStringSchema.optional(),
  s3OriginPrefix: ResolvableStringSchema.optional(),
})

export const CloudfrontSiteOutputSchema = z.object({
  // id: ResolvableStringSchema.optional(),
  // arn: ResolvableStringSchema.optional(),
  // bucket_domain_name: ResolvableStringSchema.optional(),
  // bucket_regional_domain_name: ResolvableStringSchema.optional(),
  // hosted_zone_id: ResolvableStringSchema.optional(),
  // region: ResolvableStringSchema.optional(),
})

export type CloudfrontSiteInputProps =
  & z.input<
    typeof CloudfrontSiteInputSchema
  >
  & NodeProps

const ARecord = (props: Props) => {
  const { distribution } = useAwsCloudfrontDistribution()
  const { zone } = useAwsRoute53Zone()
  return (
    <AwsRoute53Record
      type='A'
      zone_id={zone.zone_id}
      alias={{
        name: distribution.domain_name,
        zone_id: distribution.hosted_zone_id,
        evaluate_target_health: false,
      }}
      {...props}
    />
  )
}

export function CloudfrontSite(props: CloudfrontSiteInputProps) {
  const { bucket: logBucket } = useLogBucket()
  const { bucket: awsS3Bucket } = useAwsS3Bucket('aws_s3_bucket_sites')
  const { certificate } = useAwsAcmCertificate()
  const { control: awsCloudfrontOriginAccessControl } =
    useAwsCloudfrontOriginAccessControl((props as any).title)
  const { default_ttl, s3OriginPrefix } = CloudfrontSiteInputSchema.parse(props)
  const logging_config = {
    bucket: logBucket.bucket_regional_domain_name,
    prefix: () => `log-sink/cloudfront/${props.title}.dinghy.dev/`,
  }

  const domainName = `${props.title}.dinghy.dev`
  const origin_path = `/sites/${domainName}${
    s3OriginPrefix ? `/${s3OriginPrefix}` : ''
  }`

  const smartDefaults: Props = {}

  const cache_policy = default_ttl === 0
    ? { cache_policy_id: '4135ea2d-6df8-44a3-9df3-4b5a84be39ad' } //CachingDisabled https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html} :
    : default_ttl === 86400
    ? { cache_policy_id: '658327ea-f89d-4fab-a63d-7e88639e58f6' } //CachingOptimized
    : {
      min_ttl: 0,
      default_ttl: default_ttl,
      max_ttl: 86400,
      forwarded_values: {
        query_string: false,
        cookies: { forward: 'none' },
      },
    }

  return (
    <AwsCloudfrontDistribution
      logging_config={logging_config as any}
      aliases={[domainName]}
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
        ...cache_policy,
      }}
      origin={{
        domain_name: awsS3Bucket.bucket_regional_domain_name,
        origin_id: 'defaultOrigin',
        origin_path: origin_path,
        origin_access_control_id: awsCloudfrontOriginAccessControl.id,
      }}
      viewer_certificate={{
        acm_certificate_arn: certificate.arn,
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
      {...smartDefaults}
      {...props}
    >
      <ARecord name={domainName} />
      <AwsCloudfrontOriginAccessControl name={domainName} />
    </AwsCloudfrontDistribution>
  )
}
