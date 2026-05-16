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

export const AwsIamRolePolicyAttachmentInputSchema = TfMetaSchema.extend({
  policy_arn: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const AwsIamRolePolicyAttachmentOutputSchema = z.object({})

export const AwsIamRolePolicyAttachmentImportSchema = z.object({
  policy_arn: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsIamRolePolicyAttachmentInputProps =
  & z.input<typeof AwsIamRolePolicyAttachmentInputSchema>
  & z.input<typeof AwsIamRolePolicyAttachmentImportSchema>
  & NodeProps

export type AwsIamRolePolicyAttachmentOutputProps =
  & z.output<typeof AwsIamRolePolicyAttachmentOutputSchema>
  & z.output<typeof AwsIamRolePolicyAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_role_policy_attachment

export function AwsIamRolePolicyAttachment(
  props: Partial<AwsIamRolePolicyAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_role_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamRolePolicyAttachmentInputSchema}
      _outputSchema={AwsIamRolePolicyAttachmentOutputSchema}
      _importSchema={AwsIamRolePolicyAttachmentImportSchema}
      {...props}
    />
  )
}

export const useAwsIamRolePolicyAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamRolePolicyAttachmentOutputProps>(
    AwsIamRolePolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamRolePolicyAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamRolePolicyAttachmentOutputProps>(
    AwsIamRolePolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )
