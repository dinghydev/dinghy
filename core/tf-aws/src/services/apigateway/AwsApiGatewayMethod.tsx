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

export const AwsApiGatewayMethodInputSchema = TfMetaSchema.extend({
  authorization: resolvableValue(z.string()),
  http_method: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  api_key_required: resolvableValue(z.boolean().optional()),
  authorization_scopes: resolvableValue(z.string().array().optional()),
  authorizer_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  operation_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  request_models: resolvableValue(z.record(z.string(), z.string()).optional()),
  request_parameters: resolvableValue(
    z.record(z.string(), z.boolean()).optional(),
  ),
  request_validator_id: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayMethodOutputSchema = z.object({})

export const AwsApiGatewayMethodImportSchema = z.object({
  http_method: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsApiGatewayMethodInputProps =
  & z.input<typeof AwsApiGatewayMethodInputSchema>
  & z.input<typeof AwsApiGatewayMethodImportSchema>
  & NodeProps

export type AwsApiGatewayMethodOutputProps =
  & z.output<typeof AwsApiGatewayMethodOutputSchema>
  & z.output<typeof AwsApiGatewayMethodInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_method

export function AwsApiGatewayMethod(
  props: Partial<AwsApiGatewayMethodInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_method'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayMethodInputSchema}
      _outputSchema={AwsApiGatewayMethodOutputSchema}
      _importSchema={AwsApiGatewayMethodImportSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayMethod = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayMethodOutputProps>(
    AwsApiGatewayMethod,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayMethods = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayMethodOutputProps>(
    AwsApiGatewayMethod,
    idFilter,
    baseNode,
    optional,
  )
