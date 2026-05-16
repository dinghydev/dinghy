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

export const AwsAccountAlternateContactInputSchema = TfMetaSchema.extend({
  alternate_contact_type: resolvableValue(z.string()),
  email_address: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  phone_number: resolvableValue(z.string()),
  title: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsAccountAlternateContactOutputSchema = z.object({})

export type AwsAccountAlternateContactInputProps =
  & z.input<typeof AwsAccountAlternateContactInputSchema>
  & NodeProps

export type AwsAccountAlternateContactOutputProps =
  & z.output<typeof AwsAccountAlternateContactOutputSchema>
  & z.output<typeof AwsAccountAlternateContactInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/account_alternate_contact

export function AwsAccountAlternateContact(
  props: Partial<AwsAccountAlternateContactInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_account_alternate_contact'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAccountAlternateContactInputSchema}
      _outputSchema={AwsAccountAlternateContactOutputSchema}
      {...props}
    />
  )
}

export const useAwsAccountAlternateContact = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAccountAlternateContactOutputProps>(
    AwsAccountAlternateContact,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAccountAlternateContacts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAccountAlternateContactOutputProps>(
    AwsAccountAlternateContact,
    idFilter,
    baseNode,
    optional,
  )
