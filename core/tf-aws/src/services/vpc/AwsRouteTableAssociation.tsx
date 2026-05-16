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

export const AwsRouteTableAssociationInputSchema = TfMetaSchema.extend({
  route_table_id: resolvableValue(z.string()),
  gateway_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRouteTableAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsRouteTableAssociationImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsRouteTableAssociationInputProps =
  & z.input<typeof AwsRouteTableAssociationInputSchema>
  & z.input<typeof AwsRouteTableAssociationImportSchema>
  & NodeProps

export type AwsRouteTableAssociationOutputProps =
  & z.output<typeof AwsRouteTableAssociationOutputSchema>
  & z.output<typeof AwsRouteTableAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route_table_association

export function AwsRouteTableAssociation(
  props: Partial<AwsRouteTableAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route_table_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRouteTableAssociationInputSchema}
      _outputSchema={AwsRouteTableAssociationOutputSchema}
      _importSchema={AwsRouteTableAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsRouteTableAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRouteTableAssociationOutputProps>(
    AwsRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRouteTableAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRouteTableAssociationOutputProps>(
    AwsRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )
