import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  distribution_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  connection_group_id: resolvableValue(z.string().optional()),
  customizations: resolvableValue(
    z.object({
      certificate: z.object({
        arn: z.string().optional(),
      }).array().optional(),
      geo_restriction: z.object({
        locations: z.string().array().optional(),
        restriction_type: z.string().optional(),
      }).array().optional(),
      web_acl: z.object({
        action: z.string().optional(),
        arn: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  domain: resolvableValue(
    z.object({
      domain: z.string(),
      status: z.string(),
    }).array().optional(),
  ),
  enabled: resolvableValue(z.boolean().optional()),
  managed_certificate_request: resolvableValue(
    z.object({
      certificate_transparency_logging_preference: z.string().optional(),
      primary_domain_name: z.string().optional(),
      validation_token_host: z.string().optional(),
    }).array().optional(),
  ),
  parameter: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  wait_for_deployment: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant

export function AwsCloudfrontDistributionTenant(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_distribution_tenant'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontDistributionTenant = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudfrontDistributionTenant,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontDistributionTenants = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontDistributionTenant,
    idFilter,
    baseNode,
    optional,
  )
