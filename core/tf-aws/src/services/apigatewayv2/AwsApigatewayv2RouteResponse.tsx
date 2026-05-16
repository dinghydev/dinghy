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

export const AwsApigatewayv2RouteResponseInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  route_id: resolvableValue(z.string()),
  route_response_key: resolvableValue(z.string()),
  model_selection_expression: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  response_models: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApigatewayv2RouteResponseOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsApigatewayv2RouteResponseInputProps =
  & z.input<typeof AwsApigatewayv2RouteResponseInputSchema>
  & NodeProps

export type AwsApigatewayv2RouteResponseOutputProps =
  & z.output<typeof AwsApigatewayv2RouteResponseOutputSchema>
  & z.output<typeof AwsApigatewayv2RouteResponseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_route_response

export function AwsApigatewayv2RouteResponse(
  props: Partial<AwsApigatewayv2RouteResponseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_route_response'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2RouteResponseInputSchema}
      _outputSchema={AwsApigatewayv2RouteResponseOutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2RouteResponse = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2RouteResponseOutputProps>(
    AwsApigatewayv2RouteResponse,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2RouteResponses = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2RouteResponseOutputProps>(
    AwsApigatewayv2RouteResponse,
    idFilter,
    baseNode,
    optional,
  )
