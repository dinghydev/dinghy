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

export const AwsIamPolicyAttachmentInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  policy_arn: resolvableValue(z.string()),
  groups: resolvableValue(z.string().array().optional()),
  roles: resolvableValue(z.string().array().optional()),
  users: resolvableValue(z.string().array().optional()),
})

export const AwsIamPolicyAttachmentOutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
})

export type AwsIamPolicyAttachmentInputProps =
  & z.input<typeof AwsIamPolicyAttachmentInputSchema>
  & NodeProps

export type AwsIamPolicyAttachmentOutputProps =
  & z.output<typeof AwsIamPolicyAttachmentOutputSchema>
  & z.output<typeof AwsIamPolicyAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_policy_attachment

export function AwsIamPolicyAttachment(
  props: Partial<AwsIamPolicyAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamPolicyAttachmentInputSchema}
      _outputSchema={AwsIamPolicyAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamPolicyAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamPolicyAttachmentOutputProps>(
    AwsIamPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamPolicyAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamPolicyAttachmentOutputProps>(
    AwsIamPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )
