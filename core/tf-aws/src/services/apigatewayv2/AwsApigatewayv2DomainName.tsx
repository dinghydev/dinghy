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

export const AwsApigatewayv2DomainNameInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  domain_name_configuration: resolvableValue(z.object({
    certificate_arn: z.string(),
    endpoint_type: z.string(),
    hosted_zone_id: z.string().optional(),
    ip_address_type: z.string().optional(),
    ownership_verification_certificate_arn: z.string().optional(),
    security_policy: z.string(),
    target_domain_name: z.string().optional(),
  })),
  mutual_tls_authentication: resolvableValue(
    z.object({
      truststore_uri: z.string(),
      truststore_version: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  routing_mode: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsApigatewayv2DomainNameOutputSchema = z.object({
  api_mapping_selection_expression: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsApigatewayv2DomainNameInputProps =
  & z.input<typeof AwsApigatewayv2DomainNameInputSchema>
  & NodeProps

export type AwsApigatewayv2DomainNameOutputProps =
  & z.output<typeof AwsApigatewayv2DomainNameOutputSchema>
  & z.output<typeof AwsApigatewayv2DomainNameInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_domain_name

export function AwsApigatewayv2DomainName(
  props: Partial<AwsApigatewayv2DomainNameInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_domain_name'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2DomainNameInputSchema}
      _outputSchema={AwsApigatewayv2DomainNameOutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2DomainName = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2DomainNameOutputProps>(
    AwsApigatewayv2DomainName,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2DomainNames = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2DomainNameOutputProps>(
    AwsApigatewayv2DomainName,
    idFilter,
    baseNode,
    optional,
  )
