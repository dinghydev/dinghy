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

export const DataAwsOrganizationsOrganizationInputSchema = TfMetaSchema.extend({
  return_organization_only: resolvableValue(z.boolean().optional()),
})

export const DataAwsOrganizationsOrganizationOutputSchema = z.object({
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
  aws_service_access_principals: z.set(z.string()).optional(),
  enabled_policy_types: z.set(z.string()).optional(),
  feature_set: z.string().optional(),
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

export type DataAwsOrganizationsOrganizationInputProps =
  & z.input<typeof DataAwsOrganizationsOrganizationInputSchema>
  & NodeProps

export type DataAwsOrganizationsOrganizationOutputProps =
  & z.output<typeof DataAwsOrganizationsOrganizationOutputSchema>
  & z.output<typeof DataAwsOrganizationsOrganizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_organization

export function DataAwsOrganizationsOrganization(
  props: Partial<DataAwsOrganizationsOrganizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOrganizationsOrganization
      _type='aws_organizations_organization'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsOrganizationInputSchema}
      _outputSchema={DataAwsOrganizationsOrganizationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOrganizationsOrganization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOrganizationsOrganizationOutputProps>(
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
  useTypedNodes<DataAwsOrganizationsOrganizationOutputProps>(
    DataAwsOrganizationsOrganization,
    idFilter,
    baseNode,
    optional,
  )
