import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_authorizer

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayAuthorizer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_authorizer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayAuthorizer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayAuthorizer, node, id)

export const useAwsApiGatewayAuthorizers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayAuthorizer, node, id)
