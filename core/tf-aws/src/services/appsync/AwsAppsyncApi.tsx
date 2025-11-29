import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_api

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  xray_enabled: resolvableValue(z.boolean()),
  event_config: resolvableValue(
    z.object({
      auth_provider: z.object({
        auth_type: z.string(),
      }).optional(),
      connection_auth_mode: z.object({
        auth_type: z.string(),
      }).optional(),
      default_publish_auth_mode: z.object({
        auth_type: z.string(),
      }).optional(),
      default_subscribe_auth_mode: z.object({
        auth_type: z.string(),
      }).optional(),
      log_config: z.object({
        cloudwatch_logs_role_arn: z.string(),
        log_level: z.string(),
      }).optional(),
    }).optional(),
  ),
  owner_contact: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

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

export function AwsAppsyncApi(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsAppsyncApi = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppsyncApi, node, id)

export const useAwsAppsyncApis = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppsyncApi, node, id)
