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

export const AwsAppsyncDomainNameApiAssociationInputSchema = TfMetaSchema
  .extend({
    api_id: resolvableValue(z.string()),
    domain_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsAppsyncDomainNameApiAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAppsyncDomainNameApiAssociationInputProps =
  & z.input<typeof AwsAppsyncDomainNameApiAssociationInputSchema>
  & NodeProps

export type AwsAppsyncDomainNameApiAssociationOutputProps =
  & z.output<typeof AwsAppsyncDomainNameApiAssociationOutputSchema>
  & z.output<typeof AwsAppsyncDomainNameApiAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_domain_name_api_association

export function AwsAppsyncDomainNameApiAssociation(
  props: Partial<AwsAppsyncDomainNameApiAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_domain_name_api_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppsyncDomainNameApiAssociationInputSchema}
      _outputSchema={AwsAppsyncDomainNameApiAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncDomainNameApiAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppsyncDomainNameApiAssociationOutputProps>(
    AwsAppsyncDomainNameApiAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppsyncDomainNameApiAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppsyncDomainNameApiAssociationOutputProps>(
    AwsAppsyncDomainNameApiAssociation,
    idFilter,
    baseNode,
    optional,
  )
