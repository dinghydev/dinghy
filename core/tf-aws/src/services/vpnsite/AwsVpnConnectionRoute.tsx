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

export const AwsVpnConnectionRouteInputSchema = TfMetaSchema.extend({
  destination_cidr_block: resolvableValue(z.string()),
  vpn_connection_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsVpnConnectionRouteOutputSchema = z.object({
  destination_cidr_block: z.string().optional(),
  vpn_connection_id: z.string().optional(),
})

export type AwsVpnConnectionRouteInputProps =
  & z.input<typeof AwsVpnConnectionRouteInputSchema>
  & NodeProps

export type AwsVpnConnectionRouteOutputProps =
  & z.output<typeof AwsVpnConnectionRouteOutputSchema>
  & z.output<typeof AwsVpnConnectionRouteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpn_connection_route

export function AwsVpnConnectionRoute(
  props: Partial<AwsVpnConnectionRouteInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpn_connection_route'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpnConnectionRouteInputSchema}
      _outputSchema={AwsVpnConnectionRouteOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpnConnectionRoute = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpnConnectionRouteOutputProps>(
    AwsVpnConnectionRoute,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpnConnectionRoutes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpnConnectionRouteOutputProps>(
    AwsVpnConnectionRoute,
    idFilter,
    baseNode,
    optional,
  )
