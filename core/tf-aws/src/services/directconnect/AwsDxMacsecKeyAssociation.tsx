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

export const AwsDxMacsecKeyAssociationInputSchema = TfMetaSchema.extend({
  connection_id: resolvableValue(z.string()),
  cak: resolvableValue(z.string().optional()),
  ckn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  secret_arn: resolvableValue(z.string().optional()),
})

export const AwsDxMacsecKeyAssociationOutputSchema = z.object({
  id: z.string().optional(),
  start_on: z.string().optional(),
  state: z.string().optional(),
})

export type AwsDxMacsecKeyAssociationInputProps =
  & z.input<typeof AwsDxMacsecKeyAssociationInputSchema>
  & NodeProps

export type AwsDxMacsecKeyAssociationOutputProps =
  & z.output<typeof AwsDxMacsecKeyAssociationOutputSchema>
  & z.output<typeof AwsDxMacsecKeyAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_macsec_key_association

export function AwsDxMacsecKeyAssociation(
  props: Partial<AwsDxMacsecKeyAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_macsec_key_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxMacsecKeyAssociationInputSchema}
      _outputSchema={AwsDxMacsecKeyAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxMacsecKeyAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxMacsecKeyAssociationOutputProps>(
    AwsDxMacsecKeyAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxMacsecKeyAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxMacsecKeyAssociationOutputProps>(
    AwsDxMacsecKeyAssociation,
    idFilter,
    baseNode,
    optional,
  )
