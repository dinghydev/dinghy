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

export const AwsEc2LocalGatewayRouteTableVpcAssociationInputSchema =
  TfMetaSchema.extend({
    local_gateway_route_table_id: resolvableValue(z.string()),
    vpc_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsEc2LocalGatewayRouteTableVpcAssociationOutputSchema = z.object({
  id: z.string().optional(),
  local_gateway_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2LocalGatewayRouteTableVpcAssociationInputProps =
  & z.input<typeof AwsEc2LocalGatewayRouteTableVpcAssociationInputSchema>
  & NodeProps

export type AwsEc2LocalGatewayRouteTableVpcAssociationOutputProps =
  & z.output<typeof AwsEc2LocalGatewayRouteTableVpcAssociationOutputSchema>
  & z.output<typeof AwsEc2LocalGatewayRouteTableVpcAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_local_gateway_route_table_vpc_association

export function AwsEc2LocalGatewayRouteTableVpcAssociation(
  props: Partial<AwsEc2LocalGatewayRouteTableVpcAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_route_table_vpc_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2LocalGatewayRouteTableVpcAssociationInputSchema}
      _outputSchema={AwsEc2LocalGatewayRouteTableVpcAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2LocalGatewayRouteTableVpcAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2LocalGatewayRouteTableVpcAssociationOutputProps>(
    AwsEc2LocalGatewayRouteTableVpcAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2LocalGatewayRouteTableVpcAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2LocalGatewayRouteTableVpcAssociationOutputProps>(
    AwsEc2LocalGatewayRouteTableVpcAssociation,
    idFilter,
    baseNode,
    optional,
  )
