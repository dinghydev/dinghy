import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsFsxWindowsFileSystem } from './AwsFsxWindowsFileSystem.tsx'

export const InputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  active_directory_id: z.string().optional(),
  aliases: z.set(z.string()).optional(),
  arn: z.string().optional(),
  audit_log_configuration: z.object({
    audit_log_destination: z.string(),
    file_access_audit_log_level: z.string(),
    file_share_access_audit_log_level: z.string(),
  }).array().optional(),
  automatic_backup_retention_days: z.number().optional(),
  backup_id: z.string().optional(),
  copy_tags_to_backups: z.boolean().optional(),
  daily_automatic_backup_start_time: z.string().optional(),
  deployment_type: z.string().optional(),
  disk_iops_configuration: z.object({
    iops: z.number(),
    mode: z.string(),
  }).array().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  network_interface_ids: z.set(z.string()).optional(),
  owner_id: z.string().optional(),
  preferred_file_server_ip: z.string().optional(),
  preferred_subnet_id: z.string().optional(),
  security_group_ids: z.set(z.string()).optional(),
  skip_final_backup: z.boolean().optional(),
  storage_capacity: z.number().optional(),
  storage_type: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  throughput_capacity: z.number().optional(),
  vpc_id: z.string().optional(),
  weekly_maintenance_start_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/fsx_windows_file_system

export function DataAwsFsxWindowsFileSystem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsFsxWindowsFileSystem
      _type='aws_fsx_windows_file_system'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsFsxWindowsFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsFsxWindowsFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsFsxWindowsFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsFsxWindowsFileSystem,
    idFilter,
    baseNode,
    optional,
  )
