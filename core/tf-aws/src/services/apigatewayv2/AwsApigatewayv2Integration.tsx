import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/apigatewayv2_integration

export const InputSchema = z.object({
  api_id: resolvableValue(z.string()),
  integration_type: resolvableValue(z.string()),
  connection_id: resolvableValue(z.string().optional()),
  connection_type: resolvableValue(z.string().optional()),
  content_handling_strategy: resolvableValue(z.string().optional()),
  credentials_arn: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  integration_method: resolvableValue(z.string().optional()),
  integration_subtype: resolvableValue(z.string().optional()),
  integration_uri: resolvableValue(z.string().optional()),
  passthrough_behavior: resolvableValue(z.string().optional()),
  payload_format_version: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  request_parameters: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  request_templates: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  response_parameters: resolvableValue(
    z.object({
      mappings: z.record(z.string(), z.string()),
      status_code: z.string(),
    }).array().optional(),
  ),
  template_selection_expression: resolvableValue(z.string().optional()),
  timeout_milliseconds: resolvableValue(z.number().optional()),
  tls_config: resolvableValue(
    z.object({
      server_name_to_verify: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  integration_response_selection_expression: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApigatewayv2Integration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_integration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2Integration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApigatewayv2Integration, node, id)

export const useAwsApigatewayv2Integrations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApigatewayv2Integration, node, id)
