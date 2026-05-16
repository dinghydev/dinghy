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

export const AwsEc2LocalGatewayRouteInputSchema = TfMetaSchema.extend({
  destination_cidr_block: resolvableValue(z.string()),
  local_gateway_route_table_id: resolvableValue(z.string()),
  local_gateway_virtual_interface_group_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEc2LocalGatewayRouteOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2LocalGatewayRouteInputProps =
  & z.input<typeof AwsEc2LocalGatewayRouteInputSchema>
  & NodeProps

export type AwsEc2LocalGatewayRouteOutputProps =
  & z.output<typeof AwsEc2LocalGatewayRouteOutputSchema>
  & z.output<typeof AwsEc2LocalGatewayRouteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_local_gateway_route

export function AwsEc2LocalGatewayRoute(
  props: Partial<AwsEc2LocalGatewayRouteInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_route'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2LocalGatewayRouteInputSchema}
      _outputSchema={AwsEc2LocalGatewayRouteOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2LocalGatewayRoute = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2LocalGatewayRouteOutputProps>(
    AwsEc2LocalGatewayRoute,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2LocalGatewayRoutes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2LocalGatewayRouteOutputProps>(
    AwsEc2LocalGatewayRoute,
    idFilter,
    baseNode,
    optional,
  )
