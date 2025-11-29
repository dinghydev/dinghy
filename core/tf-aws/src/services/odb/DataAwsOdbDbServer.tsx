import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/odb_db_server

export const InputSchema = z.object({
  cloud_exadata_infrastructure_id: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  autonomous_virtual_machine_ids: z.string().array().optional(),
  autonomous_vm_cluster_ids: z.string().array().optional(),
  compute_model: z.string().optional(),
  cpu_core_count: z.number().optional(),
  created_at: z.string().optional(),
  db_node_storage_size_in_gbs: z.number().optional(),
  db_server_patching_details: z.object({
    estimated_patch_duration: z.number(),
    patching_status: z.string(),
    time_patching_ended: z.string(),
    time_patching_started: z.string(),
  }).array().optional(),
  display_name: z.string().optional(),
  exadata_infrastructure_id: z.string().optional(),
  max_cpu_count: z.number().optional(),
  max_db_node_storage_in_gbs: z.number().optional(),
  max_memory_in_gbs: z.number().optional(),
  memory_size_in_gbs: z.number().optional(),
  oci_resource_anchor_name: z.string().optional(),
  ocid: z.string().optional(),
  shape: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  vm_cluster_ids: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOdbDbServer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_db_server'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbDbServer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsOdbDbServer, node, id)

export const useDataAwsOdbDbServers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsOdbDbServer, node, id)
