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

export const AwsEc2TransitGatewayConnectInputSchema = TfMetaSchema.extend({
  transit_gateway_id: resolvableValue(z.string()),
  transport_attachment_id: resolvableValue(z.string()),
  protocol: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_default_route_table_association: resolvableValue(
    z.boolean().optional(),
  ),
  transit_gateway_default_route_table_propagation: resolvableValue(
    z.boolean().optional(),
  ),
})

export const AwsEc2TransitGatewayConnectOutputSchema = z.object({
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TransitGatewayConnectInputProps =
  & z.input<typeof AwsEc2TransitGatewayConnectInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayConnectOutputProps =
  & z.output<typeof AwsEc2TransitGatewayConnectOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayConnectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_connect

export function AwsEc2TransitGatewayConnect(
  props: Partial<AwsEc2TransitGatewayConnectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_connect'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayConnectInputSchema}
      _outputSchema={AwsEc2TransitGatewayConnectOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayConnect = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayConnectOutputProps>(
    AwsEc2TransitGatewayConnect,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayConnects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayConnectOutputProps>(
    AwsEc2TransitGatewayConnect,
    idFilter,
    baseNode,
    optional,
  )
