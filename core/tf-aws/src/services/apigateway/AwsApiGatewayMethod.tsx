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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_method

export function AwsApiGatewayMethod(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_method'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayMethod = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsApiGatewayMethod, idFilter, baseNode, optional)

export const useAwsApiGatewayMethods = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsApiGatewayMethod, idFilter, baseNode, optional)
