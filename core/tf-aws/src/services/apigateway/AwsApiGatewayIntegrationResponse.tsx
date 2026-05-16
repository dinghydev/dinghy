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

export const AwsApiGatewayIntegrationResponseInputSchema = TfMetaSchema.extend({
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

export const AwsApiGatewayIntegrationResponseOutputSchema = z.object({})

export const AwsApiGatewayIntegrationResponseImportSchema = z.object({
  http_method: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  status_code: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsApiGatewayIntegrationResponseInputProps =
  & z.input<typeof AwsApiGatewayIntegrationResponseInputSchema>
  & z.input<typeof AwsApiGatewayIntegrationResponseImportSchema>
  & NodeProps

export type AwsApiGatewayIntegrationResponseOutputProps =
  & z.output<typeof AwsApiGatewayIntegrationResponseOutputSchema>
  & z.output<typeof AwsApiGatewayIntegrationResponseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_integration_response

export function AwsApiGatewayIntegrationResponse(
  props: Partial<AwsApiGatewayIntegrationResponseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_integration_response'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayIntegrationResponseInputSchema}
      _outputSchema={AwsApiGatewayIntegrationResponseOutputSchema}
      _importSchema={AwsApiGatewayIntegrationResponseImportSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayIntegrationResponse = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayIntegrationResponseOutputProps>(
    AwsApiGatewayIntegrationResponse,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayIntegrationResponses = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayIntegrationResponseOutputProps>(
    AwsApiGatewayIntegrationResponse,
    idFilter,
    baseNode,
    optional,
  )
