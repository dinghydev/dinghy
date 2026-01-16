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

export const InputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  route_key: resolvableValue(z.string()),
  api_key_required: resolvableValue(z.boolean().optional()),
  authorization_scopes: resolvableValue(z.string().array().optional()),
  authorization_type: resolvableValue(z.string().optional()),
  authorizer_id: resolvableValue(z.string().optional()),
  model_selection_expression: resolvableValue(z.string().optional()),
  operation_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  request_models: resolvableValue(z.record(z.string(), z.string()).optional()),
  request_parameter: resolvableValue(
    z.object({
      request_parameter_key: z.string(),
      required: z.boolean(),
    }).array().optional(),
  ),
  route_response_selection_expression: resolvableValue(z.string().optional()),
  target: resolvableValue(z.string().optional()),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apigatewayv2_route

export function AwsApigatewayv2Route(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_route'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2Route = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsApigatewayv2Route, idFilter, baseNode, optional)

export const useAwsApigatewayv2Routes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsApigatewayv2Route, idFilter, baseNode, optional)
