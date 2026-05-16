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

export const AwsApiGatewayIntegrationInputSchema = TfMetaSchema.extend({
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
  integration_target: resolvableValue(z.string().optional()),
  passthrough_behavior: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  request_parameters: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  request_templates: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  response_transfer_mode: resolvableValue(z.string().optional()),
  timeout_milliseconds: resolvableValue(z.number().optional()),
  tls_config: resolvableValue(
    z.object({
      insecure_skip_verification: z.boolean().optional(),
    }).optional(),
  ),
  uri: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayIntegrationOutputSchema = z.object({})

export const AwsApiGatewayIntegrationImportSchema = z.object({
  http_method: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsApiGatewayIntegrationInputProps =
  & z.input<typeof AwsApiGatewayIntegrationInputSchema>
  & z.input<typeof AwsApiGatewayIntegrationImportSchema>
  & NodeProps

export type AwsApiGatewayIntegrationOutputProps =
  & z.output<typeof AwsApiGatewayIntegrationOutputSchema>
  & z.output<typeof AwsApiGatewayIntegrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_integration

export function AwsApiGatewayIntegration(
  props: Partial<AwsApiGatewayIntegrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_integration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayIntegrationInputSchema}
      _outputSchema={AwsApiGatewayIntegrationOutputSchema}
      _importSchema={AwsApiGatewayIntegrationImportSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayIntegration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayIntegrationOutputProps>(
    AwsApiGatewayIntegration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayIntegrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayIntegrationOutputProps>(
    AwsApiGatewayIntegration,
    idFilter,
    baseNode,
    optional,
  )
