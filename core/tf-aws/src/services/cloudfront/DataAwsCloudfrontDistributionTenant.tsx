import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontDistributionTenant } from './AwsCloudfrontDistributionTenant.tsx'

export const DataAwsCloudfrontDistributionTenantInputSchema = TfMetaSchema
  .extend({
    domain: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
  })

export const DataAwsCloudfrontDistributionTenantOutputSchema = z.object({
  arn: z.string().optional(),
  connection_group_id: z.string().optional(),
  customizations: z.object({
    certificate: z.object({
      arn: z.string(),
    }).array(),
    geo_restriction: z.object({
      locations: z.set(z.string()),
      restriction_type: z.string(),
    }).array(),
    web_acl: z.object({
      action: z.string(),
      arn: z.string(),
    }).array(),
  }).array().optional(),
  distribution_id: z.string().optional(),
  domains: z.object({
    domain: z.string(),
    status: z.string(),
  }).array().optional(),
  enabled: z.boolean().optional(),
  etag: z.string().optional(),
  managed_certificate_request: z.object({
    certificate_transparency_logging_preference: z.string(),
    primary_domain_name: z.string(),
    validation_token_host: z.string(),
  }).array().optional(),
  parameters: z.object({
    name: z.string(),
    value: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsCloudfrontDistributionTenantInputProps =
  & z.input<typeof DataAwsCloudfrontDistributionTenantInputSchema>
  & NodeProps

export type DataAwsCloudfrontDistributionTenantOutputProps =
  & z.output<typeof DataAwsCloudfrontDistributionTenantOutputSchema>
  & z.output<typeof DataAwsCloudfrontDistributionTenantInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudfront_distribution_tenant

export function DataAwsCloudfrontDistributionTenant(
  props: Partial<DataAwsCloudfrontDistributionTenantInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontDistributionTenant
      _type='aws_cloudfront_distribution_tenant'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudfrontDistributionTenantInputSchema}
      _outputSchema={DataAwsCloudfrontDistributionTenantOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontDistributionTenant = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudfrontDistributionTenantOutputProps>(
    DataAwsCloudfrontDistributionTenant,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudfrontDistributionTenants = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudfrontDistributionTenantOutputProps>(
    DataAwsCloudfrontDistributionTenant,
    idFilter,
    baseNode,
    optional,
  )
