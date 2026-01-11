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
  custom_permissions_name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  capabilities: resolvableValue(
    z.object({
      add_or_run_anomaly_detection_for_analyses: z.string().optional(),
      create_and_update_dashboard_email_reports: z.string().optional(),
      create_and_update_data_sources: z.string().optional(),
      create_and_update_datasets: z.string().optional(),
      create_and_update_themes: z.string().optional(),
      create_and_update_threshold_alerts: z.string().optional(),
      create_shared_folders: z.string().optional(),
      create_spice_dataset: z.string().optional(),
      export_to_csv: z.string().optional(),
      export_to_csv_in_scheduled_reports: z.string().optional(),
      export_to_excel: z.string().optional(),
      export_to_excel_in_scheduled_reports: z.string().optional(),
      export_to_pdf: z.string().optional(),
      export_to_pdf_in_scheduled_reports: z.string().optional(),
      include_content_in_scheduled_reports_email: z.string().optional(),
      print_reports: z.string().optional(),
      rename_shared_folders: z.string().optional(),
      share_analyses: z.string().optional(),
      share_dashboards: z.string().optional(),
      share_data_sources: z.string().optional(),
      share_datasets: z.string().optional(),
      subscribe_dashboard_email_reports: z.string().optional(),
      view_account_spice_capacity: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/quicksight_custom_permissions

export function AwsQuicksightCustomPermissions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_custom_permissions'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightCustomPermissionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsQuicksightCustomPermissions,
    idFilter,
    baseNode,
    optional,
  )
