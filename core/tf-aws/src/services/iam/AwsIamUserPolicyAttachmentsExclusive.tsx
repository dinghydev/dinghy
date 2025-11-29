import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_user_policy_attachments_exclusive

export const InputSchema = z.object({
  policy_arns: resolvableValue(z.string().array()),
  user_name: resolvableValue(z.string()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamUserPolicyAttachmentsExclusive(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_policy_attachments_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserPolicyAttachmentsExclusive = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsIamUserPolicyAttachmentsExclusive, node, id)

export const useAwsIamUserPolicyAttachmentsExclusives = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsIamUserPolicyAttachmentsExclusive, node, id)
