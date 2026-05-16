import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIamRolePolicyAttachmentsInputSchema = TfMetaSchema.extend({
  role_name: resolvableValue(z.string()),
  path_prefix: resolvableValue(z.string().optional()),
})

export const DataAwsIamRolePolicyAttachmentsOutputSchema = z.object({
  attached_policies: z.object({
    policy_arn: z.string(),
    policy_name: z.string(),
  }).array().optional(),
})

export type DataAwsIamRolePolicyAttachmentsInputProps =
  & z.input<typeof DataAwsIamRolePolicyAttachmentsInputSchema>
  & NodeProps

export type DataAwsIamRolePolicyAttachmentsOutputProps =
  & z.output<typeof DataAwsIamRolePolicyAttachmentsOutputSchema>
  & z.output<typeof DataAwsIamRolePolicyAttachmentsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_role_policy_attachments

export function DataAwsIamRolePolicyAttachments(
  props: Partial<DataAwsIamRolePolicyAttachmentsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_role_policy_attachments'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamRolePolicyAttachmentsInputSchema}
      _outputSchema={DataAwsIamRolePolicyAttachmentsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamRolePolicyAttachmentss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamRolePolicyAttachmentsOutputProps>(
    DataAwsIamRolePolicyAttachments,
    idFilter,
    baseNode,
    optional,
  )
