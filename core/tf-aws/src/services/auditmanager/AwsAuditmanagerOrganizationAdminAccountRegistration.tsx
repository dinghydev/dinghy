import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/auditmanager_organization_admin_account_registration

export const InputSchema = z.object({
  admin_account_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  organization_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAuditmanagerOrganizationAdminAccountRegistration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_organization_admin_account_registration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerOrganizationAdminAccountRegistration = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsAuditmanagerOrganizationAdminAccountRegistration,
    node,
    id,
  )

export const useAwsAuditmanagerOrganizationAdminAccountRegistrations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsAuditmanagerOrganizationAdminAccountRegistration,
    node,
    id,
  )
