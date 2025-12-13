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

export const InputSchema = z.object({
  connection_id: resolvableValue(z.string()),
  cak: resolvableValue(z.string().optional()),
  ckn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  secret_arn: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  start_on: z.string().optional(),
  state: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dx_macsec_key_association

export function AwsDxMacsecKeyAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_macsec_key_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxMacsecKeyAssociation = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsDxMacsecKeyAssociation, idFilter, baseNode)

export const useAwsDxMacsecKeyAssociations = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsDxMacsecKeyAssociation, idFilter, baseNode)
