import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsInstance } from './AwsInstance.tsx'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  get_password_data: resolvableValue(z.boolean().optional()),
  get_user_data: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  instance_id: resolvableValue(z.string().optional()),
  instance_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  ami: z.string().optional(),
  arn: z.string().optional(),
  associate_public_ip_address: z.boolean().optional(),
  availability_zone: z.string().optional(),
  credit_specification: z.object({
    cpu_credits: z.string(),
  }).array().optional(),
  disable_api_stop: z.boolean().optional(),
  disable_api_termination: z.boolean().optional(),
  ebs_block_device: z.set(z.object({
    delete_on_termination: z.boolean(),
    device_name: z.string(),
    encrypted: z.boolean(),
    iops: z.number(),
    kms_key_id: z.string(),
    snapshot_id: z.string(),
    tags: z.record(z.string(), z.string()),
    throughput: z.number(),
    volume_id: z.string(),
    volume_size: z.number(),
    volume_type: z.string(),
  })).optional(),
  ebs_optimized: z.boolean().optional(),
  enclave_options: z.object({
    enabled: z.boolean(),
  }).array().optional(),
  ephemeral_block_device: z.object({
    device_name: z.string(),
    no_device: z.boolean(),
    virtual_name: z.string(),
  }).array().optional(),
  host_id: z.string().optional(),
  host_resource_group_arn: z.string().optional(),
  iam_instance_profile: z.string().optional(),
  instance_state: z.string().optional(),
  instance_type: z.string().optional(),
  ipv6_addresses: z.set(z.string()).optional(),
  key_name: z.string().optional(),
  launch_time: z.string().optional(),
  maintenance_options: z.object({
    auto_recovery: z.string(),
  }).array().optional(),
  metadata_options: z.object({
    http_endpoint: z.string(),
    http_protocol_ipv6: z.string(),
    http_put_response_hop_limit: z.number(),
    http_tokens: z.string(),
    instance_metadata_tags: z.string(),
  }).array().optional(),
  monitoring: z.boolean().optional(),
  network_interface_id: z.string().optional(),
  outpost_arn: z.string().optional(),
  password_data: z.string().optional(),
  placement_group: z.string().optional(),
  placement_group_id: z.string().optional(),
  placement_partition_number: z.number().optional(),
  private_dns: z.string().optional(),
  private_dns_name_options: z.object({
    enable_resource_name_dns_a_record: z.boolean(),
    enable_resource_name_dns_aaaa_record: z.boolean(),
    hostname_type: z.string(),
  }).array().optional(),
  private_ip: z.string().optional(),
  public_dns: z.string().optional(),
  public_ip: z.string().optional(),
  root_block_device: z.set(z.object({
    delete_on_termination: z.boolean(),
    device_name: z.string(),
    encrypted: z.boolean(),
    iops: z.number(),
    kms_key_id: z.string(),
    tags: z.record(z.string(), z.string()),
    throughput: z.number(),
    volume_id: z.string(),
    volume_size: z.number(),
    volume_type: z.string(),
  })).optional(),
  secondary_private_ips: z.set(z.string()).optional(),
  security_groups: z.set(z.string()).optional(),
  source_dest_check: z.boolean().optional(),
  subnet_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tenancy: z.string().optional(),
  user_data: z.string().optional(),
  user_data_base64: z.string().optional(),
  vpc_security_group_ids: z.set(z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/instance

export function DataAwsInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsInstance
      _type='aws_instance'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsInstance, idFilter, baseNode, optional)

export const useDataAwsInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsInstance, idFilter, baseNode, optional)
