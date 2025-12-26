import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOdbCloudVmCluster } from './AwsOdbCloudVmCluster.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string())),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cloud_exadata_infrastructure_id: z.string().optional(),
  cluster_name: z.string().optional(),
  compute_model: z.string().optional(),
  cpu_core_count: z.number().optional(),
  created_at: z.string().optional(),
  data_collection_options: z.object({
    is_diagnostics_events_enabled: z.boolean(),
    is_health_monitoring_enabled: z.boolean(),
    is_incident_logs_enabled: z.boolean(),
  }).array().optional(),
  data_storage_size_in_tbs: z.number().optional(),
  db_node_storage_size_in_gbs: z.number().optional(),
  db_servers: z.string().array().optional(),
  disk_redundancy: z.string().optional(),
  display_name: z.string().optional(),
  domain: z.string().optional(),
  gi_version: z.string().optional(),
  hostname_prefix_computed: z.string().optional(),
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
  is_local_backup_enabled: z.boolean().optional(),
  is_sparse_disk_group_enabled: z.boolean().optional(),
  last_update_history_entry_id: z.string().optional(),
  license_model: z.string().optional(),
  listener_port: z.number().optional(),
  memory_size_in_gbs: z.number().optional(),
  node_count: z.number().optional(),
  oci_resource_anchor_name: z.string().optional(),
  oci_url: z.string().optional(),
  ocid: z.string().optional(),
  odb_network_id: z.string().optional(),
  percent_progress: z.number().optional(),
  scan_dns_name: z.string().optional(),
  scan_dns_record_id: z.string().optional(),
  scan_ip_ids: z.string().array().optional(),
  shape: z.string().optional(),
  ssh_public_keys: z.string().array().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  storage_size_in_gbs: z.number().optional(),
  system_version: z.string().optional(),
  timezone: z.string().optional(),
  vip_ids: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/odb_cloud_vm_cluster

export function DataAwsOdbCloudVmCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOdbCloudVmCluster
      _type='aws_odb_cloud_vm_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOdbCloudVmCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsOdbCloudVmCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOdbCloudVmClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsOdbCloudVmCluster,
    idFilter,
    baseNode,
    optional,
  )
