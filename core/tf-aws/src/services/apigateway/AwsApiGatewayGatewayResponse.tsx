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

export const AwsApiGatewayGatewayResponseInputSchema = TfMetaSchema.extend({
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

export const AwsApiGatewayGatewayResponseOutputSchema = z.object({})

export type AwsApiGatewayGatewayResponseInputProps =
  & z.input<typeof AwsApiGatewayGatewayResponseInputSchema>
  & NodeProps

export type AwsApiGatewayGatewayResponseOutputProps =
  & z.output<typeof AwsApiGatewayGatewayResponseOutputSchema>
  & z.output<typeof AwsApiGatewayGatewayResponseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_gateway_response

export function AwsApiGatewayGatewayResponse(
  props: Partial<AwsApiGatewayGatewayResponseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_gateway_response'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayGatewayResponseInputSchema}
      _outputSchema={AwsApiGatewayGatewayResponseOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayGatewayResponse = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayGatewayResponseOutputProps>(
    AwsApiGatewayGatewayResponse,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayGatewayResponses = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayGatewayResponseOutputProps>(
    AwsApiGatewayGatewayResponse,
    idFilter,
    baseNode,
    optional,
  )
