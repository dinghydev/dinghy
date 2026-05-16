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

export const AwsDaxSubnetGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDaxSubnetGroupOutputSchema = z.object({
  id: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type AwsDaxSubnetGroupInputProps =
  & z.input<typeof AwsDaxSubnetGroupInputSchema>
  & NodeProps

export type AwsDaxSubnetGroupOutputProps =
  & z.output<typeof AwsDaxSubnetGroupOutputSchema>
  & z.output<typeof AwsDaxSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dax_subnet_group

export function AwsDaxSubnetGroup(props: Partial<AwsDaxSubnetGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dax_subnet_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDaxSubnetGroupInputSchema}
      _outputSchema={AwsDaxSubnetGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsDaxSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDaxSubnetGroupOutputProps>(
    AwsDaxSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDaxSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDaxSubnetGroupOutputProps>(
    AwsDaxSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
