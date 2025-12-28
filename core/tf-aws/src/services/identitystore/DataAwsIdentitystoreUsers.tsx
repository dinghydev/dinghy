import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  identity_store_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  region: z.string().optional(),
  users: z.object({
    addresses: z.object({
      country: z.string(),
      formatted: z.string(),
      locality: z.string(),
      postal_code: z.string(),
      primary: z.boolean(),
      region: z.string(),
      street_address: z.string(),
      type: z.string(),
    }).array(),
    display_name: z.string(),
    emails: z.object({
      primary: z.boolean(),
      type: z.string(),
      value: z.string(),
    }).array(),
    external_ids: z.object({
      id: z.string(),
      issuer: z.string(),
    }).array(),
    identity_store_id: z.string(),
    locale: z.string(),
    name: z.object({
      family_name: z.string(),
      formatted: z.string(),
      given_name: z.string(),
      honorific_prefix: z.string(),
      honorific_suffix: z.string(),
      middle_name: z.string(),
    }).array(),
    nickname: z.string(),
    phone_numbers: z.object({
      primary: z.boolean(),
      type: z.string(),
      value: z.string(),
    }).array(),
    preferred_language: z.string(),
    profile_url: z.string(),
    timezone: z.string(),
    title: z.string(),
    user_id: z.string(),
    user_name: z.string(),
    user_type: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/identitystore_users

export function DataAwsIdentitystoreUsers(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_users'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIdentitystoreUserss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsIdentitystoreUsers,
    idFilter,
    baseNode,
    optional,
  )
