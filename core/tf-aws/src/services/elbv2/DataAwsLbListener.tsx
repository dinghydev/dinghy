import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLbListener } from './AwsLbListener.tsx'

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  load_balancer_arn: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  alpn_policy: z.string().optional(),
  certificate_arn: z.string().optional(),
  default_action: z.object({
    authenticate_cognito: z.object({
      authentication_request_extra_params: z.record(z.string(), z.string()),
      on_unauthenticated_request: z.string(),
      scope: z.string(),
      session_cookie_name: z.string(),
      session_timeout: z.number(),
      user_pool_arn: z.string(),
      user_pool_client_id: z.string(),
      user_pool_domain: z.string(),
    }).array(),
    authenticate_oidc: z.object({
      authentication_request_extra_params: z.record(z.string(), z.string()),
      authorization_endpoint: z.string(),
      client_id: z.string(),
      client_secret: z.string(),
      issuer: z.string(),
      on_unauthenticated_request: z.string(),
      scope: z.string(),
      session_cookie_name: z.string(),
      session_timeout: z.number(),
      token_endpoint: z.string(),
      user_info_endpoint: z.string(),
    }).array(),
    fixed_response: z.object({
      content_type: z.string(),
      message_body: z.string(),
      status_code: z.string(),
    }).array(),
    forward: z.object({
      stickiness: z.object({
        duration: z.number(),
        enabled: z.boolean(),
      }).array(),
      target_group: z.set(z.object({
        arn: z.string(),
        weight: z.number(),
      })),
    }).array(),
    jwt_validation: z.object({
      additional_claim: z.set(z.object({
        format: z.string(),
        name: z.string(),
        values: z.set(z.string()),
      })),
      issuer: z.string(),
      jwks_endpoint: z.string(),
    }).array(),
    order: z.number(),
    redirect: z.object({
      host: z.string(),
      path: z.string(),
      port: z.string(),
      protocol: z.string(),
      query: z.string(),
      status_code: z.string(),
    }).array(),
    target_group_arn: z.string(),
    type: z.string(),
  }).array().optional(),
  mutual_authentication: z.object({
    advertise_trust_store_ca_names: z.string(),
    ignore_client_certificate_expiry: z.boolean(),
    mode: z.string(),
    trust_store_arn: z.string(),
  }).array().optional(),
  protocol: z.string().optional(),
  ssl_policy: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/lb_listener

export function DataAwsLbListener(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLbListener
      _type='aws_lb_listener'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLbListener = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsLbListener, idFilter, baseNode, optional)

export const useDataAwsLbListeners = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsLbListener, idFilter, baseNode, optional)
