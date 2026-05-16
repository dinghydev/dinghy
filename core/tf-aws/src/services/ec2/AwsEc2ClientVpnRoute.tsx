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

export const AwsEc2ClientVpnRouteInputSchema = TfMetaSchema.extend({
  client_vpn_endpoint_id: resolvableValue(z.string()),
  destination_cidr_block: resolvableValue(z.string()),
  target_vpc_subnet_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEc2ClientVpnRouteOutputSchema = z.object({
  id: z.string().optional(),
  origin: z.string().optional(),
  type: z.string().optional(),
})

export type AwsEc2ClientVpnRouteInputProps =
  & z.input<typeof AwsEc2ClientVpnRouteInputSchema>
  & NodeProps

export type AwsEc2ClientVpnRouteOutputProps =
  & z.output<typeof AwsEc2ClientVpnRouteOutputSchema>
  & z.output<typeof AwsEc2ClientVpnRouteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_client_vpn_route

export function AwsEc2ClientVpnRoute(
  props: Partial<AwsEc2ClientVpnRouteInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_client_vpn_route'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2ClientVpnRouteInputSchema}
      _outputSchema={AwsEc2ClientVpnRouteOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ClientVpnRoute = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2ClientVpnRouteOutputProps>(
    AwsEc2ClientVpnRoute,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2ClientVpnRoutes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2ClientVpnRouteOutputProps>(
    AwsEc2ClientVpnRoute,
    idFilter,
    baseNode,
    optional,
  )
