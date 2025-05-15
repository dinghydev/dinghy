import {
  type IacNodeProps,
  ResolvableBooleanSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'
import { awsProps } from './index.ts'
import z from 'zod'
import { aws4 } from '../../standard-components-diagrams/src/index.ts'
import { useTypedNode, useTypedNodes } from '@reactiac/base-components'

export const AwsCloudfrontDistributionInputSchema = z.object({
  aliases: ResolvableStringArraySchema.optional(),
  restrictions: z.any(),
  default_cache_behavior: z.any(),
  origin: z.any(),
  custom_error_response: z.any(),
  enabled: ResolvableBooleanSchema.optional(),
  default_root_object: ResolvableStringSchema.optional(),
  logging_config: z
    .object({
      bucket: z.any(),
      include_cookies: z.boolean().optional(),
      prefix: ResolvableStringSchema.optional(),
    })
    .optional(),
  viewer_certificate: z
    .object({
      acm_certificate_arn: ResolvableStringSchema.optional(),
      cloudfront_default_certificate: ResolvableBooleanSchema.optional(),
      ssl_support_method: ResolvableStringSchema.optional(),
      minimum_protocol_version: ResolvableStringSchema.optional(),
    })
    .optional(),
})

export const AwsCloudfrontDistributionOuputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
  domain_name: ResolvableStringSchema.optional(),
  hosted_zone_id: ResolvableStringSchema.optional(),
})

export type AwsCloudfrontDistributionInputProps =
  & z.input<
    typeof AwsCloudfrontDistributionInputSchema
  >
  & IacNodeProps

export type AwsCloudfrontDistributionOutputProps =
  & z.input<
    typeof AwsCloudfrontDistributionOuputSchema
  >
  & AwsCloudfrontDistributionInputProps

export function AwsCloudfrontDistribution(
  props: AwsCloudfrontDistributionInputProps,
) {
  return (
    <aws4.Cloudfront
      {...awsProps(
        props,
        AwsCloudfrontDistributionInputSchema,
        AwsCloudfrontDistributionOuputSchema,
      )}
    />
  )
}

export const useAwsCloudfrontDistribution = () =>
  useTypedNode<AwsCloudfrontDistributionOutputProps>(AwsCloudfrontDistribution)

export const useAwsCloudfrontDistributions = () =>
  useTypedNodes<AwsCloudfrontDistributionOutputProps[]>(
    AwsCloudfrontDistribution,
  )
