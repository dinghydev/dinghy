import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicecatalogappregistryAttributeGroup } from './AwsServicecatalogappregistryAttributeGroup.tsx'

export const DataAwsServicecatalogappregistryAttributeGroupInputSchema =
  TfMetaSchema.extend({
    arn: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsServicecatalogappregistryAttributeGroupOutputSchema = z
  .object({
    attributes: z.string().optional(),
    description: z.string().optional(),
    tags: z.record(z.string(), z.string()).optional(),
  })

export type DataAwsServicecatalogappregistryAttributeGroupInputProps =
  & z.input<typeof DataAwsServicecatalogappregistryAttributeGroupInputSchema>
  & NodeProps

export type DataAwsServicecatalogappregistryAttributeGroupOutputProps =
  & z.output<typeof DataAwsServicecatalogappregistryAttributeGroupOutputSchema>
  & z.output<typeof DataAwsServicecatalogappregistryAttributeGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicecatalogappregistry_attribute_group

export function DataAwsServicecatalogappregistryAttributeGroup(
  props: Partial<DataAwsServicecatalogappregistryAttributeGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServicecatalogappregistryAttributeGroup
      _type='aws_servicecatalogappregistry_attribute_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicecatalogappregistryAttributeGroupInputSchema}
      _outputSchema={DataAwsServicecatalogappregistryAttributeGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicecatalogappregistryAttributeGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServicecatalogappregistryAttributeGroupOutputProps>(
    DataAwsServicecatalogappregistryAttributeGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicecatalogappregistryAttributeGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicecatalogappregistryAttributeGroupOutputProps>(
    DataAwsServicecatalogappregistryAttributeGroup,
    idFilter,
    baseNode,
    optional,
  )
