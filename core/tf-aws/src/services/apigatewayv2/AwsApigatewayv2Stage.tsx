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
  api_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  access_log_settings: resolvableValue(
    z.object({
      destination_arn: z.string(),
      format: z.string(),
    }).optional(),
  ),
  auto_deploy: resolvableValue(z.boolean().optional()),
  client_certificate_id: resolvableValue(z.string().optional()),
  default_route_settings: resolvableValue(
    z.object({
      data_trace_enabled: z.boolean().optional(),
      detailed_metrics_enabled: z.boolean().optional(),
      logging_level: z.string().optional(),
      throttling_burst_limit: z.number().optional(),
      throttling_rate_limit: z.number().optional(),
    }).optional(),
  ),
  deployment_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  route_settings: resolvableValue(
    z.object({
      data_trace_enabled: z.boolean().optional(),
      detailed_metrics_enabled: z.boolean().optional(),
      logging_level: z.string().optional(),
      route_key: z.string(),
      throttling_burst_limit: z.number().optional(),
      throttling_rate_limit: z.number().optional(),
    }).array().optional(),
  ),
  stage_variables: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  execution_arn: z.string().optional(),
  id: z.string().optional(),
  invoke_url: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apigatewayv2_stage

export function AwsApigatewayv2Stage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_stage'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2Stage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsApigatewayv2Stage, idFilter, baseNode, optional)

export const useAwsApigatewayv2Stages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsApigatewayv2Stage, idFilter, baseNode, optional)
