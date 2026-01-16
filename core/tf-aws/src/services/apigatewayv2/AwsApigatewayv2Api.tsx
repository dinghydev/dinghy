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

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  protocol_type: resolvableValue(z.string()),
  api_key_selection_expression: resolvableValue(z.string().optional()),
  body: resolvableValue(z.string().optional()),
  cors_configuration: resolvableValue(
    z.object({
      allow_credentials: z.boolean().optional(),
      allow_headers: z.string().array().optional(),
      allow_methods: z.string().array().optional(),
      allow_origins: z.string().array().optional(),
      expose_headers: z.string().array().optional(),
      max_age: z.number().optional(),
    }).optional(),
  ),
  credentials_arn: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  disable_execute_api_endpoint: resolvableValue(z.boolean().optional()),
  fail_on_warnings: resolvableValue(z.boolean().optional()),
  ip_address_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  route_key: resolvableValue(z.string().optional()),
  route_selection_expression: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  api_endpoint: z.string().optional(),
  arn: z.string().optional(),
  execution_arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apigatewayv2_api

export function AwsApigatewayv2Api(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_api'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2Api = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsApigatewayv2Api, idFilter, baseNode, optional)

export const useAwsApigatewayv2Apis = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsApigatewayv2Api, idFilter, baseNode, optional)
