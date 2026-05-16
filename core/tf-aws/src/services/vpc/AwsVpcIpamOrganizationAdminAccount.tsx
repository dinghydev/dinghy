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

export const AwsVpcIpamOrganizationAdminAccountInputSchema = TfMetaSchema
  .extend({
    delegated_admin_account_id: resolvableValue(z.string()),
  })

export const AwsVpcIpamOrganizationAdminAccountOutputSchema = z.object({
  arn: z.string().optional(),
  email: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  service_principal: z.string().optional(),
})

export type AwsVpcIpamOrganizationAdminAccountInputProps =
  & z.input<typeof AwsVpcIpamOrganizationAdminAccountInputSchema>
  & NodeProps

export type AwsVpcIpamOrganizationAdminAccountOutputProps =
  & z.output<typeof AwsVpcIpamOrganizationAdminAccountOutputSchema>
  & z.output<typeof AwsVpcIpamOrganizationAdminAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_organization_admin_account

export function AwsVpcIpamOrganizationAdminAccount(
  props: Partial<AwsVpcIpamOrganizationAdminAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_organization_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpamOrganizationAdminAccountInputSchema}
      _outputSchema={AwsVpcIpamOrganizationAdminAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamOrganizationAdminAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpamOrganizationAdminAccountOutputProps>(
    AwsVpcIpamOrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcIpamOrganizationAdminAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpamOrganizationAdminAccountOutputProps>(
    AwsVpcIpamOrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )
