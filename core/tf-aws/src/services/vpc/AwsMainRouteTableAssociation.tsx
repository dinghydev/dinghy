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

export const AwsMainRouteTableAssociationInputSchema = TfMetaSchema.extend({
  route_table_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMainRouteTableAssociationOutputSchema = z.object({
  id: z.string().optional(),
  original_route_table_id: z.string().optional(),
})

export type AwsMainRouteTableAssociationInputProps =
  & z.input<typeof AwsMainRouteTableAssociationInputSchema>
  & NodeProps

export type AwsMainRouteTableAssociationOutputProps =
  & z.output<typeof AwsMainRouteTableAssociationOutputSchema>
  & z.output<typeof AwsMainRouteTableAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/main_route_table_association

export function AwsMainRouteTableAssociation(
  props: Partial<AwsMainRouteTableAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_main_route_table_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMainRouteTableAssociationInputSchema}
      _outputSchema={AwsMainRouteTableAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsMainRouteTableAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMainRouteTableAssociationOutputProps>(
    AwsMainRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMainRouteTableAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMainRouteTableAssociationOutputProps>(
    AwsMainRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )
