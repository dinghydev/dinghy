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
  last_launched_time: resolvableValue(z.string()),
  manage_ebs_snapshots: resolvableValue(z.boolean()),
  name: resolvableValue(z.string()),
  architecture: resolvableValue(z.string().optional()),
  boot_mode: resolvableValue(z.string().optional()),
  deprecation_time: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  ebs_block_device: resolvableValue(
    z.object({
      delete_on_termination: z.boolean().optional(),
      device_name: z.string(),
      encrypted: z.boolean().optional(),
      iops: z.number().optional(),
      outpost_arn: z.string().optional(),
      snapshot_id: z.string().optional(),
      throughput: z.number().optional(),
      volume_size: z.number().optional(),
      volume_type: z.string().optional(),
    }).array().optional(),
  ),
  ena_support: resolvableValue(z.boolean().optional()),
  ephemeral_block_device: resolvableValue(
    z.object({
      device_name: z.string(),
      virtual_name: z.string(),
    }).array().optional(),
  ),
  image_location: resolvableValue(z.string().optional()),
  imds_support: resolvableValue(z.string().optional()),
  kernel_id: resolvableValue(z.string().optional()),
  ramdisk_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  root_device_name: resolvableValue(z.string().optional()),
  sriov_net_support: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  tpm_support: resolvableValue(z.string().optional()),
  uefi_data: resolvableValue(z.string().optional()),
  virtualization_type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  hypervisor: z.string().optional(),
  id: z.string().optional(),
  image_owner_alias: z.string().optional(),
  image_type: z.string().optional(),
  owner_id: z.string().optional(),
  platform: z.string().optional(),
  platform_details: z.string().optional(),
  public: z.boolean().optional(),
  root_snapshot_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  usage_operation: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ami

export function AwsAmi(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ami'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAmi = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAmi, idFilter, baseNode, optional)

export const useAwsAmis = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsAmi, idFilter, baseNode, optional)
