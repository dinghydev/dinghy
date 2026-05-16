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

export const AwsSsoadminManagedPolicyAttachmentInputSchema = TfMetaSchema
  .extend({
    instance_arn: resolvableValue(z.string()),
    managed_policy_arn: resolvableValue(z.string()),
    permission_set_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSsoadminManagedPolicyAttachmentOutputSchema = z.object({
  id: z.string().optional(),
  managed_policy_name: z.string().optional(),
})

export type AwsSsoadminManagedPolicyAttachmentInputProps =
  & z.input<typeof AwsSsoadminManagedPolicyAttachmentInputSchema>
  & NodeProps

export type AwsSsoadminManagedPolicyAttachmentOutputProps =
  & z.output<typeof AwsSsoadminManagedPolicyAttachmentOutputSchema>
  & z.output<typeof AwsSsoadminManagedPolicyAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_managed_policy_attachment

export function AwsSsoadminManagedPolicyAttachment(
  props: Partial<AwsSsoadminManagedPolicyAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_managed_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminManagedPolicyAttachmentInputSchema}
      _outputSchema={AwsSsoadminManagedPolicyAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminManagedPolicyAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminManagedPolicyAttachmentOutputProps>(
    AwsSsoadminManagedPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminManagedPolicyAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminManagedPolicyAttachmentOutputProps>(
    AwsSsoadminManagedPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )
