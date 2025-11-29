import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssoadmin_customer_managed_policy_attachment

export const InputSchema = z.object({
  instance_arn: resolvableValue(z.string()),
  permission_set_arn: resolvableValue(z.string()),
  customer_managed_policy_reference: resolvableValue(z.object({
    name: z.string(),
    path: z.string().optional(),
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

export function AwsSsoadminCustomerManagedPolicyAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_customer_managed_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminCustomerManagedPolicyAttachment = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsSsoadminCustomerManagedPolicyAttachment,
    node,
    id,
  )

export const useAwsSsoadminCustomerManagedPolicyAttachments = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsSsoadminCustomerManagedPolicyAttachment,
    node,
    id,
  )
