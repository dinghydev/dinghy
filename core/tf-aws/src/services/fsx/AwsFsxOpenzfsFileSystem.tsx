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
  deployment_type: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  throughput_capacity: resolvableValue(z.number()),
  automatic_backup_retention_days: resolvableValue(z.number().optional()),
  backup_id: resolvableValue(z.string().optional()),
  copy_tags_to_backups: resolvableValue(z.boolean().optional()),
  copy_tags_to_volumes: resolvableValue(z.boolean().optional()),
  daily_automatic_backup_start_time: resolvableValue(z.string().optional()),
  delete_options: resolvableValue(z.string().array().optional()),
  disk_iops_configuration: resolvableValue(
    z.object({
      iops: z.number().optional(),
      mode: z.string().optional(),
    }).optional(),
  ),
  endpoint_ip_address_range: resolvableValue(z.string().optional()),
  final_backup_tags: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  preferred_subnet_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  root_volume_configuration: resolvableValue(
    z.object({
      copy_tags_to_snapshots: z.boolean().optional(),
      data_compression_type: z.string().optional(),
      read_only: z.boolean().optional(),
      record_size_kib: z.number().optional(),
      nfs_exports: z.object({
        client_configurations: z.object({
          clients: z.string(),
          options: z.string().array(),
        }).array(),
      }).optional(),
      user_and_group_quotas: z.object({
        id: z.number(),
        storage_capacity_quota_gib: z.number(),
        type: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  route_table_ids: resolvableValue(z.string().array().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  skip_final_backup: resolvableValue(z.boolean().optional()),
  storage_capacity: resolvableValue(z.number().optional()),
  storage_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  weekly_maintenance_start_time: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  endpoint_ip_address: z.string().optional(),
  id: z.string().optional(),
  network_interface_ids: z.string().array().optional(),
  owner_id: z.string().optional(),
  root_volume_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fsx_openzfs_file_system

export function AwsFsxOpenzfsFileSystem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_openzfs_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxOpenzfsFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsFsxOpenzfsFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFsxOpenzfsFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFsxOpenzfsFileSystem,
    idFilter,
    baseNode,
    optional,
  )
