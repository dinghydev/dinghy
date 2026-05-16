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

export const AwsServicecatalogappregistryAttributeGroupInputSchema =
  TfMetaSchema.extend({
    attributes: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsServicecatalogappregistryAttributeGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsServicecatalogappregistryAttributeGroupInputProps =
  & z.input<typeof AwsServicecatalogappregistryAttributeGroupInputSchema>
  & NodeProps

export type AwsServicecatalogappregistryAttributeGroupOutputProps =
  & z.output<typeof AwsServicecatalogappregistryAttributeGroupOutputSchema>
  & z.output<typeof AwsServicecatalogappregistryAttributeGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalogappregistry_attribute_group

export function AwsServicecatalogappregistryAttributeGroup(
  props: Partial<AwsServicecatalogappregistryAttributeGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalogappregistry_attribute_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogappregistryAttributeGroupInputSchema}
      _outputSchema={AwsServicecatalogappregistryAttributeGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogappregistryAttributeGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogappregistryAttributeGroupOutputProps>(
    AwsServicecatalogappregistryAttributeGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogappregistryAttributeGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogappregistryAttributeGroupOutputProps>(
    AwsServicecatalogappregistryAttributeGroup,
    idFilter,
    baseNode,
    optional,
  )
