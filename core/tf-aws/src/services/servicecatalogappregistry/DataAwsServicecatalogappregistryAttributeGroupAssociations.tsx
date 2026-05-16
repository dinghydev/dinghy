import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsServicecatalogappregistryAttributeGroupAssociationsInputSchema =
  TfMetaSchema.extend({
    id: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsServicecatalogappregistryAttributeGroupAssociationsOutputSchema =
  z.object({
    attribute_group_ids: z.set(z.string()).optional(),
  })

export type DataAwsServicecatalogappregistryAttributeGroupAssociationsInputProps =
  & z.input<
    typeof DataAwsServicecatalogappregistryAttributeGroupAssociationsInputSchema
  >
  & NodeProps

export type DataAwsServicecatalogappregistryAttributeGroupAssociationsOutputProps =
  & z.output<
    typeof DataAwsServicecatalogappregistryAttributeGroupAssociationsOutputSchema
  >
  & z.output<
    typeof DataAwsServicecatalogappregistryAttributeGroupAssociationsInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicecatalogappregistry_attribute_group_associations

export function DataAwsServicecatalogappregistryAttributeGroupAssociations(
  props: Partial<
    DataAwsServicecatalogappregistryAttributeGroupAssociationsInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalogappregistry_attribute_group_associations'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicecatalogappregistryAttributeGroupAssociationsInputSchema}
      _outputSchema={DataAwsServicecatalogappregistryAttributeGroupAssociationsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicecatalogappregistryAttributeGroupAssociationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<
    DataAwsServicecatalogappregistryAttributeGroupAssociationsOutputProps
  >(
    DataAwsServicecatalogappregistryAttributeGroupAssociations,
    idFilter,
    baseNode,
    optional,
  )
