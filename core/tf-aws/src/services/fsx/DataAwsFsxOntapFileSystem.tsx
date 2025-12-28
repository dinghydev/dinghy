import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsFsxOntapFileSystem } from './AwsFsxOntapFileSystem.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  automatic_backup_retention_days: z.number().optional(),
  daily_automatic_backup_start_time: z.string().optional(),
  deployment_type: z.string().optional(),
  disk_iops_configuration: z.object({
    iops: z.number(),
    mode: z.string(),
  }).array().optional(),
  dns_name: z.string().optional(),
  endpoint_ip_address_range: z.string().optional(),
  endpoints: z.object({
    intercluster: z.object({
      dns_name: z.string(),
      ip_addresses: z.set(z.string()),
    }).array(),
    management: z.object({
      dns_name: z.string(),
      ip_addresses: z.set(z.string()),
    }).array(),
  }).array().optional(),
  ha_pairs: z.number().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  network_interface_ids: z.string().array().optional(),
  owner_id: z.string().optional(),
  preferred_subnet_id: z.string().optional(),
  route_table_ids: z.set(z.string()).optional(),
  storage_capacity: z.number().optional(),
  storage_type: z.string().optional(),
  subnet_ids: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  throughput_capacity: z.number().optional(),
  throughput_capacity_per_ha_pair: z.number().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/fsx_ontap_file_system

export function DataAwsFsxOntapFileSystem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsFsxOntapFileSystem
      _type='aws_fsx_ontap_file_system'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsFsxOntapFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsFsxOntapFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsFsxOntapFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsFsxOntapFileSystem,
    idFilter,
    baseNode,
    optional,
  )
