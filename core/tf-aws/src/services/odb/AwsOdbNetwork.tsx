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

export const AwsOdbNetworkInputSchema = TfMetaSchema.extend({
  availability_zone_id: resolvableValue(z.string()),
  backup_subnet_cidr: resolvableValue(z.string()),
  client_subnet_cidr: resolvableValue(z.string()),
  display_name: resolvableValue(z.string()),
  s3_access: resolvableValue(z.string()),
  zero_etl_access: resolvableValue(z.string()),
  availability_zone: resolvableValue(z.string().optional()),
  cross_region_s3_restore_sources_access: resolvableValue(
    z.string().array().optional(),
  ),
  custom_domain_name: resolvableValue(z.string().optional()),
  default_dns_prefix: resolvableValue(z.string().optional()),
  delete_associated_resources: resolvableValue(z.boolean().optional()),
  kms_access: resolvableValue(z.string().optional()),
  kms_policy_document: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  s3_policy_document: resolvableValue(z.string().optional()),
  sts_access: resolvableValue(z.string().optional()),
  sts_policy_document: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsOdbNetworkOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  managed_services: z.object({
    cross_region_s3_restore_sources_access: z.object({
      ipv4_addresses: z.set(z.string()),
      region: z.string(),
      status: z.string(),
    }).array(),
    kms_access: z.object({
      domain_name: z.string(),
      ipv4_addresses: z.set(z.string()),
      kms_policy_document: z.string(),
      status: z.string(),
    }).array(),
    managed_s3_backup_access: z.object({
      ipv4_addresses: z.set(z.string()),
      status: z.string(),
    }).array(),
    managed_service_ipv4_cidrs: z.set(z.string()),
    resource_gateway_arn: z.string(),
    s3_access: z.object({
      domain_name: z.string(),
      ipv4_addresses: z.set(z.string()),
      s3_policy_document: z.string(),
      status: z.string(),
    }).array(),
    service_network_arn: z.string(),
    service_network_endpoint: z.object({
      vpc_endpoint_id: z.string(),
      vpc_endpoint_type: z.string(),
    }).array(),
    sts_access: z.object({
      domain_name: z.string(),
      ipv4_addresses: z.set(z.string()),
      status: z.string(),
      sts_policy_document: z.string(),
    }).array(),
    zero_etl_access: z.object({
      cidr: z.string(),
      status: z.string(),
    }).array(),
  }).array().optional(),
  oci_dns_forwarding_configs: z.object({
    domain_name: z.string(),
    oci_dns_listener_ip: z.string(),
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
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsOdbNetworkInputProps =
  & z.input<typeof AwsOdbNetworkInputSchema>
  & NodeProps

export type AwsOdbNetworkOutputProps =
  & z.output<typeof AwsOdbNetworkOutputSchema>
  & z.output<typeof AwsOdbNetworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/odb_network

export function AwsOdbNetwork(props: Partial<AwsOdbNetworkInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_network'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOdbNetworkInputSchema}
      _outputSchema={AwsOdbNetworkOutputSchema}
      {...props}
    />
  )
}

export const useAwsOdbNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOdbNetworkOutputProps>(
    AwsOdbNetwork,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOdbNetworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOdbNetworkOutputProps>(
    AwsOdbNetwork,
    idFilter,
    baseNode,
    optional,
  )
