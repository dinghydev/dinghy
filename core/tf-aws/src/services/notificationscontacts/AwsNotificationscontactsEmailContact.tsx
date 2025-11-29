import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/notificationscontacts_email_contact

export const InputSchema = z.object({
  email_address: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNotificationscontactsEmailContact(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notificationscontacts_email_contact'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationscontactsEmailContact = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsNotificationscontactsEmailContact, node, id)

export const useAwsNotificationscontactsEmailContacts = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsNotificationscontactsEmailContact, node, id)
