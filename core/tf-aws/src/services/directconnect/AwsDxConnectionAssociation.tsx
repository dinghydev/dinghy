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

export const AwsDxConnectionAssociationInputSchema = TfMetaSchema.extend({
  connection_id: resolvableValue(z.string()),
  lag_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDxConnectionAssociationOutputSchema = z.object({})

export type AwsDxConnectionAssociationInputProps =
  & z.input<typeof AwsDxConnectionAssociationInputSchema>
  & NodeProps

export type AwsDxConnectionAssociationOutputProps =
  & z.output<typeof AwsDxConnectionAssociationOutputSchema>
  & z.output<typeof AwsDxConnectionAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_connection_association

export function AwsDxConnectionAssociation(
  props: Partial<AwsDxConnectionAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_connection_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxConnectionAssociationInputSchema}
      _outputSchema={AwsDxConnectionAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxConnectionAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxConnectionAssociationOutputProps>(
    AwsDxConnectionAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxConnectionAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxConnectionAssociationOutputProps>(
    AwsDxConnectionAssociation,
    idFilter,
    baseNode,
    optional,
  )
