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

export const AwsDetectiveOrganizationAdminAccountInputSchema = TfMetaSchema
  .extend({
    account_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsDetectiveOrganizationAdminAccountOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDetectiveOrganizationAdminAccountInputProps =
  & z.input<typeof AwsDetectiveOrganizationAdminAccountInputSchema>
  & NodeProps

export type AwsDetectiveOrganizationAdminAccountOutputProps =
  & z.output<typeof AwsDetectiveOrganizationAdminAccountOutputSchema>
  & z.output<typeof AwsDetectiveOrganizationAdminAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/detective_organization_admin_account

export function AwsDetectiveOrganizationAdminAccount(
  props: Partial<AwsDetectiveOrganizationAdminAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_detective_organization_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDetectiveOrganizationAdminAccountInputSchema}
      _outputSchema={AwsDetectiveOrganizationAdminAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsDetectiveOrganizationAdminAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDetectiveOrganizationAdminAccountOutputProps>(
    AwsDetectiveOrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDetectiveOrganizationAdminAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDetectiveOrganizationAdminAccountOutputProps>(
    AwsDetectiveOrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )
