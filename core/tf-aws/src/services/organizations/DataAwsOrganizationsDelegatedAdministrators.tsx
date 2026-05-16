import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOrganizationsDelegatedAdministratorsInputSchema =
  TfMetaSchema.extend({
    service_principal: resolvableValue(z.string().optional()),
  })

export const DataAwsOrganizationsDelegatedAdministratorsOutputSchema = z.object(
  {
    delegated_administrators: z.set(z.object({
      arn: z.string(),
      delegation_enabled_date: z.string(),
      email: z.string(),
      id: z.string(),
      joined_method: z.string(),
      joined_timestamp: z.string(),
      name: z.string(),
      status: z.string(),
    })).optional(),
    id: z.string().optional(),
  },
)

export type DataAwsOrganizationsDelegatedAdministratorsInputProps =
  & z.input<typeof DataAwsOrganizationsDelegatedAdministratorsInputSchema>
  & NodeProps

export type DataAwsOrganizationsDelegatedAdministratorsOutputProps =
  & z.output<typeof DataAwsOrganizationsDelegatedAdministratorsOutputSchema>
  & z.output<typeof DataAwsOrganizationsDelegatedAdministratorsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_delegated_administrators

export function DataAwsOrganizationsDelegatedAdministrators(
  props: Partial<DataAwsOrganizationsDelegatedAdministratorsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_delegated_administrators'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsDelegatedAdministratorsInputSchema}
      _outputSchema={DataAwsOrganizationsDelegatedAdministratorsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsDelegatedAdministratorss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsDelegatedAdministratorsOutputProps>(
    DataAwsOrganizationsDelegatedAdministrators,
    idFilter,
    baseNode,
    optional,
  )
