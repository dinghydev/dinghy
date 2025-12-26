import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOdbNetwork } from './AwsOdbNetwork.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  oci_dns_forwarding_configs: resolvableValue(
    z.object({
      domain_name: z.string(),
      oci_dns_listener_ip: z.string(),
    }).array(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string())),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  availability_zone_id: z.string().optional(),
  backup_subnet_cidr: z.string().optional(),
  client_subnet_cidr: z.string().optional(),
  created_at: z.string().optional(),
  custom_domain_name: z.string().optional(),
  default_dns_prefix: z.string().optional(),
  display_name: z.string().optional(),
  id: z.string().optional(),
  managed_services: z.object({
    managed_s3_backup_access: z.object({
      ipv4_addresses: z.string().array(),
      status: z.string(),
    }).array(),
    managed_service_ipv4_cidrs: z.string().array(),
    resource_gateway_arn: z.string(),
    s3_access: z.object({
      domain_name: z.string(),
      ipv4_addresses: z.string().array(),
      s3_policy_document: z.string(),
      status: z.string(),
    }).array(),
    service_network_arn: z.string(),
    service_network_endpoint: z.object({
      vpc_endpoint_id: z.string(),
      vpc_endpoint_type: z.string(),
    }).array(),
    zero_tl_access: z.object({
      cidr: z.string(),
      status: z.string(),
    }).array(),
  }).array().optional(),
  oci_network_anchor_id: z.string().optional(),
  oci_network_anchor_url: z.string().optional(),
  oci_resource_anchor_name: z.string().optional(),
  oci_vcn_id: z.string().optional(),
  oci_vcn_url: z.string().optional(),
  peered_cidrs: z.set(z.string()).optional(),
  percent_progress: z.number().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/odb_network

export function DataAwsOdbNetwork(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOdbNetwork
      _type='aws_odb_network'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOdbNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsOdbNetwork, idFilter, baseNode, optional)

export const useDataAwsOdbNetworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsOdbNetwork, idFilter, baseNode, optional)
