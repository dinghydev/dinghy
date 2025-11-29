import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_graphql_api

export const InputSchema = z.object({
  authentication_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  additional_authentication_provider: resolvableValue(
    z.object({
      authentication_type: z.string(),
    }).optional(),
  ),
  api_type: resolvableValue(z.string().optional()),
  enhanced_metrics_config: resolvableValue(
    z.object({
      data_source_level_metrics_behavior: z.string(),
      operation_level_metrics_config: z.string(),
      resolver_level_metrics_behavior: z.string(),
    }).optional(),
  ),
  introspection_config: resolvableValue(z.string().optional()),
  lambda_authorizer_config: resolvableValue(
    z.object({
      authorizer_result_ttl_in_seconds: z.number().optional(),
      authorizer_uri: z.string(),
      identity_validation_expression: z.string().optional(),
    }).optional(),
  ),
  log_config: resolvableValue(
    z.object({
      cloudwatch_logs_role_arn: z.string(),
      exclude_verbose_content: z.boolean().optional(),
      field_log_level: z.string(),
    }).optional(),
  ),
  merged_api_execution_role_arn: resolvableValue(z.string().optional()),
  openid_connect_config: resolvableValue(
    z.object({
      auth_ttl: z.number().optional(),
      client_id: z.string().optional(),
      iat_ttl: z.number().optional(),
      issuer: z.string(),
    }).optional(),
  ),
  query_depth_limit: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  resolver_count_limit: resolvableValue(z.number().optional()),
  schema: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_pool_config: resolvableValue(
    z.object({
      app_id_client_regex: z.string().optional(),
      aws_region: z.string().optional(),
      default_action: z.string(),
      user_pool_id: z.string(),
    }).optional(),
  ),
  visibility: resolvableValue(z.string().optional()),
  xray_enabled: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uris: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppsyncGraphqlApi(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_graphql_api'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncGraphqlApi = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppsyncGraphqlApi, node, id)

export const useAwsAppsyncGraphqlApis = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppsyncGraphqlApi, node, id)
