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

export const AwsIdentitystoreUserInputSchema = TfMetaSchema.extend({
  display_name: resolvableValue(z.string()),
  identity_store_id: resolvableValue(z.string()),
  name: resolvableValue(z.object({
    family_name: z.string(),
    formatted: z.string().optional(),
    given_name: z.string(),
    honorific_prefix: z.string().optional(),
    honorific_suffix: z.string().optional(),
    middle_name: z.string().optional(),
  })),
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

export const AwsIdentitystoreUserOutputSchema = z.object({
  external_ids: z.object({
    id: z.string(),
    issuer: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  user_id: z.string().optional(),
  user_status: z.string().optional(),
})

export type AwsIdentitystoreUserInputProps =
  & z.input<typeof AwsIdentitystoreUserInputSchema>
  & NodeProps

export type AwsIdentitystoreUserOutputProps =
  & z.output<typeof AwsIdentitystoreUserOutputSchema>
  & z.output<typeof AwsIdentitystoreUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/identitystore_user

export function AwsIdentitystoreUser(
  props: Partial<AwsIdentitystoreUserInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIdentitystoreUserInputSchema}
      _outputSchema={AwsIdentitystoreUserOutputSchema}
      {...props}
    />
  )
}

export const useAwsIdentitystoreUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIdentitystoreUserOutputProps>(
    AwsIdentitystoreUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIdentitystoreUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIdentitystoreUserOutputProps>(
    AwsIdentitystoreUser,
    idFilter,
    baseNode,
    optional,
  )
