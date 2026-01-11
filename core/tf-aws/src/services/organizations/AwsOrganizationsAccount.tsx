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

export const InputSchema = z.object({
  email: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  close_on_deletion: resolvableValue(z.boolean().optional()),
  create_govcloud: resolvableValue(z.boolean().optional()),
  iam_user_access_to_billing: resolvableValue(z.string().optional()),
  parent_id: resolvableValue(z.string().optional()),
  role_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  govcloud_id: z.string().optional(),
  id: z.string().optional(),
  joined_method: z.string().optional(),
  joined_timestamp: z.string().optional(),
  state: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/organizations_account

export function AwsOrganizationsAccount(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_account'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsOrganizationsAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsOrganizationsAccount,
    idFilter,
    baseNode,
    optional,
  )
