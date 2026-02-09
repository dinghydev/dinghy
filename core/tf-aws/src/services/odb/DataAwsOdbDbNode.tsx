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
  cloud_vm_cluster_id: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  additional_details: z.string().optional(),
  arn: z.string().optional(),
  backup_ip_id: z.string().optional(),
  backup_vnic_id: z.string().optional(),
  backup_vnic2_id: z.string().optional(),
  cloud_vm_cluster_id: z.string().optional(),
  cpu_core_count: z.number().optional(),
  created_at: z.string().optional(),
  db_server_id: z.string().optional(),
  db_storage_size_in_gbs: z.number().optional(),
  db_system_id: z.string().optional(),
  fault_domain: z.string().optional(),
  floating_ip_address: z.string().optional(),
  host_ip_id: z.string().optional(),
  hostname: z.string().optional(),
  maintenance_type: z.string().optional(),
  memory_size_in_gbs: z.number().optional(),
  oci_resource_anchor_name: z.string().optional(),
  ocid: z.string().optional(),
  private_ip_address: z.string().optional(),
  software_storage_size_in_gbs: z.number().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  time_maintenance_window_end: z.string().optional(),
  time_maintenance_window_start: z.string().optional(),
  total_cpu_core_count: z.number().optional(),
  vnic_id: z.string().optional(),
  vnic2_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/odb_db_node

export function DataAwsOdbDbNode(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_db_node'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbDbNode = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsOdbDbNode, idFilter, baseNode, optional)

export const useDataAwsOdbDbNodes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsOdbDbNode, idFilter, baseNode, optional)
