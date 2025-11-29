import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/apigatewayv2_route_response

export const InputSchema = z.object({
  api_id: resolvableValue(z.string()),
  route_id: resolvableValue(z.string()),
  route_response_key: resolvableValue(z.string()),
  model_selection_expression: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  response_models: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApigatewayv2RouteResponse(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_route_response'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2RouteResponse = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApigatewayv2RouteResponse, node, id)

export const useAwsApigatewayv2RouteResponses = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApigatewayv2RouteResponse, node, id)
