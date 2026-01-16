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

export const InputSchema = TfMetaSchema.extend({
  aws_service_access_principals: resolvableValue(z.string().array().optional()),
  enabled_policy_types: resolvableValue(z.string().array().optional()),
  feature_set: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  accounts: z.object({
    arn: z.string(),
    email: z.string(),
    id: z.string(),
    joined_method: z.string(),
    joined_timestamp: z.string(),
    name: z.string(),
    state: z.string(),
    status: z.string(),
  }).array().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  master_account_arn: z.string().optional(),
  master_account_email: z.string().optional(),
  master_account_id: z.string().optional(),
  master_account_name: z.string().optional(),
  non_master_accounts: z.object({
    arn: z.string(),
    email: z.string(),
    id: z.string(),
    joined_method: z.string(),
    joined_timestamp: z.string(),
    name: z.string(),
    state: z.string(),
    status: z.string(),
  }).array().optional(),
  roots: z.object({
    arn: z.string(),
    id: z.string(),
    name: z.string(),
    policy_types: z.object({
      status: z.string(),
      type: z.string(),
    }).array(),
  }).array().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/organizations_organization

export function AwsOrganizationsOrganization(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organization'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsOrganization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsOrganizationsOrganization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsOrganizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsOrganizationsOrganization,
    idFilter,
    baseNode,
    optional,
  )
