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

export const AwsOrganizationsOrganizationInputSchema = TfMetaSchema.extend({
  aws_service_access_principals: resolvableValue(z.string().array().optional()),
  enabled_policy_types: resolvableValue(z.string().array().optional()),
  feature_set: resolvableValue(z.string().optional()),
  return_organization_only: resolvableValue(z.boolean().optional()),
})

export const AwsOrganizationsOrganizationOutputSchema = z.object({
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

export const AwsOrganizationsOrganizationImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsOrganizationsOrganizationInputProps =
  & z.input<typeof AwsOrganizationsOrganizationInputSchema>
  & z.input<typeof AwsOrganizationsOrganizationImportSchema>
  & NodeProps

export type AwsOrganizationsOrganizationOutputProps =
  & z.output<typeof AwsOrganizationsOrganizationOutputSchema>
  & z.output<typeof AwsOrganizationsOrganizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/organizations_organization

export function AwsOrganizationsOrganization(
  props: Partial<AwsOrganizationsOrganizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOrganizationsOrganizationInputSchema}
      _outputSchema={AwsOrganizationsOrganizationOutputSchema}
      _importSchema={AwsOrganizationsOrganizationImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsOrganization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOrganizationsOrganizationOutputProps>(
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
  useTypedNodes<AwsOrganizationsOrganizationOutputProps>(
    AwsOrganizationsOrganization,
    idFilter,
    baseNode,
    optional,
  )
