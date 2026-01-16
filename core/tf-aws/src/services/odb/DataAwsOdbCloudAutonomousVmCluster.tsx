import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOdbCloudAutonomousVmCluster } from './AwsOdbCloudAutonomousVmCluster.tsx'

export const InputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  autonomous_data_storage_percentage: z.number().optional(),
  autonomous_data_storage_size_in_tbs: z.number().optional(),
  available_autonomous_data_storage_size_in_tbs: z.number().optional(),
  available_container_databases: z.number().optional(),
  available_cpus: z.number().optional(),
  cloud_exadata_infrastructure_id: z.string().optional(),
  compute_model: z.string().optional(),
  cpu_core_count: z.number().optional(),
  cpu_core_count_per_node: z.number().optional(),
  cpu_percentage: z.number().optional(),
  created_at: z.string().optional(),
  data_storage_size_in_gbs: z.number().optional(),
  data_storage_size_in_tbs: z.number().optional(),
  db_servers: z.set(z.string()).optional(),
  description: z.string().optional(),
  display_name: z.string().optional(),
  domain: z.string().optional(),
  exadata_storage_in_tbs_lowest_scaled_value: z.number().optional(),
  hostname: z.string().optional(),
  is_mtls_enabled_vm_cluster: z.boolean().optional(),
  license_model: z.string().optional(),
  maintenance_window: z.object({
    days_of_week: z.set(z.object({
      name: z.string(),
    })),
    hours_of_day: z.set(z.number()),
    lead_time_in_weeks: z.number(),
    months: z.set(z.object({
      name: z.string(),
    })),
    preference: z.string(),
    weeks_of_month: z.set(z.number()),
  }).array().optional(),
  max_acds_lowest_scaled_value: z.number().optional(),
  memory_per_oracle_compute_unit_in_gbs: z.number().optional(),
  memory_size_in_gbs: z.number().optional(),
  node_count: z.number().optional(),
  non_provisionable_autonomous_container_databases: z.number().optional(),
  oci_resource_anchor_name: z.string().optional(),
  oci_url: z.string().optional(),
  ocid: z.string().optional(),
  odb_network_id: z.string().optional(),
  odb_node_storage_size_in_gbs: z.number().optional(),
  percent_progress: z.number().optional(),
  provisionable_autonomous_container_databases: z.number().optional(),
  provisioned_autonomous_container_databases: z.number().optional(),
  provisioned_cpus: z.number().optional(),
  reclaimable_cpus: z.number().optional(),
  reserved_cpus: z.number().optional(),
  scan_listener_port_non_tls: z.number().optional(),
  scan_listener_port_tls: z.number().optional(),
  shape: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  time_database_ssl_certificate_expires: z.string().optional(),
  time_ords_certificate_expires: z.string().optional(),
  time_zone: z.string().optional(),
  total_container_databases: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/odb_cloud_autonomous_vm_cluster

export function DataAwsOdbCloudAutonomousVmCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOdbCloudAutonomousVmCluster
      _type='aws_odb_cloud_autonomous_vm_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOdbCloudAutonomousVmCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsOdbCloudAutonomousVmCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOdbCloudAutonomousVmClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsOdbCloudAutonomousVmCluster,
    idFilter,
    baseNode,
    optional,
  )
