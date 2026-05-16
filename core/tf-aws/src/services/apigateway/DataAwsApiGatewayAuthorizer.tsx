import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayAuthorizer } from './AwsApiGatewayAuthorizer.tsx'

export const DataAwsApiGatewayAuthorizerInputSchema = TfMetaSchema.extend({
  authorizer_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApiGatewayAuthorizerOutputSchema = z.object({
  arn: z.string().optional(),
  authorizer_credentials: z.string().optional(),
  authorizer_result_ttl_in_seconds: z.number().optional(),
  authorizer_uri: z.string().optional(),
  identity_source: z.string().optional(),
  identity_validation_expression: z.string().optional(),
  name: z.string().optional(),
  provider_arns: z.string().array().optional(),
  type: z.string().optional(),
})

export type DataAwsApiGatewayAuthorizerInputProps =
  & z.input<typeof DataAwsApiGatewayAuthorizerInputSchema>
  & NodeProps

export type DataAwsApiGatewayAuthorizerOutputProps =
  & z.output<typeof DataAwsApiGatewayAuthorizerOutputSchema>
  & z.output<typeof DataAwsApiGatewayAuthorizerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/api_gateway_authorizer

export function DataAwsApiGatewayAuthorizer(
  props: Partial<DataAwsApiGatewayAuthorizerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsApiGatewayAuthorizer
      _type='aws_api_gateway_authorizer'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApiGatewayAuthorizerInputSchema}
      _outputSchema={DataAwsApiGatewayAuthorizerOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayAuthorizer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApiGatewayAuthorizerOutputProps>(
    DataAwsApiGatewayAuthorizer,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewayAuthorizers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApiGatewayAuthorizerOutputProps>(
    DataAwsApiGatewayAuthorizer,
    idFilter,
    baseNode,
    optional,
  )
