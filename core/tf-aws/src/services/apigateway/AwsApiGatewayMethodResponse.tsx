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

export const AwsApiGatewayMethodResponseInputSchema = TfMetaSchema.extend({
  http_method: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  status_code: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  response_models: resolvableValue(z.record(z.string(), z.string()).optional()),
  response_parameters: resolvableValue(
    z.record(z.string(), z.boolean()).optional(),
  ),
})

export const AwsApiGatewayMethodResponseOutputSchema = z.object({})

export const AwsApiGatewayMethodResponseImportSchema = z.object({
  http_method: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  status_code: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsApiGatewayMethodResponseInputProps =
  & z.input<typeof AwsApiGatewayMethodResponseInputSchema>
  & z.input<typeof AwsApiGatewayMethodResponseImportSchema>
  & NodeProps

export type AwsApiGatewayMethodResponseOutputProps =
  & z.output<typeof AwsApiGatewayMethodResponseOutputSchema>
  & z.output<typeof AwsApiGatewayMethodResponseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_method_response

export function AwsApiGatewayMethodResponse(
  props: Partial<AwsApiGatewayMethodResponseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_method_response'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayMethodResponseInputSchema}
      _outputSchema={AwsApiGatewayMethodResponseOutputSchema}
      _importSchema={AwsApiGatewayMethodResponseImportSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayMethodResponse = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayMethodResponseOutputProps>(
    AwsApiGatewayMethodResponse,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayMethodResponses = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayMethodResponseOutputProps>(
    AwsApiGatewayMethodResponse,
    idFilter,
    baseNode,
    optional,
  )
