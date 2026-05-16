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

export const AwsServicecatalogappregistryAttributeGroupAssociationInputSchema =
  TfMetaSchema.extend({
    application_id: resolvableValue(z.string()),
    attribute_group_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsServicecatalogappregistryAttributeGroupAssociationOutputSchema =
  z.object({})

export type AwsServicecatalogappregistryAttributeGroupAssociationInputProps =
  & z.input<
    typeof AwsServicecatalogappregistryAttributeGroupAssociationInputSchema
  >
  & NodeProps

export type AwsServicecatalogappregistryAttributeGroupAssociationOutputProps =
  & z.output<
    typeof AwsServicecatalogappregistryAttributeGroupAssociationOutputSchema
  >
  & z.output<
    typeof AwsServicecatalogappregistryAttributeGroupAssociationInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalogappregistry_attribute_group_association

export function AwsServicecatalogappregistryAttributeGroupAssociation(
  props: Partial<
    AwsServicecatalogappregistryAttributeGroupAssociationInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalogappregistry_attribute_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogappregistryAttributeGroupAssociationInputSchema}
      _outputSchema={AwsServicecatalogappregistryAttributeGroupAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogappregistryAttributeGroupAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<
    AwsServicecatalogappregistryAttributeGroupAssociationOutputProps
  >(
    AwsServicecatalogappregistryAttributeGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogappregistryAttributeGroupAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    AwsServicecatalogappregistryAttributeGroupAssociationOutputProps
  >(
    AwsServicecatalogappregistryAttributeGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )
