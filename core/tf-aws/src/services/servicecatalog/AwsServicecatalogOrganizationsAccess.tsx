import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsServicecatalogOrganizationsAccessInputSchema = TfMetaSchema
  .extend({
    enabled: resolvableValue(z.boolean()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsServicecatalogOrganizationsAccessOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsServicecatalogOrganizationsAccessInputProps =
  & z.input<typeof AwsServicecatalogOrganizationsAccessInputSchema>
  & NodeProps

export type AwsServicecatalogOrganizationsAccessOutputProps =
  & z.output<typeof AwsServicecatalogOrganizationsAccessOutputSchema>
  & z.output<typeof AwsServicecatalogOrganizationsAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_organizations_access

export function AwsServicecatalogOrganizationsAccess(
  props: Partial<AwsServicecatalogOrganizationsAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_organizations_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogOrganizationsAccessInputSchema}
      _outputSchema={AwsServicecatalogOrganizationsAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogOrganizationsAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogOrganizationsAccessOutputProps>(
    AwsServicecatalogOrganizationsAccess,
    idFilter,
    baseNode,
    optional,
  )
