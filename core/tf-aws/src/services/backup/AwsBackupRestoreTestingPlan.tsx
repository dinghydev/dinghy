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
  schedule_expression: resolvableValue(z.string()),
  recovery_point_selection: resolvableValue(
    z.object({
      algorithm: z.string(),
      exclude_vaults: z.string().array().optional(),
      include_vaults: z.string().array(),
      recovery_point_types: z.string().array(),
      selection_window_days: z.number().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schedule_expression_timezone: resolvableValue(z.string().optional()),
  start_window_hours: resolvableValue(z.number().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/backup_restore_testing_plan

export function AwsBackupRestoreTestingPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_restore_testing_plan'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupRestoreTestingPlan = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsBackupRestoreTestingPlan, idFilter, baseNode)

export const useAwsBackupRestoreTestingPlans = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsBackupRestoreTestingPlan, idFilter, baseNode)
