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
  availability_zone_id: resolvableValue(z.string()),
  display_name: resolvableValue(z.string()),
  memory_size_in_gbs: resolvableValue(z.number()),
  oci_url: resolvableValue(z.string()),
  shape: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  availability_zone: resolvableValue(z.string().optional()),
  compute_count: resolvableValue(z.number().optional()),
  customer_contacts_to_send_to_oci: resolvableValue(
    z.object({
      email: z.string(),
    }).array().optional(),
  ),
  database_server_type: resolvableValue(z.string().optional()),
  maintenance_window: resolvableValue(
    z.object({
      custom_action_timeout_in_mins: z.number(),
      days_of_week: z.object({
        name: z.string(),
      }).array().optional(),
      hours_of_day: z.number().array().optional(),
      is_custom_action_timeout_enabled: z.boolean(),
      lead_time_in_weeks: z.number().optional(),
      months: z.object({
        name: z.string(),
      }).array().optional(),
      patching_mode: z.string(),
      preference: z.string(),
      weeks_of_month: z.number().array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  storage_count: resolvableValue(z.number().optional()),
  storage_server_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  activated_storage_count: z.number().optional(),
  additional_storage_count: z.number().optional(),
  arn: z.string().optional(),
  available_storage_size_in_gbs: z.number().optional(),
  compute_model: z.string().optional(),
  cpu_count: z.number().optional(),
  created_at: z.string().optional(),
  data_storage_size_in_tbs: z.number().optional(),
  db_node_storage_size_in_gbs: z.number().optional(),
  db_server_version: z.string().optional(),
  id: z.string().optional(),
  last_maintenance_run_id: z.string().optional(),
  max_cpu_count: z.number().optional(),
  max_data_storage_in_tbs: z.number().optional(),
  max_db_node_storage_size_in_gbs: z.number().optional(),
  max_memory_in_gbs: z.number().optional(),
  monthly_db_server_version: z.string().optional(),
  monthly_storage_server_version: z.string().optional(),
  next_maintenance_run_id: z.string().optional(),
  oci_resource_anchor_name: z.string().optional(),
  ocid: z.string().optional(),
  percent_progress: z.number().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  storage_server_version: z.string().optional(),
  total_storage_size_in_gbs: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/odb_cloud_exadata_infrastructure

export function AwsOdbCloudExadataInfrastructure(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_cloud_exadata_infrastructure'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOdbCloudExadataInfrastructure = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsOdbCloudExadataInfrastructure,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOdbCloudExadataInfrastructures = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsOdbCloudExadataInfrastructure,
    idFilter,
    baseNode,
    optional,
  )
