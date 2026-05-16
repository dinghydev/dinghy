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

export const AwsBackupRestoreTestingSelectionInputSchema = TfMetaSchema.extend({
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
      }).array().optional(),
      string_not_equals: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  restore_metadata_overrides: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  validation_window_hours: resolvableValue(z.number().optional()),
})

export const AwsBackupRestoreTestingSelectionOutputSchema = z.object({})

export type AwsBackupRestoreTestingSelectionInputProps =
  & z.input<typeof AwsBackupRestoreTestingSelectionInputSchema>
  & NodeProps

export type AwsBackupRestoreTestingSelectionOutputProps =
  & z.output<typeof AwsBackupRestoreTestingSelectionOutputSchema>
  & z.output<typeof AwsBackupRestoreTestingSelectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_restore_testing_selection

export function AwsBackupRestoreTestingSelection(
  props: Partial<AwsBackupRestoreTestingSelectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_restore_testing_selection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupRestoreTestingSelectionInputSchema}
      _outputSchema={AwsBackupRestoreTestingSelectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupRestoreTestingSelection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBackupRestoreTestingSelectionOutputProps>(
    AwsBackupRestoreTestingSelection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBackupRestoreTestingSelections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupRestoreTestingSelectionOutputProps>(
    AwsBackupRestoreTestingSelection,
    idFilter,
    baseNode,
    optional,
  )
