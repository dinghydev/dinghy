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

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  listener_arn: resolvableValue(z.string().optional()),
  priority: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  action: z.object({
    order: z.number().optional(),
    type: z.string().optional(),
    authenticate_cognito: z.object({
      authentication_request_extra_params: z.record(z.string(), z.string())
        .optional(),
      on_unauthenticated_request: z.string().optional(),
      scope: z.string().optional(),
      session_cookie_name: z.string().optional(),
      session_timeout: z.number().optional(),
      user_pool_arn: z.string().optional(),
      user_pool_client_id: z.string().optional(),
      user_pool_domain: z.string().optional(),
    }).array().optional(),
    authenticate_oidc: z.object({
      authentication_request_extra_params: z.record(z.string(), z.string())
        .optional(),
      authorization_endpoint: z.string().optional(),
      client_id: z.string().optional(),
      issuer: z.string().optional(),
      on_unauthenticated_request: z.string().optional(),
      scope: z.string().optional(),
      session_cookie_name: z.string().optional(),
      session_timeout: z.number().optional(),
      token_endpoint: z.string().optional(),
      user_info_endpoint: z.string().optional(),
    }).array().optional(),
    fixed_response: z.object({
      content_type: z.string().optional(),
      message_body: z.string().optional(),
      status_code: z.string().optional(),
    }).array().optional(),
    forward: z.object({
      stickiness: z.object({
        duration: z.number().optional(),
        enabled: z.boolean().optional(),
      }).array().optional(),
      target_group: z.object({
        arn: z.string().optional(),
        weight: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
    jwt_validation: z.object({
      issuer: z.string().optional(),
      jwks_endpoint: z.string().optional(),
      additional_claim: z.object({
        format: z.string().optional(),
        name: z.string().optional(),
        values: z.set(z.string()).optional(),
      }).array().optional(),
    }).array().optional(),
    redirect: z.object({
      host: z.string().optional(),
      path: z.string().optional(),
      port: z.string().optional(),
      protocol: z.string().optional(),
      query: z.string().optional(),
      status_code: z.string().optional(),
    }).array().optional(),
  }).array().optional().optional(),
  condition: z.object({
    host_header: z.object({
      regex_values: z.set(z.string()).optional(),
      values: z.set(z.string()).optional(),
    }).array().optional(),
    http_header: z.object({
      http_header_name: z.string().optional(),
      regex_values: z.set(z.string()).optional(),
      values: z.set(z.string()).optional(),
    }).array().optional(),
    http_request_method: z.object({
      values: z.set(z.string()).optional(),
    }).array().optional(),
    path_pattern: z.object({
      regex_values: z.set(z.string()).optional(),
      values: z.set(z.string()).optional(),
    }).array().optional(),
    query_string: z.object({
      values: z.object({
        key: z.string().optional(),
        value: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
    source_ip: z.object({
      values: z.set(z.string()).optional(),
    }).array().optional(),
  }).array().optional().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transform: z.object({
    type: z.string().optional(),
    host_header_rewrite_config: z.object({
      rewrite: z.object({
        regex: z.string().optional(),
        replace: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
    url_rewrite_config: z.object({
      rewrite: z.object({
        regex: z.string().optional(),
        replace: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/lb_listener_rule

export function DataAwsLbListenerRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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
