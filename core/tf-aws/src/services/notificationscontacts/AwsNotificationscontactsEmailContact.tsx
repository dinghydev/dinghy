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

export const AwsNotificationscontactsEmailContactInputSchema = TfMetaSchema
  .extend({
    email_address: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsNotificationscontactsEmailContactOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNotificationscontactsEmailContactInputProps =
  & z.input<typeof AwsNotificationscontactsEmailContactInputSchema>
  & NodeProps

export type AwsNotificationscontactsEmailContactOutputProps =
  & z.output<typeof AwsNotificationscontactsEmailContactOutputSchema>
  & z.output<typeof AwsNotificationscontactsEmailContactInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notificationscontacts_email_contact

export function AwsNotificationscontactsEmailContact(
  props: Partial<AwsNotificationscontactsEmailContactInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notificationscontacts_email_contact'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationscontactsEmailContactInputSchema}
      _outputSchema={AwsNotificationscontactsEmailContactOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationscontactsEmailContact = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNotificationscontactsEmailContactOutputProps>(
    AwsNotificationscontactsEmailContact,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNotificationscontactsEmailContacts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNotificationscontactsEmailContactOutputProps>(
    AwsNotificationscontactsEmailContact,
    idFilter,
    baseNode,
    optional,
  )
