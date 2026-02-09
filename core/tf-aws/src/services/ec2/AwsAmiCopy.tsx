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
  name: resolvableValue(z.string()),
  source_ami_id: resolvableValue(z.string()),
  source_ami_region: resolvableValue(z.string()),
  deprecation_time: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  destination_outpost_arn: resolvableValue(z.string().optional()),
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
  encrypted: resolvableValue(z.boolean().optional()),
  ephemeral_block_device: resolvableValue(
    z.object({
      device_name: z.string().optional(),
      virtual_name: z.string().optional(),
    }).array().optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
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
  architecture: z.string().optional(),
  arn: z.string().optional(),
  boot_mode: z.string().optional(),
  ena_support: z.boolean().optional(),
  hypervisor: z.string().optional(),
  id: z.string().optional(),
  image_location: z.string().optional(),
  image_owner_alias: z.string().optional(),
  image_type: z.string().optional(),
  imds_support: z.string().optional(),
  kernel_id: z.string().optional(),
  last_launched_time: z.string().optional(),
  manage_ebs_snapshots: z.boolean().optional(),
  owner_id: z.string().optional(),
  platform: z.string().optional(),
  platform_details: z.string().optional(),
  public: z.boolean().optional(),
  ramdisk_id: z.string().optional(),
  root_device_name: z.string().optional(),
  root_snapshot_id: z.string().optional(),
  sriov_net_support: z.string().optional(),
  tpm_support: z.string().optional(),
  uefi_data: z.string().optional(),
  usage_operation: z.string().optional(),
  virtualization_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ami_copy

export function AwsAmiCopy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ami_copy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAmiCopy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAmiCopy, idFilter, baseNode, optional)

export const useAwsAmiCopys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsAmiCopy, idFilter, baseNode, optional)
