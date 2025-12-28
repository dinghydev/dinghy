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
  name: resolvableValue(z.string()),
  xray_enabled: resolvableValue(z.boolean()),
  event_config: resolvableValue(
    z.object({
      auth_provider: z.object({
        auth_type: z.string(),
        cognito_config: z.object({
          app_id_client_regex: z.string().optional(),
          aws_region: z.string(),
          user_pool_id: z.string(),
        }).array().optional(),
        lambda_authorizer_config: z.object({
          authorizer_result_ttl_in_seconds: z.number().optional(),
          authorizer_uri: z.string(),
          identity_validation_expression: z.string().optional(),
        }).array().optional(),
        openid_connect_config: z.object({
          auth_ttl: z.number().optional(),
          client_id: z.string().optional(),
          iat_ttl: z.number().optional(),
          issuer: z.string(),
        }).array().optional(),
      }).array().optional(),
      connection_auth_mode: z.object({
        auth_type: z.string(),
      }).array().optional(),
      default_publish_auth_mode: z.object({
        auth_type: z.string(),
      }).array().optional(),
      default_subscribe_auth_mode: z.object({
        auth_type: z.string(),
      }).array().optional(),
      log_config: z.object({
        cloudwatch_logs_role_arn: z.string(),
        log_level: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  owner_contact: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  api_arn: z.string().optional(),
  api_id: z.string().optional(),
  dns: z.record(z.string(), z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  waf_web_acl_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_api

export function AwsAppsyncApi(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_api'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncApi = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAppsyncApi, idFilter, baseNode, optional)

export const useAwsAppsyncApis = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsAppsyncApi, idFilter, baseNode, optional)
