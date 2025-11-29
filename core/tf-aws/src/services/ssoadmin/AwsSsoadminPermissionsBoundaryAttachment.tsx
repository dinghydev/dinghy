import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssoadmin_permissions_boundary_attachment

export const InputSchema = z.object({
  instance_arn: resolvableValue(z.string()),
  permission_set_arn: resolvableValue(z.string()),
  permissions_boundary: resolvableValue(z.object({
    managed_policy_arn: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsoadminPermissionsBoundaryAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_permissions_boundary_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminPermissionsBoundaryAttachment = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsSsoadminPermissionsBoundaryAttachment, node, id)

export const useAwsSsoadminPermissionsBoundaryAttachments = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsSsoadminPermissionsBoundaryAttachment, node, id)
