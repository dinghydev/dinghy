import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2ClientVpnEndpoint } from './AwsEc2ClientVpnEndpoint.tsx'

export const InputSchema = z.object({
  client_vpn_endpoint_id: resolvableValue(z.string().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  authentication_options: z.object({
    active_directory_id: z.string(),
    root_certificate_chain_arn: z.string(),
    saml_provider_arn: z.string(),
    self_service_saml_provider_arn: z.string(),
    type: z.string(),
  }).array().optional(),
  client_cidr_block: z.string().optional(),
  client_connect_options: z.object({
    enabled: z.boolean(),
    lambda_function_arn: z.string(),
  }).array().optional(),
  client_login_banner_options: z.object({
    banner_text: z.string(),
    enabled: z.boolean(),
  }).array().optional(),
  client_route_enforcement_options: z.object({
    enforced: z.boolean(),
  }).array().optional(),
  connection_log_options: z.object({
    cloudwatch_log_group: z.string(),
    cloudwatch_log_stream: z.string(),
    enabled: z.boolean(),
  }).array().optional(),
  description: z.string().optional(),
  dns_name: z.string().optional(),
  dns_servers: z.string().array().optional(),
  endpoint_ip_address_type: z.string().optional(),
  security_group_ids: z.string().array().optional(),
  self_service_portal: z.string().optional(),
  self_service_portal_url: z.string().optional(),
  server_certificate_arn: z.string().optional(),
  session_timeout_hours: z.number().optional(),
  split_tunnel: z.boolean().optional(),
  traffic_ip_address_type: z.string().optional(),
  transport_protocol: z.string().optional(),
  vpc_id: z.string().optional(),
  vpn_port: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_client_vpn_endpoint

export function DataAwsEc2ClientVpnEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEc2ClientVpnEndpoint
      _type='aws_ec2_client_vpn_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2ClientVpnEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEc2ClientVpnEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2ClientVpnEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEc2ClientVpnEndpoint,
    idFilter,
    baseNode,
    optional,
  )
