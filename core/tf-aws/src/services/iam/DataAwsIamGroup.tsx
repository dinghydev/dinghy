import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamGroup } from './AwsIamGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_group

export const InputSchema = z.object({
  group_name: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  group_id: z.string().optional(),
  id: z.string().optional(),
  path: z.string().optional(),
  users: z.object({
    arn: z.string(),
    path: z.string(),
    user_id: z.string(),
    user_name: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIamGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamGroup
      _type='aws_iam_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIamGroup, node, id)

export const useDataAwsIamGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamGroup, node, id)
