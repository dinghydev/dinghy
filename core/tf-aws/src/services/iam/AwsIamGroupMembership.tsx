import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_group_membership

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  group: z.string().optional(),
  name: z.string().optional(),
  users: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamGroupMembership(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_group_membership'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamGroupMembership = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamGroupMembership, node, id)

export const useAwsIamGroupMemberships = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamGroupMembership, node, id)
