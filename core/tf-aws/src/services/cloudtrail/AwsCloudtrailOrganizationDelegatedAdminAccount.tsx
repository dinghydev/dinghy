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

export const AwsCloudtrailOrganizationDelegatedAdminAccountInputSchema =
  TfMetaSchema.extend({
    account_id: resolvableValue(z.string()),
  })

export const AwsCloudtrailOrganizationDelegatedAdminAccountOutputSchema = z
  .object({
    arn: z.string().optional(),
    email: z.string().optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    service_principal: z.string().optional(),
  })

export type AwsCloudtrailOrganizationDelegatedAdminAccountInputProps =
  & z.input<typeof AwsCloudtrailOrganizationDelegatedAdminAccountInputSchema>
  & NodeProps

export type AwsCloudtrailOrganizationDelegatedAdminAccountOutputProps =
  & z.output<typeof AwsCloudtrailOrganizationDelegatedAdminAccountOutputSchema>
  & z.output<typeof AwsCloudtrailOrganizationDelegatedAdminAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudtrail_organization_delegated_admin_account

export function AwsCloudtrailOrganizationDelegatedAdminAccount(
  props: Partial<AwsCloudtrailOrganizationDelegatedAdminAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudtrail_organization_delegated_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudtrailOrganizationDelegatedAdminAccountInputSchema}
      _outputSchema={AwsCloudtrailOrganizationDelegatedAdminAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudtrailOrganizationDelegatedAdminAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudtrailOrganizationDelegatedAdminAccountOutputProps>(
    AwsCloudtrailOrganizationDelegatedAdminAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudtrailOrganizationDelegatedAdminAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudtrailOrganizationDelegatedAdminAccountOutputProps>(
    AwsCloudtrailOrganizationDelegatedAdminAccount,
    idFilter,
    baseNode,
    optional,
  )
