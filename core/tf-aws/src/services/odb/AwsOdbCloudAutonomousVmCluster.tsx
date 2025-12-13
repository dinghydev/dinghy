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
  autonomous_data_storage_size_in_tbs: resolvableValue(z.number()),
  cloud_exadata_infrastructure_id: resolvableValue(z.string()),
  cpu_core_count_per_node: resolvableValue(z.number()),
  db_servers: resolvableValue(z.string().array()),
  display_name: resolvableValue(z.string()),
  memory_per_oracle_compute_unit_in_gbs: resolvableValue(z.number()),
  odb_network_id: resolvableValue(z.string()),
  scan_listener_port_non_tls: resolvableValue(z.number()),
  scan_listener_port_tls: resolvableValue(z.number()),
  total_container_databases: resolvableValue(z.number()),
  description: resolvableValue(z.string().optional()),
  is_mtls_enabled_vm_cluster: resolvableValue(z.boolean().optional()),
  license_model: resolvableValue(z.string().optional()),
  maintenance_window: resolvableValue(
    z.object({
      days_of_week: z.object({
        name: z.string(),
      }).array().optional(),
      hours_of_day: z.number().array().optional(),
      lead_time_in_weeks: z.number().optional(),
      months: z.object({
        name: z.string(),
      }).array().optional(),
      preference: z.string(),
      weeks_of_month: z.number().array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  time_zone: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  autonomous_data_storage_percentage: z.number().optional(),
  available_autonomous_data_storage_size_in_tbs: z.number().optional(),
  available_container_databases: z.number().optional(),
  available_cpus: z.number().optional(),
  compute_model: z.string().optional(),
  cpu_core_count: z.number().optional(),
  cpu_percentage: z.number().optional(),
  created_at: z.string().optional(),
  data_storage_size_in_gbs: z.number().optional(),
  data_storage_size_in_tbs: z.number().optional(),
  domain: z.string().optional(),
  exadata_storage_in_tbs_lowest_scaled_value: z.number().optional(),
  hostname: z.string().optional(),
  id: z.string().optional(),
  license_model: z.string().optional(),
  max_acds_lowest_scaled_value: z.number().optional(),
  memory_size_in_gbs: z.number().optional(),
  node_count: z.number().optional(),
  non_provisionable_autonomous_container_databases: z.number().optional(),
  oci_resource_anchor_name: z.string().optional(),
  oci_url: z.string().optional(),
  ocid: z.string().optional(),
  odb_node_storage_size_in_gbs: z.number().optional(),
  percent_progress: z.number().optional(),
  provisionable_autonomous_container_databases: z.number().optional(),
  provisioned_autonomous_container_databases: z.number().optional(),
  provisioned_cpus: z.number().optional(),
  reclaimable_cpus: z.number().optional(),
  reserved_cpus: z.number().optional(),
  shape: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  time_database_ssl_certificate_expires: z.string().optional(),
  time_ords_certificate_expires: z.string().optional(),
  time_zone: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/odb_cloud_autonomous_vm_cluster

export function AwsOdbCloudAutonomousVmCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_cloud_autonomous_vm_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOdbCloudAutonomousVmCluster = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(AwsOdbCloudAutonomousVmCluster, idFilter, baseNode)

export const useAwsOdbCloudAutonomousVmClusters = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsOdbCloudAutonomousVmCluster, idFilter, baseNode)
