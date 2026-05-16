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

export const AwsMacie2OrganizationAdminAccountInputSchema = TfMetaSchema.extend(
  {
    admin_account_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsMacie2OrganizationAdminAccountOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsMacie2OrganizationAdminAccountInputProps =
  & z.input<typeof AwsMacie2OrganizationAdminAccountInputSchema>
  & NodeProps

export type AwsMacie2OrganizationAdminAccountOutputProps =
  & z.output<typeof AwsMacie2OrganizationAdminAccountOutputSchema>
  & z.output<typeof AwsMacie2OrganizationAdminAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/macie2_organization_admin_account

export function AwsMacie2OrganizationAdminAccount(
  props: Partial<AwsMacie2OrganizationAdminAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_organization_admin_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMacie2OrganizationAdminAccountInputSchema}
      _outputSchema={AwsMacie2OrganizationAdminAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2OrganizationAdminAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMacie2OrganizationAdminAccountOutputProps>(
    AwsMacie2OrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMacie2OrganizationAdminAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMacie2OrganizationAdminAccountOutputProps>(
    AwsMacie2OrganizationAdminAccount,
    idFilter,
    baseNode,
    optional,
  )
