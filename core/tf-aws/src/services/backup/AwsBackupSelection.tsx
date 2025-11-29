import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/backup_selection

export const InputSchema = z.object({
  iam_role_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  plan_id: resolvableValue(z.string()),
  condition: resolvableValue(
    z.object({
      string_equals: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
      string_like: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
      string_not_equals: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
      string_not_like: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  not_resources: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  resources: resolvableValue(z.string().array().optional()),
  selection_tag: resolvableValue(
    z.object({
      key: z.string(),
      type: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBackupSelection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_selection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupSelection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBackupSelection, node, id)

export const useAwsBackupSelections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBackupSelection, node, id)
