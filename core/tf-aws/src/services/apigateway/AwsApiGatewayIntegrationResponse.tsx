import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_integration_response

export const InputSchema = z.object({
  http_method: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  status_code: resolvableValue(z.string()),
  content_handling: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  response_parameters: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  response_templates: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  selection_pattern: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayIntegrationResponse(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_integration_response'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayIntegrationResponse = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayIntegrationResponse, node, id)

export const useAwsApiGatewayIntegrationResponses = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayIntegrationResponse, node, id)
