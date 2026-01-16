import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBackupPlan } from './AwsBackupPlan.tsx'

export const InputSchema = TfMetaSchema.extend({
  plan_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  name: z.string().optional(),
  rule: z.set(z.object({
    completion_window: z.number(),
    copy_action: z.set(z.object({
      destination_vault_arn: z.string(),
      lifecycle: z.object({
        cold_storage_after: z.number(),
        delete_after: z.number(),
        opt_in_to_archive_for_supported_resources: z.boolean(),
      }).array(),
    })),
    enable_continuous_backup: z.boolean(),
    lifecycle: z.object({
      cold_storage_after: z.number(),
      delete_after: z.number(),
      opt_in_to_archive_for_supported_resources: z.boolean(),
    }).array(),
    recovery_point_tags: z.record(z.string(), z.string()),
    rule_name: z.string(),
    scan_action: z.set(z.object({
      malware_scanner: z.string(),
      scan_mode: z.string(),
    })),
    schedule: z.string(),
    schedule_expression_timezone: z.string(),
    start_window: z.number(),
    target_logically_air_gapped_backup_vault_arn: z.string(),
    target_vault_name: z.string(),
  })).optional(),
  scan_setting: z.set(z.object({
    malware_scanner: z.string(),
    resource_types: z.set(z.string()),
    scanner_role_arn: z.string(),
  })).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/backup_plan

export function DataAwsBackupPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBackupPlan
      _type='aws_backup_plan'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBackupPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsBackupPlan, idFilter, baseNode, optional)

export const useDataAwsBackupPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsBackupPlan, idFilter, baseNode, optional)
