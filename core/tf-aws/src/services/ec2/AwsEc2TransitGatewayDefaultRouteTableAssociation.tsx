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

export const AwsEc2TransitGatewayDefaultRouteTableAssociationInputSchema =
  TfMetaSchema.extend({
    transit_gateway_id: resolvableValue(z.string()),
    transit_gateway_route_table_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsEc2TransitGatewayDefaultRouteTableAssociationOutputSchema = z
  .object({
    id: z.string().optional(),
    original_default_route_table_id: z.string().optional(),
  })

export type AwsEc2TransitGatewayDefaultRouteTableAssociationInputProps =
  & z.input<typeof AwsEc2TransitGatewayDefaultRouteTableAssociationInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayDefaultRouteTableAssociationOutputProps =
  & z.output<
    typeof AwsEc2TransitGatewayDefaultRouteTableAssociationOutputSchema
  >
  & z.output<typeof AwsEc2TransitGatewayDefaultRouteTableAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_default_route_table_association

export function AwsEc2TransitGatewayDefaultRouteTableAssociation(
  props: Partial<AwsEc2TransitGatewayDefaultRouteTableAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_default_route_table_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayDefaultRouteTableAssociationInputSchema}
      _outputSchema={AwsEc2TransitGatewayDefaultRouteTableAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayDefaultRouteTableAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayDefaultRouteTableAssociationOutputProps>(
    AwsEc2TransitGatewayDefaultRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayDefaultRouteTableAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayDefaultRouteTableAssociationOutputProps>(
    AwsEc2TransitGatewayDefaultRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )
