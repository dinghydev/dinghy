import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBackupSelection } from './AwsBackupSelection.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/backup_selection

export const InputSchema = z.object({
  plan_id: resolvableValue(z.string()),
  selection_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  iam_role_arn: z.string().optional(),
  name: z.string().optional(),
  resources: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsBackupSelection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsBackupSelection
      _type='aws_backup_selection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBackupSelection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsBackupSelection, node, id)

export const useDataAwsBackupSelections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsBackupSelection, node, id)
