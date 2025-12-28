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
  deployment_id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  stage_name: resolvableValue(z.string()),
  access_log_settings: resolvableValue(
    z.object({
      destination_arn: z.string(),
      format: z.string(),
    }).optional(),
  ),
  cache_cluster_enabled: resolvableValue(z.boolean().optional()),
  cache_cluster_size: resolvableValue(z.string().optional()),
  canary_settings: resolvableValue(
    z.object({
      deployment_id: z.string(),
      percent_traffic: z.number().optional(),
      stage_variable_overrides: z.record(z.string(), z.string()).optional(),
      use_stage_cache: z.boolean().optional(),
    }).optional(),
  ),
  client_certificate_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  documentation_version: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  variables: resolvableValue(z.record(z.string(), z.string()).optional()),
  xray_tracing_enabled: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  execution_arn: z.string().optional(),
  id: z.string().optional(),
  invoke_url: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  web_acl_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_stage

export function AwsApiGatewayStage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_stage'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayStage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsApiGatewayStage, idFilter, baseNode, optional)

export const useAwsApiGatewayStages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsApiGatewayStage, idFilter, baseNode, optional)
