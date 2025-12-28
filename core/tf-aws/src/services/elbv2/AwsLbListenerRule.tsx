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
  action: resolvableValue(
    z.object({
      order: z.number().optional(),
      target_group_arn: z.string().optional(),
      type: z.string(),
      authenticate_cognito: z.object({
        authentication_request_extra_params: z.record(z.string(), z.string())
          .optional(),
        on_unauthenticated_request: z.string().optional(),
        scope: z.string().optional(),
        session_cookie_name: z.string().optional(),
        session_timeout: z.number().optional(),
        user_pool_arn: z.string(),
        user_pool_client_id: z.string(),
        user_pool_domain: z.string(),
      }).optional(),
      authenticate_oidc: z.object({
        authentication_request_extra_params: z.record(z.string(), z.string())
          .optional(),
        authorization_endpoint: z.string(),
        client_id: z.string(),
        client_secret: z.string(),
        issuer: z.string(),
        on_unauthenticated_request: z.string().optional(),
        scope: z.string().optional(),
        session_cookie_name: z.string().optional(),
        session_timeout: z.number().optional(),
        token_endpoint: z.string(),
        user_info_endpoint: z.string(),
      }).optional(),
      fixed_response: z.object({
        content_type: z.string(),
        message_body: z.string().optional(),
        status_code: z.string().optional(),
      }).optional(),
      forward: z.object({
        stickiness: z.object({
          duration: z.number(),
          enabled: z.boolean().optional(),
        }).optional(),
        target_group: z.object({
          arn: z.string(),
          weight: z.number().optional(),
        }).array(),
      }).optional(),
      jwt_validation: z.object({
        issuer: z.string(),
        jwks_endpoint: z.string(),
        additional_claim: z.object({
          format: z.string(),
          name: z.string(),
          values: z.string().array(),
        }).array().optional(),
      }).optional(),
      redirect: z.object({
        host: z.string().optional(),
        path: z.string().optional(),
        port: z.string().optional(),
        protocol: z.string().optional(),
        query: z.string().optional(),
        status_code: z.string(),
      }).optional(),
    }).array(),
  ),
  condition: resolvableValue(
    z.object({
      host_header: z.object({
        regex_values: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      http_header: z.object({
        http_header_name: z.string(),
        regex_values: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      http_request_method: z.object({
        values: z.string().array(),
      }).optional(),
      path_pattern: z.object({
        regex_values: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      query_string: z.object({
        key: z.string().optional(),
        value: z.string(),
      }).array().optional(),
      source_ip: z.object({
        values: z.string().array(),
      }).optional(),
    }).array(),
  ),
  listener_arn: resolvableValue(z.string()),
  priority: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  transform: resolvableValue(
    z.object({
      type: z.string(),
      host_header_rewrite_config: z.object({
        rewrite: z.object({
          regex: z.string(),
          replace: z.string(),
        }).optional(),
      }).optional(),
      url_rewrite_config: z.object({
        rewrite: z.object({
          regex: z.string(),
          replace: z.string(),
        }).optional(),
      }).optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lb_listener_rule

export function AwsLbListenerRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_listener_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsLbListenerRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsLbListenerRule, idFilter, baseNode, optional)

export const useAwsLbListenerRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsLbListenerRule, idFilter, baseNode, optional)
