import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_gateway_response

export const InputSchema = z.object({
  response_type: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  response_parameters: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  response_templates: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  status_code: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayGatewayResponse(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_gateway_response'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayGatewayResponse = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayGatewayResponse, node, id)

export const useAwsApiGatewayGatewayResponses = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayGatewayResponse, node, id)
