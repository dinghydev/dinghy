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

export const AwsApiGatewayDomainNameAccessAssociationInputSchema = TfMetaSchema
  .extend({
    access_association_source: resolvableValue(z.string()),
    access_association_source_type: resolvableValue(z.string()),
    domain_name_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsApiGatewayDomainNameAccessAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsApiGatewayDomainNameAccessAssociationImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsApiGatewayDomainNameAccessAssociationInputProps =
  & z.input<typeof AwsApiGatewayDomainNameAccessAssociationInputSchema>
  & z.input<typeof AwsApiGatewayDomainNameAccessAssociationImportSchema>
  & NodeProps

export type AwsApiGatewayDomainNameAccessAssociationOutputProps =
  & z.output<typeof AwsApiGatewayDomainNameAccessAssociationOutputSchema>
  & z.output<typeof AwsApiGatewayDomainNameAccessAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_domain_name_access_association

export function AwsApiGatewayDomainNameAccessAssociation(
  props: Partial<AwsApiGatewayDomainNameAccessAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_domain_name_access_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayDomainNameAccessAssociationInputSchema}
      _outputSchema={AwsApiGatewayDomainNameAccessAssociationOutputSchema}
      _importSchema={AwsApiGatewayDomainNameAccessAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayDomainNameAccessAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayDomainNameAccessAssociationOutputProps>(
    AwsApiGatewayDomainNameAccessAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayDomainNameAccessAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayDomainNameAccessAssociationOutputProps>(
    AwsApiGatewayDomainNameAccessAssociation,
    idFilter,
    baseNode,
    optional,
  )
