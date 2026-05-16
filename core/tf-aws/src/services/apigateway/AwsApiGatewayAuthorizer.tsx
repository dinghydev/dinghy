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

export const AwsApiGatewayAuthorizerInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  authorizer_credentials: resolvableValue(z.string().optional()),
  authorizer_result_ttl_in_seconds: resolvableValue(z.number().optional()),
  authorizer_uri: resolvableValue(z.string().optional()),
  identity_source: resolvableValue(z.string().optional()),
  identity_validation_expression: resolvableValue(z.string().optional()),
  provider_arns: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  type: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayAuthorizerOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsApiGatewayAuthorizerInputProps =
  & z.input<typeof AwsApiGatewayAuthorizerInputSchema>
  & NodeProps

export type AwsApiGatewayAuthorizerOutputProps =
  & z.output<typeof AwsApiGatewayAuthorizerOutputSchema>
  & z.output<typeof AwsApiGatewayAuthorizerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_authorizer

export function AwsApiGatewayAuthorizer(
  props: Partial<AwsApiGatewayAuthorizerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_authorizer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayAuthorizerInputSchema}
      _outputSchema={AwsApiGatewayAuthorizerOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayAuthorizer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayAuthorizerOutputProps>(
    AwsApiGatewayAuthorizer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayAuthorizers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayAuthorizerOutputProps>(
    AwsApiGatewayAuthorizer,
    idFilter,
    baseNode,
    optional,
  )
