import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBackupSelection } from './AwsBackupSelection.tsx'

export const DataAwsBackupSelectionInputSchema = TfMetaSchema.extend({
  plan_id: resolvableValue(z.string()),
  selection_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBackupSelectionOutputSchema = z.object({
  iam_role_arn: z.string().optional(),
  name: z.string().optional(),
  resources: z.set(z.string()).optional(),
})

export type DataAwsBackupSelectionInputProps =
  & z.input<typeof DataAwsBackupSelectionInputSchema>
  & NodeProps

export type DataAwsBackupSelectionOutputProps =
  & z.output<typeof DataAwsBackupSelectionOutputSchema>
  & z.output<typeof DataAwsBackupSelectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/backup_selection

export function DataAwsBackupSelection(
  props: Partial<DataAwsBackupSelectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBackupSelection
      _type='aws_backup_selection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBackupSelectionInputSchema}
      _outputSchema={DataAwsBackupSelectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBackupSelection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBackupSelectionOutputProps>(
    DataAwsBackupSelection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBackupSelections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBackupSelectionOutputProps>(
    DataAwsBackupSelection,
    idFilter,
    baseNode,
    optional,
  )
