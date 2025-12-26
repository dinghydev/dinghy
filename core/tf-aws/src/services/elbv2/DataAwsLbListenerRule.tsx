import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLbListenerRule } from './AwsLbListenerRule.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  listener_arn: resolvableValue(z.string().optional()),
  priority: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  action: z.object({
    order: z.number(),
    type: z.string(),
    authenticate_cognito: z.object({
      authentication_request_extra_params: z.record(z.string(), z.string()),
      on_unauthenticated_request: z.string(),
      scope: z.string(),
      session_cookie_name: z.string(),
      session_timeout: z.number(),
      user_pool_arn: z.string(),
      user_pool_client_id: z.string(),
      user_pool_domain: z.string(),
    }).array().optional(),
    authenticate_oidc: z.object({
      authentication_request_extra_params: z.record(z.string(), z.string()),
      authorization_endpoint: z.string(),
      client_id: z.string(),
      issuer: z.string(),
      on_unauthenticated_request: z.string(),
      scope: z.string(),
      session_cookie_name: z.string(),
      session_timeout: z.number(),
      token_endpoint: z.string(),
      user_info_endpoint: z.string(),
    }).array().optional(),
    fixed_response: z.object({
      content_type: z.string(),
      message_body: z.string(),
      status_code: z.string(),
    }).array().optional(),
    forward: z.object({
      stickiness: z.object({
        duration: z.number(),
        enabled: z.boolean(),
      }).array().optional(),
      target_group: z.object({
        arn: z.string(),
        weight: z.number(),
      }).array().optional(),
    }).array().optional(),
    jwt_validation: z.object({
      issuer: z.string(),
      jwks_endpoint: z.string(),
      additional_claim: z.object({
        format: z.string(),
        name: z.string(),
        values: z.set(z.string()),
      }).array().optional(),
    }).array().optional(),
    redirect: z.object({
      host: z.string(),
      path: z.string(),
      port: z.string(),
      protocol: z.string(),
      query: z.string(),
      status_code: z.string(),
    }).array().optional(),
  }).array().optional().optional(),
  condition: z.object({
    host_header: z.object({
      regex_values: z.set(z.string()),
      values: z.set(z.string()),
    }).array().optional(),
    http_header: z.object({
      http_header_name: z.string(),
      regex_values: z.set(z.string()),
      values: z.set(z.string()),
    }).array().optional(),
    http_request_method: z.object({
      values: z.set(z.string()),
    }).array().optional(),
    path_pattern: z.object({
      regex_values: z.set(z.string()),
      values: z.set(z.string()),
    }).array().optional(),
    query_string: z.object({
      values: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
    source_ip: z.object({
      values: z.set(z.string()),
    }).array().optional(),
  }).array().optional().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transform: z.object({
    type: z.string(),
    host_header_rewrite_config: z.object({
      rewrite: z.object({
        regex: z.string(),
        replace: z.string(),
      }).array().optional(),
    }).array().optional(),
    url_rewrite_config: z.object({
      rewrite: z.object({
        regex: z.string(),
        replace: z.string(),
      }).array().optional(),
    }).array().optional(),
  }).array().optional().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lb_listener_rule

export function DataAwsLbListenerRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLbListenerRule
      _type='aws_lb_listener_rule'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLbListenerRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsLbListenerRule, idFilter, baseNode, optional)

export const useDataAwsLbListenerRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsLbListenerRule,
    idFilter,
    baseNode,
    optional,
  )
