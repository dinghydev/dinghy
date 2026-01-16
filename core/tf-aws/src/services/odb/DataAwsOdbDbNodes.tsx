import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  cloud_vm_cluster_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  db_nodes: z.object({
    additional_details: z.string(),
    arn: z.string(),
    backup_ip_id: z.string(),
    backup_vnic2_id: z.string(),
    backup_vnic_id: z.string(),
    cpu_core_count: z.number(),
    created_at: z.string(),
    db_node_storage_size: z.number(),
    db_server_id: z.string(),
    db_system_id: z.string(),
    fault_domain: z.string(),
    host_ip_id: z.string(),
    hostname: z.string(),
    id: z.string(),
    maintenance_type: z.string(),
    memory_size: z.number(),
    oci_resource_anchor_name: z.string(),
    ocid: z.string(),
    software_storage_size: z.number(),
    status: z.string(),
    status_reason: z.string(),
    time_maintenance_window_end: z.string(),
    time_maintenance_window_start: z.string(),
    total_cpu_core_count: z.number(),
    vnic2_id: z.string(),
    vnic_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/odb_db_nodes

export function DataAwsOdbDbNodes(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_db_nodes'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbDbNodess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsOdbDbNodes, idFilter, baseNode, optional)
