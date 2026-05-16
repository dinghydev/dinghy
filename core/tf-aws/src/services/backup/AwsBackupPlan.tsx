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

export const AwsBackupPlanInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  rule: resolvableValue(
    z.object({
      completion_window: z.number().optional(),
      enable_continuous_backup: z.boolean().optional(),
      recovery_point_tags: z.record(z.string(), z.string()).optional(),
      rule_name: z.string(),
      schedule: z.string().optional(),
      schedule_expression_timezone: z.string().optional(),
      start_window: z.number().optional(),
      target_logically_air_gapped_backup_vault_arn: z.string().optional(),
      target_vault_name: z.string(),
      copy_action: z.object({
        destination_vault_arn: z.string(),
        lifecycle: z.object({
          cold_storage_after: z.number().optional(),
          delete_after: z.number().optional(),
          opt_in_to_archive_for_supported_resources: z.boolean().optional(),
        }).optional(),
      }).array().optional(),
      lifecycle: z.object({
        cold_storage_after: z.number().optional(),
        delete_after: z.number().optional(),
        opt_in_to_archive_for_supported_resources: z.boolean().optional(),
      }).optional(),
      scan_action: z.object({
        malware_scanner: z.string(),
        scan_mode: z.string(),
      }).array().optional(),
    }).array(),
  ),
  advanced_backup_setting: resolvableValue(
    z.object({
      backup_options: z.record(z.string(), z.string()),
      resource_type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  scan_setting: resolvableValue(
    z.object({
      malware_scanner: z.string(),
      resource_types: z.string().array(),
      scanner_role_arn: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsBackupPlanOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type AwsBackupPlanInputProps =
  & z.input<typeof AwsBackupPlanInputSchema>
  & NodeProps

export type AwsBackupPlanOutputProps =
  & z.output<typeof AwsBackupPlanOutputSchema>
  & z.output<typeof AwsBackupPlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_plan

export function AwsBackupPlan(props: Partial<AwsBackupPlanInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_plan'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupPlanInputSchema}
      _outputSchema={AwsBackupPlanOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBackupPlanOutputProps>(
    AwsBackupPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBackupPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupPlanOutputProps>(
    AwsBackupPlan,
    idFilter,
    baseNode,
    optional,
  )
