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

export const AwsOrganizationsPolicyAttachmentInputSchema = TfMetaSchema.extend({
  policy_id: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
})

export const AwsOrganizationsPolicyAttachmentOutputSchema = z.object({})

export const AwsOrganizationsPolicyAttachmentImportSchema = z.object({
  policy_id: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsOrganizationsPolicyAttachmentInputProps =
  & z.input<typeof AwsOrganizationsPolicyAttachmentInputSchema>
  & z.input<typeof AwsOrganizationsPolicyAttachmentImportSchema>
  & NodeProps

export type AwsOrganizationsPolicyAttachmentOutputProps =
  & z.output<typeof AwsOrganizationsPolicyAttachmentOutputSchema>
  & z.output<typeof AwsOrganizationsPolicyAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/organizations_policy_attachment

export function AwsOrganizationsPolicyAttachment(
  props: Partial<AwsOrganizationsPolicyAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOrganizationsPolicyAttachmentInputSchema}
      _outputSchema={AwsOrganizationsPolicyAttachmentOutputSchema}
      _importSchema={AwsOrganizationsPolicyAttachmentImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsPolicyAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOrganizationsPolicyAttachmentOutputProps>(
    AwsOrganizationsPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsPolicyAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOrganizationsPolicyAttachmentOutputProps>(
    AwsOrganizationsPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )
