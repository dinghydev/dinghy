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

export const AwsVpnGatewayRoutePropagationInputSchema = TfMetaSchema.extend({
  route_table_id: resolvableValue(z.string()),
  vpn_gateway_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpnGatewayRoutePropagationOutputSchema = z.object({})

export type AwsVpnGatewayRoutePropagationInputProps =
  & z.input<typeof AwsVpnGatewayRoutePropagationInputSchema>
  & NodeProps

export type AwsVpnGatewayRoutePropagationOutputProps =
  & z.output<typeof AwsVpnGatewayRoutePropagationOutputSchema>
  & z.output<typeof AwsVpnGatewayRoutePropagationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpn_gateway_route_propagation

export function AwsVpnGatewayRoutePropagation(
  props: Partial<AwsVpnGatewayRoutePropagationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpn_gateway_route_propagation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpnGatewayRoutePropagationInputSchema}
      _outputSchema={AwsVpnGatewayRoutePropagationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpnGatewayRoutePropagation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpnGatewayRoutePropagationOutputProps>(
    AwsVpnGatewayRoutePropagation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpnGatewayRoutePropagations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpnGatewayRoutePropagationOutputProps>(
    AwsVpnGatewayRoutePropagation,
    idFilter,
    baseNode,
    optional,
  )
