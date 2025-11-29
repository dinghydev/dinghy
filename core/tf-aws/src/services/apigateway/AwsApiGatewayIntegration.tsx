import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_integration

export const InputSchema = z.object({
  http_method: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  cache_key_parameters: resolvableValue(z.string().array().optional()),
  cache_namespace: resolvableValue(z.string().optional()),
  connection_id: resolvableValue(z.string().optional()),
  connection_type: resolvableValue(z.string().optional()),
  content_handling: resolvableValue(z.string().optional()),
  credentials: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  integration_http_method: resolvableValue(z.string().optional()),
  passthrough_behavior: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  request_parameters: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  request_templates: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  timeout_milliseconds: resolvableValue(z.number().optional()),
  tls_config: resolvableValue(
    z.object({
      insecure_skip_verification: z.boolean().optional(),
    }).optional(),
  ),
  uri: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayIntegration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_integration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayIntegration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayIntegration, node, id)

export const useAwsApiGatewayIntegrations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayIntegration, node, id)
