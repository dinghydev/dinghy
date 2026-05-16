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

export const AwsWorkmailUserInputSchema = TfMetaSchema.extend({
  display_name: resolvableValue(z.string()),
  email: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  organization_id: resolvableValue(z.string()),
  city: resolvableValue(z.string().optional()),
  company: resolvableValue(z.string().optional()),
  country: resolvableValue(z.string().optional()),
  department: resolvableValue(z.string().optional()),
  first_name: resolvableValue(z.string().optional()),
  hidden_from_global_address_list: resolvableValue(z.boolean().optional()),
  identity_provider_user_id: resolvableValue(z.string().optional()),
  initials: resolvableValue(z.string().optional()),
  job_title: resolvableValue(z.string().optional()),
  last_name: resolvableValue(z.string().optional()),
  office: resolvableValue(z.string().optional()),
  password: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  street: resolvableValue(z.string().optional()),
  telephone: resolvableValue(z.string().optional()),
  user_role: resolvableValue(z.string().optional()),
  zip_code: resolvableValue(z.string().optional()),
})

export const AwsWorkmailUserOutputSchema = z.object({
  disabled_date: z.string().optional(),
  enabled_date: z.string().optional(),
  identity_provider_identity_store_id: z.string().optional(),
  mailbox_deprovisioned_date: z.string().optional(),
  mailbox_provisioned_date: z.string().optional(),
  state: z.string().optional(),
  user_id: z.string().optional(),
})

export const AwsWorkmailUserImportSchema = z.object({
  organization_id: resolvableValue(z.string()),
  user_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsWorkmailUserInputProps =
  & z.input<typeof AwsWorkmailUserInputSchema>
  & z.input<typeof AwsWorkmailUserImportSchema>
  & NodeProps

export type AwsWorkmailUserOutputProps =
  & z.output<typeof AwsWorkmailUserOutputSchema>
  & z.output<typeof AwsWorkmailUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workmail_user

export function AwsWorkmailUser(props: Partial<AwsWorkmailUserInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workmail_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkmailUserInputSchema}
      _outputSchema={AwsWorkmailUserOutputSchema}
      _importSchema={AwsWorkmailUserImportSchema}
      {...props}
    />
  )
}

export const useAwsWorkmailUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkmailUserOutputProps>(
    AwsWorkmailUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkmailUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkmailUserOutputProps>(
    AwsWorkmailUser,
    idFilter,
    baseNode,
    optional,
  )
