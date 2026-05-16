import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAmi } from './AwsAmi.tsx'

export const DataAwsAmiInputSchema = TfMetaSchema.extend({
  allow_unsafe_filter: resolvableValue(z.boolean().optional()),
  executable_users: resolvableValue(z.string().array().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  include_deprecated: resolvableValue(z.boolean().optional()),
  most_recent: resolvableValue(z.boolean().optional()),
  name_regex: resolvableValue(z.string().optional()),
  owners: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsAmiOutputSchema = z.object({
  architecture: z.string().optional(),
  arn: z.string().optional(),
  block_device_mappings: z.set(z.object({
    device_name: z.string(),
    ebs: z.record(z.string(), z.string()),
    no_device: z.string(),
    virtual_name: z.string(),
  })).optional(),
  boot_mode: z.string().optional(),
  creation_date: z.string().optional(),
  deprecation_time: z.string().optional(),
  description: z.string().optional(),
  ena_support: z.boolean().optional(),
  hypervisor: z.string().optional(),
  id: z.string().optional(),
  image_id: z.string().optional(),
  image_location: z.string().optional(),
  image_owner_alias: z.string().optional(),
  image_type: z.string().optional(),
  imds_support: z.string().optional(),
  kernel_id: z.string().optional(),
  last_launched_time: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  platform: z.string().optional(),
  platform_details: z.string().optional(),
  product_codes: z.set(z.object({
    product_code_id: z.string(),
    product_code_type: z.string(),
  })).optional(),
  public: z.boolean().optional(),
  ramdisk_id: z.string().optional(),
  root_device_name: z.string().optional(),
  root_device_type: z.string().optional(),
  root_snapshot_id: z.string().optional(),
  sriov_net_support: z.string().optional(),
  state: z.string().optional(),
  state_reason: z.record(z.string(), z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tpm_support: z.string().optional(),
  uefi_data: z.string().optional(),
  usage_operation: z.string().optional(),
  virtualization_type: z.string().optional(),
})

export type DataAwsAmiInputProps =
  & z.input<typeof DataAwsAmiInputSchema>
  & NodeProps

export type DataAwsAmiOutputProps =
  & z.output<typeof DataAwsAmiOutputSchema>
  & z.output<typeof DataAwsAmiInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ami

export function DataAwsAmi(props: Partial<DataAwsAmiInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAmi
      _type='aws_ami'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAmiInputSchema}
      _outputSchema={DataAwsAmiOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAmi = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAmiOutputProps>(DataAwsAmi, idFilter, baseNode, optional)

export const useDataAwsAmis = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAmiOutputProps>(DataAwsAmi, idFilter, baseNode, optional)
