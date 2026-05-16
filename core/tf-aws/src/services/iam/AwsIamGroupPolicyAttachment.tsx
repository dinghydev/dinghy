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

export const AwsIamGroupPolicyAttachmentInputSchema = TfMetaSchema.extend({
  group: resolvableValue(z.string()),
  policy_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const AwsIamGroupPolicyAttachmentOutputSchema = z.object({})

export const AwsIamGroupPolicyAttachmentImportSchema = z.object({
  group: resolvableValue(z.string()),
  policy_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsIamGroupPolicyAttachmentInputProps =
  & z.input<typeof AwsIamGroupPolicyAttachmentInputSchema>
  & z.input<typeof AwsIamGroupPolicyAttachmentImportSchema>
  & NodeProps

export type AwsIamGroupPolicyAttachmentOutputProps =
  & z.output<typeof AwsIamGroupPolicyAttachmentOutputSchema>
  & z.output<typeof AwsIamGroupPolicyAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_group_policy_attachment

export function AwsIamGroupPolicyAttachment(
  props: Partial<AwsIamGroupPolicyAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_group_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamGroupPolicyAttachmentInputSchema}
      _outputSchema={AwsIamGroupPolicyAttachmentOutputSchema}
      _importSchema={AwsIamGroupPolicyAttachmentImportSchema}
      {...props}
    />
  )
}

export const useAwsIamGroupPolicyAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamGroupPolicyAttachmentOutputProps>(
    AwsIamGroupPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamGroupPolicyAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamGroupPolicyAttachmentOutputProps>(
    AwsIamGroupPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )
