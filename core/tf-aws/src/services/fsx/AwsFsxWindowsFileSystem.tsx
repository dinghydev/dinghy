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
  subnet_ids: resolvableValue(z.string().array()),
  throughput_capacity: resolvableValue(z.number()),
  active_directory_id: resolvableValue(z.string().optional()),
  aliases: resolvableValue(z.string().array().optional()),
  audit_log_configuration: resolvableValue(
    z.object({
      audit_log_destination: z.string().optional(),
      file_access_audit_log_level: z.string().optional(),
      file_share_access_audit_log_level: z.string().optional(),
    }).optional(),
  ),
  automatic_backup_retention_days: resolvableValue(z.number().optional()),
  backup_id: resolvableValue(z.string().optional()),
  copy_tags_to_backups: resolvableValue(z.boolean().optional()),
  daily_automatic_backup_start_time: resolvableValue(z.string().optional()),
  deployment_type: resolvableValue(z.string().optional()),
  disk_iops_configuration: resolvableValue(
    z.object({
      iops: z.number().optional(),
      mode: z.string().optional(),
    }).optional(),
  ),
  final_backup_tags: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  preferred_subnet_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  self_managed_active_directory: resolvableValue(
    z.object({
      dns_ips: z.string().array(),
      domain_name: z.string(),
      file_system_administrators_group: z.string().optional(),
      organizational_unit_distinguished_name: z.string().optional(),
      password: z.string(),
      username: z.string(),
    }).optional(),
  ),
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
  id: z.string().optional(),
  network_interface_ids: z.set(z.string()).optional(),
  owner_id: z.string().optional(),
  preferred_file_server_ip: z.string().optional(),
  remote_administration_endpoint: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fsx_windows_file_system

export function AwsFsxWindowsFileSystem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_windows_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxWindowsFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsFsxWindowsFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFsxWindowsFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFsxWindowsFileSystem,
    idFilter,
    baseNode,
    optional,
  )
