import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_organization_admin_account

export const InputSchema = z.object({
  admin_account_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGuarddutyOrganizationAdminAccount(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_organization_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyOrganizationAdminAccount = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsGuarddutyOrganizationAdminAccount, node, id)

export const useAwsGuarddutyOrganizationAdminAccounts = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsGuarddutyOrganizationAdminAccount, node, id)
