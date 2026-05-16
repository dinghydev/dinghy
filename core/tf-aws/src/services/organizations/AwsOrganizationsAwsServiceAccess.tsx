import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsOrganizationsAwsServiceAccessInputSchema = TfMetaSchema.extend({
  service_principal: resolvableValue(z.string()),
})

export const AwsOrganizationsAwsServiceAccessOutputSchema = z.object({
  date_enabled: z.string().optional(),
})

export const AwsOrganizationsAwsServiceAccessImportSchema = z.object({
  service_principal: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsOrganizationsAwsServiceAccessInputProps =
  & z.input<typeof AwsOrganizationsAwsServiceAccessInputSchema>
  & z.input<typeof AwsOrganizationsAwsServiceAccessImportSchema>
  & NodeProps

export type AwsOrganizationsAwsServiceAccessOutputProps =
  & z.output<typeof AwsOrganizationsAwsServiceAccessOutputSchema>
  & z.output<typeof AwsOrganizationsAwsServiceAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/organizations_aws_service_access

export function AwsOrganizationsAwsServiceAccess(
  props: Partial<AwsOrganizationsAwsServiceAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_aws_service_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOrganizationsAwsServiceAccessInputSchema}
      _outputSchema={AwsOrganizationsAwsServiceAccessOutputSchema}
      _importSchema={AwsOrganizationsAwsServiceAccessImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsAwsServiceAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOrganizationsAwsServiceAccessOutputProps>(
    AwsOrganizationsAwsServiceAccess,
    idFilter,
    baseNode,
    optional,
  )
