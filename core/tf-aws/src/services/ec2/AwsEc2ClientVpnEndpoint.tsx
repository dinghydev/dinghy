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
  authentication_options: resolvableValue(
    z.object({
      active_directory_id: z.string().optional(),
      root_certificate_chain_arn: z.string().optional(),
      saml_provider_arn: z.string().optional(),
      self_service_saml_provider_arn: z.string().optional(),
      type: z.string(),
    }).array(),
  ),
  connection_log_options: resolvableValue(z.object({
    cloudwatch_log_group: z.string().optional(),
    cloudwatch_log_stream: z.string().optional(),
    enabled: z.boolean(),
  })),
  server_certificate_arn: resolvableValue(z.string()),
  client_cidr_block: resolvableValue(z.string().optional()),
  client_connect_options: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      lambda_function_arn: z.string().optional(),
    }).optional(),
  ),
  client_login_banner_options: resolvableValue(
    z.object({
      banner_text: z.string().optional(),
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  client_route_enforcement_options: resolvableValue(
    z.object({
      enforced: z.boolean().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  disconnect_on_session_timeout: resolvableValue(z.boolean().optional()),
  dns_servers: resolvableValue(z.string().array().optional()),
  endpoint_ip_address_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  self_service_portal: resolvableValue(z.string().optional()),
  session_timeout_hours: resolvableValue(z.number().optional()),
  split_tunnel: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  traffic_ip_address_type: resolvableValue(z.string().optional()),
  transport_protocol: resolvableValue(z.string().optional()),
  vpc_id: resolvableValue(z.string().optional()),
  vpn_port: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  self_service_portal_url: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ec2_client_vpn_endpoint

export function AwsEc2ClientVpnEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_client_vpn_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ClientVpnEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEc2ClientVpnEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2ClientVpnEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEc2ClientVpnEndpoint,
    idFilter,
    baseNode,
    optional,
  )
