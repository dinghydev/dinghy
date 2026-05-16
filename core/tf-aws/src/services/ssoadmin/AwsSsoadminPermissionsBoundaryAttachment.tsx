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

export const AwsSsoadminPermissionsBoundaryAttachmentInputSchema = TfMetaSchema
  .extend({
    instance_arn: resolvableValue(z.string()),
    permission_set_arn: resolvableValue(z.string()),
    permissions_boundary: resolvableValue(z.object({
      managed_policy_arn: z.string().optional(),
      customer_managed_policy_reference: z.object({
        name: z.string(),
        path: z.string().optional(),
      }).optional(),
    })),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSsoadminPermissionsBoundaryAttachmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSsoadminPermissionsBoundaryAttachmentInputProps =
  & z.input<typeof AwsSsoadminPermissionsBoundaryAttachmentInputSchema>
  & NodeProps

export type AwsSsoadminPermissionsBoundaryAttachmentOutputProps =
  & z.output<typeof AwsSsoadminPermissionsBoundaryAttachmentOutputSchema>
  & z.output<typeof AwsSsoadminPermissionsBoundaryAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_permissions_boundary_attachment

export function AwsSsoadminPermissionsBoundaryAttachment(
  props: Partial<AwsSsoadminPermissionsBoundaryAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_permissions_boundary_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminPermissionsBoundaryAttachmentInputSchema}
      _outputSchema={AwsSsoadminPermissionsBoundaryAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminPermissionsBoundaryAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminPermissionsBoundaryAttachmentOutputProps>(
    AwsSsoadminPermissionsBoundaryAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminPermissionsBoundaryAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminPermissionsBoundaryAttachmentOutputProps>(
    AwsSsoadminPermissionsBoundaryAttachment,
    idFilter,
    baseNode,
    optional,
  )
