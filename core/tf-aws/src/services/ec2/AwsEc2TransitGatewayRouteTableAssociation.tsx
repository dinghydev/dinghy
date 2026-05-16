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

export const AwsEc2TransitGatewayRouteTableAssociationInputSchema = TfMetaSchema
  .extend({
    transit_gateway_attachment_id: resolvableValue(z.string()),
    transit_gateway_route_table_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    replace_existing_association: resolvableValue(z.boolean().optional()),
  })

export const AwsEc2TransitGatewayRouteTableAssociationOutputSchema = z.object({
  id: z.string().optional(),
  resource_id: z.string().optional(),
  resource_type: z.string().optional(),
})

export type AwsEc2TransitGatewayRouteTableAssociationInputProps =
  & z.input<typeof AwsEc2TransitGatewayRouteTableAssociationInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayRouteTableAssociationOutputProps =
  & z.output<typeof AwsEc2TransitGatewayRouteTableAssociationOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayRouteTableAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_route_table_association

export function AwsEc2TransitGatewayRouteTableAssociation(
  props: Partial<AwsEc2TransitGatewayRouteTableAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_route_table_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayRouteTableAssociationInputSchema}
      _outputSchema={AwsEc2TransitGatewayRouteTableAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayRouteTableAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayRouteTableAssociationOutputProps>(
    AwsEc2TransitGatewayRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayRouteTableAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayRouteTableAssociationOutputProps>(
    AwsEc2TransitGatewayRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )
