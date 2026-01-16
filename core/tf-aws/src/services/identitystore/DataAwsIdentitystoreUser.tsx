import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIdentitystoreUser } from './AwsIdentitystoreUser.tsx'

export const InputSchema = TfMetaSchema.extend({
  identity_store_id: resolvableValue(z.string()),
  alternate_identifier: resolvableValue(
    z.object({
      external_id: z.object({
        id: z.string(),
        issuer: z.string(),
      }).optional(),
      unique_attribute: z.object({
        attribute_path: z.string(),
        attribute_value: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  user_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  addresses: z.object({
    country: z.string(),
    formatted: z.string(),
    locality: z.string(),
    postal_code: z.string(),
    primary: z.boolean(),
    region: z.string(),
    street_address: z.string(),
    type: z.string(),
  }).array().optional(),
  display_name: z.string().optional(),
  emails: z.object({
    primary: z.boolean(),
    type: z.string(),
    value: z.string(),
  }).array().optional(),
  external_ids: z.object({
    id: z.string(),
    issuer: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  locale: z.string().optional(),
  name: z.object({
    family_name: z.string(),
    formatted: z.string(),
    given_name: z.string(),
    honorific_prefix: z.string(),
    honorific_suffix: z.string(),
    middle_name: z.string(),
  }).array().optional(),
  nickname: z.string().optional(),
  phone_numbers: z.object({
    primary: z.boolean(),
    type: z.string(),
    value: z.string(),
  }).array().optional(),
  preferred_language: z.string().optional(),
  profile_url: z.string().optional(),
  region: z.string().optional(),
  timezone: z.string().optional(),
  title: z.string().optional(),
  user_name: z.string().optional(),
  user_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/identitystore_user

export function DataAwsIdentitystoreUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIdentitystoreUser
      _type='aws_identitystore_user'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIdentitystoreUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsIdentitystoreUser,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIdentitystoreUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsIdentitystoreUser,
    idFilter,
    baseNode,
    optional,
  )
