import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/backup_restore_testing_selection

export const InputSchema = z.object({
  iam_role_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  protected_resource_type: resolvableValue(z.string()),
  restore_testing_plan_name: resolvableValue(z.string()),
  protected_resource_arns: resolvableValue(z.string().array().optional()),
  protected_resource_conditions: resolvableValue(
    z.object({
      string_equals: z.object({
        key: z.string(),
        value: z.string(),
      }).optional(),
      string_not_equals: z.object({
        key: z.string(),
        value: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  restore_metadata_overrides: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  validation_window_hours: resolvableValue(z.number().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBackupRestoreTestingSelection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_restore_testing_selection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupRestoreTestingSelection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBackupRestoreTestingSelection, node, id)

export const useAwsBackupRestoreTestingSelections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBackupRestoreTestingSelection, node, id)
