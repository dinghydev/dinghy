import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  cloud_exadata_infrastructure_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  db_servers: z.object({
    autonomous_virtual_machine_ids: z.string().array(),
    autonomous_vm_cluster_ids: z.string().array(),
    compute_model: z.string(),
    cpu_core_count: z.number(),
    created_at: z.string(),
    db_node_storage_size_in_gbs: z.number(),
    db_server_patching_details: z.object({
      estimated_patch_duration: z.number(),
      patching_status: z.string(),
      time_patching_ended: z.string(),
      time_patching_started: z.string(),
    }).array(),
    display_name: z.string(),
    exadata_infrastructure_id: z.string(),
    id: z.string(),
    max_cpu_count: z.number(),
    max_db_node_storage_in_gbs: z.number(),
    max_memory_in_gbs: z.number(),
    memory_size_in_gbs: z.number(),
    oci_resource_anchor_name: z.string(),
    ocid: z.string(),
    shape: z.string(),
    status: z.string(),
    status_reason: z.string(),
    vm_cluster_ids: z.string().array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/odb_db_servers

export function DataAwsOdbDbServers(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_db_servers'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbDbServerss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsOdbDbServers, idFilter, baseNode, optional)
