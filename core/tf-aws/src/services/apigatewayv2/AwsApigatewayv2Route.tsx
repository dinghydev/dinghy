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

export const AwsApigatewayv2RouteInputSchema = TfMetaSchema.extend({
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

export const AwsApigatewayv2RouteOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsApigatewayv2RouteImportSchema = z.object({
  api_id: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsApigatewayv2RouteInputProps =
  & z.input<typeof AwsApigatewayv2RouteInputSchema>
  & z.input<typeof AwsApigatewayv2RouteImportSchema>
  & NodeProps

export type AwsApigatewayv2RouteOutputProps =
  & z.output<typeof AwsApigatewayv2RouteOutputSchema>
  & z.output<typeof AwsApigatewayv2RouteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_route

export function AwsApigatewayv2Route(
  props: Partial<AwsApigatewayv2RouteInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_route'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2RouteInputSchema}
      _outputSchema={AwsApigatewayv2RouteOutputSchema}
      _importSchema={AwsApigatewayv2RouteImportSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2Route = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2RouteOutputProps>(
    AwsApigatewayv2Route,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2Routes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2RouteOutputProps>(
    AwsApigatewayv2Route,
    idFilter,
    baseNode,
    optional,
  )
