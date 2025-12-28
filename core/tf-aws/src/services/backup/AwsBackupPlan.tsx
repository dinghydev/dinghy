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
    }).array(),
  ),
  advanced_backup_setting: resolvableValue(
    z.object({
      backup_options: z.record(z.string(), z.string()),
      resource_type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/backup_plan

export function AwsBackupPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_plan'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsBackupPlan, idFilter, baseNode, optional)

export const useAwsBackupPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsBackupPlan, idFilter, baseNode, optional)
