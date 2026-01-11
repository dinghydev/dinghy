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
  domain_name: resolvableValue(z.string()),
  certificate_arn: resolvableValue(z.string().optional()),
  certificate_body: resolvableValue(z.string().optional()),
  certificate_chain: resolvableValue(z.string().optional()),
  certificate_name: resolvableValue(z.string().optional()),
  certificate_private_key: resolvableValue(z.string().optional()),
  endpoint_access_mode: resolvableValue(z.string().optional()),
  endpoint_configuration: resolvableValue(
    z.object({
      ip_address_type: z.string().optional(),
      types: z.string().array(),
    }).optional(),
  ),
  mutual_tls_authentication: resolvableValue(
    z.object({
      truststore_uri: z.string(),
      truststore_version: z.string().optional(),
    }).optional(),
  ),
  ownership_verification_certificate_arn: resolvableValue(
    z.string().optional(),
  ),
  policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  regional_certificate_arn: resolvableValue(z.string().optional()),
  regional_certificate_name: resolvableValue(z.string().optional()),
  security_policy: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate_upload_date: z.string().optional(),
  cloudfront_domain_name: z.string().optional(),
  cloudfront_zone_id: z.string().optional(),
  domain_name_id: z.string().optional(),
  id: z.string().optional(),
  regional_domain_name: z.string().optional(),
  regional_zone_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_domain_name

export function AwsApiGatewayDomainName(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_domain_name'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayDomainName = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsApiGatewayDomainName,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayDomainNames = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsApiGatewayDomainName,
    idFilter,
    baseNode,
    optional,
  )
