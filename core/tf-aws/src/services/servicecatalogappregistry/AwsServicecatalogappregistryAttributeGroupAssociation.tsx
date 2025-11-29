import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicecatalogappregistry_attribute_group_association

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  attribute_group_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsServicecatalogappregistryAttributeGroupAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalogappregistry_attribute_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogappregistryAttributeGroupAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsServicecatalogappregistryAttributeGroupAssociation,
    node,
    id,
  )

export const useAwsServicecatalogappregistryAttributeGroupAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsServicecatalogappregistryAttributeGroupAssociation,
    node,
    id,
  )
