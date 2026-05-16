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

export const AwsIamUserPolicyAttachmentInputSchema = TfMetaSchema.extend({
  policy_arn: resolvableValue(z.string()),
  user: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const AwsIamUserPolicyAttachmentOutputSchema = z.object({})

export const AwsIamUserPolicyAttachmentImportSchema = z.object({
  policy_arn: resolvableValue(z.string()),
  user: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsIamUserPolicyAttachmentInputProps =
  & z.input<typeof AwsIamUserPolicyAttachmentInputSchema>
  & z.input<typeof AwsIamUserPolicyAttachmentImportSchema>
  & NodeProps

export type AwsIamUserPolicyAttachmentOutputProps =
  & z.output<typeof AwsIamUserPolicyAttachmentOutputSchema>
  & z.output<typeof AwsIamUserPolicyAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_user_policy_attachment

export function AwsIamUserPolicyAttachment(
  props: Partial<AwsIamUserPolicyAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamUserPolicyAttachmentInputSchema}
      _outputSchema={AwsIamUserPolicyAttachmentOutputSchema}
      _importSchema={AwsIamUserPolicyAttachmentImportSchema}
      {...props}
    />
  )
}

export const useAwsIamUserPolicyAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamUserPolicyAttachmentOutputProps>(
    AwsIamUserPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamUserPolicyAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamUserPolicyAttachmentOutputProps>(
    AwsIamUserPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )
