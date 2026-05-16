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

export const AwsOrganizationsDelegatedAdministratorInputSchema = TfMetaSchema
  .extend({
    account_id: resolvableValue(z.string()),
    service_principal: resolvableValue(z.string()),
  })

export const AwsOrganizationsDelegatedAdministratorOutputSchema = z.object({
  arn: z.string().optional(),
  delegation_enabled_date: z.string().optional(),
  email: z.string().optional(),
  id: z.string().optional(),
  joined_method: z.string().optional(),
  joined_timestamp: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
})

export const AwsOrganizationsDelegatedAdministratorImportSchema = z.object({
  delegated_account_id: resolvableValue(z.string()),
  service_principal: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsOrganizationsDelegatedAdministratorInputProps =
  & z.input<typeof AwsOrganizationsDelegatedAdministratorInputSchema>
  & z.input<typeof AwsOrganizationsDelegatedAdministratorImportSchema>
  & NodeProps

export type AwsOrganizationsDelegatedAdministratorOutputProps =
  & z.output<typeof AwsOrganizationsDelegatedAdministratorOutputSchema>
  & z.output<typeof AwsOrganizationsDelegatedAdministratorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/organizations_delegated_administrator

export function AwsOrganizationsDelegatedAdministrator(
  props: Partial<AwsOrganizationsDelegatedAdministratorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_delegated_administrator'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOrganizationsDelegatedAdministratorInputSchema}
      _outputSchema={AwsOrganizationsDelegatedAdministratorOutputSchema}
      _importSchema={AwsOrganizationsDelegatedAdministratorImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsDelegatedAdministrator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOrganizationsDelegatedAdministratorOutputProps>(
    AwsOrganizationsDelegatedAdministrator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsDelegatedAdministrators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOrganizationsDelegatedAdministratorOutputProps>(
    AwsOrganizationsDelegatedAdministrator,
    idFilter,
    baseNode,
    optional,
  )
