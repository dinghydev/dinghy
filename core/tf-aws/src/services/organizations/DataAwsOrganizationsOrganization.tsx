import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOrganizationsOrganization } from './AwsOrganizationsOrganization.tsx'

export const InputSchema = z.object({
  accounts: resolvableValue(
    z.object({
      arn: z.string(),
      email: z.string(),
      id: z.string(),
      joined_method: z.string(),
      joined_timestamp: z.string(),
      name: z.string(),
      state: z.string(),
      status: z.string(),
    }).array(),
  ),
  aws_service_access_principals: resolvableValue(z.string().array()),
  enabled_policy_types: resolvableValue(z.string().array()),
  non_master_accounts: resolvableValue(
    z.object({
      arn: z.string(),
      email: z.string(),
      id: z.string(),
      joined_method: z.string(),
      joined_timestamp: z.string(),
      name: z.string(),
      state: z.string(),
      status: z.string(),
    }).array(),
  ),
  roots: resolvableValue(
    z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
      policy_types: z.object({
        status: z.string(),
        type: z.string(),
      }).array(),
    }).array(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  feature_set: z.string().optional(),
  id: z.string().optional(),
  master_account_arn: z.string().optional(),
  master_account_email: z.string().optional(),
  master_account_id: z.string().optional(),
  master_account_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/organizations_organization

export function DataAwsOrganizationsOrganization(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOrganizationsOrganization
      _type='aws_organizations_organization'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOrganizationsOrganization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsOrganizationsOrganization,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOrganizationsOrganizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsOrganizationsOrganization,
    idFilter,
    baseNode,
    optional,
  )
