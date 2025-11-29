import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lb_listener

export const InputSchema = z.object({
  load_balancer_arn: resolvableValue(z.string()),
  alpn_policy: resolvableValue(z.string().optional()),
  certificate_arn: resolvableValue(z.string().optional()),
  default_action: resolvableValue(z.object({
    order: z.number().optional(),
    target_group_arn: z.string().optional(),
    type: z.string(),
  })),
  id: resolvableValue(z.string().optional()),
  mutual_authentication: resolvableValue(
    z.object({
      advertise_trust_store_ca_names: z.string().optional(),
      ignore_client_certificate_expiry: z.boolean().optional(),
      mode: z.string(),
      trust_store_arn: z.string().optional(),
    }).optional(),
  ),
  port: resolvableValue(z.number().optional()),
  protocol: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  routing_http_request_x_amzn_mtls_clientcert_header_name: resolvableValue(
    z.string().optional(),
  ),
  routing_http_request_x_amzn_mtls_clientcert_issuer_header_name:
    resolvableValue(z.string().optional()),
  routing_http_request_x_amzn_mtls_clientcert_leaf_header_name: resolvableValue(
    z.string().optional(),
  ),
  routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name:
    resolvableValue(z.string().optional()),
  routing_http_request_x_amzn_mtls_clientcert_subject_header_name:
    resolvableValue(z.string().optional()),
  routing_http_request_x_amzn_mtls_clientcert_validity_header_name:
    resolvableValue(z.string().optional()),
  routing_http_request_x_amzn_tls_cipher_suite_header_name: resolvableValue(
    z.string().optional(),
  ),
  routing_http_request_x_amzn_tls_version_header_name: resolvableValue(
    z.string().optional(),
  ),
  routing_http_response_access_control_allow_credentials_header_value:
    resolvableValue(z.string().optional()),
  routing_http_response_access_control_allow_headers_header_value:
    resolvableValue(z.string().optional()),
  routing_http_response_access_control_allow_methods_header_value:
    resolvableValue(z.string().optional()),
  routing_http_response_access_control_allow_origin_header_value:
    resolvableValue(z.string().optional()),
  routing_http_response_access_control_expose_headers_header_value:
    resolvableValue(z.string().optional()),
  routing_http_response_access_control_max_age_header_value: resolvableValue(
    z.string().optional(),
  ),
  routing_http_response_content_security_policy_header_value: resolvableValue(
    z.string().optional(),
  ),
  routing_http_response_server_enabled: resolvableValue(z.boolean().optional()),
  routing_http_response_strict_transport_security_header_value: resolvableValue(
    z.string().optional(),
  ),
  routing_http_response_x_content_type_options_header_value: resolvableValue(
    z.string().optional(),
  ),
  routing_http_response_x_frame_options_header_value: resolvableValue(
    z.string().optional(),
  ),
  ssl_policy: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tcp_idle_timeout_seconds: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
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

export function AwsLbListener(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_listener'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsLbListener = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLbListener, node, id)

export const useAwsLbListeners = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLbListener, node, id)
