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
  cpu_core_count: resolvableValue(z.number()),
  data_storage_size_in_tbs: resolvableValue(z.number()),
  db_servers: resolvableValue(z.string().array()),
  display_name: resolvableValue(z.string()),
  gi_version: resolvableValue(z.string()),
  hostname_prefix: resolvableValue(z.string()),
  ssh_public_keys: resolvableValue(z.string().array()),
  cloud_exadata_infrastructure_arn: resolvableValue(z.string().optional()),
  cloud_exadata_infrastructure_id: resolvableValue(z.string().optional()),
  cluster_name: resolvableValue(z.string().optional()),
  data_collection_options: resolvableValue(
    z.object({
      is_diagnostics_events_enabled: z.boolean(),
      is_health_monitoring_enabled: z.boolean(),
      is_incident_logs_enabled: z.boolean(),
    }).array().optional(),
  ),
  db_node_storage_size_in_gbs: resolvableValue(z.number().optional()),
  is_local_backup_enabled: resolvableValue(z.boolean().optional()),
  is_sparse_diskgroup_enabled: resolvableValue(z.boolean().optional()),
  license_model: resolvableValue(z.string().optional()),
  memory_size_in_gbs: resolvableValue(z.number().optional()),
  odb_network_arn: resolvableValue(z.string().optional()),
  odb_network_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scan_listener_port_tcp: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  timezone: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  compute_model: z.string().optional(),
  created_at: z.string().optional(),
  disk_redundancy: z.string().optional(),
  domain: z.string().optional(),
  gi_version_computed: z.string().optional(),
  hostname_prefix_computed: z.string().optional(),
  id: z.string().optional(),
  iorm_config_cache: z.object({
    db_plans: z.object({
      db_name: z.string(),
      flash_cache_limit: z.string(),
      share: z.number(),
    }).array(),
    lifecycle_details: z.string(),
    lifecycle_state: z.string(),
    objective: z.string(),
  }).array().optional(),
  last_update_history_entry_id: z.string().optional(),
  listener_port: z.number().optional(),
  node_count: z.number().optional(),
  oci_resource_anchor_name: z.string().optional(),
  oci_url: z.string().optional(),
  ocid: z.string().optional(),
  percent_progress: z.number().optional(),
  scan_dns_name: z.string().optional(),
  scan_dns_record_id: z.string().optional(),
  scan_ip_ids: z.string().array().optional(),
  shape: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  storage_size_in_gbs: z.number().optional(),
  system_version: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vip_ids: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/odb_cloud_vm_cluster

export function AwsOdbCloudVmCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_cloud_vm_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOdbCloudVmCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsOdbCloudVmCluster, idFilter, baseNode, optional)

export const useAwsOdbCloudVmClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsOdbCloudVmCluster, idFilter, baseNode, optional)
