import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/apigatewayv2_domain_name

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string()),
  domain_name_configuration: resolvableValue(z.object({
    certificate_arn: z.string(),
    endpoint_type: z.string(),
    hosted_zone_id: z.string(),
    ip_address_type: z.string().optional(),
    ownership_verification_certificate_arn: z.string().optional(),
    security_policy: z.string(),
    target_domain_name: z.string(),
  })),
  mutual_tls_authentication: resolvableValue(
    z.object({
      truststore_uri: z.string(),
      truststore_version: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  api_mapping_selection_expression: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApigatewayv2DomainName(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_domain_name'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2DomainName = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApigatewayv2DomainName, node, id)

export const useAwsApigatewayv2DomainNames = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApigatewayv2DomainName, node, id)
