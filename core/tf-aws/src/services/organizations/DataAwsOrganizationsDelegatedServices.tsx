import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOrganizationsDelegatedServicesInputSchema = TfMetaSchema
  .extend({
    account_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
  })

export const DataAwsOrganizationsDelegatedServicesOutputSchema = z.object({
  delegated_services: z.set(z.object({
    delegation_enabled_date: z.string(),
    service_principal: z.string(),
  })).optional(),
})

export type DataAwsOrganizationsDelegatedServicesInputProps =
  & z.input<typeof DataAwsOrganizationsDelegatedServicesInputSchema>
  & NodeProps

export type DataAwsOrganizationsDelegatedServicesOutputProps =
  & z.output<typeof DataAwsOrganizationsDelegatedServicesOutputSchema>
  & z.output<typeof DataAwsOrganizationsDelegatedServicesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_delegated_services

export function DataAwsOrganizationsDelegatedServices(
  props: Partial<DataAwsOrganizationsDelegatedServicesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_delegated_services'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsDelegatedServicesInputSchema}
      _outputSchema={DataAwsOrganizationsDelegatedServicesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsDelegatedServicess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsDelegatedServicesOutputProps>(
    DataAwsOrganizationsDelegatedServices,
    idFilter,
    baseNode,
    optional,
  )
