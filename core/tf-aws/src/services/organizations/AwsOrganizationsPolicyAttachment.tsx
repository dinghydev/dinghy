import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/organizations_policy_attachment

export const InputSchema = z.object({
  policy_id: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  policy_id: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOrganizationsPolicyAttachment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsPolicyAttachment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsOrganizationsPolicyAttachment, node, id)

export const useAwsOrganizationsPolicyAttachments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsOrganizationsPolicyAttachment, node, id)
