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

export const AwsIamUserPolicyAttachmentsExclusiveInputSchema = TfMetaSchema
  .extend({
    policy_arns: resolvableValue(z.string().array()),
    user_name: resolvableValue(z.string()),
  })

export const AwsIamUserPolicyAttachmentsExclusiveOutputSchema = z.object({})

export type AwsIamUserPolicyAttachmentsExclusiveInputProps =
  & z.input<typeof AwsIamUserPolicyAttachmentsExclusiveInputSchema>
  & NodeProps

export type AwsIamUserPolicyAttachmentsExclusiveOutputProps =
  & z.output<typeof AwsIamUserPolicyAttachmentsExclusiveOutputSchema>
  & z.output<typeof AwsIamUserPolicyAttachmentsExclusiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_user_policy_attachments_exclusive

export function AwsIamUserPolicyAttachmentsExclusive(
  props: Partial<AwsIamUserPolicyAttachmentsExclusiveInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_policy_attachments_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamUserPolicyAttachmentsExclusiveInputSchema}
      _outputSchema={AwsIamUserPolicyAttachmentsExclusiveOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserPolicyAttachmentsExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamUserPolicyAttachmentsExclusiveOutputProps>(
    AwsIamUserPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamUserPolicyAttachmentsExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamUserPolicyAttachmentsExclusiveOutputProps>(
    AwsIamUserPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )
