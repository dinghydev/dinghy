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
  preferred_subnet_id: resolvableValue(z.string()),
  storage_capacity: resolvableValue(z.number()),
  subnet_ids: resolvableValue(z.string().array()),
  automatic_backup_retention_days: resolvableValue(z.number().optional()),
  daily_automatic_backup_start_time: resolvableValue(z.string().optional()),
  disk_iops_configuration: resolvableValue(
    z.object({
      iops: z.number().optional(),
      mode: z.string().optional(),
    }).optional(),
  ),
  endpoint_ip_address_range: resolvableValue(z.string().optional()),
  fsx_admin_password: resolvableValue(z.string().optional()),
  ha_pairs: resolvableValue(z.number().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  route_table_ids: resolvableValue(z.string().array().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  storage_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  throughput_capacity: resolvableValue(z.number().optional()),
  throughput_capacity_per_ha_pair: resolvableValue(z.number().optional()),
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
  id: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/fsx_ontap_file_system

export function AwsFsxOntapFileSystem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_ontap_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxOntapFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsFsxOntapFileSystem, idFilter, baseNode, optional)

export const useAwsFsxOntapFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFsxOntapFileSystem,
    idFilter,
    baseNode,
    optional,
  )
