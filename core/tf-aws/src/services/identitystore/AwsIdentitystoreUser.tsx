import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/identitystore_user

export const InputSchema = z.object({
  display_name: resolvableValue(z.string()),
  identity_store_id: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  addresses: resolvableValue(
    z.object({
      country: z.string().optional(),
      formatted: z.string().optional(),
      locality: z.string().optional(),
      postal_code: z.string().optional(),
      primary: z.boolean().optional(),
      region: z.string().optional(),
      street_address: z.string().optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  emails: resolvableValue(
    z.object({
      primary: z.boolean().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
    }).optional(),
  ),
  locale: resolvableValue(z.string().optional()),
  name: resolvableValue(z.object({
    family_name: z.string(),
    formatted: z.string().optional(),
    given_name: z.string(),
    honorific_prefix: z.string().optional(),
    honorific_suffix: z.string().optional(),
    middle_name: z.string().optional(),
  })),
  nickname: resolvableValue(z.string().optional()),
  phone_numbers: resolvableValue(
    z.object({
      primary: z.boolean().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
    }).optional(),
  ),
  preferred_language: resolvableValue(z.string().optional()),
  profile_url: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timezone: resolvableValue(z.string().optional()),
  title: resolvableValue(z.string().optional()),
  user_type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  external_ids: z.object({
    id: z.string(),
    issuer: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  user_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIdentitystoreUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_user'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIdentitystoreUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIdentitystoreUser, node, id)

export const useAwsIdentitystoreUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIdentitystoreUser, node, id)
