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

export const AwsSecurityhubOrganizationAdminAccountInputSchema = TfMetaSchema
  .extend({
    admin_account_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSecurityhubOrganizationAdminAccountOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsSecurityhubOrganizationAdminAccountImportSchema = z.object({
  admin_account_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSecurityhubOrganizationAdminAccountInputProps =
  & z.input<typeof AwsSecurityhubOrganizationAdminAccountInputSchema>
  & z.input<typeof AwsSecurityhubOrganizationAdminAccountImportSchema>
  & NodeProps

export type AwsSecurityhubOrganizationAdminAccountOutputProps =
  & z.output<typeof AwsSecurityhubOrganizationAdminAccountOutputSchema>
  & z.output<typeof AwsSecurityhubOrganizationAdminAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_organization_admin_account

export function AwsSecurityhubOrganizationAdminAccount(
  props: Partial<AwsSecurityhubOrganizationAdminAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_organization_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubOrganizationAdminAccountInputSchema}
      _outputSchema={AwsSecurityhubOrganizationAdminAccountOutputSchema}
      _importSchema={AwsSecurityhubOrganizationAdminAccountImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubOrganizationAdminAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubOrganizationAdminAccountOutputProps>(
    AwsSecurityhubOrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubOrganizationAdminAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubOrganizationAdminAccountOutputProps>(
    AwsSecurityhubOrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )
