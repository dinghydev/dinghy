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

export const InputSchema = TfMetaSchema.extend({
  architecture: resolvableValue(z.string()),
  boot_mode: resolvableValue(z.string()),
  ena_support: resolvableValue(z.boolean()),
  hypervisor: resolvableValue(z.string()),
  image_location: resolvableValue(z.string()),
  image_owner_alias: resolvableValue(z.string()),
  image_type: resolvableValue(z.string()),
  imds_support: resolvableValue(z.string()),
  kernel_id: resolvableValue(z.string()),
  last_launched_time: resolvableValue(z.string()),
  manage_ebs_snapshots: resolvableValue(z.boolean()),
  name: resolvableValue(z.string()),
  owner_id: resolvableValue(z.string()),
  platform: resolvableValue(z.string()),
  platform_details: resolvableValue(z.string()),
  public: resolvableValue(z.boolean()),
  ramdisk_id: resolvableValue(z.string()),
  root_device_name: resolvableValue(z.string()),
  root_snapshot_id: resolvableValue(z.string()),
  source_instance_id: resolvableValue(z.string()),
  sriov_net_support: resolvableValue(z.string()),
  tpm_support: resolvableValue(z.string()),
  uefi_data: resolvableValue(z.string()),
  usage_operation: resolvableValue(z.string()),
  virtualization_type: resolvableValue(z.string()),
  deprecation_time: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  ebs_block_device: resolvableValue(
    z.object({
      delete_on_termination: z.boolean().optional(),
      device_name: z.string().optional(),
      encrypted: z.boolean().optional(),
      iops: z.number().optional(),
      outpost_arn: z.string().optional(),
      snapshot_id: z.string().optional(),
      throughput: z.number().optional(),
      volume_size: z.number().optional(),
      volume_type: z.string().optional(),
    }).array().optional(),
  ),
  ephemeral_block_device: resolvableValue(
    z.object({
      device_name: z.string().optional(),
      virtual_name: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  snapshot_without_reboot: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ami_from_instance

export function AwsAmiFromInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ami_from_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAmiFromInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAmiFromInstance, idFilter, baseNode, optional)

export const useAwsAmiFromInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsAmiFromInstance, idFilter, baseNode, optional)
