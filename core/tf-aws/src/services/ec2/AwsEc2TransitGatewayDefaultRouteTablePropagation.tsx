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

export const AwsEc2TransitGatewayDefaultRouteTablePropagationInputSchema =
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

export const AwsEc2TransitGatewayDefaultRouteTablePropagationOutputSchema = z
  .object({
    id: z.string().optional(),
    original_default_route_table_id: z.string().optional(),
  })

export type AwsEc2TransitGatewayDefaultRouteTablePropagationInputProps =
  & z.input<typeof AwsEc2TransitGatewayDefaultRouteTablePropagationInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayDefaultRouteTablePropagationOutputProps =
  & z.output<
    typeof AwsEc2TransitGatewayDefaultRouteTablePropagationOutputSchema
  >
  & z.output<typeof AwsEc2TransitGatewayDefaultRouteTablePropagationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_default_route_table_propagation

export function AwsEc2TransitGatewayDefaultRouteTablePropagation(
  props: Partial<AwsEc2TransitGatewayDefaultRouteTablePropagationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_default_route_table_propagation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayDefaultRouteTablePropagationInputSchema}
      _outputSchema={AwsEc2TransitGatewayDefaultRouteTablePropagationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayDefaultRouteTablePropagation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayDefaultRouteTablePropagationOutputProps>(
    AwsEc2TransitGatewayDefaultRouteTablePropagation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayDefaultRouteTablePropagations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayDefaultRouteTablePropagationOutputProps>(
    AwsEc2TransitGatewayDefaultRouteTablePropagation,
    idFilter,
    baseNode,
    optional,
  )
