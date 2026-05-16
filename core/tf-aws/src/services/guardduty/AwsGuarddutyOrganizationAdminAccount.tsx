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

export const AwsGuarddutyOrganizationAdminAccountInputSchema = TfMetaSchema
  .extend({
    admin_account_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsGuarddutyOrganizationAdminAccountOutputSchema = z.object({})

export type AwsGuarddutyOrganizationAdminAccountInputProps =
  & z.input<typeof AwsGuarddutyOrganizationAdminAccountInputSchema>
  & NodeProps

export type AwsGuarddutyOrganizationAdminAccountOutputProps =
  & z.output<typeof AwsGuarddutyOrganizationAdminAccountOutputSchema>
  & z.output<typeof AwsGuarddutyOrganizationAdminAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_organization_admin_account

export function AwsGuarddutyOrganizationAdminAccount(
  props: Partial<AwsGuarddutyOrganizationAdminAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_organization_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyOrganizationAdminAccountInputSchema}
      _outputSchema={AwsGuarddutyOrganizationAdminAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyOrganizationAdminAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyOrganizationAdminAccountOutputProps>(
    AwsGuarddutyOrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyOrganizationAdminAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyOrganizationAdminAccountOutputProps>(
    AwsGuarddutyOrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )
