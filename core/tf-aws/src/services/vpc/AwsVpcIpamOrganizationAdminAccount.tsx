import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_ipam_organization_admin_account

export const InputSchema = z.object({
  delegated_admin_account_id: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  email: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  service_principal: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcIpamOrganizationAdminAccount(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_organization_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamOrganizationAdminAccount = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsVpcIpamOrganizationAdminAccount, node, id)

export const useAwsVpcIpamOrganizationAdminAccounts = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsVpcIpamOrganizationAdminAccount, node, id)
