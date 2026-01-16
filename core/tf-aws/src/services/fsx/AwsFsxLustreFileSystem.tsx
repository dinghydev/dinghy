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
  subnet_ids: resolvableValue(z.string().array()),
  auto_import_policy: resolvableValue(z.string().optional()),
  automatic_backup_retention_days: resolvableValue(z.number().optional()),
  backup_id: resolvableValue(z.string().optional()),
  copy_tags_to_backups: resolvableValue(z.boolean().optional()),
  daily_automatic_backup_start_time: resolvableValue(z.string().optional()),
  data_compression_type: resolvableValue(z.string().optional()),
  data_read_cache_configuration: resolvableValue(
    z.object({
      size: z.number().optional(),
      sizing_mode: z.string(),
    }).optional(),
  ),
  deployment_type: resolvableValue(z.string().optional()),
  drive_cache_type: resolvableValue(z.string().optional()),
  efa_enabled: resolvableValue(z.boolean().optional()),
  export_path: resolvableValue(z.string().optional()),
  file_system_type_version: resolvableValue(z.string().optional()),
  final_backup_tags: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  import_path: resolvableValue(z.string().optional()),
  imported_file_chunk_size: resolvableValue(z.number().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  log_configuration: resolvableValue(
    z.object({
      destination: z.string().optional(),
      level: z.string().optional(),
    }).optional(),
  ),
  metadata_configuration: resolvableValue(
    z.object({
      iops: z.number().optional(),
      mode: z.string().optional(),
    }).optional(),
  ),
  per_unit_storage_throughput: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  root_squash_configuration: resolvableValue(
    z.object({
      no_squash_nids: z.string().array().optional(),
      root_squash: z.string().optional(),
    }).optional(),
  ),
  security_group_ids: resolvableValue(z.string().array().optional()),
  skip_final_backup: resolvableValue(z.boolean().optional()),
  storage_capacity: resolvableValue(z.number().optional()),
  storage_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  throughput_capacity: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  weekly_maintenance_start_time: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  mount_name: z.string().optional(),
  network_interface_ids: z.string().array().optional(),
  owner_id: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/fsx_lustre_file_system

export function AwsFsxLustreFileSystem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_lustre_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxLustreFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsFsxLustreFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFsxLustreFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFsxLustreFileSystem,
    idFilter,
    baseNode,
    optional,
  )
