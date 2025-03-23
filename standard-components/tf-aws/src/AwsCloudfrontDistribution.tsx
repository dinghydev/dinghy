import {
  IacNodeProps,
  ResolvableBooleanSchema,
  ResolvableNumberSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'
import { aws, AwsRegion } from './index.js'
import z from 'zod'
import { Cloudfront } from '@reactiac/standard-components-diagrams'
import {
  useTypedNode,
  useTypedNodes
} from '@reactiac/base-components'
import { AwsRegionInputProps } from './AwsRegion.js'

export const AwsCloudfrontDistributionInputSchema = z.object({
  aliases: ResolvableStringArraySchema.optional(),
  restrictions: z.any(),
  default_cache_behavior: z.any(),
  origin: z.any(),
  custom_error_response: z.any(),
  enabled: ResolvableBooleanSchema,
  default_root_object: ResolvableStringSchema.optional(),
  logging_config: z.object({
    bucket: z.any(),
    include_cookies: z.boolean().optional(),
    prefix: ResolvableStringSchema.optional(),
  }).optional(),
  viewer_certificate: z.object({
    acm_certificate_arn: ResolvableStringSchema.optional(),
    cloudfront_default_certificate: ResolvableBooleanSchema.optional(),
    ssl_support_method: ResolvableStringSchema.optional(),
    minimum_protocol_version: ResolvableStringSchema.optional(),
  }),
})

export const AwsCloudfrontDistributionOuputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
  domain_name: ResolvableStringSchema.optional(),
  hosted_zone_id: ResolvableStringSchema.optional(),
})

export type AwsCloudfrontDistributionInputProps =
  & z.infer<typeof AwsCloudfrontDistributionInputSchema>
  & IacNodeProps

export function AwsCloudfrontDistribution(
  props: AwsCloudfrontDistributionInputProps,
) {
  return (
    <Cloudfront
      {...aws(
        props,
        AwsCloudfrontDistributionInputSchema,
        AwsCloudfrontDistributionOuputSchema,
      )}
    />
  )
}

export const useAwsCloudfrontDistribution = () =>
  useTypedNode<AwsCloudfrontDistributionInputProps>(AwsCloudfrontDistribution)

export const useAwsCloudfrontDistributions = () =>
  useTypedNodes<AwsCloudfrontDistributionInputProps[]>(AwsCloudfrontDistribution)
