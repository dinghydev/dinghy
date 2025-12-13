import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOdbCloudExadataInfrastructure } from './AwsOdbCloudExadataInfrastructure.tsx'

export const InputSchema = z.object({
  available_storage_size_in_gbs: resolvableValue(z.number()),
  customer_contacts_to_send_to_oci: resolvableValue(
    z.object({
      email: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  activated_storage_count: z.number().optional(),
  additional_storage_count: z.number().optional(),
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  availability_zone_id: z.string().optional(),
  compute_count: z.number().optional(),
  compute_model: z.string().optional(),
  cpu_count: z.number().optional(),
  created_at: z.string().optional(),
  data_storage_size_in_tbs: z.number().optional(),
  database_server_type: z.string().optional(),
  db_node_storage_size_in_gbs: z.number().optional(),
  db_server_version: z.string().optional(),
  display_name: z.string().optional(),
  id: z.string().optional(),
  last_maintenance_run_id: z.string().optional(),
  maintenance_window: z.object({
    custom_action_timeout_in_mins: z.number(),
    days_of_week: z.set(z.object({
      name: z.string(),
    })),
    hours_of_day: z.set(z.number()),
    is_custom_action_timeout_enabled: z.boolean(),
    lead_time_in_weeks: z.number(),
    months: z.set(z.object({
      name: z.string(),
    })),
    patching_mode: z.string(),
    preference: z.string(),
    weeks_of_month: z.set(z.number()),
  }).array().optional(),
  max_cpu_count: z.number().optional(),
  max_data_storage_in_tbs: z.number().optional(),
  max_db_node_storage_size_in_gbs: z.number().optional(),
  max_memory_in_gbs: z.number().optional(),
  memory_size_in_gbs: z.number().optional(),
  monthly_db_server_version: z.string().optional(),
  monthly_storage_server_version: z.string().optional(),
  next_maintenance_run_id: z.string().optional(),
  oci_resource_anchor_name: z.string().optional(),
  oci_url: z.string().optional(),
  ocid: z.string().optional(),
  percent_progress: z.number().optional(),
  shape: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  storage_count: z.number().optional(),
  storage_server_type: z.string().optional(),
  storage_server_version: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  total_storage_size_in_gbs: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/odb_cloud_exadata_infrastructure

export function DataAwsOdbCloudExadataInfrastructure(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOdbCloudExadataInfrastructure
      _type='aws_odb_cloud_exadata_infrastructure'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOdbCloudExadataInfrastructure = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    DataAwsOdbCloudExadataInfrastructure,
    idFilter,
    baseNode,
  )

export const useDataAwsOdbCloudExadataInfrastructures = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsOdbCloudExadataInfrastructure,
    idFilter,
    baseNode,
  )
