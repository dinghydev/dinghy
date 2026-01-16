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

export const InputSchema = TfMetaSchema.extend({
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_selection

export function AwsBackupSelection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsBackupSelection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsBackupSelection, idFilter, baseNode, optional)

export const useAwsBackupSelections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsBackupSelection, idFilter, baseNode, optional)
