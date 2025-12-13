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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  policy_arn: resolvableValue(z.string()),
  groups: resolvableValue(z.string().array().optional()),
  roles: resolvableValue(z.string().array().optional()),
  users: resolvableValue(z.string().array().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_policy_attachment

export function AwsIamPolicyAttachment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamPolicyAttachment = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsIamPolicyAttachment, idFilter, baseNode)

export const useAwsIamPolicyAttachments = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsIamPolicyAttachment, idFilter, baseNode)
