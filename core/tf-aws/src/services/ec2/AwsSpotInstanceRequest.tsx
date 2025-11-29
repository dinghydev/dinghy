import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/spot_instance_request

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  instance_state: resolvableValue(z.string()),
  outpost_arn: resolvableValue(z.string()),
  password_data: resolvableValue(z.string()),
  primary_network_interface: resolvableValue(
    z.object({
      delete_on_termination: z.boolean(),
      network_interface_id: z.string(),
    }).array(),
  ),
  primary_network_interface_id: resolvableValue(z.string()),
  spot_request_state: resolvableValue(z.string()),
  ami: resolvableValue(z.string().optional()),
  associate_public_ip_address: resolvableValue(z.boolean().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  capacity_reservation_specification: resolvableValue(
    z.object({
      capacity_reservation_preference: z.string().optional(),
    }).optional(),
  ),
  cpu_options: resolvableValue(
    z.object({
      amd_sev_snp: z.string().optional(),
      core_count: z.number().optional(),
      threads_per_core: z.number().optional(),
    }).optional(),
  ),
  credit_specification: resolvableValue(
    z.object({
      cpu_credits: z.string().optional(),
    }).optional(),
  ),
  disable_api_stop: resolvableValue(z.boolean().optional()),
  disable_api_termination: resolvableValue(z.boolean().optional()),
  ebs_block_device: resolvableValue(
    z.object({
      delete_on_termination: z.boolean().optional(),
      device_name: z.string(),
      encrypted: z.boolean().optional(),
      iops: z.number().optional(),
      kms_key_id: z.string().optional(),
      snapshot_id: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
      tags_all: z.record(z.string(), z.string()).optional(),
      throughput: z.number().optional(),
      volume_id: z.string(),
      volume_size: z.number().optional(),
      volume_type: z.string().optional(),
    }).array().optional(),
  ),
  ebs_optimized: resolvableValue(z.boolean().optional()),
  enable_primary_ipv6: resolvableValue(z.boolean().optional()),
  enclave_options: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  ephemeral_block_device: resolvableValue(
    z.object({
      device_name: z.string(),
      no_device: z.boolean().optional(),
      virtual_name: z.string().optional(),
    }).array().optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  get_password_data: resolvableValue(z.boolean().optional()),
  hibernation: resolvableValue(z.boolean().optional()),
  host_id: resolvableValue(z.string().optional()),
  host_resource_group_arn: resolvableValue(z.string().optional()),
  iam_instance_profile: resolvableValue(z.string().optional()),
  instance_initiated_shutdown_behavior: resolvableValue(z.string().optional()),
  instance_interruption_behavior: resolvableValue(z.string().optional()),
  instance_type: resolvableValue(z.string().optional()),
  ipv6_address_count: resolvableValue(z.number().optional()),
  ipv6_addresses: resolvableValue(z.string().array().optional()),
  key_name: resolvableValue(z.string().optional()),
  launch_group: resolvableValue(z.string().optional()),
  launch_template: resolvableValue(
    z.object({
      id: z.string().optional(),
      name: z.string().optional(),
      version: z.string().optional(),
    }).optional(),
  ),
  maintenance_options: resolvableValue(
    z.object({
      auto_recovery: z.string().optional(),
    }).optional(),
  ),
  metadata_options: resolvableValue(
    z.object({
      http_endpoint: z.string().optional(),
      http_protocol_ipv6: z.string().optional(),
      http_put_response_hop_limit: z.number().optional(),
      http_tokens: z.string().optional(),
      instance_metadata_tags: z.string().optional(),
    }).optional(),
  ),
  monitoring: resolvableValue(z.boolean().optional()),
  network_interface: resolvableValue(
    z.object({
      delete_on_termination: z.boolean().optional(),
      device_index: z.number(),
      network_card_index: z.number(),
      network_interface_id: z.string(),
    }).array().optional(),
  ),
  placement_group: resolvableValue(z.string().optional()),
  placement_group_id: resolvableValue(z.string().optional()),
  placement_partition_number: resolvableValue(z.number().optional()),
  private_dns_name_options: resolvableValue(
    z.object({
      enable_resource_name_dns_a_record: z.boolean().optional(),
      enable_resource_name_dns_aaaa_record: z.boolean().optional(),
      hostname_type: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  root_block_device: resolvableValue(
    z.object({
      delete_on_termination: z.boolean().optional(),
      device_name: z.string(),
      encrypted: z.boolean().optional(),
      iops: z.number().optional(),
      kms_key_id: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
      tags_all: z.record(z.string(), z.string()).optional(),
      throughput: z.number().optional(),
      volume_id: z.string(),
      volume_size: z.number().optional(),
      volume_type: z.string().optional(),
    }).optional(),
  ),
  secondary_private_ips: resolvableValue(z.string().array().optional()),
  security_groups: resolvableValue(z.string().array().optional()),
  source_dest_check: resolvableValue(z.boolean().optional()),
  spot_price: resolvableValue(z.string().optional()),
  spot_type: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tenancy: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
    }).optional(),
  ),
  user_data: resolvableValue(z.string().optional()),
  user_data_base64: resolvableValue(z.string().optional()),
  user_data_replace_on_change: resolvableValue(z.boolean().optional()),
  valid_from: resolvableValue(z.string().optional()),
  valid_until: resolvableValue(z.string().optional()),
  volume_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
  wait_for_fulfillment: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  private_dns: z.string().optional(),
  private_ip: z.string().optional(),
  public_dns: z.string().optional(),
  public_ip: z.string().optional(),
  spot_bid_status: z.string().optional(),
  spot_instance_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSpotInstanceRequest(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_spot_instance_request'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSpotInstanceRequest = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSpotInstanceRequest, node, id)

export const useAwsSpotInstanceRequests = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSpotInstanceRequest, node, id)
