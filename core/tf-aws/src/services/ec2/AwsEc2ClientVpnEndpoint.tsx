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

export const AwsEc2ClientVpnEndpointInputSchema = TfMetaSchema.extend({
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
  transit_gateway_configuration: resolvableValue(
    z.object({
      availability_zone_ids: z.string().array().optional(),
      availability_zones: z.string().array().optional(),
      transit_gateway_attachment_id: z.string().optional(),
      transit_gateway_id: z.string().optional(),
    }).optional(),
  ),
  transport_protocol: resolvableValue(z.string().optional()),
  vpc_id: resolvableValue(z.string().optional()),
  vpn_port: resolvableValue(z.number().optional()),
})

export const AwsEc2ClientVpnEndpointOutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  self_service_portal_url: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2ClientVpnEndpointInputProps =
  & z.input<typeof AwsEc2ClientVpnEndpointInputSchema>
  & NodeProps

export type AwsEc2ClientVpnEndpointOutputProps =
  & z.output<typeof AwsEc2ClientVpnEndpointOutputSchema>
  & z.output<typeof AwsEc2ClientVpnEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_client_vpn_endpoint

export function AwsEc2ClientVpnEndpoint(
  props: Partial<AwsEc2ClientVpnEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_client_vpn_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2ClientVpnEndpointInputSchema}
      _outputSchema={AwsEc2ClientVpnEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ClientVpnEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2ClientVpnEndpointOutputProps>(
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
  useTypedNodes<AwsEc2ClientVpnEndpointOutputProps>(
    AwsEc2ClientVpnEndpoint,
    idFilter,
    baseNode,
    optional,
  )
