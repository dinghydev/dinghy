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
  source_ami_id: resolvableValue(z.string()),
  source_ami_region: resolvableValue(z.string()),
  sriov_net_support: resolvableValue(z.string()),
  tpm_support: resolvableValue(z.string()),
  uefi_data: resolvableValue(z.string()),
  usage_operation: resolvableValue(z.string()),
  virtualization_type: resolvableValue(z.string()),
  deprecation_time: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  destination_outpost_arn: resolvableValue(z.string().optional()),
  ebs_block_device: resolvableValue(
    z.object({
      delete_on_termination: z.boolean(),
      device_name: z.string(),
      encrypted: z.boolean(),
      iops: z.number(),
      outpost_arn: z.string(),
      snapshot_id: z.string(),
      throughput: z.number(),
      volume_size: z.number(),
      volume_type: z.string(),
    }).array().optional(),
  ),
  encrypted: resolvableValue(z.boolean().optional()),
  ephemeral_block_device: resolvableValue(
    z.object({
      device_name: z.string(),
      virtual_name: z.string(),
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
}).extend({ ...TfMetaSchema.shape })

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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ami_copy

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
