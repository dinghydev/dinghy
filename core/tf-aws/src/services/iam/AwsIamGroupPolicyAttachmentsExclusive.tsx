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

export const AwsIamGroupPolicyAttachmentsExclusiveInputSchema = TfMetaSchema
  .extend({
    group_name: resolvableValue(z.string()),
    policy_arns: resolvableValue(z.string().array()),
  })

export const AwsIamGroupPolicyAttachmentsExclusiveOutputSchema = z.object({})

export type AwsIamGroupPolicyAttachmentsExclusiveInputProps =
  & z.input<typeof AwsIamGroupPolicyAttachmentsExclusiveInputSchema>
  & NodeProps

export type AwsIamGroupPolicyAttachmentsExclusiveOutputProps =
  & z.output<typeof AwsIamGroupPolicyAttachmentsExclusiveOutputSchema>
  & z.output<typeof AwsIamGroupPolicyAttachmentsExclusiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_group_policy_attachments_exclusive

export function AwsIamGroupPolicyAttachmentsExclusive(
  props: Partial<AwsIamGroupPolicyAttachmentsExclusiveInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_group_policy_attachments_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamGroupPolicyAttachmentsExclusiveInputSchema}
      _outputSchema={AwsIamGroupPolicyAttachmentsExclusiveOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamGroupPolicyAttachmentsExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamGroupPolicyAttachmentsExclusiveOutputProps>(
    AwsIamGroupPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamGroupPolicyAttachmentsExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamGroupPolicyAttachmentsExclusiveOutputProps>(
    AwsIamGroupPolicyAttachmentsExclusive,
    idFilter,
    baseNode,
    optional,
  )
