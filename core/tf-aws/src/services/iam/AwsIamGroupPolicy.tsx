import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_group_policy

export const InputSchema = z.object({
  name_prefix: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  group: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  policy: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamGroupPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_group_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamGroupPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamGroupPolicy, node, id)

export const useAwsIamGroupPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamGroupPolicy, node, id)
