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

export const AwsAuditmanagerOrganizationAdminAccountRegistrationInputSchema =
  TfMetaSchema.extend({
    admin_account_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsAuditmanagerOrganizationAdminAccountRegistrationOutputSchema = z
  .object({
    id: z.string().optional(),
    organization_id: z.string().optional(),
  })

export type AwsAuditmanagerOrganizationAdminAccountRegistrationInputProps =
  & z.input<
    typeof AwsAuditmanagerOrganizationAdminAccountRegistrationInputSchema
  >
  & NodeProps

export type AwsAuditmanagerOrganizationAdminAccountRegistrationOutputProps =
  & z.output<
    typeof AwsAuditmanagerOrganizationAdminAccountRegistrationOutputSchema
  >
  & z.output<
    typeof AwsAuditmanagerOrganizationAdminAccountRegistrationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/auditmanager_organization_admin_account_registration

export function AwsAuditmanagerOrganizationAdminAccountRegistration(
  props: Partial<AwsAuditmanagerOrganizationAdminAccountRegistrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_organization_admin_account_registration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAuditmanagerOrganizationAdminAccountRegistrationInputSchema}
      _outputSchema={AwsAuditmanagerOrganizationAdminAccountRegistrationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerOrganizationAdminAccountRegistration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAuditmanagerOrganizationAdminAccountRegistrationOutputProps>(
    AwsAuditmanagerOrganizationAdminAccountRegistration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAuditmanagerOrganizationAdminAccountRegistrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAuditmanagerOrganizationAdminAccountRegistrationOutputProps>(
    AwsAuditmanagerOrganizationAdminAccountRegistration,
    idFilter,
    baseNode,
    optional,
  )
